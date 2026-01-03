"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from '../app/page.module.css';

interface ServiceCardProps {
    title: string;
    desc: string;
}

export default function ServiceCard({ title, desc }: ServiceCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className={styles.serviceCard}
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
                cursor: 'pointer',
                height: 'auto', // Allow growth
                minHeight: '200px'
            }}
        >
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>

            {isExpanded ? (
                <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--color-border)', paddingTop: '1rem', animation: 'fadeIn 0.3s' }}>
                    <p style={{ fontSize: '0.95rem', marginBottom: '1rem', color: 'var(--color-text)' }}>
                        <strong>Why choose us?</strong> Our pulmonary team specializes in {title} with advanced diagnostics and personalized treatment plans.
                    </p>
                    <Link
                        href={`/schedule?type=${encodeURIComponent(title)}`}
                        className="btn btn-primary"
                        onClick={(e) => e.stopPropagation()}
                        style={{ width: '100%', fontSize: '0.9rem', justifyContent: 'center' }}
                    >
                        Schedule for {title}
                    </Link>
                </div>
            ) : (
                <div style={{ marginTop: '1rem' }}>
                    <span className={styles.serviceLink} style={{ display: 'inline-block' }}>
                        Base Details & Schedule &rarr;
                    </span>
                </div>
            )}
        </div>
    );
}
