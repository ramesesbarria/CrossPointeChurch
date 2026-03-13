import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__name">CrossPointe Church</p>
          <p className="footer__tagline">Seek God · Share Life · Serve Others</p>
        </div>

        <div className="footer__socials">
          <a href="https://web.facebook.com/crosspointechurchcebu" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
            Facebook
          </a>
          <a href="https://www.instagram.com/crosspointecebu/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
            Instagram
          </a>
          <a href="https://open.spotify.com/show/6UjCj47PE7wSv6hrvmerJL" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Podcast">
            Podcast
          </a>
        </div>

        <p className="footer__copy">
          © {new Date().getFullYear()} CrossPointe Church Cebu. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer