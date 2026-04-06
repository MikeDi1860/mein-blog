import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-light py-5 border-bottom">
      <div className="container py-5">
        <div className="row align-items-center">

          {/* Textbereich */}
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-2">
              UX Build
            </h1>

            <h2 className="display-8 mb-4">
              Der neue Blog von Michael Dietl
            </h2>

            <p className="lead text-muted mb-4 me-md-4">
              Geschichten und Informationen rund ums selber bauen von Anwendungen und Webseiten
            </p>

            <div className="d-flex gap-3">
              <Link to="/blog" className="btn btn-primary btn-lg shadow-sm">
                📚 Artikel lesen
              </Link>

              <Link to="/about" className="btn btn-outline-secondary btn-lg">
                👨‍💻 Über mich
              </Link>
            </div>
          </div>

          {/* Bildbereich */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
              alt="Coding"
              className="img-fluid rounded shadow"
            />
          </div>

        </div>
      </div>
    </section>
  );
}