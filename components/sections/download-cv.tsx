import { ArrowDownToLine } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DownloadCV() {
  return (
    <section className="relative z-0">
      {/* Vertical dashed borders - full height, behind content */}
      <div className="hidden md:block absolute left-1/3 top-0 bottom-0 border-l border-dashed border-border z-0" />
      <div className="hidden md:block absolute left-2/3 top-0 bottom-0 border-l border-dashed border-border z-0" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 py-16 md:py-20">
        {/* Block 1 + 2: Text overlapping into second block */}
        <div className="md:col-span-2 flex items-center">
          <p className="text-xl md:text-2xl max-w-md">
            <span className="font-bold text-foreground">Ready to learn more?</span>
            {" "}
            <span className="text-muted-foreground">Get the full picture of my professional journey.</span>
          </p>
        </div>

        {/* Block 3: Download CTA */}
        <div className="pt-8 md:pt-0 md:pl-8 flex items-center justify-start md:justify-center">
          <Button
            asChild
            size="lg"
            className="gap-2 font-medium rounded-full"
          >
            <a href="/cv.pdf" download>
              <ArrowDownToLine className="h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
