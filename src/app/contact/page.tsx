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

                {/* Map Section */}
                <div style={{ height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative' }}>
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
                    <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
                        <a
                            href="https://www.google.com/maps/dir//1015+Dupont+Rd,+Louisville,+KY+40207"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                        >
                            📍 Get Directions
                        </a>
                    </div>
                </div>

            </div>
        </main>
    );
}
