import './Connect.css'

function Connect() {
  return (
    <div className="connect">

      {/* Page Header */}
      <section className="connect__header">
        <p className="section__eyebrow">Get In Touch</p>
        <h1>We'd Love to Meet You</h1>
        <p>Whether you're visiting for the first time or looking to get more involved — we're here for you.</p>
      </section>

      {/* Info + Map */}
      <section className="connect__body">
        <div className="connect__info">

          <div className="connect__block">
            <h3>📍 Location</h3>
            <p>One Central Hotel, Sanciangko Street<br />Cebu City, Philippines 6000</p>
          </div>

          <div className="connect__block">
            <h3>📞 Phone</h3>
            <p><a href="tel:09662185631">0966 218 5631</a></p>
          </div>

          <div className="connect__block">
            <h3>📧 Email</h3>
            <p><a href="mailto:crosspointecebu@gmail.com">crosspointecebu@gmail.com</a></p>
          </div>

          <div className="connect__block">
            <h3>💬 Messenger</h3>
            <p><a href="https://m.me/crosspointechurchcebu" target="_blank" rel="noopener noreferrer">Message us on Facebook</a></p>
          </div>

          <div className="connect__block">
            <h3>🎙️ Podcast</h3>
            <p><a href="https://open.spotify.com/show/6UjCj47PE7wSv6hrvmerJL" target="_blank" rel="noopener noreferrer">Pod Pointe on Spotify</a></p>
          </div>

          <div className="connect__socials">
            <a href="https://web.facebook.com/crosspointechurchcebu" target="_blank" rel="noopener noreferrer" className="connect__social-btn">Facebook</a>
            <a href="https://www.instagram.com/crosspointecebu/" target="_blank" rel="noopener noreferrer" className="connect__social-btn">Instagram</a>
          </div>

        </div>

        {/* Google Map */}
        <div className="connect__map">
          <iframe
            title="CrossPointe Church Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.5549889064228!2d123.89583419999998!3d10.297394299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99bfd58c62e07%3A0x7552aa6987560c73!2sOne%20Central%20Hotel!5e0!3m2!1sen!2sph!4v1773367173959!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </div>
  )
}

export default Connect