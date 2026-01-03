import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import InsuranceFAQ from "@/components/InsuranceFAQ";
import ServiceCard from "@/components/ServiceCard";
import ProviderCard from "@/components/ProviderCard";

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
            <Link href="/schedule" className={`btn btn-outline ${styles.pulseButton}`}>
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
            <ProviderCard
              name="Dr. James Wilson"
              role="Senior Pulmonologist"
              bio="Dr. Wilson has over 20 years of experience treating complex respiratory conditions. He specialized in COPD management and is dedicated to helping patients maintain an active lifestyle."
              specialties="COPD and Asthma management"
              education="U of L School of Medicine"
            />
            <ProviderCard
              name="Dr. Sajjad Jameel"
              role="Pulmonologist & Internal Medicine"
              bio="Dr. Jameel has 26 years of experience in Internal Medicine and Pulmonology. He is dedicated to providing comprehensive pulmonary care to the Louisville community."
              specialties="Long COVID, Esophageal Varices, General Pulmonary"
              education="Allama Iqbal Medical College"
            />
            <ProviderCard
              name="Dr. Ehab Haj Ali"
              role="Pulmonologist & Internal Medicine"
              bio="Dr. Haj Ali brings 20 years of experience. His areas of expertise include Sleep Apnea, Asthma treatment, and Ulcerative colitis."
              specialties="Sleep Apnea, Asthma, Chronic Heart Diseases"
              education="University of Aleppo"
            />
          </div>
        </div>
      </section>

      {/* Patient Resources / FAQ */}
      <section style={{ padding: '6rem 0', background: 'var(--color-surface)' }}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Patient Resources & FAQ</h2>
          <InsuranceFAQ />
        </div>
      </section>

      {/* Services Overview */}
      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Services Overview</h2>
          <div className={styles.grid}>
            {[
              { title: 'Asthma', desc: 'Comprehensive management and action plans for asthma control.' },
              { title: 'COPD', desc: 'Long-term care and symptom management for COPD.' },
              { title: 'Lung Nodules', desc: 'Evaluation, monitoring, and management of pulmonary nodules.' },
              { title: 'Chronic Cough', desc: 'Diagnostic evaluation and treatment for persistent coughs.' },
              { title: 'Sleep Apnea', desc: 'Diagnosis and treatment (CPAP/BiPAP) for sleep-disordered breathing.' },
              { title: 'Pulmonary Function Testing', desc: 'On-site PFTs to assess lung volume and capacity.' }
            ].map((service, i) => (
              <ServiceCard key={i} title={service.title} desc={service.desc} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
