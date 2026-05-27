import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";



interface Params {
  params: Promise<{
    id: string;
  }>;
}



export async function GET(
  request: NextRequest,
  { params }: Params
) {

  const { id } = await params;

  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
  });

  return NextResponse.json({
    success: true,
    data: todo,
  });
}



export async function PUT(
  request: NextRequest,
  { params }: Params
) {

  const { id } = await params;

  const body = await request.json();

  const updatedTodo = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title: body.title,
      completed: body.completed,
    },
  });

  return NextResponse.json({
    success: true,
    data: updatedTodo,
  });
}



export async function DELETE(
  request: NextRequest,
  { params }: Params
) {

  const { id } = await params;
console.log("delete id", id);
  await prisma.todo.delete({
    where: {
      id,
    },
  });

  return NextResponse.json({
    success: true,
    message: "Todo deleted",
  });
}