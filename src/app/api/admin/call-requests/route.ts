import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const requests = await prisma.callRequest.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        return NextResponse.json(requests);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching call requests' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const { id, status } = body;

        const updatedRequest = await prisma.callRequest.update({
            where: { id },
            data: { status },
        });

        return NextResponse.json(updatedRequest);
    } catch (error) {
        return NextResponse.json({ error: 'Error updating call request' }, { status: 500 });
    }
}
