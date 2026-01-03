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
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>Schedule an Appointment</h2>
          <p className={styles.heroSubtitle}>We offer two ways to book your appointment — choose what works best for you:</p>

          <div className={styles.schedulingOptions}>
            {/* Option 1 */}
            <div className={styles.optionCard}>
              <div className={styles.optionIcon}>1️⃣</div>
              <h3>Schedule Online</h3>
              <p>Book available times instantly using our secure portal.</p>
              <Link href="/schedule" className="btn btn-primary">Book Online Now</Link>
            </div>

            {/* Option 2 */}
            <div className={styles.optionCard}>
              <div className={styles.optionIcon}>2️⃣</div>
              <h3>Request a Scheduling Call</h3>
              <p>Our team will call you within 1–2 business days to coordinate.</p>
              <Link href="/request-call" className="btn btn-outline">Request a Call</Link>
            </div>
          </div>

          <p className={styles.heroNote}>
            <strong>Not sure which option to choose?</strong> If your referral is complex, we recommend requesting a call so we can match you with the right provider.
          </p>
        </div>
      </section>

      {/* Meet the Doctors Section */}
      <section className={styles.doctors}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Meet Our Providers</h2>
          <p className={styles.doctorsIntro}>Our practice consists of three highly experienced pulmonologists dedicated to your care.</p>
          <div className={styles.grid}>
            {/* Doctor 1 */}
            <div className={styles.card}>
              <div className={styles.doctorIcon}>👨‍⚕️</div>
              <h3>Dr. James Wilson</h3>
              <p className={styles.doctorRole}>Senior Pulmonologist</p>
              <p>Specializing in COPD and Asthma management with over 20 years of experience.</p>
            </div>
            {/* Doctor 2 */}
            <div className={styles.card}>
              <div className={styles.doctorIcon}>👨‍⚕️</div>
              <h3>Dr. Sajjad Jameel</h3>
              <p className={styles.doctorRole}>Pulmonologist & Internal Medicine</p>
              <p>26 Years Experience. Specializing in Long COVID Disorder, Esophageal Varices, and general pulmonary care.</p>
            </div>
            {/* Doctor 3 */}
            <div className={styles.card}>
              <div className={styles.doctorIcon}>👨‍⚕️</div>
              <h3>Dr. Ehab Haj Ali</h3>
              <p className={styles.doctorRole}>Pulmonologist & Internal Medicine</p>
              <p>20 Years Experience. Expert in Sleep Apnea, Asthma Treatment, and Chronic Pulmonary Heart Diseases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Choose Louisville Lung Care?</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Comprehensive Care</h3>
              <p>From asthma to sleep apnea, we treat a wide range of respiratory conditions with expertise.</p>
            </div>
            <div className={styles.card}>
              <h3>Patient-Centered</h3>
              <p>We listen to your concerns and tailor treatment plans to your unique lifestyle and needs.</p>
            </div>
            <div className={styles.card}>
              <h3>Advanced Technology</h3>
              <p>Utilizing the latest diagnostic tools to ensure accurate assessments and effective treatments.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
