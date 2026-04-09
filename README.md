# StoreIt

StoreIt is a modern file storage manager built with Next.js and Appwrite. It lets users sign in with email OTP, upload files, organize content by type, and manage files with actions like rename, share, download, and delete.

## Features

- Email OTP authentication (sign up/sign in)
- Secure session handling with Appwrite session cookies
- File upload and storage with Appwrite Storage
- File metadata persistence in Appwrite Database
- File categories: documents, images, media, others
- Search and sort files by date, name, and size
- Dashboard usage overview with chart and recent uploads
- File actions: rename, details, share, download, delete
- Responsive layout with desktop sidebar and mobile navigation

## Technology Stack

- Next.js 15 (App Router, Server Actions)
- React 19
- TypeScript
- Tailwind CSS
- Appwrite (Auth, Database, Storage)
- React Hook Form + Zod (form validation)
- Radix UI (accessible primitives)
- Recharts (dashboard chart)

## Component Tree

```text
mystore/
|-- app/
|   |-- (auth)/
|   |   |-- sign-in/page.tsx
|   |   `-- sign-up/page.tsx
|   |-- (root)/
|   |   |-- page.tsx
|   |   `-- [type]/page.tsx
|   |-- globals.css
|   `-- layout.tsx
|-- components/
|   |-- AuthForm.tsx
|   |-- FileUploader.tsx
|   |-- Card.tsx
|   |-- ActionDropdown.tsx
|   |-- ActionsModalContent.tsx
|   |-- Chart.tsx
|   |-- Search.tsx
|   |-- Sort.tsx
|   |-- Sidebar.tsx
|   |-- MobileNavigation.tsx
|   `-- ui/*
|-- lib/
|   |-- actions/
|   |   |-- user.action.ts
|   |   `-- file.action.ts
|   |-- appwrite/
|   |   |-- config.ts
|   |   `-- index.ts
|   `-- utils.ts
|-- constants/
|-- hooks/
|-- public/
`-- types/
```

## Getting Started

### 1. Install dependencies

```bash
yarn install
```

### 2. Configure environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=
NEXT_PUBLIC_APPWRITE_PROJECT=
NEXT_PUBLIC_APPWRITE_DATABASE=
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=
NEXT_PUBLIC_APPWRITE_BUCKET=
NEXT_PUBLIC_APPWRITE_SECRET=
```

Set these values from your Appwrite project settings.

### 3. Prepare Appwrite resources

- Create a project in Appwrite
- Create a database
- Create two collections: users and files
- Create one storage bucket for uploads
- Update permissions to match your app requirements

### 4. Run the development server

```bash
yarn dev
```

Open http://localhost:3000 in your browser.

## Scripts

- `yarn dev` - start development server
- `yarn build` - create production build
- `yarn start` - run production server
- `yarn lint` - run lint checks
