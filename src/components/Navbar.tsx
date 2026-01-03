"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            Louisville Lung Care
          </Link>
          <div className={styles.links}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/services" className={styles.link}>Services</Link>
            <Link href="/providers" className={styles.link}>Providers</Link>

            {session ? (
              <>
                <Link href="/portal" className={styles.navLink}>Portal</Link>
                <button onClick={() => signOut()} className={styles.link} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 'inherit' }}>Logout</button>
              </>
            ) : (
              <Link href="/auth/signin" className={styles.link}>Staff Login</Link>
            )}

            <Link href="/schedule" className="btn btn-primary">Schedule</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
