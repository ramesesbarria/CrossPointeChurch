import servicesData from '../data/services.json'
import './Services.css'

function Services() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const upcoming = servicesData.filter(s => new Date(s.date + 'T00:00:00') >= today)
  const past = servicesData.filter(s => new Date(s.date + 'T00:00:00') < today)

  return (
    <div className="services">
      <section className="services__header">
        <p className="section__eyebrow">Schedule</p>
        <h1>Service Times</h1>
        <p>Join us every Sunday as we gather to worship, grow, and serve together.</p>
      </section>

      <section className="services__body">
        <div className="services__inner">

          {upcoming.length > 0 && (
            <>
              <h2 className="services__group-title">Upcoming Services</h2>
              <div className="services__list">
                {upcoming.map((service, index) => (
                  <div className={`service__card ${index === 0 ? 'service__card--next' : ''}`} key={service.id}>
                    {index === 0 && <span className="service__badge">Next Service</span>}
                    <div className="service__row">
                      <span className="service__label">Date</span>
                      <span className="service__value">{service.day}</span>
                    </div>
                    <div className="service__row">
                      <span className="service__label">Time</span>
                      <span className="service__value">{service.time}</span>
                    </div>
                    <div className="service__row">
                      <span className="service__label">Location</span>
                      <span className="service__value">{service.location}</span>
                    </div>
                    {service.pastor && service.pastor !== 'TBA' && (
                      <div className="service__row">
                        <span className="service__label">Pastor</span>
                        <span className="service__value">{service.pastor}</span>
                      </div>
                    )}
                    {service.notes && (
                      <p className="service__notes">{service.notes}</p>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {past.length > 0 && (
            <>
              <h2 className="services__group-title services__group-title--past">Past Services</h2>
              <div className="services__list services__list--past">
                {past.map((service) => (
                  <div className="service__card service__card--past" key={service.id}>
                    <div className="service__row">
                      <span className="service__label">Date</span>
                      <span className="service__value">{service.day}</span>
                    </div>
                    <div className="service__row">
                      <span className="service__label">Time</span>
                      <span className="service__value">{service.time}</span>
                    </div>
                    <div className="service__row">
                      <span className="service__label">Location</span>
                      <span className="service__value">{service.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </section>
    </div>
  )
}

export default Services