import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
// @ts-ignore
const prismaAny = prisma as any;

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { patientId, medication, dosage, frequency, status } = body;

        if (!patientId || !medication || !dosage || !frequency) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const prescription = await prismaAny.prescription.create({
            data: {
                patientId: parseInt(patientId),
                medication,
                dosage,
                frequency,
                status: status || 'Active',
            },
        });

        return NextResponse.json(prescription, { status: 201 });
    } catch (error) {
        console.error("Error creating prescription:", error);
        return NextResponse.json({ error: 'Error creating prescription' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const { id, status } = body;

        if (!id || !status) {
            return NextResponse.json({ error: 'Missing id or status' }, { status: 400 });
        }

        const prescription = await prismaAny.prescription.update({
            where: { id: parseInt(id) },
            data: { status },
        });

        return NextResponse.json(prescription);
    } catch (error) {
        console.error("Error updating prescription:", error);
        return NextResponse.json({ error: 'Error updating prescription' }, { status: 500 });
    }
}
