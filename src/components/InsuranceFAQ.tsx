"use client";
import { useState } from 'react';

export default function InsuranceFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        {
            q: "Do you accept my insurance?",
            a: "We accept most major insurance plans including Medicare, Anthem, Humana, and UnitedHealthcare. Please call our billing department at (502) 883-0227 to verify your specific coverage."
        },
        {
            q: "How do referrals work?",
            a: "Many insurance plans require a referral from your primary care provider. Please check with your insurance carrier. Our team can assist in coordinating with your PCP."
        },
        {
            q: "What should I bring to my first visit?",
            a: "Please bring your photo ID, insurance card, a list of current medications, and any recent chest X-rays or CT scans on a disc if available."
        }
    ];

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {items.map((item, i) => (
                <div key={i} style={{ marginBottom: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                    <button
                        onClick={() => toggle(i)}
                        style={{
                            width: '100%',
                            textAlign: 'left',
                            padding: '1.25rem',
                            background: 'var(--color-surface)',
                            fontWeight: 600,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <span>{item.q}</span>
                        <span style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
                    </button>
                    <div
                        style={{
                            height: openIndex === i ? 'auto' : 0,
                            opacity: openIndex === i ? 1 : 0,
                            padding: openIndex === i ? '0 1.25rem 1.25rem' : '0 1.25rem',
                            overflow: 'hidden',
                            transition: 'all 0.3s ease-in-out',
                            background: 'var(--color-surface)',
                            color: 'var(--color-text-light)'
                        }}
                    >
                        <p style={{ marginTop: openIndex === i ? '0.5rem' : 0 }}>{item.a}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
