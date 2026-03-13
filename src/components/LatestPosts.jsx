import posts from "../data/posts";
import { Link } from "react-router-dom";

export default function LatestPosts() {

  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="py-5 bg-light">
      <div className="container">

        <div className="mb-5 text-center">
          <h2 className="fw-bold">Neueste Artikel</h2>
          <p className="text-muted">
            Die neuesten Beiträge aus meinem Entwickler Blog
          </p>
        </div>

        <div className="row justify-content-center">

          {latestPosts.map((post) => (
            <div className="col-md-6 col-lg-4 mb-4" key={post.id}>

              <div className="card blog-card h-100 shadow-sm">

                {/* Bild */}
                <img
                  src={post.image}
                  className="card-img-top"
                  alt={post.title}
                />

                <div className="card-body">

                  {/* Datum */}
                  <p className="text-muted small mb-2">
                    {post.date}
                  </p>

                  {/* Titel */}
                  <h4 className="card-title mb-3">
                    {post.title}
                  </h4>

                  <div className="mb-2">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="badge bg-secondary me-2">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Vorschau */}
                  <p className="card-text">
                    {post.excerpt}
                  </p>

                </div>

                <div className="card-footer bg-white border-0">

                  <Link
                    to={`/blog/${post.id}`}
                    className="btn btn-primary read-more-btn"
                  >
                    Weiterlesen
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}