import {  useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Twitter } from "lucide-react"
import axios from 'axios';
import { useNavigate } from "react-router-dom"

interface formData {
  email: string,
  password: string,
}


export default function Auth() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false)
  const [formData, setformData] = useState<formData>({
    email: "",
    password: "",
  })

  async function handleSubmitSignup(e: any): Promise<void> {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:3000/api/user/signup', formData);
        console.log(response);
        navigate('/role-selection');
        
    } catch (error) {
        throw new Error("Error in signup"); 
    }
  }

  async function handleSubmitSignin(e: any): Promise<void> {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:3000/api/user/signin', formData);
        console.log(response);
        navigate('/role-selection');
    } catch (error) {
        throw new Error("Error in signin")

        }
      }


  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{isSignUp ? "Create an account" : "Sign in to your account"}</CardTitle>
          <CardDescription>
            {isSignUp
              ? "Enter your email below to create your account"
              : "Enter your email below to sign in to your account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="phone">Phone</TabsTrigger>
            </TabsList>
            <TabsContent value="email">
              <form>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com"
                      onChange={(e) => setformData({
                        ...formData,
                        email: e.target.value
                      })} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" onChange={(e) => setformData({ ...formData, password: e.target.value })} />
                  </div>
                  <Button className="w-full" onClick={ isSignUp ? handleSubmitSignup : handleSubmitSignin}>{isSignUp ? "Sign Up" : "Sign In"}</Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="phone">
              <form>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+91 (555) 000-0000" />
                  </div>
                  <Button className="w-full">Send Code</Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline">
              <Twitter className="mr-2 h-4 w-4" />
              Twitter
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <Button variant="link" className="p-0" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? "Sign in" : "Sign up"}
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}