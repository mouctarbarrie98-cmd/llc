import Image from 'next/image';

export default function ProvidersPage() {
    const doctors = [
        {
            name: "Dr. James Wilson",
            role: "Senior Pulmonologist",
            bio: "Dr. Wilson has over 20 years of experience treating complex respiratory conditions. He specialized in COPD management and is dedicated to helping patients maintain an active lifestyle.",
            education: "Medical School: University of Louisville\nResidency: Johns Hopkins Hospital"
        },
        {
            name: "Dr. Sajjad Jameel",
            role: "Pulmonologist & Internal Medicine",
            bio: "Dr. Jameel has 26 years of experience in Internal Medicine and Pulmonology. He specializes in treating complex conditions including Long COVID Disorder, Esophageal Varices, Necrotizing fasciitis, and Hiatal Hernia. He is dedicated to providing comprehensive pulmonary care to the Louisville community.",
            education: "Medical School: Allama Iqbal Medical College (2000)\nFatima Jinnah Medical College for Women (2000)"
        },
        {
            name: "Dr. Ehab Haj Ali",
            role: "Pulmonologist & Internal Medicine",
            bio: "Dr. Haj Ali brings 20 years of experience in Internal Medicine and Pulmonology. His areas of expertise include Sleep Apnea, Asthma treatment, Chronic Pulmonary Heart Diseases (including Pulmonary Hypertension), and Ulcerative colitis. He is committed to advanced respiratory care.",
            education: "Medical School: University of Aleppo Faculty of Medicine (2006)"
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
                                Schedule with {doc.name.split(' ').slice(0, 2).join(' ')}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
