## Agentic Builder Capabilities

This project is an opinionated single-page experience that answers “What can you do?” for an autonomous full-stack developer. It showcases capabilities, workflows, and technology preferences in a polished presentation that can be deployed directly to Vercel.

### Tech stack

- Next.js 14 with the App Router and React Server Components
- TypeScript and Tailwind CSS for typed, utility-first styling
- Metadata optimized for Vercel deployments

### Local development

```bash
yarn install
yarn dev
```

Visit `http://localhost:3000` while the dev server runs.

### Quality checks

```bash
yarn lint
yarn build
```

### Deployment

The project is production-ready for Vercel:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-b1cf4b04
```
