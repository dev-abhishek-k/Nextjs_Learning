import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";



export async function GET() {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: todos,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch todos",
      },
      { status: 500 }
    );
  }
}



export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const title = body.title?.trim();

    if (!title) {
      return NextResponse.json(
        {
          success: false,
          message: "Title is required",
        },
        { status: 400 }
      );
    }

    const todo = await prisma.todo.create({
      data: {
        title,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: todo,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create todo",
      },
      { status: 500 }
    );
  }
}


