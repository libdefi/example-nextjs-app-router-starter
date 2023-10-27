<div align="center">
  <h1>Next.js (App Router) Starter</h1>
</div>

<div align="center">
  <p>A minimalistic boilerplate to start developing Next.js applications
</div>

<br/>

## Motivation

🤏 **Bare bones**: Useful for prototyping or building your stack from scratch.

💪 **Typesafe**: Get productive with code generation and types.

## Stack:

- [Next.js App Router](https://nextjs.org/) with static data fetching
- [GraphQL Code Generator](https://the-guild.dev/graphql/codegen)
- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.io/)
- [i18next](https://www.i18next.com/)

## Quickstart

1. Create a new repository from this template ("Use this template")
2. Create `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

3. Replace the `TEST_API_URL` environment variable with the address of your Saleor instance.

4. Install the dependencies:

```bash
pnpm i
```

5. Generate the types based on GraphQL schema:

```bash
pnpm generate
```

6. Start the development server:

```bash
pnpm dev
```

7. Enjoy! 🎉
