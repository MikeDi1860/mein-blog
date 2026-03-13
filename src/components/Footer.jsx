import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 py-3">
    <div className="container text-center">

        <p className="mb-2">
        © {new Date().getFullYear()} Mein Entwickler Blog
        </p>

        <small className="text-muted d-block mb-2">
        Gebaut mit React & Bootstrap
        </small>

        <Link to="/impressum" className="footer-link me-3">Impressum</Link>
        
        <Link to="/datenschutz" className="footer-link">Datenschutz</Link>

    </div>
</footer>
 );
}
