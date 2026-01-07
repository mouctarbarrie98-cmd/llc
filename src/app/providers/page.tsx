import Image from 'next/image';
import Link from 'next/link';

export default function ProvidersPage() {
    const doctors = [
        {
            name: "Dr. Moutaz Al Nabhan",
            role: "Pulmonologist",
            bio: "Dr. Moutaz Al Nabhan is a pulmonologist in Louisville, Kentucky and is affiliated with Kindred Hospital-Louisville. He received his medical degree from University of Aleppo Faculty of Medicine and has been in practice for more than 20 years. He has expertise in treating sleep issues, pneumonia, asthma, among other conditions.",
            education: "Medical School: University of Aleppo Faculty of Medicine"
        },
        {
            name: "Dr. Sajjad Jameel",
            role: "Pulmonologist & Internal Medicine",
            bio: "Dr. Jameel is a specialist in Pulmonary Disease, Critical Care Medicine, and Sleep Medicine based in Louisville, Kentucky. He has over 25 years of experience in the medical field. He is fluent in English, Hindi, Punjabi, Spanish, and Urdu.",
            education: "Medical School: University of The Punjab / Fatima Jinnah Medical College for Women (2000)"
        },
        {
            name: "Dr. Ehab Haj Ali",
            role: "Pulmonologist, Internal Medicine & Critical Care",
            bio: "Dr. Haj Ali is an internal medicine, pulmonary medicine, and critical care specialist with over 15 years of experience. He treats complex lung issues including pneumonia, lung metastases, COPD, asthma, COVID-19, and pulmonary fibrosis. He performs procedures such as bronchoscopy, endoscopy, and gastrostomy. He is affiliated with Norton Hospital, UofL Health – Jewish Hospital, and Mary & Elizabeth Hospital.",
            education: "Medical School: University of Aleppo School of Medicine (2006)\nFellowship: University of Louisville (Pulmonary & Critical Care, 2015)"
        }
    ];

    return (
        <main className="container" style={{ padding: '6rem 1.5rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', color: 'var(--color-secondary)' }}>Meet Our Providers</h1>

            <div style={{ display: 'grid', gap: '3rem', maxWidth: '800px', margin: '0 auto' }}>
                {doctors.map((doc, i) => (
                    <div key={i} style={{ display: 'flex', gap: '2rem', background: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', flexDirection: i % 2 !== 0 ? 'row-reverse' : 'row' }}>
                        <div style={{ flexShrink: 0, width: '150px', height: '150px', background: '#e2e8f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
                            👨‍⚕️
                        </div>
                        <div>
                            <h2 style={{ color: 'var(--color-primary)', marginBottom: '0.25rem' }}>{doc.name}</h2>
                            <p style={{ fontWeight: 600, color: 'var(--color-secondary)', marginBottom: '1rem' }}>{doc.role}</p>
                            <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>{doc.bio}</p>
                            <div style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', whiteSpace: 'pre-line', marginBottom: '1.5rem' }}>
                                <strong>Education:</strong><br />
                                {doc.education}
                            </div>
                            <Link href="/schedule" className="btn btn-outline" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                                Request Appointment
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
