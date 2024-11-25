# 💪 Workout Tracker

A modern workout tracking application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 📊 Track workouts with sets and reps
- 🎯 Monitor your workout streak
- 📅 View weekly workout history
- 💪 Log exercises with weight and reps
- 🎨 Clean, responsive UI with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **API**: Next.js API Routes

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL 15+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd workout-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   ```bash
   # Copy the example env file
   cp .env.example .env
   ```

4. Update the `.env` file with your database credentials:
   ```
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/workout_tracker"
   ```

5. Set up the database:
   ```bash
   # Create the database
   createdb workout_tracker
   
   # Push the schema
   npx prisma db push
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Future Features

- 💬 Chat feature for workout planning
- 👥 Social features and workout sharing
- 📈 Progress tracking and analytics
- 📱 Mobile app support

## Contributing

Feel free to open issues and pull requests!

## License

MIT License - feel free to use this project for your own learning or development!
