"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.inner}>
          <button
            className={styles.mobileToggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={isMobileMenuOpen ? styles.hamburgerOpen : styles.hamburger}></span>
          </button>

          <Link href="/" className={styles.logo}>
            Louisville Lung Care
          </Link>

          <div className={styles.links}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/services" className={styles.link}>Services</Link>
            <Link href="/providers" className={styles.link}>Providers</Link>
            <Link href="/portal" className={styles.link}>Patient Portal</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>

            {session ? (
              <button
                onClick={() => signOut()}
                className={styles.link}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 'inherit', color: 'var(--color-text-light)' }}
              >
                Logout
              </button>
            ) : null}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <Link href="/" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/services" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="/providers" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Providers</Link>
          <Link href="/portal" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Patient Portal</Link>
          <Link href="/contact" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>

          {session ? (
            <button
              onClick={() => { signOut(); setIsMobileMenuOpen(false); }}
              className={styles.mobileLink}
              style={{ width: '100%', cursor: 'pointer', border: 'none', background: 'transparent' }}
            >
              Logout
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
