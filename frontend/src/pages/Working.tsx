import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { MapPin, Clock, DollarSign, Users, Car, History, Wallet, User, HelpCircle, Power } from "lucide-react"



const Sidebar = ({ items }) => (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Uber Clone</h2>
      <nav>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="mb-2">
              <Button variant="ghost" className="w-full justify-start">
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )

  const Map = () => (
    <div className="bg-gray-300 w-full h-[400px] rounded-lg flex items-center justify-center">
      <p className="text-gray-600">Map Placeholder</p>
    </div>
  )

  const RiderDashboard = () => (
    <div className="flex h-screen">
      <Sidebar
        items={[
          { icon: <MapPin size={18} />, label: "Find a Ride" },
          { icon: <History size={18} />, label: "My Rides" },
          { icon: <User size={18} />, label: "Profile" },
          { icon: <HelpCircle size={18} />, label: "Support" },
        ]}
      />
      <div className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">Find a Ride</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Map />
            <div className="mt-4 space-y-4">
              <div>
                <Label htmlFor="pickup">Pickup Location</Label>
                <Input id="pickup" placeholder="Enter pickup location" />
              </div>
              <div>
                <Label htmlFor="destination">Destination</Label>
                <Input id="destination" placeholder="Enter destination" />
              </div>
            </div>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Ride Options</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="standard">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="economy">Economy</TabsTrigger>
                    <TabsTrigger value="standard">Standard</TabsTrigger>
                    <TabsTrigger value="premium">Premium</TabsTrigger>
                  </TabsList>
                  <TabsContent value="economy">Economy ride details...</TabsContent>
                  <TabsContent value="standard">Standard ride details...</TabsContent>
                  <TabsContent value="premium">Premium ride details...</TabsContent>
                </Tabs>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <Clock size={18} className="mr-2" />
                    <span>Estimated time: 15 mins</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign size={18} className="mr-2" />
                    <span>Estimated price: $12.50</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={18} className="mr-2" />
                    <span>Carpool available</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Book Ride</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )

  const DriverDashboard = () => (
    <div className="flex h-screen">
      <Sidebar
        items={[
          { icon: <Car size={18} />, label: "Available Rides" },
          { icon: <History size={18} />, label: "Ride History" },
          { icon: <Wallet size={18} />, label: "Earnings" },
          { icon: <User size={18} />, label: "Profile" },
          { icon: <HelpCircle size={18} />, label: "Support" },
        ]}
      />
      <div className="flex-1 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Driver Dashboard</h1>
          <Button>
            <Power size={18} className="mr-2" />
            Go Online
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Map />
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Available Rides</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[1, 2, 3].map((ride) => (
                    <li key={ride} className="border-b pb-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold">Ride #{ride}</p>
                          <p className="text-sm text-gray-600">2.5 miles away</p>
                        </div>
                        <Button size="sm">Accept</Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      {view === "role-selection" && <RoleSelectionView />}
      {view === "rider-dashboard" && <RiderDashboard />}
      {view === "driver-dashboard" && <DriverDashboard />}
    </div>
  )
}