import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.col}>
                        <h3>Louisville Lung Care</h3>
                        <p className={styles.tagline}>Dedicated to your respiratory health.</p>
                        <div className={styles.links}>
                            <Link href="/services">Services</Link>
                            <Link href="/providers">Our Team</Link>
                            <Link href="/insurance">Insurance</Link>
                            <Link href="/new-patients">New Patients</Link>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <h3>Contact Us</h3>
                        <p>1015 Dupont Rd</p>
                        <p>Louisville, KY 40207</p>
                        <br />
                        <p><strong>Phone:</strong> (502) 883-0227</p>
                        <p><strong>Fax:</strong> (502) 555-0198</p>
                    </div>
                    <div className={styles.col}>
                        <h3>Hours</h3>
                        <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p>Saturday: 9:00 AM - 12:00 PM (Urgent)</p>
                        <p>Sunday: Closed</p>
                    </div>
                </div>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Louisville Lung Care, PLLC. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
