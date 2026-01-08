import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { sendConfirmationSMS } from '@/lib/smsService';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Simple Validation
        if (!body.patientName || !body.phone) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Construct reason including provider preference
        const reasonText = (body.provider ? `[Provider: ${body.provider}] ` : '') + (body.visitReason || 'Appointment Request');

        // Save to Database
        const callRequest = await prisma.callRequest.create({
            data: {
                fullName: body.patientName,
                phone: body.phone,
                email: body.email || null,
                reason: reasonText,
                preferredTime: body.preferredTime1 || null,
                isEmergency: body.isEmergencyChecked || false
            }
        });

        // Send Mock SMS
        await sendConfirmationSMS(body.phone, body.patientName);

        return NextResponse.json({ success: true, data: callRequest });

    } catch (error) {
        console.error('Error processing schedule request:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
