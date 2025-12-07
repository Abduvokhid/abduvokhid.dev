import { Send, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Blog() {
  return (
    <section className="py-20">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Blog
          </h2>
          <p className="text-muted-foreground max-w-xl">
            I regularly share insights on fintech trends, banking technology, 
            and financial innovation on my Telegram channel.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a
              href="https://t.me/AbduvokhidAkhmedov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send className="h-4 w-4" />
              Telegram Blog
              <ArrowUpRight className="h-3 w-3 opacity-50" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
