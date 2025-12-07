import { 
  Linkedin, 
  Send, 
  Github, 
  Mail, 
  Phone,
  ArrowUpRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/abduvokhid",
    external: true,
  },
  {
    icon: Send,
    label: "Telegram",
    href: "https://t.me/HeyIAmAbdu",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Abduvokhid",
    external: true,
  },
  {
    icon: Mail,
    label: "abduvohid1996@gmail.com",
    href: "mailto:abduvohid1996@gmail.com",
    external: false,
  },
  {
    icon: Phone,
    label: "+998 90 928 1996",
    href: "tel:+998909281996",
    external: false,
  },
];

export function Contact() {
  return (
    <section className="py-20">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-xl">
            I&apos;m always open to discussing new fintech projects, banking solutions, 
            or just having a conversation about the future of financial technology.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {contactLinks.map((link) => (
            <Button
              key={link.label}
              asChild
              variant="outline"
              className="gap-2"
            >
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                <link.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{link.label}</span>
                <span className="sm:hidden">
                  {link.label.includes("@")
                    ? link.label.split("@")[0]
                    : link.label}
                </span>
                {link.external && (
                  <ArrowUpRight className="h-3 w-3 opacity-50" />
                )}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
