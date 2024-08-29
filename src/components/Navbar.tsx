import { Dumbbell } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b">
    <Link className="flex items-center justify-center" to="/">
      <Dumbbell className="h-6 w-6 text-primary" />
      <span className="ml-2 text-2xl font-bold text-primary">NextWorkout</span>
    </Link>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
        Features
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
        Pricing
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
        About
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4" to="/workout">
        Example plan
      </Link>
    </nav>
  </header>
  )
}

export default Navbar