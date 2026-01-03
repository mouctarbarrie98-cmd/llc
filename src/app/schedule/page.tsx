```javascript
"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function SchedulePage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        isEmergencyChecked: false,
        visitType: '',
        patientName: '',
        phone: '',
        email: '',
        preferredTime1: '',
        preferredTime2: '',
        preferredTime3: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, isEmergencyChecked: e.target.checked });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
            window.scrollTo(0, 0);
        }, 800);
    };

    if (isSubmitted) {
        return (
            <main className="container" style={{ padding: '4rem 1.5rem', maxWidth: '600px' }}>
                <div style={{ textAlign: 'center', background: 'var(--color-surface)', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
                    <h1 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>Request Received</h1>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                        Thank you for trusting Louisville Lung Care. We have received your appointment request.
                    </p>
                    <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem', textAlign: 'left' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>What happens next?</h3>
                        <p style={{ color: 'var(--color-text-light)' }}>Our scheduling team will review your request and call you within <strong>1 business day</strong> to confirm your appointment time.</p>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#e53e3e', fontWeight: 600 }}>
                        If your condition worsens or you experience a medical emergency, please call 911 immediately.
                    </p>
                    <div style={{ marginTop: '2rem' }}>
                        <Link href="/" className="btn btn-primary">Return Home</Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="container" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-primary)' }}>Schedule an Appointment</h1>

            {/* Safety Banner - Always visible or strictly above */}
            <div style={{ background: '#fff5f5', borderLeft: '4px solid #e53e3e', padding: '1rem 1.5rem', marginBottom: '3rem', borderRadius: '4px' }}>
                <p style={{ color: '#c53030', fontWeight: 700, margin: 0 }}>
                    ⚠️ Safety First: If you are having severe shortness of breath, chest pain, or a medical emergency, call 911 or go to the ER immediately.
                </p>
            </div>

            <form onSubmit={handleSubmit} style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                
                {/* Step 1: Guardrails & Type */}
                <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer', padding: '1rem', background: '#f8fafc', borderRadius: 'var(--radius-md)' }}>
                        <input 
                            type="checkbox" 
                            required 
                            checked={formData.isEmergencyChecked}
                            onChange={handleCheck}
                            style={{ marginTop: '0.3rem', width: '20px', height: '20px' }}
                        />
                        <span style={{ fontSize: '1rem', fontWeight: 500 }}>I understand this form is for non-emergency scheduling only.</span>
                    </label>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Reason for Visit</label>
                    <select 
                        name="visitType" 
                        required 
                        value={formData.visitType} 
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', fontSize: '1rem' }}
                    >
                        <option value="">Select a visit type...</option>
                        <option value="Routine Checkup">Routine Checkup / Follow-up</option>
                        <option value="New Symptom">New Symptom (Non-Urgent)</option>
                        <option value="Urgent Issue">Urgent Breathing Issue</option>
                        <option value="PFT">Pulmonary Function Test (PFT)</option>
                    </select>

                    {/* Conditional: PFT Prep Note */}
                    {formData.visitType === 'PFT' && (
                        <div style={{ marginTop: '1rem', padding: '1rem', background: '#ebf8ff', borderRadius: 'var(--radius-md)', color: '#2c5282', fontSize: '0.95rem' }}>
                            ℹ️ <strong>Note:</strong> Some breathing tests require preparation. Our team will contact you with specific instructions (e.g., withholding inhalers) 24 hours before your visit.
                        </div>
                    )}

                    {/* Conditional: Urgent Guardrail */}
                    {formData.visitType === 'Urgent Issue' && (
                        <div style={{ marginTop: '1rem', padding: '1rem', background: '#fff5f5', borderRadius: 'var(--radius-md)', color: '#c53030', fontSize: '0.95rem' }}>
                            🛑 <strong>Safety Check:</strong> If you are struggling to breathe right now, do not wait for us to call back. Please seek immediate care.
                        </div>
                    )}
                </div>

                {/* Patient Details */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                    <div style={{ gridColumn: '1 / -1' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Your Information</h3>
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Full Name</label>
                        <input 
                            type="text" 
                            name="patientName"
                            required
                            placeholder="Jane Doe"
                            value={formData.patientName}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }}
                        />
                    </div>
                    <div style={{ minWidth: '0' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Phone Number</label>
                        <input 
                            type="tel" 
                            name="phone"
                            required
                            placeholder="(502) 555-0123"
                            value={formData.phone}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }}
                        />
                    </div>
                    <div style={{ minWidth: '0' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email (Optional)</label>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="jane@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }}
                        />
                    </div>
                </div>

                {/* Preferred Times */}
                <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Preferred Availability</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: '1rem' }}>
                        Please select up to 3 preferred time blocks. We will do our best to accommodate your choices.
                    </p>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {['1st Choice', '2nd Choice', '3rd Choice'].map((choice, i) => (
                            <div key={i}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>{choice}</label>
                                <input 
                                    type="text" 
                                    name={`preferredTime${ i + 1 } `}
                                    placeholder="e.g. Monday Morning, Tuesday after 2PM"
                                    onChange={handleChange}
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '2rem' }}>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}
                    >
                        Request Appointment
                    </button>
                    <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                        We will contact you within 1 business day to confirm.
                    </p>
                </div>
            </form>
        </main>
    );
}
