import React from 'react'
import './form.css'

export default function Paper({
  firstName,
  lastName,
  email,
  address,
  proTitle,
  about,
  phone,
  website,
  univ,
  degree,
  startedu,
  addinfo,
  position,
  company,
  startcompany,
  duties,
  skills,
}) {
  {
    return (
      <section className="back-paper">
        <div className="paper">
          <div className="paper-container">
            <div className="first-row">
              <div>
                <h1 className="logo">
                  {firstName} {lastName}
                </h1>
                <h3 className="title">{proTitle}</h3>
                <p className="title-input" style={{ color: 'grey' }}>
                  {about}
                </p>
              </div>
              <div>
                <div className="icons">
                  <img
                    src="src/assets/courriel.png"
                    alt="mail"
                    className="icon-img"
                  />
                  <p>{email}</p>
                </div>
                <div className="icons">
                  <img
                    src="src/assets/phone.png"
                    alt="phone"
                    className="icon-img"
                  />
                  <p>{phone}</p>
                </div>
                <div className="icons">
                  <img
                    src="src/assets/location.png"
                    alt="location"
                    className="icon-img"
                  />
                  <p>{address}</p>
                </div>
                <div className="icons">
                  <img
                    src="src/assets/url.png"
                    alt="url"
                    className="icon-img"
                  />
                  <p>{website}</p>
                </div>
              </div>
            </div>
            <div className="second-row">
              <div>
                <h1>Educational background</h1>
                <hr />
                {univ}
                {degree}
                <ul>
                  <li>{addinfo}</li>
                </ul>

                <h1>work experience</h1>
                <hr />
                <div className="work">
                  <p>{position}</p>
                  <p>{company}</p>
                  <p>{startcompany}</p>
                </div>
                {duties}
              </div>
              <div>
                <h1>Skills and Training:</h1>
                <hr />
                {skills}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
