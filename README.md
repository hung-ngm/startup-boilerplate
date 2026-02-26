# Startup Boilerplate (authored by HungClaw)

A production-ready SaaS boilerplate built with Next.js 15, featuring authentication, payments, AI chat, analytics, and everything you need to launch your startup in days, not months.

## ✨ Features

- 🔐 **Authentication** - Clerk with social logins and MFA
- 💳 **Payments** - Stripe + Lemon Squeezy dual payment provider support
- 🗄️ **Database** - Supabase with Drizzle ORM for type-safe queries
- 🤖 **AI Chat** - RAG implementation with Vercel AI SDK, Pinecone, and OpenAI
- 📧 **Email** - Transactional emails with Resend and React Email
- 📊 **Analytics** - PostHog for product analytics and session replay
- 🐛 **Error Tracking** - Sentry for comprehensive error monitoring
- ⚡ **Rate Limiting** - Upstash Redis for API rate limiting
- 🌙 **Dark Mode** - Beautiful dark mode with next-themes
- 📝 **MDX Blog** - Built-in blog with MDX support
- ✅ **Testing** - Vitest for unit tests, Playwright for E2E
- 🚀 **CI/CD** - GitHub Actions workflow for automated testing and deployment

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/hung-ngm/startup-boilerplate.git
cd startup-boilerplate
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Set up environment variables**

Copy `.env.example` to `.env.local` and fill in your API keys:

```bash
cp .env.example .env.local
```

4. **Run database migrations**

```bash
pnpm db:push
```

5. **Start the development server**

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application!

## 📦 Tech Stack

### Core

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI)
- **Package Manager**: pnpm

### Authentication & Authorization

- **Clerk** - User authentication with social logins

### Database & ORM

- **Supabase** - PostgreSQL database
- **Drizzle ORM** - Type-safe database queries

### Payments

- **Stripe** - Payment processing
- **Lemon Squeezy** - Alternative payment provider

### AI & ML

- **Vercel AI SDK** - Streamlined AI integration
- **OpenAI** - Language models and embeddings
- **Pinecone** - Vector database for RAG

### Email

- **Resend** - Email API
- **React Email** - Email templates

### Analytics & Monitoring

- **PostHog** - Product analytics
- **Sentry** - Error tracking
- **Upstash Redis** - Rate limiting and caching

### Testing

- **Vitest** - Unit testing
- **Playwright** - E2E testing
- **Testing Library** - React component testing

### CI/CD

- **GitHub Actions** - Automated workflows
- **Vercel** - Deployment platform

## 📁 Project Structure

```
startup-boilerplate/
├── .github/
│   └── workflows/
│       └── ci.yml              # CI/CD pipeline
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Auth pages (sign-in, sign-up)
│   │   ├── (marketing)/       # Marketing pages (landing, blog)
│   │   ├── dashboard/         # Dashboard pages
│   │   ├── api/               # API routes
│   │   ├── layout.tsx         # Root layout
│   │   └── providers.tsx      # Global providers
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── landing/           # Landing page components
│   │   ├── dashboard/         # Dashboard components
│   │   └── blog/              # Blog components
│   ├── lib/                   # Utilities and integrations
│   │   ├── db/                # Database schema and client
│   │   ├── stripe.ts
│   │   ├── pinecone.ts
│   │   └── ...
│   ├── content/
│   │   └── blog/              # MDX blog posts
│   ├── __tests__/             # Tests
│   └── env.ts                 # Environment validation
├── drizzle.config.ts
├── next.config.js
├── tailwind.config.ts
└── package.json
```

## 🔧 Configuration

### Environment Variables

See `.env.example` for all required environment variables. Key services to configure:

1. **Clerk** - User authentication
2. **Supabase** - Database
3. **Stripe** - Payment processing
4. **Lemon Squeezy** - Alternative payments
5. **OpenAI** - AI capabilities
6. **Pinecone** - Vector database
7. **Resend** - Email delivery
8. **PostHog** - Analytics
9. **Sentry** - Error tracking
10. **Upstash** - Redis and rate limiting

### Database Setup

1. Create a Supabase project
2. Add your `DATABASE_URL` to `.env.local`
3. Run migrations:

```bash
pnpm db:push
```

### Payment Setup

#### Stripe

1. Get your API keys from the Stripe Dashboard
2. Set up webhook endpoint at `/api/webhooks/stripe`
3. Add webhook secret to environment variables

#### Lemon Squeezy

1. Get your API key from Lemon Squeezy
2. Set up webhook endpoint at `/api/webhooks/lemon-squeezy`
3. Add webhook secret to environment variables

## 🧪 Testing

### Unit Tests

```bash
pnpm test
```

### E2E Tests

```bash
pnpm test:e2e
```

### Type Checking

```bash
pnpm type-check
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables
4. Deploy!

### Manual Deployment

```bash
pnpm build
pnpm start
```

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Clerk Docs](https://clerk.com/docs)
- [Drizzle ORM Docs](https://orm.drizzle.team)
- [Stripe Docs](https://stripe.com/docs)
- [Vercel AI SDK Docs](https://sdk.vercel.ai/docs)

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📝 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

Built with love using amazing open-source tools and services.

---

**Ready to ship your SaaS?** Get started now and launch in days, not months! 🚀
