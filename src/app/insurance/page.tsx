export default function InsurancePage() {
    return (
        <main className="container" style={{ padding: '6rem 1.5rem', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>Insurance & Payment</h1>

            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ marginBottom: '1.5rem' }}>Accepted Insurance Plans</h2>
                <p style={{ marginBottom: '2rem' }}>We participate with most major insurance carriers, including but not limited to:</p>
                <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', listStyle: 'none' }}>
                    {['Medicare', 'Blue Cross Blue Shield', 'Humana', 'Aetna', 'UnitedHealthcare', 'Cigna', 'Tricare', 'Medicaid (Select Plans)'].map(item => (
                        <li key={item} style={{ background: 'var(--color-surface)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>✅ {item}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 style={{ marginBottom: '1.5rem' }}>Payment Policy</h2>
                <div style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                    <p style={{ marginBottom: '1rem' }}>
                        Co-pays and deductibles are due at the time of service. We accept cash, check, Visa, MasterCard, and Discover.
                    </p>
                    <p>
                        If you have questions about your bill or insurance coverage, please contact our billing department at <strong>(502) 883-0227 (Option 4)</strong>.
                    </p>
                </div>
            </section>
        </main>
    );
}
