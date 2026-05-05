import { MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">
            © 2014 – {currentYear} Abduvokhid Akhmedov
          </p>
          <p className="text-xs text-muted-foreground/60">
            All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Dubai, United Arab Emirates</span>
        </div>
      </div>
    </footer>
  );
}
