"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RequestCallPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        phone: '',
        reason: '',
        referringDoctor: '',
        preferredTime: '',
        notes: '',
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const res = await fetch('/api/request-call', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSuccess(true);
            } else {
                alert('Failed to submit request. Please try again.');
            }
        } catch (error) {
            console.error(error);
            alert('Error submitting request');
        } finally {
            setSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const inputStyle = {
        width: '100%',
        padding: '0.75rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-border)',
        marginTop: '0.5rem',
        marginBottom: '1rem',
        fontFamily: 'inherit',
    };

    const labelStyle = {
        fontWeight: 600,
        color: 'var(--color-secondary)',
        display: 'block',
    };

    if (success) {
        return (
            <main className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center', maxWidth: '600px' }}>
                <div style={{ background: 'var(--color-surface)', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
                    <h1 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Request Received</h1>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                        Thank you. Our team will call you at <strong>{formData.phone}</strong> within 1–2 business days to schedule your appointment.
                    </p>
                    <Link href="/" className="btn btn-primary">Return Home</Link>
                </div>
            </main>
        )
    }

    return (
        <main className="container" style={{ padding: '4rem 1.5rem', maxWidth: '700px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Request a Scheduling Call</h1>
            <p style={{ textAlign: 'center', color: 'var(--color-text-light)', marginBottom: '3rem' }}>
                Please fill out the form below. Our scheduling team will contact you shortly.
            </p>

            <form onSubmit={handleSubmit} style={{ background: 'var(--color-surface)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={labelStyle}>Full Name *</label>
                    <input required name="fullName" type="text" style={inputStyle} value={formData.fullName} onChange={handleChange} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                        <label style={labelStyle}>Date of Birth *</label>
                        <input required name="dateOfBirth" type="date" style={inputStyle} value={formData.dateOfBirth} onChange={handleChange} />
                    </div>
                    <div>
                        <label style={labelStyle}>Phone Number *</label>
                        <input required name="phone" type="tel" style={inputStyle} value={formData.phone} onChange={handleChange} />
                    </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={labelStyle}>Reason for Visit or Referral *</label>
                    <input required name="reason" type="text" placeholder="e.g. Asthma checkup, Referral from Dr. Smith" style={inputStyle} value={formData.reason} onChange={handleChange} />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={labelStyle}>Referring Doctor (Optional)</label>
                    <input name="referringDoctor" type="text" style={inputStyle} value={formData.referringDoctor} onChange={handleChange} />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={labelStyle}>Preferred Time for Call</label>
                    <select name="preferredTime" style={inputStyle} value={formData.preferredTime} onChange={handleChange}>
                        <option value="">Anytime</option>
                        <option value="Morning (8am - 12pm)">Morning (8am - 12pm)</option>
                        <option value="Afternoon (12pm - 5pm)">Afternoon (12pm - 5pm)</option>
                    </select>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <label style={labelStyle}>Notes (Optional)</label>
                    <textarea name="notes" rows={3} style={{ ...inputStyle, resize: 'vertical' }} value={formData.notes} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }} disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Submit Request'}
                </button>
            </form>
        </main>
    );
}
