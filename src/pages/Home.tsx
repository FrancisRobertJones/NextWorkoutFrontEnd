import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import WorkoutInput from "@/components/WorkoutInput"
import { Dumbbell, Clock, Target, List, ArrowRight, CheckCircle2, Zap } from "lucide-react"
import { Link, NavLink } from 'react-router-dom'

function Home() {
  return (
    <>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary/10 via-primary/5 to-background flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
                  Your Personal AI Workout Generator
                </h1>
                <p className="mx-auto max-w-[750px] text-muted-foreground md:text-xl">
                  We <span className="text-black font-semibold">love</span> working out. <br/>We <span className="text-black font-bold">hate</span> planning and paying for expensive workout programming.
                  <br/>Build your hand tailored workout in seconds ⚡ <br/>with NextWorkouts advanced AI🧠
                </p>
              </div>
              <div className="space-x-4 py-6">
                <NavLink to={"/create-workout"}><Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button></NavLink>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="mb-16 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              How It Works
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-3 text-center">
                <Clock className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Time Limitations</h3>
                <p className="text-muted-foreground">Input your available workout time, and we'll optimize for it.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Target className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Muscle Group Focus</h3>
                <p className="text-muted-foreground">Specify which muscles to target or avoid in your workout.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <List className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Exercise Preferences</h3>
                <p className="text-muted-foreground">Choose exercises you want to emphasize in your routine.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Zap className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Injury Avoidance</h3>
                <p className="text-muted-foreground">We'll suggest alternatives for exercises that cause discomfort.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Personalized Workouts at Your Fingertips
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  NextWorkout uses advanced AI to create custom workout plans tailored to your specific needs and
                  preferences. Say goodbye to generic routines and hello to personalized fitness.
                </p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> AI-powered workout generation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Adapts to your schedule and preferences
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Constantly updated exercise database
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Injury-conscious workout planning
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-video bg-muted rounded-lg overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                  <div className="absolute inset-2 bg-card rounded-md overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-8 bg-muted/50 backdrop-blur-sm flex items-center px-4">
                      <div className="w-2 h-2 rounded-full bg-red-500 mr-2" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2" />
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-muted-foreground">Your personalized workout plan here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Workouts?
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
                  Sign up now with your Google account and start generating personalized workouts today!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full bg-background text-primary hover:bg-background/90" size="lg">
                  Sign Up with Google
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-primary-foreground/70">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
    
      </>
  )
}

export default Home
