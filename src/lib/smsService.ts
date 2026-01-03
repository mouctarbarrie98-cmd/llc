
export async function sendConfirmationSMS(phone: string, name: string) {
    // This is a mock SMS service. In production, use Twilio, AWS SNS, etc.
    const message = `Hello ${name}, this is Louisville Lung Care. We received your appointment request and will call you within 1 business day.`;

    console.log('\n=========================================');
    console.log('📱 [Mock SMS Service] Sending Message');
    console.log(`To: ${phone}`);
    console.log(`Body: ${message}`);
    console.log('=========================================\n');

    return { success: true, sid: 'mock-sms-id-' + Date.now() };
}
