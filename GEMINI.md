# GEMINI.md - Project Context & Instructions

This file provides high-level context and instructions for the `my-link` project, intended for use by AI agents and developers.

## Project Overview

`my-link` appears to be a personal workspace or a collection of web-related projects. Currently, it contains a primary application:

- **my-profile**: A modern web application built with **Next.js**, **React**, and **Tailwind CSS**. It serves as a personal profile or landing page.

## Tech Stack (my-profile)

- **Framework**: Next.js 16.1.6 (App Router)
- **Library**: React 19.2.3
- **Styling**: Tailwind CSS 4 (using `@tailwindcss/postcss`)
- **Language**: TypeScript
- **Linting**: ESLint 9

## Project Structure

```text
my-link/
├── README.md           # Root documentation (minimal)
└── my-profile/         # Main Next.js application
    ├── app/            # Next.js App Router (Layouts, Pages, Styles)
    ├── public/         # Static assets (images, icons)
    ├── package.json    # Project dependencies and scripts
    └── tsconfig.json   # TypeScript configuration
```

## Building and Running

All application commands should be executed from within the `my-profile` directory.

### Prerequisites

- Node.js (version compatible with Next.js 16/React 19)
- npm (or yarn/pnpm/bun)

### Development

To start the development server with Hot Module Replacement (HMR):

```bash
cd my-profile
npm run dev
```

The application will be available at `http://localhost:3000`.

### Production

To build the application for production:

```bash
cd my-profile
npm run build
```

To start the production server after building:

```bash
npm run start
```

### Linting

To check for code quality and style issues:

```bash
cd my-profile
npm run lint
```

## Development Conventions

- **Component Structure**: Follow the Next.js App Router conventions. Place components, layouts, and pages within the `app/` directory.
- **Styling**: Use Tailwind CSS 4 utility classes for styling. Global styles are managed in `my-profile/app/globals.css`.
- **Typing**: Use TypeScript for all new components and logic to ensure type safety.
- **Icons/Images**: Static assets should be placed in `my-profile/public/` and accessed via the `/` path.

## Instruction for AI Agents

- When modifying the application, ensure changes are made within the `my-profile` directory.
- Adhere to the existing React 19 and Tailwind CSS 4 patterns.
- Always verify changes by suggesting or running `npm run lint` and ensuring the build succeeds.
