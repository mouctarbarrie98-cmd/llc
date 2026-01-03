"use client";

import Link from 'next/link';

export default function PortalDashboard() {
    return (
        <main className="container" style={{ padding: '6rem 1.5rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>Staff Portal</h1>

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
        </main>
    );
}
