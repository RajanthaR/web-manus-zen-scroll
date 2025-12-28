import ScrollFeed from "@/components/ScrollFeed";
import WelcomeOverlay from "@/components/WelcomeOverlay";

export default function Home() {
  return (
    <div className="h-screen w-full bg-background overflow-hidden">
      <WelcomeOverlay />
      <ScrollFeed />
    </div>
  );
}
