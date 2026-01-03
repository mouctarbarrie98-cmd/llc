"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from '../app/page.module.css';

interface ProviderCardProps {
    name: string;
    role: string;
    bio: string;
    education?: string;
    specialties: string;
}

export default function ProviderCard({ name, role, bio, education, specialties }: ProviderCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className={styles.card}
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: 'auto', // Allow growth
                cursor: 'pointer',
                transition: 'all 0.3s ease'
            }}
        >
            <div className={styles.doctorIcon} style={{ transform: isExpanded ? 'scale(1.1)' : 'scale(1)' }}>👨‍⚕️</div>
            <h3>{name}</h3>
            <p className={styles.doctorRole}>{role}</p>

            {isExpanded ? (
                <div style={{ textAlign: 'left', marginTop: '1rem', animation: 'fadeIn 0.3s' }}>
                    <p style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>{bio}</p>
                    {education && (
                        <div style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', marginBottom: '1rem', background: '#f8fafc', padding: '0.5rem', borderRadius: '4px' }}>
                            <strong>Education:</strong><br />
                            {education}
                        </div>
                    )}
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>
                        <strong>Specialties:</strong> {specialties}
                    </div>
                </div>
            ) : (
                <p style={{ flex: 1 }}>{specialties}</p>
            )}

            <div style={{ marginTop: '1.5rem' }}>
                {isExpanded ? (
                    <Link
                        href="/schedule"
                        className="btn btn-primary"
                        onClick={(e) => e.stopPropagation()}
                        style={{ width: '100%', fontSize: '0.9rem', justifyContent: 'center' }}
                    >
                        Schedule Appointment
                    </Link>
                ) : (
                    <button
                        className="btn btn-outline"
                        style={{ width: '100%', fontSize: '0.9rem' }}
                    >
                        View Profile & Schedule
                    </button>
                )}
            </div>
        </div>
    );
}
