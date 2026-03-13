import staffData from '../data/staff.json'
import './About.css'

function About() {
  return (
    <div className="about">

      {/* Header */}
      <section className="about__header">
        <p className="section__eyebrow">Who We Are</p>
        <h1>About CrossPointe Church</h1>
        <p>A Spirit-filled community in the heart of Cebu City.</p>
      </section>

      {/* Mission & Vision */}
      <section className="about__mv">
        <div className="about__mv-inner">
          <div className="about__mv-card">
            <div className="about__mv-icon">✝️</div>
            <h3>Our Mission</h3>
            <p>To seek God, share life, and serve others — making disciples who make disciples in Cebu and beyond.</p>
          </div>
          <div className="about__mv-card">
            <div className="about__mv-icon">👁️</div>
            <h3>Our Vision</h3>
            <p>To be a thriving, Christ-centered church that transforms lives, families, and communities through the power of the Gospel.</p>
          </div>
          <div className="about__mv-card">
            <div className="about__mv-icon">📖</div>
            <h3>Our Values</h3>
            <p>We are rooted in Scripture, committed to worship, and dedicated to authentic community and sacrificial service.</p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="about__history">
        <div className="about__history-inner">
          <p className="section__eyebrow">Our Story</p>
          <h2>How It All Began</h2>
          <p>
            CrossPointe Church Cebu was founded with a simple conviction — that every person deserves
            to experience the love of God in a real and meaningful way. From humble beginnings,
            our church has grown into a vibrant community of believers spread across Cebu City,
            united by faith, hope, and a desire to serve.
          </p>
          <p>
            We gather every Sunday at One Central Hotel, Sanciangko Street, Cebu City —
            a place where people from all walks of life come together to worship, grow, and belong.
          </p>
        </div>
      </section>

      {/* Staff */}
      <section className="about__staff">
        <div className="about__staff-inner">
          <p className="section__eyebrow">Our Team</p>
          <h2>Meet the Leadership</h2>
          <div className="staff__grid">
            {staffData.map((member) => (
              <div className="staff__card" key={member.id}>
                <div className="staff__avatar">
                  {member.image
                    ? <img src={member.image} alt={member.name} />
                    : <div className="staff__avatar-placeholder">{member.name.charAt(0)}</div>
                  }
                </div>
                <h3>{member.name}</h3>
                <p className="staff__role">{member.role}</p>
                <p className="staff__bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default About