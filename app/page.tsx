import {
  Header,
  Hero,
  Expertise,
  Experience,
  DownloadCV,
  Blog,
  Contact,
  Footer,
} from "@/components/sections";

function Divider() {
  return <div className="w-screen relative left-1/2 -translate-x-1/2 h-px bg-border" />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Left and right vertical border lines - 960px total (16 × 60px grid cells) */}
      <div className="fixed inset-y-0 left-0 right-0 pointer-events-none hidden md:block z-0">
        <div className="mx-auto max-w-4xl h-full relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border -translate-x-8" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-border translate-x-8" />
        </div>
      </div>
      
      <div className="mx-auto max-w-4xl px-8 relative">
        <Header />
        <main>
          <Hero />
          <Divider />
          <Expertise />
          <Divider />
          <Experience />
          <Divider />
          <DownloadCV />
          <Divider />
          <Contact />
          <Divider />
        </main>
        <Footer />
      </div>
    </div>
  );
}
