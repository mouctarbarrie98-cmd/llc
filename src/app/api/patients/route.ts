import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const patients = await prisma.patient.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        return NextResponse.json(patients);
    } catch (error) {
        console.error("Error fetching patients:", error);
        return NextResponse.json({ error: 'Error fetching patients' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, dateOfBirth, email, phone, medicalHistory } = body;

        const patient = await prisma.patient.create({
            data: {
                firstName,
                lastName,
                dateOfBirth: new Date(dateOfBirth),
                email,
                phone,
                medicalHistory,
            },
        });

        return NextResponse.json(patient, { status: 201 });
    } catch (error) {
        console.error("Error creating patient:", error);
        return NextResponse.json({ error: 'Error creating patient' }, { status: 500 });
    }
}
