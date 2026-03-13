import eventsData from '../data/events.json'
import './Events.css'

const categoryColors = {
  'Special Service': '#1a9aa0',
  'Adult Life Groups': '#7c3aed',
  'Outreach': '#ea580c',
  'Ministry': '#db2777',
  'Camp': '#16a34a',
  'Children': '#f59e0b',
  'default': 'var(--color-navy)',
}


function Events() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const sortedEvents = [...eventsData].sort((a, b) => new Date(a.date) - new Date(b.date))

  const upcoming = sortedEvents.filter(e => new Date(e.date + 'T00:00:00') >= today)
  const past = sortedEvents.filter(e => new Date(e.date + 'T00:00:00') < today)


  return (
    <div className="events">

      <section className="events__header">
        <p className="section__eyebrow">What's On</p>
        <h1>Upcoming Events, Life Groups, and Ministries</h1>
        <p>Stay connected with what's happening at CrossPointe Church Cebu.</p>
      </section>

      <section className="events__body">
        <div className="events__inner">

          {upcoming.length > 0 ? (
            <div className="events__grid">
              {upcoming.map((event) => (
                <div className="event__card" key={event.id}>
                  <div
                    className="event__card-header"
                    style={{ borderTopColor: categoryColors[event.category] || categoryColors.default }}
                  >
                    <span
                      className="event__category"
                      style={{ color: categoryColors[event.category] || categoryColors.default }}
                    >
                      {event.category}
                    </span>
                    <h3>{event.title}</h3>
                  </div>
                  <div className="event__card-body">
                    <div className="event__detail">
                      <span className="event__icon">📅</span>
                      <span>{event.displayDate}</span>
                    </div>
                    <div className="event__detail">
                      <span className="event__icon">🕐</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="event__detail">
                      <span className="event__icon">📍</span>
                      <span>{event.location}</span>
                    </div>
                    <p className="event__description">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="events__empty">
              <p>No upcoming events at the moment.</p>
              <p>Check back soon — something exciting is always being planned!</p>
            </div>
          )}

          {past.length > 0 && (
            <div className="events__past">
              <h2 className="events__past-title">Past Events</h2>
              <div className="events__grid events__grid--past">
                {past.map((event) => (
                  <div className="event__card event__card--past" key={event.id}>
                    <div className="event__card-header">
                      <span className="event__category">{event.category}</span>
                      <h3>{event.title}</h3>
                    </div>
                    <div className="event__card-body">
                      <div className="event__detail">
                        <span className="event__icon">📅</span>
                        <span>{event.displayDate}</span>
                      </div>
                      <div className="event__detail">
                        <span className="event__icon">📍</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  )
}

export default Events