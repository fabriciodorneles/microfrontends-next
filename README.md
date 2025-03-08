# Next.js Micro-Frontends Example

This project demonstrates a micro-frontend architecture implementation using Next.js, showcasing how to build scalable and modular applications.

## Project Structure

```
├── host-app/         # Main application shell
└── products-app/     # Products micro-frontend
```

## Features

- 🏗️ Micro-frontend architecture
- ⚡ Next.js for both host and remote applications
- 🎨 Tailwind CSS for styling
- 📦 Module Federation for runtime integration
- 🔒 TypeScript support

## Getting Started

1. Install dependencies in both applications:

```bash
cd host-app && npm install
cd ../products-app && npm install
```

2. Run the development servers:

```bash
# In host-app directory
npm run dev

# In products-app directory
npm run dev
```

## Architecture

This project uses Module Federation to implement micro-frontends, where:
- `host-app` serves as the container application
- `products-app` is a remote micro-frontend that can be loaded dynamically

## Technical Stack

- Next.js
- TypeScript
- Tailwind CSS
- ESLint
- Module Federation

## Development

Each application can be developed independently and runs on its own port in development mode.