import { notFound } from "next/navigation";
import { getEventBySlug, portfolioEvents } from "@/data/portfolio";
import SubEventDetail from "@/components/sections/portfolio/SubEventDetail";
import Instagram from "@/components/sections/Instagram";

export function generateStaticParams() {
  const params: Array<{ slug: string; subSlug: string }> = [];
  for (const event of portfolioEvents) {
    if (event.subEvents) {
      for (const sub of event.subEvents) {
        params.push({ slug: event.slug, subSlug: sub.slug });
      }
    }
  }
  return params;
}

interface PageProps {
  params: Promise<{ slug: string; subSlug: string }>;
}

export default async function SubEventPage({ params }: PageProps) {
  const { slug, subSlug } = await params;
  const event = getEventBySlug(slug);

  if (!event || !event.subEvents) notFound();

  const subEvent = event.subEvents.find((s) => s.slug === subSlug);
  if (!subEvent) notFound();

  return (
    <main>
      <SubEventDetail event={event} subEvent={subEvent} />
      <Instagram />
    </main>
  );
}