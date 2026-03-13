export default function About() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">

          <div className="card border-0 about-card">
            <div className="card-body p-5">

              <div className="row align-items-center">

                {/* Profilbild */}
                <div className="col-md-4 text-center mb-4 mb-md-0">
                  <img
                    src="/profile.jpg"
                    alt="Profilbild"
                    className="rounded-circle img-fluid shadow"
                    style={{
                      maxWidth: "220px",
                      aspectRatio: "1/1",
                      objectFit: "cover",
                      border: "4px solid white"
                    }}
                  />
                </div>

                {/* Intro Text */}
                <div className="col-md-8">
                  <h1 className="fw-bold mb-3">Über mich</h1>

                  <p className="lead">
                    Hallo! Ich bin angehender Webentwickler aus München und befinde mich aktuell auf meiner spannenden Reise in die Welt der modernen Webentwicklung.
                  </p>

                  <p>
                    Programmieren fasziniert mich, weil aus Ideen echte Anwendungen entstehen. Besonders die Frontend-Entwicklung begeistert mich — zu sehen, wie aus Code moderne Webseiten werden, macht einfach Spaß.
                  </p>

                  <p>
                    Mit diesem Blog dokumentiere ich meinen Lernprozess und teile Erfahrungen für andere, die ebenfalls in die Webentwicklung einsteigen möchten.
                  </p>
                </div>

              </div>

              <hr className="my-5" />

              {/* Unterer Bereich jetzt IN der Card */}
              <div className="row">
                <div className="col-md-6">

                  <h4 className="fw-bold mb-3">🚀 Was dich hier erwartet</h4>
                  <ul>
                    <li>Lernfortschritte mit React & JavaScript</li>
                    <li>Einfache Erklärungen zu Web-Technologien</li>
                    <li>Praxisprojekte und Codebeispiele</li>
                    <li>Tipps für Einsteiger</li>
                    <li>Gedanken aus meinem Entwickler-Alltag</li>
                  </ul>

                </div>

                <div className="col-md-6">

                  <h4 className="fw-bold mb-3">🎯 Mein Ziel</h4>
                  <p>
                    Ich entwickle mich kontinuierlich weiter, um professionelle und moderne Webanwendungen zu bauen. Dieser Blog ist Teil dieser Reise.
                  </p>

                  <h4 className="fw-bold mb-3 mt-4">☕ Persönlich</h4>
                  <p>
                    Neben dem Programmieren interessiere ich mich für Technologie, digitale Trends und kreative Projekte.
                  </p>

                </div>
              </div>

              <hr className="my-4" />

              <p className="text-center mb-0">
                Danke für deinen Besuch — vielleicht kann ich dich auf deinem Weg in die Webentwicklung begleiten.
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}