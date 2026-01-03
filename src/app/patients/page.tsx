"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Patient {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    phone: string;
    medicalHistory: string;
}

export default function PatientsPage() {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPatients() {
            try {
                const res = await fetch('/api/patients');
                if (res.ok) {
                    const data = await res.json();
                    setPatients(data);
                }
            } catch (error) {
                console.error("Failed to fetch patients", error);
            } finally {
                setLoading(false);
            }
        }
        fetchPatients();
    }, []);

    return (
        <main className="container" style={{ padding: '2rem 1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Patient Records</h1>
                <Link href="/patients/new" className="btn btn-primary">
                    + Add New Patient
                </Link>
            </div>

            {loading ? (
                <p>Loading patient records...</p>
            ) : patients.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '4rem', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)' }}>
                    <p style={{ color: 'var(--color-text-light)', marginBottom: '1rem' }}>No patients found.</p>
                    <Link href="/patients/new" className="btn btn-outline">Add your first patient</Link>
                </div>
            ) : (
                <div style={{ overflowX: 'auto', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--color-surface)', minWidth: '600px' }}>
                        <thead style={{ background: 'var(--color-background)', borderBottom: '2px solid var(--color-border)' }}>
                            <tr>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Name</th>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>DOB</th>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Contact</th>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>History</th>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient) => (
                                <tr key={patient.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                    <td style={{ padding: '1rem', fontWeight: 500 }}>
                                        <Link href={`/patients/${patient.id}`} style={{ color: 'var(--color-primary)' }}>
                                            {patient.firstName} {patient.lastName}
                                        </Link>
                                    </td>
                                    <td style={{ padding: '1rem' }}>{new Date(patient.dateOfBirth).toLocaleDateString()}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ fontSize: '0.9em' }}>{patient.email}</div>
                                        <div style={{ fontSize: '0.9em', color: 'var(--color-text-light)' }}>{patient.phone}</div>
                                    </td>
                                    <td style={{ padding: '1rem', maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {patient.medicalHistory || '-'}
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        {/* Placeholder for Edit/View */}
                                        <Link href={`/patients/${patient.id}`} className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>View</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </main>
    );
}
