import { useParams, Link } from "react-router-dom";
import posts from "../data/posts";
import { useState, useEffect } from "react";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  // ✅ Kommentarsystem State
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const storageKey = `comments-${id}`;

  // Kommentare laden
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setComments(JSON.parse(saved));
  }, [storageKey]);

  // Kommentare speichern
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(comments));
  }, [comments, storageKey]);

  // Kommentar absenden
  function handleSubmit(e) {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;

    const newComment = {
      id: Date.now(),
      author,
      text,
      date: new Date().toLocaleDateString("de-DE"),
    };

    setComments([newComment, ...comments]);
    setAuthor("");
    setText("");
  }

  
    // ✅ NEU — Kommentar löschen
    function deleteComment(commentId) {
    const updatedComments = comments.filter(
        (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
    }



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

              {/* Bild */}
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

            {/* 💬 Kommentarbereich */}
            <div className="card shadow-sm">
              <div className="card-body p-4">

                <h4 className="mb-4">Kommentare</h4>

                {/* Formular */}
                <form onSubmit={handleSubmit} className="mb-4">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Dein Name"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Dein Kommentar..."
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    ></textarea>
                  </div>

                  <button className="btn btn-primary">
                    Kommentar senden
                  </button>
                </form>

                {/* Kommentarliste */}
                {comments.length === 0 && (
                  <p className="text-muted">Noch keine Kommentare.</p>
                )}

                {comments.map((c) => (
                 <div key={c.id} className="border rounded p-3 mb-3 bg-light">

                    <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                        <strong>{c.author}</strong>
                        <div className="text-muted small">{c.date}</div>
                    </div>

                    <button
                        onClick={() => deleteComment(c.id)}
                        className="btn btn-sm btn-outline-danger"
                    >
                        Löschen
                    </button>
                    </div>

                    <div>{c.text}</div>

                </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}