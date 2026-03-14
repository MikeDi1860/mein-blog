import React from 'react'; // Wichtig, falls deine Dateiendung .js ist

const posts = [
  {
    id: 1,
    title: "Von Null auf Live: Mein Weg zum eigenen Tech-Blog",
    excerpt: "Ein Blick hinter die Kulissen: Wie ich diesen Blog mit Node.js, Vite, React und Bootstrap erstellt habe.",
    date: "2026-03-14",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    tags: ["React", "Vite", "Tutorial"],
    content: (
      <div>
        <p>
          Warum eigentlich noch ein Blog? In einer Welt voller fertiger Lösungen habe ich mich entschieden: 
          Ich will es selbst bauen. Das Ziel war nicht nur, ein paar Gedanken online zu stellen, 
          sondern den gesamten Stack besser zu verstehen.
        </p>

        <h3 className="mt-4">Mein Tech-Stack</h3>
        <ul>
          <li><strong>Node.js:</strong> Das Fundament für modernes Web-Development.</li>
          <li><strong>Vite:</strong> Unglaublich schnell beim Entwickeln und Neuladen.</li>
          <li><strong>React:</strong> Für modularen und wiederverwendbaren Code.</li>
          <li><strong>Bootstrap:</strong> Für ein sauberes, responsives Design ohne Stress.</li>
        </ul>

        <h3 className="mt-4">Cheat-Sheet: Der Entstehungsprozess</h3>
        <div className="bg-white p-3 border rounded shadow-sm my-3">
          <ol>
            <li><strong>Node.js Installation:</strong> LTS Version von nodejs.org installiert.</li>
            <li><strong>Projekt-Setup:</strong> Vite mit React-Template erstellt.</li>
            <li><strong>Styling:</strong> Bootstrap mit <code>npm install bootstrap</code> hinzugefügt.</li>
            <li><strong>Routing:</strong> React Router für die Navigation zwischen den Seiten.</li>
            <li><strong>Kommentare:</strong> Giscus eingebunden (GitHub Discussions).</li>
            <li><strong>Deployment:</strong> Mit Vercel live geschaltet.</li>
          </ol>
        </div>

        <p className="mt-4">
          Dieser Blog ist jetzt mein technischer Spielplatz. Die nächsten Artikel werden sich drehen u. a. um Bootstrap, React, meine nächsten Projekte und natürlich um KI und wie sie den Arbeitsalltag verändert.
          Ich freue mich über jeden Austausch – 
          nutzt gerne die Kommentarfunktion unten!
        </p>
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