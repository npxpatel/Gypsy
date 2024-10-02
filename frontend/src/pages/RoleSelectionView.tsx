import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import axios from "axios"

export default function RoleSelectionView() {
  const [role, setRole] = useState("")
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  async function updateRole(role : ('driver' | 'rider')) {

        try{
          const response = await axios.put('/api/user/role', {role});
          if(response.status === 200){
            window.location.href = role === 'rider' ? "/riderDashboard" : "/driverDashboard";
  
          }
          alert("Oops something went wrong");
        } catch(error){
           throw new Error("Error updating role");
        }
  }

  const handleRoleSelection = (selectedRole : ('driver' | 'rider')) => {
    setRole(selectedRole)
    setShowConfirmModal(true)
  }

  const confirmRole = () => {
    setShowConfirmModal(false)
    updateRole(role as ('driver' | 'rider'));
  }


    return ( 
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Select Your Role</CardTitle>
          <CardDescription className="text-center">Choose whether you want to ride or drive</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row justify-around items-center gap-4">
          <Button
            className="w-full sm:w-64 h-32 text-xl bg-green-500 hover:bg-green-600"
            onClick={() => handleRoleSelection("rider")}
          >
            I want to Ride
          </Button>
          <Button
            className="w-full sm:w-64 h-32 text-xl bg-blue-500 hover:bg-blue-600"
            onClick={() => handleRoleSelection("driver")}
          >
            I want to Drive
          </Button>
        </CardContent>
        <CardFooter className="flex justify-around text-center">
          <p className="max-w-[200px]">Find affordable and quick rides.</p>
          <p className="max-w-[200px]">Become a driver and earn on your own time.</p>
        </CardFooter>
      </Card>
      <AlertDialog open={showConfirmModal} onOpenChange={setShowConfirmModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Role Selection</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to select this role?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmRole}>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
  }