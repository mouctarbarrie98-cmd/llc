"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewPatientPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        email: '',
        phone: '',
        medicalHistory: '',
    });
    const [saving, setSaving] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        try {
            const res = await fetch('/api/patients', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push('/patients');
                router.refresh(); // Refresh Next.js cache
            } else {
                alert('Failed to save patient');
            }
        } catch (error) {
            console.error(error);
            alert('Error saving patient');
        } finally {
            setSaving(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        fontWeight: 500,
        color: 'var(--color-secondary)',
    };

    return (
        <main className="container" style={{ padding: '2rem 1.5rem', maxWidth: '600px' }}>
            <h1>Add New Patient</h1>
            <form onSubmit={handleSubmit} style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', marginTop: '2rem' }}>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                        <label style={labelStyle}>First Name</label>
                        <input required name="firstName" type="text" style={inputStyle} value={formData.firstName} onChange={handleChange} />
                    </div>
                    <div>
                        <label style={labelStyle}>Last Name</label>
                        <input required name="lastName" type="text" style={inputStyle} value={formData.lastName} onChange={handleChange} />
                    </div>
                </div>

                <div>
                    <label style={labelStyle}>Date of Birth</label>
                    <input required name="dateOfBirth" type="date" style={inputStyle} value={formData.dateOfBirth} onChange={handleChange} />
                </div>

                <div>
                    <label style={labelStyle}>Email</label>
                    <input name="email" type="email" style={inputStyle} value={formData.email} onChange={handleChange} />
                </div>

                <div>
                    <label style={labelStyle}>Phone</label>
                    <input name="phone" type="tel" style={inputStyle} value={formData.phone} onChange={handleChange} />
                </div>

                <div>
                    <label style={labelStyle}>Medical History</label>
                    <textarea name="medicalHistory" rows={4} style={{ ...inputStyle, resize: 'vertical' }} value={formData.medicalHistory} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={saving}>
                    {saving ? 'Saving...' : 'Save Record'}
                </button>
            </form>
        </main>
    );
}
