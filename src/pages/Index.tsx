import { useEffect, useRef } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import mathisPortrait from "@/assets/mathis-oneblaze-portrait.jpg";
import leTrousseauLogo from "@/assets/le-trousseau-logo.png";
import evrgrnLogo from "@/assets/evrgrn-logo.png";

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
            {/* Desktop Layout */}
            <div className="hidden md:flex items-start gap-8 mb-12">
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

            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col items-center mb-12">
              <Avatar className="w-full max-w-sm aspect-square mb-6 border-2 border-evergreen rounded-lg">
                <AvatarImage src={mathisPortrait} alt="Mathis OneBlaze" className="object-cover" />
                <AvatarFallback>MO</AvatarFallback>
              </Avatar>
              <h1 className="text-4xl font-bold mb-6 tracking-tight text-evergreen text-center">
                MATHIS ONEBLAZE
              </h1>
              <ul className="space-y-1 text-base text-muted-foreground text-center">
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

          <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700 delay-200 space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>
              Professionnel de l'art, de la musique et des industries sonores depuis plus de 15 ans. 
              Plus d'une dizaine d'albums publiés sur les plateformes de streaming. Des dizaines de concerts 
              et autres prestations scéniques. Pionnier des battles de rap en créole. Diplômé de l'Institut 
              National de l'Audiovisuel. Créateur d'entreprises. Visionnaire.
            </p>
            
            <div className="p-6 border-2 border-evergreen/20 bg-evergreen/5 rounded-lg">
              <p className="font-medium">
                Travail transversal : création artistique, sound design, songwriting, direction artistique, 
                ingénierie son studio et live, show design, formation & transmission.
              </p>
            </div>

            <p>
              Depuis l'enfance, je crée. Mais j'ai compris très tôt que l'art devait aussi devenir une 
              arme d'émancipation. J'ai transformé mon savoir-faire musical en service : ingénierie son, 
              coaching, production, conseil.
            </p>

            <p>
              J'ai d'abord obtenu un diplôme technique pour que mes compétences soient mon levier 
              d'indépendance. Puis, j'ai exploré l'auto-entreprise, cofondé une société de production, 
              créé mon label, enseigné dans des associations, mjc, etc.
            </p>

            <p>
              Aujourd'hui, je restructure cette vision dans une stratégie hybride entre l'associatif 
              et l'industrie de la musique.
            </p>

            <p>
              Les idées ne manquent pas — il faut juste poser les premières briques et stabiliser la base 
              pour que tout puisse se déployer.
            </p>
          </div>

          <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700 delay-300 mt-16 p-8 border-l-2 border-evergreen">
            <div className="space-y-4 text-muted-foreground">
              <p className="text-xl font-semibold text-evergreen">EVRGRN</p>
              <p className="text-sm italic">(stylisation de « Evergreen ») — du latin sempervirens.</p>
              <ol className="space-y-3 text-base">
                <li>
                  <span className="font-medium">Botanique.</span> Plante persistante qui conserve ses feuilles vertes toute l'année.
                </li>
                <li>
                  <span className="font-medium">Musique.</span> Composition intemporelle pouvant être appréciée à toutes les époques et ne se démodant pas. 
                  (Exemples : Billie Jean ; Sonate au clair de lune ; Zouk la sé sèl médikaman nou ni ; Joyeux anniversaire.).
                </li>
                <li>
                  <span className="font-medium">Stratégie.</span> Projet conçu pour croître et fructifier durablement dans le temps.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Section 2 - Projets en cours */}
      <section className="py-24 px-6 bg-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700">
            <h2 className="text-4xl md:text-5xl font-light mb-20 tracking-tight">
              Projets en cours
            </h2>
          </div>

          <div className="space-y-16">
            {/* Le Trousseau */}
            <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700 delay-100">
              <div className="flex items-start gap-6">
                <img src={leTrousseauLogo} alt="Le Trousseau" className="w-16 h-16 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight">
                    LE TROUSSEAU
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    Association visant la professionnalisation par la pratique d'une discipline artistique 
                    ou d'un métier satellite opérant autour des métiers de l'art. Objectif : professionnaliser, 
                    autonomiser, structurer et élever durablement le niveau des talents, notamment en milieu urbain.
                  </p>
                </div>
              </div>
            </div>

            {/* EVRGRN Label */}
            <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700 delay-200">
              <div className="flex items-start gap-6">
                <img src={evrgrnLogo} alt="EVRGRN Label" className="w-16 h-16 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight">
                    EVRGRN <span className="text-muted-foreground font-light">(Label)</span>
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    Label de musique amené à interagir avec le reste de l'écosystème, notamment Le Trousseau.
                  </p>
                  <p className="text-base text-foreground/80 mb-4 leading-relaxed">
                    <span className="font-medium">Rôle :</span> production, incubation, direction artistique.
                  </p>
                  <p className="text-base text-foreground/90 leading-relaxed">
                    EVRGRN existe pour structurer la production artistique de Mathis OneBlaze : puisque la 
                    création est permanente et inévitable, cette structure existe pour transformer cette matière 
                    créative en valeur économique durable. L'émergence de revenus issus de la propriété intellectuelle 
                    est une conséquence naturelle de l'activité créative — qu'elle soit petite, grande, ou très grande.
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
            {/* Timeline */}
            <div className="relative pl-8 md:pl-12 space-y-12 mb-20">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-evergreen/30" />
              
              <div className="relative">
                <div className="absolute -left-8 md:-left-12 w-4 h-4 rounded-full bg-evergreen border-4 border-background" />
                <div className="space-y-2">
                  <p className="text-sm font-medium text-evergreen">Novembre – Décembre 2025</p>
                  <p className="text-lg">Grand déploiement public du Trousseau</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-8 md:-left-12 w-4 h-4 rounded-full bg-evergreen border-4 border-background" />
                <div className="space-y-2">
                  <p className="text-sm font-medium text-evergreen">Toute année 2026</p>
                  <p className="text-lg">Développement partenariats culturels + collectivités</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-8 md:-left-12 w-4 h-4 rounded-full bg-evergreen border-4 border-background" />
                <div className="space-y-2">
                  <p className="text-sm font-medium text-evergreen">Toute année 2026</p>
                  <p className="text-lg">Production & réalisation artistique régulière</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-8 md:-left-12 w-4 h-4 rounded-full bg-evergreen border-4 border-background" />
                <div className="space-y-2">
                  <p className="text-sm font-medium text-evergreen">2026 → 2031</p>
                  <p className="text-lg">Fluctuation progressive des revenus artistiques</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-8 md:-left-12 w-4 h-4 rounded-full bg-evergreen border-4 border-background" />
                <div className="space-y-2">
                  <p className="text-sm font-medium text-evergreen">2026 → 2031</p>
                  <p className="text-lg">Industrialisation créative long-terme</p>
                </div>
              </div>
            </div>
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
