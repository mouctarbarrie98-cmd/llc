import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: idStr } = await params;
        const id = parseInt(idStr);
        const patient = await prisma.patient.findUnique({
            where: { id },
            include: { visits: true },
        });

        if (!patient) {
            return NextResponse.json({ error: 'Patient not found' }, { status: 404 });
        }

        return NextResponse.json(patient);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching patient' }, { status: 500 });
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: idStr } = await params;
        const id = parseInt(idStr);
        const body = await request.json();
        const { firstName, lastName, dateOfBirth, email, phone, medicalHistory } = body;

        const patient = await prisma.patient.update({
            where: { id },
            data: {
                firstName,
                lastName,
                dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined,
                email,
                phone,
                medicalHistory,
            },
        });

        return NextResponse.json(patient);
    } catch (error) {
        return NextResponse.json({ error: 'Error updating patient' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: idStr } = await params;
        const id = parseInt(idStr);
        await prisma.patient.delete({
            where: { id },
        });

        return NextResponse.json({ message: 'Patient deleted' });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting patient' }, { status: 500 });
    }
}
