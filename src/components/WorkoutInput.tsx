import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info } from 'lucide-react'

export default function WorkoutInput() {
  const [duration, setDuration] = React.useState('')
  const [focusGroup, setFocusGroup] = React.useState('')
  const [workoutType, setWorkoutType] = React.useState('')

  const exercises = ['Push-ups', 'Pull-ups', 'Squats', 'Lunges', 'Planks', 'Burpees', 'Deadlifts', 'Bench Press']
  const equipment = ['Dumbbells', 'Kettlebells', 'Resistance Bands', 'Barbell', 'Medicine Ball', 'Jump Rope']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted')
  }

  return (
    <TooltipProvider>
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <h1 className="my-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Create your perfect workout, instantly.</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="duration">Workout Duration (minutes)</Label>
            <Input
              id="duration"
              type="number"
              placeholder="Enter duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Exercises to Include</Label>
            <div className="grid grid-cols-2 gap-2">
              {exercises.map((exercise) => (
                <div key={exercise} className="flex items-center space-x-2">
                  <Checkbox id={`include-${exercise}`} />
                  <label htmlFor={`include-${exercise}`}>{exercise}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Exercises to Avoid</Label>
            <div className="grid grid-cols-2 gap-2">
              {exercises.map((exercise) => (
                <div key={exercise} className="flex items-center space-x-2">
                  <Checkbox id={`avoid-${exercise}`} />
                  <label htmlFor={`avoid-${exercise}`}>{exercise}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="focus-group">Focus Muscle Group</Label>
            <Select value={focusGroup} onValueChange={setFocusGroup}>
              <SelectTrigger id="focus-group">
                <SelectValue placeholder="Select focus group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="legs">Legs</SelectItem>
                <SelectItem value="arms">Arms</SelectItem>
                <SelectItem value="back">Back</SelectItem>
                <SelectItem value="chest">Chest</SelectItem>
                <SelectItem value="core">Core</SelectItem>
                <SelectItem value="full-body">Full Body</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="workout-type">Workout Type</Label>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="inline-block w-4 h-4 ml-1 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>EMOM: Every Minute on the Minute</p>
                <p>AMRAP: As Many Rounds As Possible</p>
              </TooltipContent>
            </Tooltip>
            <Select value={workoutType} onValueChange={setWorkoutType}>
              <SelectTrigger id="workout-type">
                <SelectValue placeholder="Select workout type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="emom">EMOM</SelectItem>
                <SelectItem value="amrap">AMRAP</SelectItem>
                <SelectItem value="for-time">For Time</SelectItem>
                <SelectItem value="endurance">Endurance</SelectItem>
                <SelectItem value="strength">Strength</SelectItem>
                <SelectItem value="skill">Skill</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Preferred Equipment</Label>
            <div className="grid grid-cols-2 gap-2">
              {equipment.map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <Checkbox id={`equipment-${item}`} />
                  <label htmlFor={`equipment-${item}`}>{item}</label>
                </div>
              ))}
            </div>
          </div>

          <Button type="submit" className="w-full">Generate Workout Plan</Button>
        </form>
      </div>
    </TooltipProvider>
  )
}