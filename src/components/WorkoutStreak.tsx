'use client';

interface WorkoutStreakProps {
  streak: number;
  lastWeekWorkouts: number[];
}

export default function WorkoutStreak({ streak, lastWeekWorkouts }: WorkoutStreakProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Current Streak</h2>
        <div className="text-4xl font-bold text-indigo-600 mt-2">{streak} days</div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Last 7 Days</h3>
        <div className="grid grid-cols-7 gap-2">
          {lastWeekWorkouts.map((workouts, index) => (
            <div key={index} className="text-center">
              <div className="text-xs text-gray-500 mb-1">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][index]}
              </div>
              <div
                className={`h-8 w-8 rounded-full mx-auto flex items-center justify-center ${
                  workouts > 0
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {workouts}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 