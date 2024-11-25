import WorkoutForm from '@/components/WorkoutForm';
import WorkoutStreak from '@/components/WorkoutStreak';

export default function Home() {
  // Mock data - in a real app, this would come from the database
  const mockStreak = 5;
  const mockLastWeekWorkouts = [1, 0, 1, 1, 1, 0, 1]; // Example: 1 means worked out, 0 means didn't

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Workout Tracker</h1>
          <p className="mt-2 text-lg text-gray-600">Track your workouts and maintain your streak</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <WorkoutStreak streak={mockStreak} lastWeekWorkouts={mockLastWeekWorkouts} />
          </div>
          <div>
            <WorkoutForm />
          </div>
        </div>
      </div>
    </main>
  );
}
