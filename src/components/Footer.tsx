import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Column 1: Contact & Location */}
                    <div className={styles.column}>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Louisville Lung Care</h3>
                        <p style={{ marginBottom: '0.5rem' }}>1015 Dupont Rd</p>
                        <p style={{ marginBottom: '1rem' }}>Louisville, KY 40207</p>
                        <a href="tel:5028830227" style={{ display: 'block', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                            (502) 883-0227
                        </a>
                        <a
                            href="https://www.google.com/maps/dir//1015+Dupont+Rd,+Louisville,+KY+40207"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                            style={{ display: 'inline-block', padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                        >
                            Get Directions
                        </a>
                    </div>

                    {/* Column 2: Office Hours */}
                    <div className={styles.column}>
                        <h4 style={{ color: 'var(--color-secondary)', fontSize: '1.1rem', marginBottom: '1rem' }}>Office Hours</h4>
                        <table style={{ width: '100%', maxWidth: '250px', fontSize: '0.95rem', color: 'var(--color-text-light)' }}>
                            <tbody>
                                <tr>
                                    <td style={{ paddingBottom: '0.5rem' }}>Monday - Friday</td>
                                    <td style={{ textAlign: 'right', paddingBottom: '0.5rem' }}>8:30 AM - 4:30 PM</td>
                                </tr>
                                <tr>
                                    <td>Saturday - Sunday</td>
                                    <td style={{ textAlign: 'right' }}>Closed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div className={styles.column}>
                        <h4 style={{ color: 'var(--color-secondary)', fontSize: '1.1rem', marginBottom: '1rem' }}>Patient Info</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <Link href="/portal" style={{ color: 'var(--color-text-light)' }}>Patient Portal</Link>
                            <Link href="/insurance" style={{ color: 'var(--color-text-light)' }}>Insurance Accepted</Link>
                            <Link href="/schedule" style={{ color: 'var(--color-text-light)' }}>Request Appointment</Link>
                            <Link href="#" style={{ color: 'var(--color-text-light)' }}>Privacy Policy</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p style={{ marginBottom: '0.25rem' }}>&copy; 2026 Louisville Lung Care, PLLC All rights reserved.</p>
                    <p style={{ fontSize: '0.85rem', color: '#e53e3e', fontWeight: 600 }}>If this is a medical emergency, please call 911.</p>
                </div>
            </div>
        </footer>
    );
}
