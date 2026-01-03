# llcky.com - Pulmonary Care Website & Patient Portal

A modern, secure, and responsive website for a private pulmonology practice, built with Next.js 15, TypeScript, and Prisma.

## Features

### Public Website
- **Home**: Scheduling options, team overview, and services.
- **Services**: Detailed list of respiratory conditions and treatments.
- **Providers**: Doctor bios and credentials.
- **New Patients**: Information on what to bring and referral instructions.
- **Contact**: Location, hours, and contact info.
- **Scheduling**: 
    - Online Schedule (Placeholder for Zocdoc/Phreesia)
    - Request a Call form (saves to database)

### Patient Portal (Internal)
- **Secure Authentication**: Staff login required to access patient data.
- **Patient Management**:
    - View patient list in a clean table format.
    - Add new patients.
    - detailed patient view.
    - Edit patient demographics and medical history.
    - Delete patient records.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Database**: SQLite (Development) / PostgreSQL (Production ready)
- **ORM**: Prisma
- **Auth**: NextAuth.js
- **Styling**: Vanilla CSS (CSS Modules) with a medical-grade design system.

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   Create a `.env` file in the root:
   ```env
   # Database connection string
   DATABASE_URL="file:./dev.db"

   # NextAuth Configuration
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secure-random-secret-key"
   ```

3. **Database Setup**
   Initialize the database:
   ```bash
   npx prisma migrate dev --name init
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`.

## Deployment

### Moving to Production
1. **Database**: Switch from SQLite to PostgreSQL (e.g., Vercel Postgres, Neon, AWS RDS).
   - Update `schema.prisma`:
     ```prisma
     datasource db {
       provider = "postgresql"
       url      = env("POSTGRES_PRISMA_URL")
     }
     ```
   - Update `.env` with the new connection string.

2. **Authentication**:
   - Generate a strong `NEXTAUTH_SECRET` (e.g., `openssl rand -base64 32`).
   - Update `NEXTAUTH_URL` to your production domain (e.g., `https://louisvillepulmonary.com`).

3. **Build**:
   ```bash
   npm run build
   ```

## Default Credentials (Demo)
- **Username**: admin
- **Password**: password123
*Note: In production, switch to a database-backed user system.*
