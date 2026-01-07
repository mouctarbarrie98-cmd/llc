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
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle} style={{ marginBottom: '0.5rem', color: 'var(--color-primary)', textShadow: 'none' }}>
              Louisville Lung Care
            </h1>
            <h2 className={styles.heroSubtitle} style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--color-text-light)', marginBottom: '2.5rem', maxWidth: '600px', marginInline: 'auto' }}>
              Pulmonary & Respiratory Specialists Serving Louisville, KY
            </h2>

            <div className={styles.schedulingOptions}>
              {/* Primary CTA */}
              <a href="tel:5028830227" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                Call Now (502-883-0227)
              </a>

              {/* Secondary CTA */}
              <Link href="/schedule" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                Request an Appointment
              </Link>
            </div>
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
              name="Dr. Moutaz Al Nabhan"
              role="Pulmonologist"
              bio="Dr. Moutaz Al Nabhan is a pulmonologist in Louisville, Kentucky. He has been in practice for more than 20 years and has expertise in treating sleep issues, pneumonia, and asthma."
              specialties="Pulmonology, Critical Care, Interventional Pulmonology"
              education="University of Aleppo Faculty of Medicine"
            />
            <ProviderCard
              name="Dr. Sajjad Jameel"
              role="Pulmonologist & Internal Medicine"
              bio="Dr. Jameel is a specialist in Pulmonary Disease, Critical Care Medicine, and Sleep Medicine with over 25 years of experience. He is fluent in English, Hindi, Punjabi, Spanish, and Urdu."
              specialties="Pulmonary Disease, Critical Care Medicine, Internal Medicine, Sleep Medicine"
              education="University of The Punjab / Fatima Jinnah Medical College for Women"
            />
            <ProviderCard
              name="Dr. Ehab Haj Ali"
              role="Pulmonologist, Internal Medicine & Critical Care"
              bio="Dr. Haj Ali is a specialist in Pulmonary, Critical Care, and Internal Medicine with over 15 years of experience. He treats COPD, asthma, pulmonary fibrosis, and performs bronchoscopy."
              specialties="Pulmonology, Critical Care Medicine, Internal Medicine"
              education="University of Aleppo (2006) / University of Louisville (Fellowship 2015)"
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
      {/* Visit Us / Map Section */}
      <section style={{ padding: '6rem 0', background: 'var(--color-background)' }}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Visit Us</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}><strong>Louisville Lung Care</strong></p>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>1015 Dupont Rd, Louisville, KY 40207</p>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginTop: '0.5rem' }}>Mon - Fri: 8:30 AM - 4:30 PM</p>
            </div>

            <div style={{ height: '450px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative', boxShadow: 'var(--shadow-md)' }}>
              <iframe
                width="100%"
                height="100%"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=1015%20Dupont%20Rd%2C%20Louisville%2C%20KY%2040207&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                style={{ border: 0 }}
                title="Google Map Location"
              ></iframe>
              <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
                <a
                  href="https://www.google.com/maps/dir//1015+Dupont+Rd,+Louisville,+KY+40207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '0.75rem 1.5rem', fontSize: '1rem' }}
                >
                  📍 Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
