'use client';

import { useState } from 'react';

interface Exercise {
  id: string;
  name: string;
}

interface Set {
  exerciseId: string;
  reps: number;
  weight: number;
}

export default function WorkoutForm() {
  const [sets, setSets] = useState<Set[]>([]);
  const [selectedExercise, setSelectedExercise] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  // Mock exercises (in a real app, these would come from the database)
  const exercises: Exercise[] = [
    { id: '1', name: 'Bench Press' },
    { id: '2', name: 'Squat' },
    { id: '3', name: 'Deadlift' },
  ];

  const addSet = () => {
    if (selectedExercise && reps && weight) {
      setSets([
        ...sets,
        {
          exerciseId: selectedExercise,
          reps: parseInt(reps),
          weight: parseFloat(weight),
        },
      ]);
      setReps('');
      setWeight('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to save workout
    console.log('Submitting workout:', sets);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Log Workout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Exercise
          </label>
          <select
            value={selectedExercise}
            onChange={(e) => setSelectedExercise(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">Select an exercise</option>
            {exercises.map((exercise) => (
              <option key={exercise.id} value={exercise.id}>
                {exercise.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reps
            </label>
            <input
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Weight (kg)
            </label>
            <input
              type="number"
              step="0.5"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={addSet}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Set
        </button>

        {sets.length > 0 && (
          <div>
            <h3 className="text-lg font-medium mb-2">Current Sets</h3>
            <div className="space-y-2">
              {sets.map((set, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-50 p-2 rounded"
                >
                  <span>
                    {exercises.find((e) => e.id === set.exerciseId)?.name}
                  </span>
                  <span>
                    {set.reps} reps @ {set.weight}kg
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Save Workout
        </button>
      </form>
    </div>
  );
} 