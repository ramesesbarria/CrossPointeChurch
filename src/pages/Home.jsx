import './Home.css'
import servicesData from '../data/services.json'

function Home() {
    return (
        <div className="home">
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
                        <a href="/connect" className="btn btn--primary">Plan Your Visit</a>
                        <a href="/services" className="btn btn--outline">Join our Service</a>
                    </div>
                </div>
            </section>


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
                    <a href="/about" className="btn btn--primary">Learn More About Us</a>
                </div>
            </section>

            <section className="services-preview">
                <div className="services-preview__inner">
                    <p className="section__eyebrow">Join Us</p>
                    <h2>Service Times</h2>
                    <div className="service-times">
                        {servicesData.map((service) => (
                            <div className="service-time__card" key={service.id}>
                                <h3>{service.name}</h3>
                                <p className="time">{service.day} · {service.time}</p>
                                <p className="location">{service.location}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Home