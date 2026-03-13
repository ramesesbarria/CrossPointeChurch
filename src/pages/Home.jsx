import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import './Home.css'
import servicesData from '../data/services.json'
import eventsData from '../data/events.json'

function Home() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const nextService = useMemo(() => {
    return servicesData.find(s => new Date(s.date + 'T00:00:00') >= today) || null
  }, [])

  const upcomingEvents = useMemo(() => {
    return eventsData
      .filter(e => new Date(e.date + 'T00:00:00') >= today)
      .slice(0, 2)
  }, [])

  return (
    <div className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero__overlay" />
        <div className="hero__content">
          <p className="hero__eyebrow">Welcome to CrossPointe Church</p>
          <h1 className="hero__title">
            Seek <span>God</span><br />
            Share <span>Life</span><br />
            Serve <span>Others</span>
          </h1>
          <div className="hero__actions">
            <Link to="/connect" className="btn btn--primary">Plan Your Visit</Link>
            <Link to="/services" className="btn btn--outline">Our Services</Link>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="welcome">
        <div className="welcome__content">
          <p className="section__eyebrow">Who We Are</p>
          <h2>A Church for Every Season of Life</h2>
          <p>
            CrossPointe Church is a vibrant, Spirit-filled community in Cebu
            committed to helping people find hope, grow in faith, and make a
            difference. Whether you're exploring faith for the first time or
            looking for a church home — you belong here.
          </p>
          <Link to="/about" className="btn btn--primary">Learn More About Us</Link>
        </div>
      </section>

      {/* Schedule + Events side by side */}
      <section className="preview-row">
        <div className="preview-row__inner">

          {/* Next Service */}
          <div className="preview-col">
            <p className="section__eyebrow">Join Us</p>
            <h2>Next Service</h2>
            {nextService ? (
              <div className="next-service__card">
                <div className="next-service__detail">
                  <span className="next-service__label">Date</span>
                  <span className="next-service__value">{nextService.day}</span>
                </div>
                <div className="next-service__detail">
                  <span className="next-service__label">Time</span>
                  <span className="next-service__value">{nextService.time}</span>
                </div>
                <div className="next-service__detail">
                  <span className="next-service__label">Location</span>
                  <span className="next-service__value">{nextService.location}</span>
                </div>
                {nextService.pastor && nextService.pastor !== 'TBA' && (
                  <div className="next-service__detail">
                    <span className="next-service__label">Pastor</span>
                    <span className="next-service__value">{nextService.pastor}</span>
                  </div>
                )}
                <Link to="/services" className="btn btn--primary" style={{ marginTop: '1rem' }}>
                  View Full Schedule
                </Link>
              </div>
            ) : (
              <p className="next-service__none">No upcoming services scheduled.</p>
            )}
          </div>

          {/* Upcoming Events */}
          <div className="preview-col">
            <p className="section__eyebrow">What's On</p>
            <h2>Upcoming Events, Life Groups, and Ministries</h2>
            {upcomingEvents.length > 0 ? (
              <div className="events-preview__list">
                {upcomingEvents.map((event) => (
                  <div className="events-preview__card" key={event.id}>
                    <span className="events-preview__category">{event.category}</span>
                    <h3>{event.title}</h3>
                    <div className="events-preview__meta">
                      <span>📅 {event.displayDate}</span>
                      <span>🕐 {event.time}</span>
                    </div>
                  </div>
                ))}
                <Link to="/events" className="btn btn--primary" style={{ marginTop: '0.5rem' }}>
                  View All Events
                </Link>
              </div>
            ) : (
              <div className="events-preview__empty">
                <p>No upcoming events at the moment.</p>
                <p>Check back soon!</p>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  )
}

export default Home