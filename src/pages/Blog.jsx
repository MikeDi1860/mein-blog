import { useState } from "react";
import posts from "../data/posts";
import { Link } from "react-router-dom";

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState("Alle");

  // Alle Tags sammeln
  const allTags = ["Alle", ...new Set(posts.flatMap(post => post.tags))];

  // Gefilterte Posts
  const filteredPosts =
    selectedTag === "Alle"
      ? posts
      : posts.filter(post => post.tags.includes(selectedTag));

  return (
    <div className="container mt-4">

      <h1 className="mb-4">Blog Übersicht</h1>

      {/* Tag Filter */}
      <div className="mb-4">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`btn me-2 mb-2 ${
              selectedTag === tag ? "btn-primary" : "btn-outline-primary"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="row">
        {filteredPosts.map((post) => (
          <div className="col-md-6 mb-4" key={post.id}>
            <div className="card blog-card h-100 shadow-sm">

              <img
                src={post.image}
                className="card-img-top"
                alt={post.title}
              />

              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.excerpt}</p>
                <p className="text-muted small">{post.date}</p>
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
  );
}