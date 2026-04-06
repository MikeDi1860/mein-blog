import { useParams, Link } from "react-router-dom";
import posts from "../data/posts.jsx";
import Comments from "../components/Comments"; 

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div className="container py-5 text-center"><h3>Artikel nicht gefunden.</h3></div>;
  }

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">

            {/* Zurück Button */}
            <Link to="/blog" className="btn btn-outline-secondary mb-4 shadow-sm">
              ← Zurück zur Übersicht
            </Link>

            {/* Artikel Card - Hier lassen wir den Standard-Border von Bootstrap zu */}
            <article className="card shadow-sm mb-4 border">
              <img
                src={post.image}
                alt={post.title}
                className="card-img-top"
              />
              
              {/* Das p-4 p-md-5 sorgt für den inneren Abstand zum Card-Rand */}
              <div className="card-body p-4 p-md-5">
                
                {/* Dieser Container zentriert NUR den Inhalt auf 660px innerhalb der Card */}
                <div style={{ maxWidth: "640px", margin: "0 auto" }}>
                  
                  <p className="text-muted mb-2">{post.date}</p>
                  <h1 className="mb-4 fw-bold">{post.title}</h1>
                  
                  <div className="mb-5">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="badge bg-secondary me-2 px-3 py-2">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="article-body text-body-emphasis" style={{ lineHeight: "1.8", fontSize: "1.2rem" }}>
                    {post.content}
                  </div>

                </div> {/* Ende Zentrierung */}
              </div>
            </article>

            {/* Kommentare - Ebenfalls mit Border für Konsistenz */}
            <div className="card shadow-sm p-4 border">
               <h4 className="mb-4">Kommentare</h4>
              <Comments />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}