import { useEffect, useRef } from "react";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium tracking-wider">EVRGRN</span>
            <span className="text-xs text-muted-foreground tracking-wider">MATHIS ONEBLAZE</span>
          </div>
        </div>
      </header>

      {/* Section 1 - Présentation */}
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700">
            <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-tight text-balance">
              Mathis OneBlaze
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-16 tracking-wide">
              Auteur-compositeur-interprète, ingénieur du son, producteur, pédagogue, fondateur du label{" "}
              <span className="text-evergreen">EVRGRN</span>.
            </p>
          </div>

          <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700 delay-200 space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>
              Professionnel de l'art musicale et des industries sonores depuis plus de 10 ans.
            </p>
            <p>
              Travail transversal : création artistique, sound design, songwriting, direction artistique, 
              ingénierie son studio et live, show design, formation & transmission.
            </p>
            <p>
              Vision centrale : produire des œuvres, des artistes et des outils mentaux durables, 
              scalables, et capables de générer des ressources dans le temps.
            </p>
          </div>

          <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700 delay-300 mt-16 p-8 border-l-2 border-evergreen">
            <p className="text-xl font-light italic text-balance">
              La création n'est pas éphémère — elle s'investit.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Section 2 - Projets en cours */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700">
            <h2 className="text-4xl md:text-5xl font-light mb-20 tracking-tight">
              Projets en cours
            </h2>
          </div>

          <div className="space-y-16">
            {/* Le Trousseau */}
            <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700 delay-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-2 h-2 rounded-full bg-evergreen mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight">
                    LE TROUSSEAU
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    Programme pédagogique d'empowerment créatif, organisation mentale, 
                    méthodologies opérationnelles et scaling artistique.
                  </p>
                  <p className="text-base text-foreground/80 mb-3 leading-relaxed">
                    <span className="font-medium">Objectif :</span> autonomiser, structurer et élever 
                    durablement le niveau des créateurs.
                  </p>
                  <p className="text-base text-foreground/80 leading-relaxed">
                    <span className="font-medium">Roadmap :</span> déploiement capsules / ateliers / contenu récurrent.
                  </p>
                </div>
              </div>
            </div>

            {/* EVRGRN Label */}
            <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700 delay-200">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-evergreen mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight">
                    EVRGRN <span className="text-muted-foreground font-light">(Label)</span>
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    Label nourri par Le Trousseau, basé sur l'idée "chaque création génère des ressources".
                  </p>
                  <p className="text-base text-foreground/80 leading-relaxed">
                    <span className="font-medium">Rôle :</span> production, incubation, DA long-terme, 
                    structuration d'écosystèmes créatifs rentables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Section 3 - Stratégie */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Stratégie 2025 → 2026
            </h2>
            <p className="text-xl text-muted-foreground mb-16 font-light">(24 mois)</p>
          </div>

          <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700 delay-100">
            <ul className="space-y-6 mb-20">
              {[
                "Production & releases artistiques régulières",
                "Déploiement public du Trousseau (capsules, masterclass, ateliers)",
                "Structuration progressive des revenus artistiques",
                "Développement de partenariats culturels et éducation créative",
                "Industrialisation créative EVRGRN sur le long terme"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-lg">
                  <span className="text-evergreen mt-1.5">—</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700 delay-200">
            <div className="p-8 bg-secondary/30 border border-border">
              <p className="text-xl font-light leading-relaxed text-balance">
                Cette vision est long-terme, solide, et déjà opérationnelle. 
                Nous construisons une infrastructure durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <span>© 2025 EVRGRN — Mathis OneBlaze</span>
            <span className="tracking-wider">EVERGREEN CULTURE</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
