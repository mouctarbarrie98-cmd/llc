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
                    <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                        <strong>Why choose us?</strong> Our pulmonary team specializes in {title} with advanced diagnostics and personalized treatment plans.
                    </p>
                </div>
            ) : null}
        </div>
    );
}
