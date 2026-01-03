"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../app/page.module.css';

export default function MobileActionBar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide on scroll down, show on scroll up
            // Threshold of 10px to avoid jitter
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`${styles.mobileActionBar} ${isVisible ? '' : styles.hidden}`}>
            <a
                href="tel:5028830227"
                className="btn btn-outline"
                style={{ flex: 1, justifyContent: 'center', borderColor: 'var(--color-primary)' }}
            >
                📞 Call
            </a>
            <Link
                href="/schedule"
                className="btn btn-primary"
                style={{ flex: 1, justifyContent: 'center' }}
            >
                📅 Schedule
            </Link>
        </div>
    );
}
