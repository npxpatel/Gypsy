import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Menu } from "lucide-react"
import LandingImage from "@/assets/landingImage.webp"
import GypsyWhite from "@/assets/GypsyWhiteImg.webp"
import GypsyBlacImg from "@/assets/GypsyBlackImg.webp"
import ShareRide from "@/assets/ShareRide.webp"
import SafetyImage2 from "@/assets/SafetyImage2.jpg"
import InsuranceImage from "@/assets/InsuranceImage.jpg"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" to="/">
          <GypsyLogo className="h-8 w-auto" />
          <span className="sr-only">Gypsy</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6 items-center">
          <Link className="text-sm font-medium hover:text-gray-300" to="/">
            Company
          </Link>
          <Link className="text-sm font-medium hover:text-gray-300" to="/">
            Safety
          </Link>
          <Link className="text-sm font-medium hover:text-gray-300" to="/">
            Help
          </Link>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
            Log in
          </Button>
          <Button className="bg-white text-black hover:bg-gray-200">Sign up</Button>
        </nav>
        <Button variant="ghost" className="md:hidden ml-auto" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Go anywhere with Gypsy
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Request a ride, hop in, and go. It's that simple.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <Input className="flex-1 bg-white text-black" placeholder="Enter pickup location" type="text" />
                    <Button type="submit" className="bg-[#276EF1] hover:bg-[#1C54B7] text-white">
                      Request a ride
                    </Button>
                  </form>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
                  <Link to="/" className="inline-flex items-center text-white hover:text-gray-300">
                    Sign up to drive <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                  <Link to="/" className="inline-flex items-center text-white hover:text-gray-300">
                    Learn more about our products <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Gypsy app interface"
                  className="aspect-[4/3] overflow-hidden rounded-xl object-cover object-center"
                  height="600"
                  src={LandingImage}
                  width="800"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Ride with Gypsy</h2>
            <div className="grid gap-6 items-center md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-r border-gray-200 px-4">
                <img
                  alt="gypsy"
                  className="aspect-square overflow-hidden rounded-lg object-contain object-center"
                  height="200"
                  src={GypsyWhite}
                  width="200"
                />
                <h3 className="text-xl font-bold">Gypsy</h3>
                <p className="text-center text-sm">Affordable, everyday rides</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-r border-gray-200 px-4">
                <img
                  alt="Gypsy Black"
                  className="aspect-square overflow-hidden rounded-lg object-contain object-center"
                  height="200"
                  src={GypsyBlacImg}
                  width="200"
                />
                <h3 className="text-xl font-bold">Gypsy Black</h3>
                <p className="text-center text-sm">Premium rides in luxury cars</p>
              </div>
              <div className="flex flex-col items-center space-y-2 px-4">
                <img
                  alt="Gypsy Pool"
                  className="aspect-square overflow-hidden rounded-lg object-contain object-center"
                  height="200"
                  src={ShareRide}
                  width="200"
                />
                <h3 className="text-xl font-bold">GypsyPool</h3>
                <p className="text-center text-sm">Share your ride and save</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 items-center md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col space-y-2">
                <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-5xl">Focused on safety, wherever you go</h2>
                <p className="text-gray-500 md:text-xl">
                  Your safety is important to us—before, during, and after every trip.
                </p>
                <Link to="/" className="inline-flex items-center text-[#276EF1] hover:underline">
                  Learn more about our safety standards <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col space-y-2">
                <img
                  alt="Safety feature"
                  className="rounded-xl aspect-video overflow-hidden object-cover object-center"
                  height="300"
                  src={SafetyImage2}
                  width=" 400"
                />
                <h3 className="text-xl text-black font-bold">Safety features</h3>
                <p className="text-sm text-gray-500">Tell your loved ones where you are</p>
              </div>
              <div className="flex flex-col space-y-2">
                <img
                  alt="Insurance protection"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="300"
                  src={InsuranceImage}
                  width="400"
                />
                <h3 className="text-xl text-black font-bold">Insurance protection</h3>
                <p className="text-sm text-gray-500">You're covered when you ride with us</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to ride with Gypsy?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
                  Download the app for easy access to rides, deliveries, and more.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-black text-white hover:bg-gray-800">
                  <AppleIcon className="mr-2 h-5 w-5" />
                  Download for iOS
                </Button>
                <Button className="bg-black text-white hover:bg-gray-800">
                  <AndroidIcon className="mr-2 h-5 w-5" />
                  Download for Android
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-1">
                <li><Link to="/" className="text-sm hover:text-gray-300">About us</Link></li>
                <li><Link to="/" className="text-sm hover:text-gray-300">Our offerings</Link></li>
         
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Products</h3>
              <ul className="space-y-1">
                <li><Link to="/" className="text-sm hover:text-gray-300">Ride</Link></li>
                <li><Link to="/" className="text-sm hover:text-gray-300">Drive</Link></li>
              </ul>
            </div>
            
           
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-4">
              <Link to="/" className="text-gray-400 hover:text-gray-300">
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link to="/" className="text-gray-400 hover:text-gray-300">
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link to="/" className="text-gray-400 hover:text-gray-300">
                <InstagramIcon className="h-6 w-6" />
              </Link>
            </div>
            <p className="mt-4 sm:mt-0 text-xs text-gray-400">© 2024 Gypsy Technologies Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function GypsyLogo(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  )
}

function AppleIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  )
}

function AndroidIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5Z" />
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5Z" />
      <path d="M12 12h0" />
    </svg>
  )
}

function FacebookIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function InstagramIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}