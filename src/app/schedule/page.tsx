import Link from 'next/link';

export default function SchedulePage() {
    return (
        <main className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>Schedule Online</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: '3rem' }}>
                Our online scheduling system allows you to view availability and book your appointment instantly.
            </p>

            <div style={{ background: 'var(--color-surface)', padding: '4rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', border: '2px dashed var(--color-border)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📅</div>
                <h2 style={{ marginBottom: '1rem' }}>Scheduling Portal Loading...</h2>
                <p style={{ marginBottom: '2rem' }}>
                    (In a real implementation, this would embed a widget like Zocdoc, Phreesia, or Epic MyChart)
                </p>
                <Link href="/request-call" className="btn btn-outline">
                    Having trouble? Request a Call instead
                </Link>
            </div>
        </main>
    );
}
