"use client";

import { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Patient {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    phone: string;
    medicalHistory: string;
    createdAt: string;
    visits?: {
        id: number;
        date: string;
        notes: string;
    }[];
    prescriptions?: {
        id: number;
        medication: string;
        dosage: string;
        frequency: string;
        status: string;
        datePrescribed: string;
    }[];
}

export default function PatientDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [patient, setPatient] = useState<Patient | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        async function fetchPatient() {
            try {
                const res = await fetch(`/api/patients/${id}`);
                if (res.ok) {
                    const data = await res.json();
                    setPatient(data);
                } else {
                    setPatient(null);
                }
            } catch (error) {
                console.error("Failed to fetch patient", error);
            } finally {
                setLoading(false);
            }
        }
        fetchPatient();
    }, [id]);

    if (loading) return <div className="container" style={{ padding: '4rem' }}>Loading...</div>;
    if (!patient) return <div className="container" style={{ padding: '4rem' }}>Patient not found</div>;

    return (
        <main className="container" style={{ padding: '6rem 1.5rem' }}>
            <div className="header-actions" style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2.5rem', color: 'var(--color-secondary)' }}>
                    {patient.firstName} {patient.lastName}
                </h1>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link href={`/patients/${id}/edit`} className="btn btn-primary">Edit Patient</Link>
                    <button
                        className="btn btn-outline"
                        style={{ borderColor: '#ef4444', color: '#ef4444' }}
                        onClick={async () => {
                            if (confirm('Are you sure you want to delete this patient?')) {
                                await fetch(`/api/patients/${patient.id}`, { method: 'DELETE' });
                                router.push('/patients');
                            }
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>

            <style jsx>{`
                .header-actions {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .grid-layout {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                }
                @media (max-width: 768px) {
                    .header-actions {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 1rem;
                    }
                    .grid-layout {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>

            <div className="grid-layout">
                {/* Patient Information */}
                <div style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', height: 'fit-content' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>Patient Details</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                        <div>
                            <h3 style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Full Name</h3>
                            <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>{patient.firstName} {patient.lastName}</p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Date of Birth</h3>
                            <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>{new Date(patient.dateOfBirth).toLocaleDateString()}</p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Phone</h3>
                            <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>{patient.phone}</p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Email</h3>
                            <p style={{ fontSize: '1.1rem', fontWeight: 500, wordBreak: 'break-all' }}>{patient.email}</p>
                        </div>
                    </div>

                    <div>
                        <h3 style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Medical History</h3>
                        <div style={{ background: 'var(--color-background)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                            <p>{patient.medicalHistory || 'No history recorded.'}</p>
                        </div>
                    </div>
                </div>

                {/* Clinical Notes / Visits */}
                <div style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>Clinical Notes</h2>

                    {/* Add Visit Form */}
                    <form
                        style={{ marginBottom: '2rem', padding: '1.5rem', background: 'var(--color-background)', borderRadius: 'var(--radius-md)' }}
                        onSubmit={async (e) => {
                            e.preventDefault();
                            const form = e.target as HTMLFormElement;
                            const notes = (form.elements.namedItem('notes') as HTMLTextAreaElement).value;
                            const date = (form.elements.namedItem('date') as HTMLInputElement).value;

                            if (!notes) return alert('Notes are required');

                            await fetch('/api/visits', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ patientId: patient.id, notes, date }),
                            });

                            // Reload patient data to show new visit
                            const res = await fetch(`/api/patients/${id}`);
                            const data = await res.json();
                            setPatient(data);
                            form.reset();
                        }}
                    >
                        <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Add New Note</h3>
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Date</label>
                            <input type="date" name="date" required defaultValue={new Date().toISOString().split('T')[0]} style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }} />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Notes</label>
                            <textarea name="notes" rows={3} required placeholder="Enter clinical notes..." style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }} />
                        </div>
                        <button type="submit" className="btn btn-sm" style={{ background: 'var(--color-primary)', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Add Note</button>
                    </form>

                    {/* Visits List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {patient.visits && patient.visits.length > 0 ? (
                            // sort by date desc
                            [...patient.visits].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((visit) => (
                                <div key={visit.id} style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span style={{ fontWeight: 600, color: 'var(--color-secondary)' }}>{new Date(visit.date).toLocaleDateString()}</span>
                                    </div>
                                    <p style={{ color: 'var(--color-text)', whiteSpace: 'pre-wrap' }}>{visit.notes}</p>
                                </div>
                            ))
                        ) : (
                            <p style={{ color: 'var(--color-text-light)', fontStyle: 'italic' }}>No clinical notes found.</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Prescriptions Section */}
            <div style={{ marginTop: '2rem', background: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>Prescriptions</h2>

                <form
                    style={{ marginBottom: '2rem', padding: '1.5rem', background: 'var(--color-background)', borderRadius: 'var(--radius-md)' }}
                    onSubmit={async (e) => {
                        e.preventDefault();
                        const form = e.target as HTMLFormElement;
                        const medication = (form.elements.namedItem('medication') as HTMLInputElement).value;
                        const dosage = (form.elements.namedItem('dosage') as HTMLInputElement).value;
                        const frequency = (form.elements.namedItem('frequency') as HTMLInputElement).value;

                        if (!medication || !dosage || !frequency) return alert('All fields are required');

                        await fetch('/api/prescriptions', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ patientId: patient.id, medication, dosage, frequency }),
                        });

                        // Reload patient data
                        const res = await fetch(`/api/patients/${id}`);
                        const data = await res.json();
                        setPatient(data);
                        form.reset();
                    }}
                >
                    <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Add New Prescription</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Medication</label>
                            <input type="text" name="medication" required placeholder="e.g. Albuterol" style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Dosage</label>
                            <input type="text" name="dosage" required placeholder="e.g. 90mcg" style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Frequency</label>
                            <input type="text" name="frequency" required placeholder="e.g. Every 4 hours" style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-sm" style={{ background: 'var(--color-primary)', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Add Prescription</button>
                </form>

                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--color-border)', textAlign: 'left' }}>
                                <th style={{ padding: '0.75rem' }}>Medication</th>
                                <th style={{ padding: '0.75rem' }}>Dosage</th>
                                <th style={{ padding: '0.75rem' }}>Frequency</th>
                                <th style={{ padding: '0.75rem' }}>Status</th>
                                <th style={{ padding: '0.75rem' }}>Date Prescribed</th>
                                <th style={{ padding: '0.75rem' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patient.prescriptions && patient.prescriptions.length > 0 ? (
                                [...patient.prescriptions].sort((a, b) => new Date(b.datePrescribed).getTime() - new Date(a.datePrescribed).getTime()).map((rx) => (
                                    <tr key={rx.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                        <td style={{ padding: '0.75rem', fontWeight: 500 }}>{rx.medication}</td>
                                        <td style={{ padding: '0.75rem' }}>{rx.dosage}</td>
                                        <td style={{ padding: '0.75rem' }}>{rx.frequency}</td>
                                        <td style={{ padding: '0.75rem' }}>
                                            <span style={{
                                                padding: '0.25rem 0.5rem',
                                                borderRadius: '999px',
                                                fontSize: '0.85rem',
                                                background: rx.status === 'Active' ? '#dcfce7' : '#f3f4f6',
                                                color: rx.status === 'Active' ? '#166534' : '#4b5563'
                                            }}>
                                                {rx.status}
                                            </span>
                                        </td>
                                        <td style={{ padding: '0.75rem' }}>{new Date(rx.datePrescribed).toLocaleDateString()}</td>
                                        <td style={{ padding: '0.75rem' }}>
                                            {rx.status === 'Active' && (
                                                <button
                                                    style={{ fontSize: '0.85rem', color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                                                    onClick={async () => {
                                                        if (confirm('Discontinue this medication?')) {
                                                            await fetch('/api/prescriptions', {
                                                                method: 'PUT',
                                                                headers: { 'Content-Type': 'application/json' },
                                                                body: JSON.stringify({ id: rx.id, status: 'Discontinued' }),
                                                            });
                                                            const res = await fetch(`/api/patients/${id}`);
                                                            const data = await res.json();
                                                            setPatient(data);
                                                        }
                                                    }}
                                                >
                                                    Discontinue
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-text-light)', fontStyle: 'italic' }}>
                                        No prescriptions recorded.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
                <Link href="/patients" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>&larr; Back to Patient List</Link>
            </div>
        </main>
    );
}
