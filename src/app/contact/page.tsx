export default function ContactPage() {
    return (
        <main className="container" style={{ padding: '6rem 1.5rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', color: 'var(--color-secondary)' }}>Contact Us</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                {/* Contact Info */}
                <div>
                    <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Office Information</h2>
                    <div style={{ fontSize: '1.1rem', lineHeight: 2 }}>
                        <p><strong>Address:</strong><br />
                            1015 Dupont Rd<br />
                            Louisville, KY 40207</p>

                        <p style={{ marginTop: '1.5rem' }}><strong>Phone:</strong> (502) 883-0227</p>
                        <p><strong>Fax:</strong> (502) 555-0198</p>

                        <p style={{ marginTop: '1.5rem' }}><strong>Email:</strong> info@louisvillepulmonary.com<br />
                            <span style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>(Please do not send urgent medical questions via email)</span></p>
                    </div>

                    <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>Hours of Operation</h3>
                    <ul style={{ listStyle: 'none', lineHeight: 1.8 }}>
                        <li><strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM</li>
                        <li><strong>Saturday:</strong> 9:00 AM - 12:00 PM (Urgent Care Only)</li>
                        <li><strong>Sunday:</strong> Closed</li>
                    </ul>
                </div>

                {/* Map Placeholder */}
                <div style={{ height: '400px', background: '#e2e8f0', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center', color: 'var(--color-text-light)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗺️</div>
                        <p>Interactive Map would go here</p>
                        <p>(Google Maps Embed)</p>
                    </div>
                </div>

            </div>
        </main>
    );
}
