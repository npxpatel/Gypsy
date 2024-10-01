import express, { Request, Response } from 'express';
import { createUser, findByEmail } from '../models/Users';
import bcrypt from 'bcrypt';

export const signup = async (req: Request, res: Response) => {

     const { email, password } = req.body;
     if (!email || !password) {
          return res.status(400).json({ message: 'Email and password are required' });
     }

     try {
          const existingUser = await findByEmail(email);

          if (existingUser) {
               return res.status(400).json({ message: "User already exists" });
          }

          const saltRounds = 10;
          const password_hash = await bcrypt.hash(password, saltRounds);

          const newUser = await createUser({ email, password_hash });
          res.status(201).json({ msg: "User created successfully" , userId : newUser.insertId });


     } catch (err) {
          return new Error("Error in signup");
     }
}