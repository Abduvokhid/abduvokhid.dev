export function Experience() {
  return (
    <section className="py-20">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Experience
          </h2>
          <p className="text-muted-foreground">
            Over a decade of building software, with deep focus on banking, fintech, and cybersecurity.
          </p>
        </div>
        <div className="space-y-6">
          <div className="flex gap-4 md:gap-8">
            <div className="flex flex-col items-center">
              <div className="h-3 w-3 rounded-full bg-primary" />
              <div className="w-px flex-1 bg-border" />
            </div>
            <div className="space-y-2 pb-8">
              <p className="text-sm text-muted-foreground">2025 — Present</p>
              <h3 className="font-semibold">Cybersecurity & Threat Intelligence</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Leading development of a multi-tenant Threat Intelligence as a Service 
                platform at ONESEC LLC. Designing microservices and event-driven 
                architecture, managing cross-functional teams, and driving strategic 
                product vision.
              </p>
            </div>
          </div>
          <div className="flex gap-4 md:gap-8">
            <div className="flex flex-col items-center">
              <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              <div className="w-px flex-1 bg-border" />
            </div>
            <div className="space-y-2 pb-8">
              <p className="text-sm text-muted-foreground">2022 — 2025</p>
              <h3 className="font-semibold">Banking & FinTech Leadership</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Led development teams at Anor Bank and Global Solutions, building 
                multi-tenant payment systems, acquiring platforms, and BNPL solutions. 
                Integrated national and international card processing (Uzcard, Humo, 
                Visa, Mastercard) and implemented anti-fraud systems.
              </p>
            </div>
          </div>
          <div className="flex gap-4 md:gap-8">
            <div className="flex flex-col items-center">
              <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              <div className="w-px flex-1 bg-border" />
            </div>
            <div className="space-y-2 pb-8">
              <p className="text-sm text-muted-foreground">2014 — 2022</p>
              <h3 className="font-semibold">Software Engineering & Growth</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Progressed from IT Specialist to Full-stack Engineer to Team Lead across 
                diverse domains including e-commerce, social networks, and SaaS platforms. 
                Led cloud migrations (AWS, GCP), architected marketplace solutions, and 
                mentored development teams.
              </p>
            </div>
          </div>
          <div className="flex gap-4 md:gap-8">
            <div className="flex flex-col items-center">
              <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">11+ Years</p>
              <h3 className="font-semibold">Total Experience</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Development Team Lead with full-stack expertise, specializing in 
                transforming complex ideas into scalable, high-performance solutions 
                across fintech, cybersecurity, and enterprise software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
