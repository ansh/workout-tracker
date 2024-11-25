import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface WorkoutSet {
  exerciseId: string;
  reps: number;
  weight: number;
}

interface CreateWorkoutBody {
  userId: string;
  sets: WorkoutSet[];
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CreateWorkoutBody;
    const { userId, sets } = body;

    const workout = await prisma.workout.create({
      data: {
        userId,
        sets: {
          create: sets.map((set) => ({
            exerciseId: set.exerciseId,
            reps: set.reps,
            weight: set.weight,
          })),
        },
      },
      include: {
        sets: true,
      },
    });

    return NextResponse.json(workout);
  } catch (error) {
    console.error("Error creating workout:", error);
    return NextResponse.json({ error: "Error creating workout" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const workouts = await prisma.workout.findMany({
      where: {
        userId: userId,
      },
      include: {
        sets: {
          include: {
            exercise: true,
          },
        },
      },
      orderBy: {
        date: "desc",
      },
    });

    return NextResponse.json(workouts);
  } catch (error) {
    console.error("Error fetching workouts:", error);
    return NextResponse.json({ error: "Error fetching workouts" }, { status: 500 });
  }
}
