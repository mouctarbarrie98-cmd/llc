"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../app/page.module.css';

export default function SchedulingAssistant() {
    const router = useRouter();
    const [showTips, setShowTips] = useState<string | null>(null);

    const handleSelection = (type: string) => {
        if (type === 'not-sure') {
            setShowTips('not-sure');
        } else {
            router.push(`/schedule?type=${type}`);
        }
    };

    return (
        <div className={styles.assistantContainer}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>
                👋 How can we help you today?
            </h3>

            {showTips === 'not-sure' ? (
                <div className={styles.assistantTip}>
                    <p><strong>Not sure what you need?</strong></p>
                    <p>If you have a new breathing issue, select "New Patient Visit".</p>
                    <p>If you are an existing patient, select "Follow-up".</p>
                    <button
                        onClick={() => setShowTips(null)}
                        style={{ marginTop: '1rem', textDecoration: 'underline', color: 'var(--color-primary)', background: 'none' }}
                    >
                        &larr; Go Back
                    </button>
                </div>
            ) : (
                <div className={styles.assistantGrid}>
                    <button onClick={() => handleSelection('New Patient')} className={styles.assistantBtn}>
                        🆕 New Patient Visit
                    </button>
                    <button onClick={() => handleSelection('Follow-up')} className={styles.assistantBtn}>
                        🔄 Follow-up
                    </button>
                    <button onClick={() => handleSelection('PFT')} className={styles.assistantBtn}>
                        🫁 Breathing Test (PFT)
                    </button>
                    <button onClick={() => handleSelection('Sleep')} className={styles.assistantBtn}>
                        💤 Sleep Consultation
                    </button>
                    <button onClick={() => handleSelection('not-sure')} className={styles.assistantBtnSecondary}>
                        🤔 Not sure
                    </button>
                </div>
            )}
        </div>
    );
}
