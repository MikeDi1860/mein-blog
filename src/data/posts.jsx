import React from 'react';

const posts = [
  {
    id: 1,
    title: "Das ist mein Blog",
    excerpt: "Ein Blick hinter die Kulissen: Wie ich diesen Blog mit Node.js, Vite, React und Bootstrap erstellt habe.",
    date: "2026-03-26",
    image: "/Blog-App Architektur.png",
    tags: ["React", "Vite", "Bootstrap", "Vercel", "Tutorial"],
    content: (
      <>
        <p>
          In diesem ersten Artikel gebe ich Einblicke in meinem Blog - in die Konzeption, die  
          technische Basis (Stack) und die Projektarchitektur.
        </p>

        <h2 className="mt-4">Das Konzept</h2>
        <p>
          Meine Anforderungen waren - kein CMS, hohe Flexibilität und das ganze sollte auch als Lernprojekt fungieren
          (mein erstes Projekt mit React und Bootstrap😊).
          Deshalb ist es zu diesem modernen technischen Aufbau gekommen:
        </p>

        <div className="text-center my-5">
           <div className="image-wrapper">
             <img
                src="/technischerAufbau.png"
                alt="Technischer Aufbau"
                className="img-fluid tech-image"
            />
           </div>
        </div>

        <h3 className="mt-4">Node.js</h3>
        <p>
          Node.js ist die JavaScript-Laufzeitumgebung, die es ermöglicht, auch außerhalb des Browsers JavaScript auszuführen. Aber mit Node.js kommt npm...
        </p>

        <h3 className="mt-4">npm</h3>
        <p>
          Node Package Manager erlaubt es dir, mit einfachen Befehlen von deinem Terminal aus Installationen durchzuführen. So habe ich Bootstrap, React und Vite installiert.
        </p>

        <h3 className="mt-4">React & React Routing</h3>  
        <p>
          React ist eine Open Source JavaScript Bibliothek zur Erstellung von interaktiven Benutzeroberflächen. 
          Das Routing ermöglicht die Navigation ohne Seiten-Reload (SPA).
        </p>

        <h3 className="mt-4">Vite</h3>  
        <p>
          Vite ist ein extrem schnelles Build-Tool. Änderungen im Code sind sofort auf der Webseite zu sehen (Hot Module Replacement).
        </p>

        <h3 className="mt-4">Bootstrap</h3> 
        <p>
          Dient dem Styling der Webseite. Ich verwende hier die Navbar, Buttons, Grids und Abstände.
        </p>

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

        <h3 className="mt-4">Custom CSS Styling</h3>
        <p>
          Viele Bootstrap Komponenten bekommen durch eigenes CSS erst den richtigen Feinschliff – wie z.B. sanfte Farbverläufe und Rundungen.
        </p>

        <h2 className="mt-5">Projektarchitektur</h2>

        <p>
          Das Projekt ist eine klassische Single Page Application (SPA) mit React Komponentensystem.
        </p>

             <img
                src="/Blog Komponenten in VSC2.png"
                alt="Struktur in VSC"
                className="img-fluid float-start mt-3 me-4 mb-3 tech-image"
                style={{ maxWidth: "250px" }}
            />
        
        <p className="mt-5"> 
          Hier eine erste kleine React Einführung: React Anwendungen bestehen aus Komponenten.
          Eine Komponente ist Teil der Benutzeroberfläche (UI),  die ihre eigene Logik und ihr 
          eigenes Aussehen hat. Eine Komponente kann so klein wie ein Button oder so gross wie 
          eine Seite sein. In dem Screenshot seht ihr meine Komponentenstruktur in Visual Studio 
          Code (VSC).
        </p>

        <div className="clearfix mb-4"></div>

        <p>
          Jetzt habe ich eine individuell programmierte React Web-App mit Bootstrap Styling - Geil😉
        </p>

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
      </>
    )
  },
  {
    id: 2,
    title: "Blog Setup und Installation",
    excerpt: "Schritt für Schritt..",
    date: "2026-03-03",
    image: "/Screenshot Vite & React.png",
    tags: ["Node.js", "npm", "GitHub"],
    content: (
       <>

        <p className="lead">
          In diesem Artikel zeige ich Schritt für Schritt, wie ich meinen Blog technisch eingerichtet habe –
          von der Installation bis zum Deployment.
        </p>

        <h2 className="mt-5">1. Node.js installieren</h2>
        <p>Node.js installieren (LTS-Version) und im Terminal prüfen:</p>

        <pre><code>{`node -v
      npm -v`}</code></pre>

        <h2 className="mt-5">2. Projekt erstellen (Vite + React)</h2>

        <pre><code>{`npm create vite@latest blog-app`}</code></pre>

        <p>Im Setup auswählen:</p>
        <ul>
          <li>Framework: React</li>
          <li>Variant: JavaScript</li>
        </ul>

        <pre><code>{`cd blog-app
      npm install`}</code></pre>

        <h2 className="mt-5">3. Entwicklungsserver starten</h2>

        <pre><code>{`npm run dev`}</code></pre>

        <p>App läuft unter:</p>

        <pre><code>{`http://localhost:5173`}</code></pre>

        <h2 className="mt-5">4. Bootstrap installieren</h2>

        <pre><code>{`npm install bootstrap`}</code></pre>

        <p>In <strong>main.jsx</strong> einbinden:</p>

        <pre><code>{`import 'bootstrap/dist/css/bootstrap.min.css'`}</code></pre>

        <h2 className="mt-5">5. React Router installieren</h2>

        <pre><code>{`npm install react-router-dom`}</code></pre>

        <h2 className="mt-5">6. Projektstruktur anlegen</h2>

        <pre><code>{`src/
      ├── components/
      ├── pages/
      ├── data/
      ├── assets/`}</code></pre>

        <h2 className="mt-5">7. Git initialisieren & GitHub verbinden</h2>

        <pre><code>{`git init
      git add .
      git commit -m "Initial commit"`}</code></pre>

        <p>Repository auf GitHub erstellen und verbinden:</p>

        <pre><code>{`git remote add origin https://github.com/USERNAME/REPO.git
      git branch -M main
      git push -u origin main`}</code></pre>

        <h2 className="mt-5">8. Produktions-Build erstellen</h2>

        <pre><code>{`npm run build`}</code></pre>

        <h2 className="mt-5">9. Deployment mit Vercel</h2>

        <ul>
          <li>Projekt in Vercel importieren</li>
          <li>GitHub Repository auswählen</li>
          <li>Deploy starten</li>
        </ul>

        <p>
          Danach wird jede Änderung automatisch veröffentlicht, sobald sie auf GitHub gepusht wird.
        </p>
         
        <h2 className="mt-5">Fazit</h2>

        <p>
          Mit diesen Schritten lässt sich ein kompletter React-Blog in kurzer Zeit aufsetzen und deployen.
        </p>

     </>
   )
  },
  {
    id: 3,
    title: "Blog Design Verbesserungen",
    excerpt: "So hab ich das Design verbessert: moderne UI-Optimierungen einfach erklärt",
    date: "2026-03-03",
    image: "/Blog-Design-Feinschliff.png",
    tags: ["Design", "UI", "CSS"],
    content: (
      <>
        <p className="lead">
          Nachdem mein Blog technisch funktioniert hat, habe ich mich intensiv mit dem Design beschäftigt.
          In diesem Artikel zeige ich, wie sich mein ursprüngliches Layout entwickelt hat und welche
          konkreten Verbesserungen ich vorgenommen habe.
        </p>

        <h2 className="mt-5">Das ursprüngliche Design</h2>

        <p>
          Die erste Version meines Blogs war bewusst einfach gehalten.
          Mein Fokus lag zunächst auf Funktionalität und Struktur, nicht auf Design.
        </p>

        <p>
          Ich habe hauptsächlich auf Standard-Komponenten von Bootstrap gesetzt:
        </p>

        <ul>
          <li>klassische Navbar</li>
          <li>einfache Karten für Blogartikel</li>
          <li>Standard Buttons</li>
          <li>klare, funktionale Struktur</li>
        </ul>

        <p>
          Dieser Ansatz hatte einen großen Vorteil: Ich konnte mich vollständig auf den technischen Aufbau konzentrieren,
          ohne mich in Designfragen zu verlieren.
        </p>

        <p>
          Gleichzeitig wurde aber schnell klar, dass das Design noch nicht den Eindruck vermittelt,
          den ich mir für einen modernen Blog wünsche.
        </p>

        <h2 className="mt-5">Die Probleme</h2>

        <ul>
          <li>Das Layout wirkte teilweise zu „standardmäßig“</li>
          <li>Die einzelnen Bereiche waren visuell nicht klar voneinander abgegrenzt</li>
          <li>Die Benutzeroberfläche wirkte funktional, aber nicht besonders einladend</li>
          <li>Wenig visuelle Dynamik</li>
        </ul>

        <h2 className="mt-5">Die Designverbesserungen</h2>

        <p>
          Im nächsten Schritt habe ich gezielt Anpassungen vorgenommen, um das Design moderner und konsistenter zu gestalten.
        </p>

        <h3 className="mt-4">1. Karten-Design überarbeitet</h3>

        <p>
          Die Blogkarten wurden visuell aufgewertet:
        </p>

        <ul>
          <li>größere Border-Radius</li>
          <li>weichere Schatten</li>
          <li>Hover-Effekte für mehr Interaktivität</li>
        </ul>

        <pre><code>{`.blog-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 18px 40px rgba(0,0,0,0.12);
      }`}</code></pre>

        <h3 className="mt-4">2. Buttons modernisiert</h3>

        <p>
          Die Standard-Bootstrap Buttons wurden durch eigene Styles aufgepimpt:
        </p>

        <ul>
          <li>abgerundete Ecken</li>
          <li>optimierte Abstände</li>
          <li>angenehmer Farbverlauf</li>
          <li>moderne Icons eingebaut</li>
        </ul>

          <div className="text-center my-5">
           <figure className="tech-figure">
            <img
              src="/pimped primary & secondary btn.png"
              alt= "Buttons pimped"
              className = "img-fluid mb-4 tech-image"
              style={{ maxWidth: '50% !important', width: '50%' }}
              />
           </figure>
            <figcaption className="text-muted mt-0">
              "Das sind die von mir mit CSS gestylten Primary und Secondary Buttons"
            </figcaption>
          </div>



        <h3 className="mt-4">3. Navbar verbessert</h3>

        <p>
          Die Navigation wurde optisch stärker integriert und klarer strukturiert.
        </p>

        <h3 className="mt-4">4. Abstände & Lesbarkeit</h3>

        <p>
          Ein wichtiger Punkt war die Optimierung der Abstände:
        </p>

        <ul>
          <li>mehr Whitespace (Leerraum zwischen den Elementen)</li>
          <li>bessere Lesbarkeit von Texten (u.a. durch Optimierung der Zeilenhöhe
              und der Textbreite - darauf gehe ich in meinem nächsten Artikel noch
              genauer ein)</li>
          <li>klarere Hierarchie</li>
        </ul>

        <h2 className="mt-5">Das Ergebnis</h2>

        <p>
          Durch diese Anpassungen hat sich die Wirkung des Blogs deutlich verändert:
        </p>

        <ul>
          <li>moderner Gesamteindruck</li>
          <li>bessere Nutzerführung</li>
          <li>angenehmeres Leseerlebnis</li>
          <li>klarere visuelle Struktur</li>
        </ul>

        <h2 className="mt-5">Fazit</h2>

        <p>
          Der wichtigste Lerneffekt für mich war:
          Gute Funktionalität ist die Grundlage – aber erst durch gezieltes Design wirkt eine Anwendung wirklich überzeugend.
        </p>

        <p>
          Schon kleine Anpassungen wie Abstände, Schatten oder Hover-Effekte können einen großen Unterschied machen.
        </p>
      </>
    )
  },
  {
    id: 4,
    title: "Was ist Code Syntax Highlighting?",
    excerpt: "So hab ich das Design verbessert: moderne UI-Optimierungen einfach erklärt",
    date: "2026-03-03",
    image: "/Blog-Design-Feinschliff.png",
    tags: ["Design", "UI", "CSS"],
    content: (
     <>
      <p>
        Unter Code Syntax Highlighting versteht man das Hervorheben von Quellcode innerhalb eines Textes.
        Dabei werden Codeelemente wie Schlüsselwörter, Strings und Variablen mit unterschiedlichen Farben
        oder Schriftarten dargestellt.
      </p>

      <p>
        Dieses Feature ist weit verbreitet – sowohl in Code-Editoren und Skripting-Tools als auch in Tech-Blogs.
        Es hilft dabei, Code schneller zu erkennen, zu analysieren und besser zu verstehen. Dadurch ist Syntax
        Highlighting besonders bei Entwicklern sehr beliebt.
      </p>

      <p>
        Ein zusätzlicher Vorteil: In vielen Fällen gibt es einen Copy-Button, mit dem sich Code direkt in die
        Zwischenablage kopieren lässt.
      </p>

      <p>
        Natürlich wollte ich dieses Feature auch in meinem eigenen Blog integrieren.
      </p>

      <h2 className="mt-5 mb-3">Welche Lösungen gibt es?</h2>

      <p>
        Für Syntax Highlighting gibt es verschiedene Libraries, unter anderem Prism.js, React Syntax Highlighter
        und highlight.js.
      </p>

      <p>
        Ich habe mich für highlight.js entschieden. Dabei handelt es sich um eine clientseitige JavaScript-Library,
        die sich einfach in bestehende Projekte integrieren lässt.
      </p>

      <ul>
        <li>Keywords (z. B. <code>import</code>, <code>const</code>)</li>
        <li>Strings</li>
        <li>Kommentare</li>
        <li>Erkennung der Programmiersprache</li>
      </ul>

      <p>
        Ein großer Vorteil von highlight.js ist die Auswahl an Themes. Es stehen zahlreiche Designs direkt zur Verfügung:
      </p>

      <ul>
        <li>Standard / Default</li>
        <li>Atom One Dark / Atom One Light</li>
        <li>GitHub / GitHub Dark</li>
        <li>Monokai / Monokai Sublime</li>
        <li>Solarized Light / Solarized Dark</li>
        <li>Dracula</li>
        <li>Nord</li>
        <li>VS / VS2015</li>
        <li>Night Owl</li>
        <li>Gradient Dark</li>
      </ul>

      <p>
        Ich habe mich für das GitHub-Theme entschieden. In diesem Theme werden Schlüsselwörter rot, Variablen schwarz
        und Strings blau dargestellt – das passt optisch sehr gut zu meinem Blog.
      </p>

      <h2 className="mt-5 mb-3">Installation und Einrichtung</h2>

      <h3 className="mt-4">1. Library installieren</h3>
      <p>Öffne dein Terminal im Projektordner und führe folgenden Befehl aus:</p>

      <pre>
        <code className="bash">
          {`npm install highlight.js`}
        </code>
      </pre>

      <h3 className="mt-4">2. CSS-Theme einbinden</h3>
      <p>Füge in deiner <code>main.jsx</code> folgende Zeile hinzu:</p>

      <pre>
        <code className="javascript">
          {`import "highlight.js/styles/github.css";`}
        </code>
      </pre>

      <p>Dieses Theme sorgt für:</p>
      <ul>
        <li>farbliche Hervorhebung des Codes</li>
        <li>bessere Lesbarkeit</li>
        <li>ein professionelles Erscheinungsbild</li>
      </ul>

      <h3 className="mt-4">3. Highlighting aktivieren</h3>
      <p>In deiner Blogpost-Seite (z. B. <code>PostDetail.jsx</code>) fügst du folgenden Code hinzu:</p>

      <pre>
        <code className="javascript">
          {`import { useEffect } from "react";
  import hljs from "highlight.js";

  useEffect(() => {
    hljs.highlightAll();
  }, [post]);`}
        </code>
      </pre>

      <p>Dadurch werden:</p>
      <ul>
        <li>alle &lt;pre&gt;&lt;code&gt;-Blöcke erkannt</li>
        <li>automatisch hervorgehoben</li>
      </ul>

      <h3 className="mt-4">4. Code-Blöcke korrekt formatieren</h3>

      <pre>
        <code className="javascript">
          {`<pre>
    <code className="javascript">
      {\`const x = 10;\`}
    </code>
  </pre>`}
        </code>
      </pre>

      <ul>
        <li><code>className="javascript"</code> definiert die Sprache</li>
        <li>Template Strings verhindern Rendering-Probleme in React</li>
      </ul>

      <h2 className="mt-5 mb-3">Ergebnis</h2>

      <ul>
        <li>Code wird automatisch erkannt</li>
        <li>Syntax wird farbig dargestellt</li>
        <li>Der Blog wirkt deutlich professioneller</li>
      </ul>

      <h2 className="mt-5 mb-3">Theme wechseln</h2>

      <pre>
        <code className="javascript">
          {`import "highlight.js/styles/atom-one-light.css";`}
        </code>
      </pre>

      <h2 className="mt-5 mb-3">Fazit</h2>

      <p>
        Mit wenigen Schritten kannst du in einem React-Blog professionelles Code Syntax Highlighting integrieren.
        Das verbessert nicht nur die Lesbarkeit, sondern macht deinen Blog besonders für Entwickler deutlich attraktiver.
      </p>
     </>
    )
  }
];

export default posts;