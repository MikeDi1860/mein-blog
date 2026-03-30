import React from 'react'; // Wichtig, falls deine Dateiendung .js ist

const posts = [
  {
    id: 1,
    title: "Das ist mein Blog",
    excerpt: "Ein Blick hinter die Kulissen: Wie ich diesen Blog mit Node.js, Vite, React und Bootstrap erstellt habe.",
    date: "2026-03-26",
    image: "/Blog-App Architektur.png",//"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    tags: ["React", "Vite", "Bootstrap", "Vercel", "Tutorial"],
    content: (
      <div>
        <p>
          In diesem ersten Artikel gebe ich Einblicke in meinem Blog - in die Konzeption, die  
          technische Basis (Stack) und die Projektarchitektur.
        </p>

        <h3 className="mt-4">Das Konzept</h3>
        <p>
          Meine Anforderungen waren -  kein CMS, hohe Flexibilität und das ganze sollte auch als Lernprojekt fungieren
          (mein erstes Projekt mit React und Bootstrap😊).
          Deshalb ist es zu diesem modernen technischen Aufbau gekommen:
        </p>

        {/* Bild Technischer Aufbau */}

          <div className="text-center my-5">
             <div className="image-wrapper">
               <img
                  src="/technischerAufbau.png"
                  alt="Technischer Aufbau"
                  className="img-fluid tech-image"
              />
             </div>
          </div>

          <h4 className="mt-4">Node.js</h4>
          <p>
            Dazu muss ich nicht viel schreiben, kennt jeder Frontend Entwickler. Node.js ist die JavaScript-Laufzeitumgebung, die es ermöglicht, auch außerhalb des Browsers JavaScript auszuführen, um Anwendungen zu entwickeln. Das brauche ich hier nicht für diesen Blog. Aber mit Node.js kommt npm...
          </p>


          <h4 className="mt-4">npm</h4>
          <p>
            steht für Node Package Manager. Dieser erlaubt es dir, mit einfachen Befehlen von deinem Terminal aus Installationen durchzuführen. So habe ich Bootstrap, React und Vite installiert. Auf die einzelnen Installationsschritte werde ich in meinem nächsten Blogartikel eingehen.
          </p>

        <h4 className="mt-4">React & React Routing</h4>  
        <p>
          React ist eine Open Source JavaScript Bibliothek in erster Linie zur Erstellung von interaktiven Benutzeroberflächen für Webanwendungen.
          Ausserdem hat es React Routing - ermöglicht die Navigation zwischen verschiedenen Ansichten in einer Single-Page-Application (SPA), ohne dass die gesamte Seite neu geladen werden muss. 
          Installiert habe ich React über Vite.
        </p>

        <h4 className="mt-4">Vite</h4>  
        <p>
          ist ein beliebtes und attraktives Tool für die moderne Webentwicklung.
          Der große Vorteil ist, dass Vite verschiedene Frameworks integrieren kann wie Bootstrap, Vue, React und Angular.
          Was ich besonders mag ist, dass Änderungen im Code auf der Webseite sofort zu sehen sind, ohne dass die Seite neu laden muss.
        </p>

        <h4 className="mt-4">Bootstrap</h4> 
        <p>
          dient dem Styling einer Webseite und bietet dafür fertige Layouts und Komponenten an, die man einfach in eine Webseite integrieren lassen.
          Ich verwende in diesem Blog die Bootstrap Navbar, Buttons, Grids, Abstände und vieles mehr.
        </p>

        {/* Bild Bootstrap Buttons */}

          <div className="text-center my-5">
            <figure className="tech-figure">
               <img
                  src="/BootstrapButtons.png"
                  alt="Bootstrap Buttons"
                  className="img-fluid tech-image"
              />
              <figcaption className="tech-caption">
                 Bootstrap Buttons — Quelle: <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">getbootstrap.com</a> 
              </figcaption>
            </figure>
          </div>

        <h4 className="mt-4">Custom CSS Styling</h4>
        <p>
          viele Bootstrap Komponenten brauchen noch Feinschliff und das bekommen sie durch CSS. Beispiel: die Bootstrap Buttons. Mit Verlaub,
          richtig schön sind die nicht. Ich habe Rundungen, Schriftstärke, Innenabstand und einen sanften Farbverlauf hinzugefügt durch eigenes CSS
          hinzugefügt.
        </p>

        <h4 className="mt-4">Vercel</h4>
        <p>
          hilft dir, dein Projekt online zu stellen - super schnell und super einfach. Vercel ist integriert mit GitHub - es verbindet sich direkt zu deiner GitHub Repository.
        </p>

        <h3 className="mt-5">Projektarchitektur</h3>
        <p>
          Das Projekt ist eine klassische Single Page Application (SPA) mit React Komponentensystem und React Routing.
        </p>

        <h4 className="mt-3">Komponenten</h4>
        <p>
          Hier ein Screenshot aus VSC mit den Blog-app Komponenten:
        </p>

           {/* Bild Komponenten VSC*/}
          <div className="d-flex align-items-start mb-4">
             <div className="image-wrapper">
               <img
                  src="/Blog Komponenten in VSC2.png"
                  alt="Blog-Komponenten in VSC"
                  className="img-fluid tech-image"
              />
             </div>
          </div>
        
        <p>
          Jetzt habe ich eine individuell programmierte React Web-App mit Bootstrap Styling - Geil😉
        </p>

        <p>
          Hier die jetzige Architektur in einem Bild:
        </p>

          {/* Bild Blog-app Architektur */}

          <div className="text-center my-5">
             <figure className="tech-figure">
               <img
                  src="/Blog-App Architektur.png"
                  alt="Blog-app Architektur"
                  className="img-fluid tech-image"
              />
               <figcaption className="tech-caption">
                Architekturdiagram meiner blog-app
               </figcaption>
             </figure>
          </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Warum ich React lerne",
    excerpt: "Ein paar Gedanken zu meiner Lernreise.",
    content: "React hilft mir, moderne Webanwendungen zu bauen. Routing, Komponenten, State – alles sehr spannend.",
    date: "2026-03-03",
    image: "https://picsum.photos/600/400?random=2",
    tags: ["React", "Projekt", "Lernen"]
  },
  {
    id: 3,
    title: "Meine Lieblings-KI",
    excerpt: "Ein paar Gedanken zu meiner Lernreise.",
    content: "ChatGPT, Gemini und CoPilot im Vergleich + mein Favorit.",
    date: "2026-03-03",
    image: "https://picsum.photos/600/400?random=3",
    tags: ["KI", "Chatbots", "Lernen"]
  }
];

export default posts;