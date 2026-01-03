"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface CallRequest {
    id: number;
    fullName: string;
    phone: string;
    reason: string;
    status: string;
    preferredTime: string;
    createdAt: string;
}

export default function CallRequestsPage() {
    const [requests, setRequests] = useState<CallRequest[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchRequests = async () => {
        try {
            const res = await fetch('/api/admin/call-requests');
            const data = await res.json();
            setRequests(data);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch requests', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    const updateStatus = async (id: number, newStatus: string) => {
        await fetch('/api/admin/call-requests', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, status: newStatus }),
        });
        fetchRequests(); // Refresh list
    };

    if (loading) return <div className="container" style={{ padding: '6rem 1.5rem' }}>Loading...</div>;

    return (
        <main className="container" style={{ padding: '6rem 1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem' }}>Call Requests</h1>
                <Link href="/portal" className="btn btn-outline">Back to Dashboard</Link>
            </div>

            <div style={{ overflowX: 'auto', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead style={{ background: 'var(--color-background)' }}>
                        <tr>
                            <th style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>Status</th>
                            <th style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>Name</th>
                            <th style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>Phone</th>
                            <th style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>Reason</th>
                            <th style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>Submitted</th>
                            <th style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.length === 0 ? (
                            <tr>
                                <td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-text-light)' }}>No requests found.</td>
                            </tr>
                        ) : (
                            requests.map((req) => (
                                <tr key={req.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                    <td style={{ padding: '1rem' }}>
                                        <span style={{
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '999px',
                                            fontSize: '0.875rem',
                                            background: req.status === 'PENDING' ? '#fef3c7' : '#dcfce7',
                                            color: req.status === 'PENDING' ? '#d97706' : '#166534'
                                        }}>
                                            {req.status}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem', fontWeight: 500 }}>{req.fullName}</td>
                                    <td style={{ padding: '1rem' }}>{req.phone}</td>
                                    <td style={{ padding: '1rem', maxWidth: '300px' }}>{req.reason}</td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                                        {new Date(req.createdAt).toLocaleDateString()}
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        {req.status === 'PENDING' && (
                                            <button
                                                className="btn btn-sm"
                                                style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem', background: 'var(--color-secondary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                                                onClick={() => updateStatus(req.id, 'CALLED')}
                                            >
                                                Mark Called
                                            </button>
                                        )}
                                        {req.status === 'CALLED' && (
                                            <button
                                                className="btn btn-sm"
                                                style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem', background: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                                                onClick={() => updateStatus(req.id, 'SCHEDULED')}
                                            >
                                                Mark Scheduled
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
