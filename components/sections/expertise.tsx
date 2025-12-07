import { 
  Landmark, 
  CreditCard, 
  TrendingUp, 
  Store 
} from "lucide-react";

const expertiseAreas = [
  {
    icon: Landmark,
    title: "Core Banking Systems",
    description:
      "Designing and integrating scalable core banking platforms that meet business goals and regulatory standards. Experience includes ESB implementation, anti-fraud controls, and national payment system integration.",
  },
  {
    icon: CreditCard,
    title: "Payment Solutions",
    description:
      "Building and operating acquiring and billing systems for both national and international networks, ensuring smooth transaction flows across channels.",
  },
  {
    icon: TrendingUp,
    title: "Financial Data & Analytics",
    description:
      "Enabling financial teams with access to real-time, actionable data through well-structured analytics pipelines, reporting layers, and performance monitoring solutions.",
  },
  {
    icon: Store,
    title: "Merchant Platforms",
    description:
      "Creating technology solutions for merchant onboarding, operations management, and financial product delivery — from dashboards to mobile apps, with a focus on user experience and business alignment.",
  },
];

export function Expertise() {
  return (
    <section className="pt-20 -mx-6 md:-mx-16">
      <div>
        <div className="space-y-4 px-6 md:px-16 pb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Expertise
          </h2>
          <p className="text-muted-foreground">
            Areas where I bring deep technical knowledge and hands-on experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 border-t border-border">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.title}
              className={`
                group relative px-6 md:px-10 py-8 md:py-10 border-border
                transition-colors duration-200
                hover:bg-accent/50
                ${index < expertiseAreas.length - 1 ? 'border-b' : ''} 
                ${index < 2 ? 'md:border-b' : 'md:border-b-0'}
                ${index % 2 === 0 ? 'md:border-r' : ''}
              `}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <area.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold tracking-tight">{area.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
