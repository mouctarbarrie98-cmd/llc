import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container" style={{ textAlign: 'center' }}>

                {/* Branding & Contact */}
                <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Louisville Lung Care, PLLC</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>
                    Pulmonary & Respiratory Medicine
                </p>

                <div style={{ marginBottom: '2rem' }}>
                    <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Providers:</p>
                    <p>Dr. James Wilson | Dr. Sajjad Jameel | Dr. Ehab Haj Ali</p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <p>Louisville, KY</p>
                    <a
                        href="https://www.google.com/maps/dir//1015+Dupont+Rd,+Louisville,+KY+40207"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '0.9rem', color: 'var(--color-primary)', textDecoration: 'underline' }}
                    >
                        Get Directions
                    </a>
                    <p style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0.5rem 0' }}>
                        <a href="tel:5028830227" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>(502) 883-0227</a>
                    </p>
                </div>

                {/* Disclaimers */}
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto 2rem' }}>
                    <p style={{ marginBottom: '0.5rem' }}>This website is for informational purposes only and does not constitute medical advice.</p>
                    <p style={{ fontWeight: 600, color: '#e53e3e' }}>If this is a medical emergency, call 911.</p>
                </div>

                {/* Copyright & Links */}
                <div className={styles.copyright}>
                    <p style={{ marginBottom: '0.5rem' }}>&copy; 2026 Louisville Lung Care, PLLC. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', fontSize: '0.9rem' }}>
                        <Link href="#">Privacy Policy</Link>
                        <span>|</span>
                        <Link href="#">Notice of Privacy Practices</Link>
                        <span>|</span>
                        <Link href="#">Terms of Use</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
