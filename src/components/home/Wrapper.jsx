import React from "react"

const Wrapper = () => {
  const data = [
    {
      title: "LOOKING FOR HELP or TO HELP?",
      heading: "Get The Satisfaction as per your wishes",
      desc: "",
    },
  ]
  return (
    <>
      <section className='Branding wrapper'>
        <div className='container'>
          {data.map((value) => {
            return (
              <div className='box'>
                <h3>{value.title}</h3>
                <h2>{value.heading}</h2>
                <p>{value.desc}</p>
                <button className='primary-btn'>Contact Us</button>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
