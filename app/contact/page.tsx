import { PlaceholderPage } from "@/components/shared/PlaceholderPage";

export default function ContactPage() {
  return (
    <PlaceholderPage
      eyebrow="Contact"
      title="Let’s plan your next workspace tour."
      description="This page is intentionally lightweight for now, but it is wired into the shared header and footer so the site already feels complete."
      primaryHref="/about"
      primaryLabel="Back to About"
      secondaryHref="/pricing"
      secondaryLabel="See Pricing"
    />
  );
}
