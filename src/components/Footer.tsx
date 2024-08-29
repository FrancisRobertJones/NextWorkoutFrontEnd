import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="w-full py-6 bg-background border-t">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <p className="text-xs text-muted-foreground">© 2024 NextWorkout. All rights reserved.</p>
                    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                        <Link className="text-xs hover:underline underline-offset-4" to="#">
                            Terms of Service
                        </Link>
                        <Link className="text-xs hover:underline underline-offset-4" to="#">
                            Privacy
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer