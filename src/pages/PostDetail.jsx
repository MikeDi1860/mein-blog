import { useParams, Link } from "react-router-dom";
import posts from "../data/posts";
import Comments from "../components/Comments"; // <-- Import hier

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div className="container py-5">Artikel nicht gefunden.</div>;
  }

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            {/* Zurück Button */}
            <Link to="/blog" className="btn btn-outline-secondary mb-4">
              ← Zurück zur Übersicht
            </Link>

            {/* Artikel Card */}
            <article className="card shadow-sm mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="card-img-top"
              />
              <div className="card-body p-5">
                <p className="text-muted mb-2">{post.date}</p>
                <h1 className="mb-4 fw-bold">{post.title}</h1>
                <div className="mb-3">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="badge bg-secondary me-2">
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
                  {post.content}
                </div>
              </div>
            </article>

            {/* ✅ Hier binden wir das Giscus-Kommentarsystem ein */}
            <div className="card shadow-sm p-4">
              <Comments />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}