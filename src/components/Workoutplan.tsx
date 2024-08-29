import React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ShareButton from './icons/paperplane'
import { Link } from 'react-router-dom'

// Define the structure of our workout data
interface Exercise {
  exerciseName: string
  duration: string | null
  reps: string | null
  sets: string | null
  instructions: string
}

interface WorkoutPlan {
  warmup: Exercise[]
  mainWorkout: Exercise[]
  cooldown: Exercise[]
}

const workoutData: WorkoutPlan = {
  warmup: [
    {
      exerciseName: "Jumping Jacks",
      duration: "5",
      reps: null,
      sets: null,
      instructions: "Start with feet together, jump while spreading your legs shoulder-width apart and arms overhead. Return to starting position and repeat."
    },
    {
      exerciseName: "Arm Circles",
      duration: "5",
      reps: null,
      sets: null,
      instructions: "Extend your arms to the sides and make circular motions with your arms in a forward direction for the specified time. Switch to backward circles halfway through."
    }
  ],
  mainWorkout: [
    {
      exerciseName: "Renegade Rows",
      duration: null,
      reps: "12",
      sets: "4",
      instructions: "Start in a push-up position with a dumbbell in each hand. Pull one dumbbell up towards your chest while stabilizing with the other arm. Alternate sides for each rep."
    },
    {
      exerciseName: "Bent Over Rows",
      duration: null,
      reps: "15",
      sets: "3",
      instructions: "Hold a dumbbell in each hand, bend your knees slightly, hinge at the hips, and keep your back straight. Pull the dumbbells towards your chest, squeezing your shoulder blades together."
    },
    {
      exerciseName: "Alternating Dumbbell Curls",
      duration: null,
      reps: "12",
      sets: "3",
      instructions: "Stand with dumbbells in each hand, palms facing forward. Curl one dumbbell up towards your shoulder while keeping the other arm extended. Alternate sides for each rep."
    }
  ],
  cooldown: [
    {
      exerciseName: "Child's Pose",
      duration: "5",
      reps: null,
      sets: null,
      instructions: "Kneel on the floor, sit back on your heels, and reach your arms forward with forehead resting on the mat, hold the stretch."
    },
    {
      exerciseName: "Shoulder Stretch",
      duration: "5",
      reps: null,
      sets: null,
      instructions: "Bring one arm across your body, use the other hand to press gently on the elbow to stretch the shoulder. Repeat on the other side."
    }
  ]
}

const ExerciseCard: React.FC<{ exercise: Exercise; type: 'warmup' | 'main' | 'cooldown' }> = ({ exercise, type }) => {
  const bgColor = type === 'warmup' || type === "cooldown" ? 'bg-white' : 'bg-green-50'
  
  return (
    <Card className={`${bgColor} shadow-md`}>
      <CardHeader>
        <CardTitle className="text-lg font-bold">{exercise.exerciseName}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {exercise.duration && `Duration: ${exercise.duration} minutes`}
          {exercise.reps && exercise.sets && `${exercise.sets} sets of ${exercise.reps} reps`}
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{exercise.instructions}</p>
      </CardContent>
    </Card>
  )
}

const Workoutplan = () => {

    return (
        <div className="min-h-screen bg-gradient-to-r from-primary/10 via-primary/5 to-background flex justify-center">
          <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2 my-12">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-6">
                  Your tailored workout is ready
                </h1>
                <Link to={"/"}> 
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Share this workout with a friend. <ShareButton />
                </p>
                </Link>
              </div>
            </div>
    
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Warmup</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {workoutData.warmup.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} type="warmup" />
                  ))}
                </div>
              </section>
    
              <section>
                <h2 className="text-2xl font-semibold mb-4">Main Workout</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {workoutData.mainWorkout.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} type="main" />
                  ))}
                </div>
              </section>
    
              <section>
                <h2 className="text-2xl font-semibold mb-4">Cooldown</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {workoutData.cooldown.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} type="cooldown" />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
  )
}

export default Workoutplan


