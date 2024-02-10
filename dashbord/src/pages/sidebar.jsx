import { useState } from 'react'
import './sidebar.css'

const Form = () => {
  const [firstName, setFirstName] = useState('guest')
  const [lastName, setLastName] = useState('guest')
  const [proTitle, setProTitle] = useState('software engineer')
  const [about, setAbout] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laborum dolore veritatis, explicabo culpa illo ab ipsa ratione quasi, dolorem sapiente in perspiciatis quisquam sit eligendi qui blanditiis accusamus quibusdam!'
  )
  const [email, setEmail] = useState('mail@example.com')
  const [phone, setPhone] = useState('+21355555555')
  const [address, setAddress] = useState('174 street new york')
  const [website, setWebsite] = useState('https://example.com')
  const [univ, setUniv] = useState('Harvard')
  const [degree, setDegree] = useState('Maser Degree')
  const [startedu, setStartedu] = useState('08/12/2021')
  const [addinfo, setAddinfo] = useState('freelancer')
  const [position, setPosition] = useState('frontend developer')
  const [company, setCompany] = useState('Google')
  const [startcompany, setStartcompany] = useState('08/12/2024')
  const [duties, setDuties] = useState([])
  const [skills, setSkills] = useState([])

  function handleFirstNameChange(e) {
    setFirstName(e.target.value)
  }
  function handleLastNameChange(e) {
    setLastName(e.target.value)
  }
  function handleProTitleChange(e) {
    setProTitle(e.target.value)
  }
  function handleAboutChange(e) {
    setAbout(e.target.value)
  }
  function handleEmailChange(e) {
    setEmail(e.target.value)
  }
  function handlePhoneChange(e) {
    setPhone(e.target.value)
  }
  function handleAddressChange(e) {
    setAddress(e.target.value)
  }
  function handleUnivChange(e) {
    setUniv(e.target.value)
  }
  function handleDegreeChange(e) {
    setDegree(e.target.value)
  }
  function handleAddinfoChange(e) {
    setAddinfo(e.target.value)
  }
  function handleWebsiteChange(e) {
    setWebsite(e.target.value)
  }
  function handleStartEduChange(e) {
    setStartedu(e.target.value)
  }
  function handleStartCompanyChange(e) {
    setStartcompany(e.target.value)
  }
  function handlePositionChange(e) {
    setPosition(e.target.value)
  }
  function handleCompanyChange(e) {
    setCompany(e.target.value)
  }
  function handleSkillChange(e) {
    setSkills(e.target.value)
  }
  function handleDutiesChange(e) {
    setDuties(e.target.value)
  }

  return (
    <div className="container">
      <div className="nav">
        <header>
          <h1>CV Generator</h1>
          <button>Save</button>
        </header>
        <h2>Basic information</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label for="fname">First name:</label>
          <br></br>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="First name"
            value={firstName}
            onChange={handleFirstNameChange}
          ></input>
          <br></br>
          <label for="lname">Last name:</label>
          <br></br>
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Last name"
            value={lastName}
            onChange={handleLastNameChange}
          ></input>
          <br></br>

          <label for="lname">Professional Title:</label>
          <br></br>
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Professional Title"
            value={proTitle}
            onChange={handleProTitleChange}
          ></input>
          <br></br>
          <label for="lname">About you:</label>
          <br></br>
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Give a brief description about your self"
            value={about}
            onChange={handleAboutChange}
          ></input>

          <hr />
          <h2>Contact information</h2>

          <label for="email">Email adress:</label>
          <br></br>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          ></input>
          <br></br>
          <label for="phone">Phone number:</label>
          <br></br>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
            value={phone}
            onChange={handlePhoneChange}
          ></input>
          <br></br>
          <label for="address">Address :</label>
          <br></br>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            value={address}
            onChange={handleAddressChange}
          ></input>
          <br></br>
          <label for="website">Website:</label>
          <br></br>
          <input
            type="url"
            id="website"
            name="website"
            placeholder="Website"
            value={website}
            onChange={handleWebsiteChange}
          ></input>

          <hr />
          <h2>Education background</h2>

          <label for="univ">University:</label>
          <br></br>
          <input
            type="text"
            id="univ"
            name="univ"
            placeholder="University"
            value={univ}
            onChange={handleUnivChange}
          ></input>
          <br></br>
          <label for="degree">Degree:</label>
          <br></br>
          <input
            type="text"
            id="degree"
            name="degree"
            placeholder="Degree"
            value={degree}
            onChange={handleDegreeChange}
          ></input>
          <br></br>
          <label for="start">Starting:</label>
          <br></br>
          <input
            type="date"
            id="start"
            name="start"
            placeholder="jj/mm/yyyy"
            value={startedu}
            onChange={handleStartEduChange}
          ></input>
          <br></br>
          <label for="addinfo">Additional Info(Awards,etc):</label>
          <br></br>
          <input
            type="text"
            id="addinfo"
            name="addinfo"
            placeholder="Add additional information here"
            value={addinfo}
            onChange={handleAddinfoChange}
          ></input>
          <br></br>
          <input type="submit" value="Submit"></input>
        </form>
        <hr />
        <h1>Work experience</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label for="position">Position:</label>
          <br></br>
          <input
            type="text"
            id="position"
            name="position"
            placeholder="Position/Rank"
            value={position}
            onChange={handlePositionChange}
          ></input>
          <br></br>
          <label for="company">Company:</label>
          <br></br>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company Name"
            value={company}
            onChange={handleCompanyChange}
          ></input>
          <br></br>
          <label for="start">Start Date:</label>
          <br></br>
          <input
            type="date"
            id="start"
            name="start"
            placeholder="jj/mm/yyyy"
            value={startcompany}
            onChange={handleStartCompanyChange}
          ></input>
          <br></br>
          <label for="duties">Duties/Responsibilities:</label>
          <br></br>
          <input
            type="text"
            id="duties"
            name="duties"
            placeholder="List duties and responsibilities"
            value={startcompany}
            onChange={handleDutiesChange}
          ></input>
          <br />
          <input type="submit" value="Submit"></input>
        </form>
        <hr />
        <h2>Skills and Trainings</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label for="skill">Skill or Training:</label>
          <br></br>
          <input
            type="text"
            id="skill"
            name="skill"
            placeholder="Add Skill and Training"
            value={skills}
            onChange={handleSkillChange}
          ></input>
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
      <section className="back-paper">
        <div className="paper">
          <div className="paper-container">
            <div className="first-row">
              <div>
                <h1>
                  {firstName} {lastName}
                </h1>
                <h3>{proTitle}</h3>
                <p>{about}</p>
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
    </div>
  )
}

const Sidebar = () => {
  return (
    <section className="nav">
      <Form />
    </section>
  )
}

export default Sidebar
