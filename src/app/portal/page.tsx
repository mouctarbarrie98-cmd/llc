"use client";

import Link from 'next/link';

export default function PortalDashboard() {
    return (
        <main className="container" style={{ padding: '6rem 1.5rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--color-primary)' }}>Portal Dashboard</h1>

            {/* Patient Portal Section */}
            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>Patient Portal</h2>
                <div style={{
                    background: 'var(--color-surface)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-md)',
                    border: '1px solid var(--color-border)',
                }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Louisville Lung Care Patient Portal</h3>

                    <div style={{ marginBottom: '2rem' }}>
                        <a href="https://llc.myeps3.com/PP/" target="_blank" rel="noopener noreferrer" style={{
                            color: 'var(--color-primary)',
                            fontSize: '1.3rem',
                            fontWeight: 'bold',
                            textDecoration: 'underline'
                        }}>
                            llc.myeps3.com/PP/
                        </a>
                    </div>

                    <ul style={{
                        color: 'var(--color-text)',
                        lineHeight: '1.8',
                        fontSize: '1.1rem',
                        paddingLeft: '1.5rem',
                        maxWidth: '800px'
                    }}>
                        <li style={{ marginBottom: '0.8rem' }}>Click on existing patient</li>
                        <li style={{ marginBottom: '0.8rem' }}>New patient only if never been seen in clinic (does not include hospital)</li>
                        <li style={{ marginBottom: '0.8rem' }}>We must have your social security number to enroll, last 4 digits are needed for confirmation.</li>
                    </ul>
                </div>
            </section>

            {/* Staff Portal Section */}
            <section>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.8rem', color: 'var(--color-secondary)', margin: 0 }}>Staff Access</h2>
                    <Link href="/auth/signin" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        Staff Login
                    </Link>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Patient Management Card */}
                    <Link href="/patients" style={{ textDecoration: 'none' }}>
                        <div style={{
                            background: 'var(--color-surface)',
                            padding: '2rem',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-sm)',
                            border: '1px solid var(--color-border)',
                            transition: 'transform 0.2s',
                            cursor: 'pointer'
                        }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Patient Records</h2>
                            <p style={{ color: 'var(--color-text-light)' }}>View, search, and manage patient files and clinical notes.</p>
                            <div style={{ marginTop: '1.5rem', color: 'var(--color-primary)', fontWeight: 500 }}>Access Records &rarr;</div>
                        </div>
                    </Link>

                    {/* Call Requests Card */}
                    <Link href="/portal/requests" style={{ textDecoration: 'none' }}>
                        <div style={{
                            background: 'var(--color-surface)',
                            padding: '2rem',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-sm)',
                            border: '1px solid var(--color-border)',
                            transition: 'transform 0.2s',
                            cursor: 'pointer'
                        }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Incoming Requests</h2>
                            <p style={{ color: 'var(--color-text-light)' }}>Review and manage callback requests from the public website.</p>
                            <div style={{ marginTop: '1.5rem', color: 'var(--color-primary)', fontWeight: 500 }}>View Requests &rarr;</div>
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    );
}
