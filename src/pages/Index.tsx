import React, { useEffect, useRef } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import mathisPortrait from "@/assets/mathis-oneblaze-portrait.jpg";
import leTrousseauLogo from "@/assets/le-trousseau-logo.png";
import evrgrnLogo from "@/assets/evrgrn-logo.png";
import { AlignCenter } from "lucide-react";

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
            {/* Desktop Layout */}
            <div className="hidden md:flex flex-col items-center w-full mb-12">
              <div className="w-64 h-64 mb-8 overflow-hidden rounded-lg border-2 border-evergreen">
                <img 
                  src={mathisPortrait} 
                  alt="Mathis OneBlaze" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-evergreen text-center">
                MATHIS
              </h1>
              <div className="text-base text-muted-foreground text-center">
                Auteur-Compositeur-Interprète, Ingénieur du son, Producteur, Pédagogue, Entrepreneur
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
            <p className="italic">
              Professionnel de l'art, de la musique et des industries sonores depuis plus de 15 ans. 
              Plus d'une dizaine d'albums publiés sur les plateformes de streaming. Collaborations avec des artistes de tout horizon. Des dizaines de concerts 
              et autres prestations scéniques, en groupe et en solo. Pionnier des battles de rap en créole. Diplômé de l'Institut 
              National de l'Audiovisuel. Réalisation de nombreux clips vidéos. Créateur d'entreprises. Visionnaire.
            </p>
            
            <div className="p-6 border-2 border-evergreen/20 bg-evergreen/5 rounded-lg">
              <p className="font-medium text-center space-y-3">
                <div className="block">Création artistique - Composition - Songwriting</div>
              </p>
            </div>

            <p>
              Depuis l'enfance, je crée. Mais j'ai compris très tôt que l'art devait aussi devenir une 
              arme d'émancipation. J'ai transformé mon savoir-faire musical en service : ingénierie son, 
              coaching, production, conseil.
            </p>


             <div className="p-6 border-2 border-evergreen/20 bg-evergreen/5 rounded-lg">
              <p className="font-medium text-center space-y-3">
                <div className="block">Sound Design - Ingénierie Son Studio et Live</div>
                <div className="block">Direction artistique - Show Design</div>
                <div className="block">Coaching - Transmission</div>
              </p>
            </div>

            <p>
              J'ai d'abord obtenu un diplôme technique pour que mes compétences soient mon levier 
              d'indépendance. Puis, j'ai exploré l'auto-entreprise, cofondé une société de production, 
              créé mon label, enseigné dans des associations, mjc, etc.
            </p>
            <p>
              Cela m'a permis de me construire un réseau solide d'artistes, techniciens et autres professionnels de l'industrie du divertissement.
              J'ai fait des tournées de concerts en groupe et en solo, dans toute l'île de France et des villes comme Bordeaux, Toulouse, Aix-en-Provence, Marseille.
            </p>

              <div className="p-6 border-2 border-evergreen/20 bg-evergreen/5 rounded-lg">
              <p className="font-medium text-center space-y-3">
                <div className="block">Coaching - Transmission</div>
              </p>
            </div>

            <p>
              Aujourd'hui, je restructure cette vision dans une stratégie hybride entre l'associatif 
              et l'industrie de la musique.
            </p>

            <div className="p-6 border-2 border-evergreen/20 bg-evergreen/5 rounded-lg">
              <p className="font-medium text-center space-y-3">
                <div className="block">Production - Incubation d'Artistes </div>
              </p>
            </div>

            <p>
              Les idées ne manquent pas — il faut juste poser les premières briques et stabiliser la base 
              pour que tout puisse se déployer.
            </p>
          </div>

           <div className="p-6 border-2 border-evergreen/20 bg-evergreen/5 rounded-lg">
            <p className="font-medium text-center">Edition - Gestion de Catalogue</p>
          </div>
          
          <p className="mt-4">
            Les idées ne manquent pas — il faut juste poser les premières briques et stabiliser la base 
            pour que tout puisse se déployer.
          </p>

        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Section 2 - Projets en cours */}
      <section className="py-24 px-6 bg-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700 text-center">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight uppercase text-evergreen">
                PROJETS EN COURS
              </h2>
            </div>
          </div>
            
            {/* Le Trousseau */}
            <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700 delay-100">
              <div className="flex flex-col items-center gap-4 mb-6">
                <img src={leTrousseauLogo} alt="Le Trousseau" className="w-24 h-24 md:w-32 md:h-32" />
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                  <a href="https://www.asso-letrousseau.com" target="_blank" rel="noopener noreferrer" className="hover:text-evergreen transition-colors underline underline-offset-4">
                    LE TROUSSEAU
                  </a>
                </h3>
              </div>
              <div>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    Association visant la professionnalisation par la pratique d'une discipline artistique 
                    ou d'un métier satellite opérant autour des métiers de l'art. Objectif : professionnaliser, 
                    autonomiser, structurer et élever durablement le niveau des talents, notamment en milieu urbain. 
                  </p>

                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    L'association s'articule autour de trois axes complémentaires.
                  </p>
                  
                  {/* L'ancienne galerie a été déplacée après les sections spécifiques */}

                  <div className="mt-12 space-y-6 text-foreground/90 leading-relaxed">
                    
                    <div className="space-y-1">
                      <h4 className="font-medium text-lg">Une présence forte en ligne</h4>
                      <p className="text-foreground/90 leading-relaxed">
                        Je partage en ligne, grâce aux réseaux sociaux, des clés de développement artistique, de créativité, de stratégie, mais aussi des analyses d'actualité, des décryptages de l'industrie et des interviews d'artistes.<br/><br/>
                        Le but : briser les croyances limitantes, ouvrir la pensée, donner de la clarté sur les mécanismes réels du métier, et accompagner chacun vers une meilleure maîtrise de ses propres processus créatifs.
                      </p>
                      
                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="overflow-hidden rounded-lg">
                          <img 
                            src="/screenshot-le-trousseau-2.png" 
                            alt="Capture d'écran du site Le Trousseau" 
                            className="w-full h-auto object-cover rounded-lg border border-border/50"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                          <img 
                            src="/screenshot-le-trousseau-1.png" 
                            alt="Page d'accueil du site Le Trousseau"
                            className="w-full h-auto object-cover rounded-lg border border-border/50"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="font-medium text-lg">Un accompagnement direct</h4>
                      <p className="text-foreground/90 leading-relaxed">
                        Toute personne intéréssée peut devenir membre adhérent Le Trousseau. Les membres ont accès aux sessions collectives, aux sessions studio, aux intervenants, ainsi qu'à du consulting individuel avec moi (à distance ou en présentiel) pour faire des points d'étape, corriger la trajectoire, consolider la stratégie, et mesurer l'évolution. Ils bénéficient aussi d'avantages partenaires (studios, professionnels, collaborateurs potentiels, etc.).
                      </p>
                      
                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="overflow-hidden rounded-lg">
                          <img 
                            src="/IMG_1726%20anonymous.jpg" 
                            alt="Activités de l'association Le Trousseau" 
                            className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                          <img 
                            src="/IMG_1747.png" 
                            alt="Ateliers de l'association Le Trousseau"
                            className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="font-medium text-lg">Des ateliers externes</h4>
                      <p className="text-foreground/90 leading-relaxed">
                        Je propose également des ateliers clef-en-main au sein d'autres associations déjà constituées. Ces ateliers peuvent durer 4 à 6 semaines, avec un plan clair, un objectif final concret (morceau écrit / enregistré / mis en scène / clip livré), et une transmission méthodique permettant aux participants de devenir autonomes dans leur démarche artistique.<br/><br/>
                      </p>
                      
                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="overflow-hidden rounded-lg">
                          <img 
                            src="/IMG_3344%20anonymous.jpg" 
                            alt="Événements de l'association Le Trousseau"
                            className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                          <img 
                            src="/IMG_3344.jpg" 
                            alt="Projets de l'association Le Trousseau"
                            className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 text-foreground/90 leading-relaxed">
                    <h4 className="font-medium text-lg">Un livre... et des clés.</h4> 
                    <span className="font-medium">Le Trousseau</span> <span className="italic text-muted-foreground">(Un livre de clés, pour déverrouiller ton génie.)</span> est d'abord le titre d'un livre que j'ai écrit, synthèse de quinze années de recherche personnelle, d'expérimentation artistique et d'ingénierie mentale appliquée à la création. Ce livre formalise ma théorie centrale et la philosophie de transmission qui en découle. L'association du même nom s'inscrit dans sa continuité : faire exister cette théorie dans le réel, par la pratique, la pédagogie active, la professionnalisation concrète et l'outillage opérationnel des créateurs. Puisque la transmission est le point de départ, autant la pousser jusqu'au bout.
                  </p>
                  <div className="mt-8 flex justify-center">
                    <img 
                      src="/IMG_4440.JPG" 
                      alt="Couverture du livre Le Trousseau" 
                      className="max-w-xs md:max-w-sm rounded-lg shadow-lg border border-red-500"
                      onError={(e) => {
                        console.error('Erreur de chargement de l\'image:', e);
                        console.log('Chemin de l\'image:', window.location.href + 'IMG_4440.JPG');
                      }}
                    />
                  </div>
                      <p className="text-foreground/90 leading-relaxed">
                        Même si la musique est au centre, mon expertise pédagogique me permet aussi de coacher sur la danse, la vidéo, le montage et d'autres disciplines connexes.
                      </p>
                    <p> .</p>
                    <p>
                      Le Trousseau n'est pas limité à un seul domaine artistique. La méthode est transdisciplinaire, concrète, structurelle, et orientée résultats. L'objectif : libérer, structurer, professionnaliser les créateurs.
                    </p>

                </div>
              </div>

              {/* Séparateur */}
              <div className="my-12 border-t border-border/50"></div>

            {/* EVRGRN Label */}
            <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700 delay-200">
              <div className="flex flex-col items-center gap-4 mb-6">
                <img src={evrgrnLogo} alt="EVRGRN Label" className="w-24 h-24 md:w-32 md:h-32" />
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                  <a href="https://evrgrn.asso-letrousseau.com" target="_blank" rel="noopener noreferrer" className="hover:text-evergreen transition-colors">
                    <span className="underline underline-offset-4">EVRGRN</span> <span className="text-muted-foreground font-light">(Label)</span>
                  </a>
                </h3>
              </div>
              <div>
                <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700 delay-300 mb-8 p-6 border-l-2 border-evergreen max-w-3xl mx-auto">
                  <div className="space-y-4">
                    <p className="text-sm italic text-muted-foreground text-center">(stylisation de « Evergreen ») — du latin sempervirens.</p>
                    <ol className="space-y-3 text-base max-w-2xl mx-auto">
                      <li>
                        <span className="font-medium">Botanique.</span> Plante persistante qui conserve ses feuilles vertes toute l'année.
                      </li>
                      <li>
                        <span className="font-medium">Musique.</span> Composition intemporelle pouvant être appréciée à toutes les époques et ne se démodant pas.
                      </li>
                      <li>
                        <span className="font-medium">Stratégie.</span> Projet conçu pour croître et fructifier durablement dans le temps.
                      </li>
                    </ol>
                  </div>
                </div>

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
                
                <div className="mt-8 flex justify-center">
                  <img 
                    src="/EVRGRN%20GRAFF.png" 
                    alt="Œuvre graffée EVRGRN" 
                    className="max-w-full md:max-w-2xl"
                  />
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
      <section className="py-24 px-6 bg-gradient-to-b from-evergreen/5 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight uppercase text-evergreen">
              STRATÉGIE 2025 → 2026
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
                  <p className="text-sm font-medium text-evergreen">Avril – Juin 2026</p>
                  <p className="text-lg">Premières sorties sous le label EVRGRN</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-8 md:-left-12 w-4 h-4 rounded-full bg-evergreen border-4 border-background" />
                <div className="space-y-2">
                  <p className="text-sm font-medium text-evergreen">Juillet – Septembre 2026</p>
                  <p className="text-lg">Développement des partenariats culturels</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-8 md:-left-12 w-4 h-4 rounded-full bg-evergreen border-4 border-background" />
                <div className="space-y-2">
                  <p className="text-sm font-medium text-evergreen">Octobre – Décembre 2026</p>
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
        </div>
      </section>

      {/* Section Contact */}
      <section className="py-16 px-6 bg-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="fade-in opacity-0 translate-y-8 transition-smooth duration-700">
            <div className="space-y-4">
              <p className="text-lg text-foreground/90">
                Pour toute demande d'information ou collaboration :
              </p>
              <a 
                href="mailto:moncoq.mathis@gmail.com" 
                className="inline-block text-lg text-evergreen hover:underline font-medium"
              >
                moncoq.mathis@gmail.com
              </a>
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
