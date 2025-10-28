export type EventItem = {
  title: string;
  image: string; // path under public/images
  slug: string; // used for routes like /events/[slug]
  location: string;
  date: string; // human-readable date (e.g., "Nov 12, 2025")
  time: string; // local start time (e.g., "09:00 AM")
};

// Realistic upcoming and popular developer events. Image paths should exist under public/images.
// These can be directly consumed by the EventCard component.
export const events: EventItem[] = [
  {
    title: "AWS re:Invent 2025",
    image: "/images/event1.png",
    slug: "aws-reinvent-2025",
    location: "Las Vegas, USA",
    date: "Dec 1–5, 2025",
    time: "09:00 AM",
  },
  {
    title: "GitHub Universe 2025",
    image: "/images/event2.png",
    slug: "github-universe-2025",
    location: "San Francisco, USA",
    date: "Nov 12–13, 2025",
    time: "10:00 AM",
  },
  {
    title: "Web Summit 2025",
    image: "/images/event3.png",
    slug: "web-summit-2025",
    location: "Lisbon, Portugal",
    date: "Nov 3–6, 2025",
    time: "09:30 AM",
  },
  {
    title: "KubeCon + CloudNativeCon Europe 2026",
    image: "/images/event4.png",
    slug: "kubecon-cloudnativecon-europe-2026",
    location: "Vienna, Austria",
    date: "Mar 18–20, 2026",
    time: "09:00 AM",
  },
  {
    title: "Google Cloud Next 2026",
    image: "/images/event5.png",
    slug: "google-cloud-next-2026",
    location: "Las Vegas, USA",
    date: "Apr 7–9, 2026",
    time: "09:00 AM",
  },
  {
    title: "Microsoft Build 2026",
    image: "/images/event6.png",
    slug: "microsoft-build-2026",
    location: "Seattle, USA (and Online)",
    date: "May 19–21, 2026",
    time: "09:00 AM",
  },
];
