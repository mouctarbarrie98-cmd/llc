import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { fullName, dateOfBirth, phone, reason, referringDoctor, preferredTime, notes } = body;

        if (!fullName || !dateOfBirth || !phone || !reason) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const callRequest = await prisma.callRequest.create({
            data: {
                fullName,
                dateOfBirth: new Date(dateOfBirth),
                phone,
                reason,
                referringDoctor,
                preferredTime,
                notes,
            },
        });

        return NextResponse.json(callRequest, { status: 201 });
    } catch (error) {
        console.error("Error creating call request:", error);
        return NextResponse.json({ error: 'Error creating call request' }, { status: 500 });
    }
}
