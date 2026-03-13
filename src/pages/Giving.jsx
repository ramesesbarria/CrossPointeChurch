import './Giving.css'

const givingMethods = [
  {
    id: 1,
    method: 'GCash',
    icon: '📱',
    details: [
      { label: 'Number', value: '0912 345 6789' },
      { label: 'Account Name', value: 'Juan dela Cruz' },
    ],
    instruction: 'Open GCash → Send Money → Enter number above → Enter amount → Add "Tithe" or "Offering" in the message.'
  },
  {
    id: 2,
    method: 'BDO Bank Transfer',
    icon: '🏦',
    details: [
      { label: 'Account Number', value: '1234 5678 9012' },
      { label: 'Account Name', value: 'CrossPointe Church Cebu' },
      { label: 'Branch', value: 'Cebu City Main' },
    ],
    instruction: 'Transfer via BDO online banking or over the counter. Please send a screenshot to crosspointecebu@gmail.com as confirmation.'
  },
  {
    id: 3,
    method: 'BPI Bank Transfer',
    icon: '🏦',
    details: [
      { label: 'Account Number', value: '9876 5432 1098' },
      { label: 'Account Name', value: 'CrossPointe Church Cebu' },
      { label: 'Branch', value: 'Cebu City Branch' },
    ],
    instruction: 'Transfer via BPI online banking or over the counter. Please send a screenshot to crosspointecebu@gmail.com as confirmation.'
  },
  {
    id: 4,
    method: 'In Person',
    icon: '🙏',
    details: [
      { label: 'When', value: 'Every Sunday Service' },
      { label: 'Where', value: 'One Central Hotel, 7th Floor' },
    ],
    instruction: 'Giving envelopes are available at the welcome table. You may give your tithes and offerings during the designated time in the service.'
  },
]

function Giving() {
  return (
    <div className="giving">

      {/* Header */}
      <section className="giving__header">
        <p className="section__eyebrow">Give</p>
        <h1>Support the Mission</h1>
        <p>Your generosity fuels the work of God in Cebu and beyond. Thank you for giving.</p>
      </section>

      {/* Scripture */}
      <section className="giving__verse">
        <div className="giving__verse-inner">
          <blockquote>
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
          </blockquote>
          <cite>— 2 Corinthians 9:7</cite>
        </div>
      </section>

      {/* Giving Methods */}
      <section className="giving__methods">
        <div className="giving__methods-inner">
          <p className="section__eyebrow">How to Give</p>
          <h2>Ways to Give</h2>
          <div className="giving__grid">
            {givingMethods.map((item) => (
              <div className="giving__card" key={item.id}>
                <div className="giving__card-header">
                  <span className="giving__icon">{item.icon}</span>
                  <h3>{item.method}</h3>
                </div>
                <div className="giving__card-body">
                  {item.details.map((d) => (
                    <div className="giving__detail" key={d.label}>
                      <span className="giving__label">{d.label}</span>
                      <span className="giving__value">{d.value}</span>
                    </div>
                  ))}
                  <p className="giving__instruction">{item.instruction}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Giving