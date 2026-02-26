import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's included in the boilerplate?",
    answer:
      "Everything you need to launch a SaaS: authentication (Clerk), payments (Stripe + Lemon Squeezy), database (Supabase + Drizzle), AI chat (Vercel AI SDK + Pinecone), email (Resend), analytics (PostHog), error tracking (Sentry), rate limiting (Upstash), MDX blog, tests, and CI/CD.",
  },
  {
    question: "Do I need to configure everything myself?",
    answer:
      "No! All integrations are pre-configured with proper TypeScript types and environment validation. You just need to add your API keys to .env and you're ready to go.",
  },
  {
    question: "Can I use just Stripe or just Lemon Squeezy?",
    answer:
      "Yes! The boilerplate supports both payment providers side-by-side. You can use one or both, and even let users choose their preferred payment method.",
  },
  {
    question: "Is this suitable for production?",
    answer:
      "Absolutely. This boilerplate follows Next.js and React best practices, includes proper error handling, rate limiting, testing setup, and CI/CD workflows. It's built to scale.",
  },
  {
    question: "What if I need help?",
    answer:
      "We provide comprehensive documentation and code comments throughout. Pro and Enterprise plans include priority support via email and Discord.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Yes! We offer a 30-day money-back guarantee. If you're not satisfied for any reason, just reach out and we'll issue a full refund.",
  },
];

export function FAQ() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            Everything you need to know about the boilerplate.
          </p>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
