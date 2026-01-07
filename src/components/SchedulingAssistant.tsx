"use client";
import { useRouter } from 'next/navigation';
import styles from '../app/page.module.css';

export default function SchedulingAssistant() {
    const router = useRouter();

    const handleSelection = (type: string) => {
        router.push(`/schedule?type=${type}`);
    };

    return (
        <div className={styles.assistantContainer}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>
                How can we help you today?
            </h3>

            <div className={styles.assistantGrid} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', maxWidth: '600px', margin: '0 auto' }}>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', textAlign: 'center', marginBottom: '1rem' }}>
                    Submit a request online and our team will call you to schedule your appointment.
                </p>
                <button
                    onClick={() => handleSelection('request')}
                    className="btn btn-primary"
                    style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', width: 'auto' }}
                >
                    Request Appointment
                </button>
            </div>
        </div>
    );
}
