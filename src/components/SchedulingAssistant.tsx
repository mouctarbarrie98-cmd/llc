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

            <div className={styles.assistantGrid}>
                <button onClick={() => handleSelection('New Patient')} className={styles.assistantBtn}>
                    🆕 New Patient Visit
                </button>
                <button onClick={() => handleSelection('Follow-up')} className={styles.assistantBtn}>
                    🔄 Follow-up
                </button>
            </div>
        </div>
    );
}
