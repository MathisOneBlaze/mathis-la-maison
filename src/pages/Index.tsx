import { useEffect, useRef } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import mathisPortrait from "@/assets/mathis-oneblaze-portrait.jpg";

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
          <div className="flex items-center justify-center">
            <span className="text-sm font-medium tracking-wider">Qui est Mathis ?</span>
          </div>
        </div>
      </header>

      {/* Section 1 - Présentation */}
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700">
            <div className="flex items-start gap-8 mb-12">
              <Avatar className="h-32 w-32 flex-shrink-0 border-2 border-evergreen rounded-lg">
                <AvatarImage src={mathisPortrait} alt="Mathis OneBlaze" className="object-cover" />
                <AvatarFallback>MO</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight text-evergreen">
                  MATHIS ONEBLAZE
                </h1>
                <ul className="space-y-1 text-base text-muted-foreground">
                  <li>• Auteur</li>
                  <li>• Compositeur</li>
                  <li>• Interprète</li>
                  <li>• Ingénieur du son</li>
                  <li>• Producteur</li>
                  <li>• Pédagogue</li>
                  <li>• Entrepreneur</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700 delay-200 space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>
              Professionnel de l'art, de la musique et des industries sonores depuis plus de 15 ans. 
              Plus d'une dizaine d'albums publiés sur Spotify, Apple Music, etc. Pionnier des battles 
              de rap en créole. Diplômé de l'Institut National de l'Audiovisuel. Créateur d'entreprises.
            </p>
            
            <div className="p-6 border-2 border-evergreen/20 bg-evergreen/5 rounded-lg">
              <p className="font-medium">
                Travail transversal : création artistique, sound design, songwriting, direction artistique, 
                ingénierie son studio et live, show design, formation & transmission.
              </p>
            </div>

            <p>
              Depuis l'enfance, je crée. Mais j'ai compris très tôt que l'art devait aussi devenir une 
              arme d'émancipation. J'ai donc transformé mon savoir-faire musical en service : ingénierie 
              son, coaching, production, conseil. J'ai exploré l'auto-entreprise, j'ai cofondé une société 
              de production, créé mon label, monté ma propre structure, développé la pédagogie auprès 
              d'associations, puis obtenu un diplôme technique pour que mes compétences soient mon levier 
              d'indépendance. Aujourd'hui, je restructure cette vision dans une stratégie hybride : ateliers, 
              missions courtes, projets artistiques, production, propriété intellectuelle, scale progressif. 
              Les idées ne manquent pas — il faut juste poser les premières briques et stabiliser la base 
              pour que tout puisse se déployer.
            </p>
          </div>

          <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700 delay-300 mt-16 p-8 border-l-2 border-evergreen">
            <p className="text-lg font-light italic text-balance text-muted-foreground">
              Evergreen : plante persistante qui conserve ses feuilles vertes toute l'année.
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
                    Association qui a pour but d'amener à la professionnalisation par la pratique 
                    d'une discipline artistique ou d'un métier satellite opérant autour des métiers de l'art.
                  </p>
                  <p className="text-base text-foreground/80 leading-relaxed">
                    <span className="font-medium">Objectif :</span> professionnaliser, autonomiser, structurer, 
                    élever durablement le niveau des talents, notamment en milieu urbain.
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
                    Label de musique amené à interagir avec le reste de l'écosystème, notamment Le Trousseau.
                  </p>
                  <p className="text-base text-foreground/80 leading-relaxed">
                    <span className="font-medium">Rôles :</span> production, incubation, direction artistique.
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
                "Grand déploiement public du Trousseau",
                "Développement de partenariats culturels (associations + collectivités)",
                "Production & réalisation artistique régulière",
                "Fluctuation progressive des revenus artistiques",
                "Industrialisation créative sur le long terme"
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
