import Link from 'next/link';

export default function NewPatientsPage() {
    return (
        <main className="container" style={{ padding: '6rem 1.5rem', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>New Patient Information</h1>

            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ marginBottom: '1.5rem' }}>What to Bring</h2>
                <ul style={{ lineHeight: 2, paddingLeft: '1.5rem' }}>
                    <li>Photo ID and current insurance card</li>
                    <li>A list of current medications and dosages</li>
                    <li>Any relevant medical records or CD of chest imaging (if available)</li>
                    <li>Your referral authorization (if required by your insurance)</li>
                </ul>
            </section>

            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ marginBottom: '1.5rem' }}>Patient Forms</h2>
                <p style={{ marginBottom: '1.5rem' }}>To save time on the day of your appointment, you can download and fill out these forms in advance.</p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <button className="btn btn-outline">📄 New Patient Registration</button>
                    <button className="btn btn-outline">📄 Medical History Form</button>
                    <button className="btn btn-outline">📄 HIPAA Privacy Practice</button>
                </div>
            </section>

            <section>
                <h2 style={{ marginBottom: '1.5rem' }}>Referral Information</h2>
                <div style={{ background: '#f0f9ff', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid #bae6fd' }}>
                    <p>
                        <strong>For Referring Providers:</strong> Please fax the patient's demographics, insurance info, and recent clinical notes to <strong>(502) 555-0198</strong>.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        We will contact the patient directly to schedule once the referral is received.
                    </p>
                </div>
            </section>
        </main>
    );
}
