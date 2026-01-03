import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle} style={{ marginBottom: '0.5rem' }}>Louisville Lung Care</h1>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '2rem', maxWidth: '600px', marginInline: 'auto' }}>
            Pulmonary & Respiratory Specialists Serving Louisville, KY
          </h2>

          <div className={styles.schedulingOptions}>
            {/* Primary CTA */}
            <a href="tel:5028830227" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.75rem 1.5rem' }}>
              📞 Call Now (502-883-0227)
            </a>

            {/* Secondary CTA */}
            <Link href="/schedule" className="btn btn-outline">
              Schedule Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Meet the Doctors Section */}
      <section className={styles.doctors}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Meet Our Providers</h2>
          <p className={styles.doctorsIntro}>Our practice consists of three highly experienced pulmonologists dedicated to your care.</p>
          <div className={styles.grid}>
            {/* Doctor 1 */}
            <div className={styles.card} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div className={styles.doctorIcon}>👨‍⚕️</div>
              <h3>Dr. James Wilson</h3>
              <p className={styles.doctorRole}>Senior Pulmonologist</p>
              <p style={{ flex: 1 }}>Specializing in COPD and Asthma management with over 20 years of experience.</p>
              <div style={{ marginTop: '1.5rem' }}>
                <Link href="/schedule" className="btn btn-outline" style={{ width: '100%', fontSize: '0.9rem' }}>Schedule Appointment</Link>
              </div>
            </div>
            {/* Doctor 2 */}
            <div className={styles.card} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div className={styles.doctorIcon}>👨‍⚕️</div>
              <h3>Dr. Sajjad Jameel</h3>
              <p className={styles.doctorRole}>Pulmonologist & Internal Medicine</p>
              <p style={{ flex: 1 }}>26 Years Experience. Specializing in Long COVID Disorder, Esophageal Varices, and general pulmonary care.</p>
              <div style={{ marginTop: '1.5rem' }}>
                <Link href="/schedule" className="btn btn-outline" style={{ width: '100%', fontSize: '0.9rem' }}>Schedule Appointment</Link>
              </div>
            </div>
            {/* Doctor 3 */}
            <div className={styles.card} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div className={styles.doctorIcon}>👨‍⚕️</div>
              <h3>Dr. Ehab Haj Ali</h3>
              <p className={styles.doctorRole}>Pulmonologist & Internal Medicine</p>
              <p style={{ flex: 1 }}>20 Years Experience. Expert in Sleep Apnea, Asthma Treatment, and Chronic Pulmonary Heart Diseases.</p>
              <div style={{ marginTop: '1.5rem' }}>
                <Link href="/schedule" className="btn btn-outline" style={{ width: '100%', fontSize: '0.9rem' }}>Schedule Appointment</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Services Overview</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Asthma</h3>
              <p>Comprehensive management and action plans for asthma control.</p>
            </div>
            <div className={styles.card}>
              <h3>COPD</h3>
              <p>Long-term care and symptom management for Chronic Obstructive Pulmonary Disease.</p>
            </div>
            <div className={styles.card}>
              <h3>Lung Nodules</h3>
              <p>Evaluation, monitoring, and management of pulmonary nodules.</p>
            </div>
            <div className={styles.card}>
              <h3>Chronic Cough</h3>
              <p>Diagnostic evaluation and treatment for persistent coughs.</p>
            </div>
            <div className={styles.card}>
              <h3>Sleep Apnea</h3>
              <p>Diagnosis and treatment (CPAP/BiPAP) for sleep-disordered breathing.</p>
            </div>
            <div className={styles.card}>
              <h3>Pulmonary Function Testing</h3>
              <p>On-site PFTs to assess lung volume and capacity.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
