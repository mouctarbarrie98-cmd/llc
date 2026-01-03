"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            username,
            password,
            redirect: false,
        });

        if (result?.error) {
            setError("Invalid credentials");
        } else {
            router.push("/patients");
            router.refresh();
        }
    };

    return (
        <main className="container" style={{ padding: '6rem 1.5rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '400px', width: '100%', padding: '2rem', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-secondary)' }}>Staff Login</h1>

                {error && <div style={{ background: '#fee2e2', color: '#dc2626', padding: '0.75rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                        />
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', cursor: 'pointer' }}>Sign In</button>
                </form>

                <p style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--color-text-light)', textAlign: 'center' }}>
                    Restricted access for authorized staff only.
                </p>
            </div>
        </main>
    );
}
