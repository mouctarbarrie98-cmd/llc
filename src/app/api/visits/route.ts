import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { patientId, notes, date } = body;

        if (!patientId || !notes) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const visit = await prisma.visit.create({
            data: {
                patientId: parseInt(patientId),
                notes,
                date: date ? new Date(date) : undefined,
            },
        });

        return NextResponse.json(visit, { status: 201 });
    } catch (error) {
        console.error("Error creating visit:", error);
        return NextResponse.json({ error: 'Error creating visit' }, { status: 500 });
    }
}
