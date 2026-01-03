export default function ServicesPage() {
    const categories = [
        {
            title: "Common Respiratory Conditions",
            items: ["Asthma", "COPD", "Chronic Bronchitis", "Emphysema", "Pneumonia", "Pulmonary Fibrosis"]
        },
        {
            title: "Sleep Medicine",
            items: ["Obstructive Sleep Apnea", "Insomnia", "Narcolepsy", "Restless Leg Syndrome"]
        },
        {
            title: "Advanced Diagnostics",
            items: ["Pulmonary Function Testing (PFT)", "Bronchoscopy", "Sleep Studies (Polysomnography)", "Chest X-Ray & CT Interpretation"]
        }
    ];

    return (
        <main className="container" style={{ padding: '6rem 1.5rem', maxWidth: '900px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>Conditions We Treat & Services</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '4rem' }}>
                We provide comprehensive diagnostic and therapeutic services for a wide range of pulmonary and sleep disorders.
            </p>

            <div style={{ display: 'grid', gap: '3rem' }}>
                {categories.map((cat, i) => (
                    <section key={i}>
                        <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
                            {cat.title}
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                            {cat.items.map((item, j) => (
                                <div key={j} style={{ background: 'var(--color-surface)', padding: '1rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}
