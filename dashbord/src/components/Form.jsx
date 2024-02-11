import React, { useState } from 'react'
import './form.css'
import Paper from './paper.jsx'
import BasicInformation from './BasicInformation'
import ContactInformation from './ContactInformation'
import EducationBackground from './EducationBackground'
import WorkExperience from './workExperience.jsx'
import SkillsAndTraining from './Skill.jsx'

function Header() {
  return (
    <header>
      <h1 className="logo">CV Generator</h1>
      <button className="button-1" role="button">
        Save
      </button>
    </header>
  )
}

function Form() {
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

  return (
    <div className="container">
      <div className="nav">
        <Header />
        <BasicInformation
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          proTitle={proTitle}
          setProTitle={setProTitle}
          about={about}
          setAbout={setAbout}
        />
        <ContactInformation
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          address={address}
          setAddress={setAddress}
          website={website}
          setWebsite={setWebsite}
        />
        <EducationBackground
          univ={univ}
          setUniv={setUniv}
          degree={degree}
          setDegree={setDegree}
          startedu={startedu}
          setStartedu={setStartedu}
          addinfo={addinfo}
          setAddinfo={setAddinfo}
        />
        <WorkExperience
          position={position}
          setPosition={setPosition}
          company={company}
          setCompany={setCompany}
          startcompany={startcompany}
          setStartcompany={setStartcompany}
          duties={duties}
          setDuties={setDuties}
        />
        <SkillsAndTraining skills={skills} setSkills={setSkills} />
      </div>
      <section className="back-paper">
        <Paper
          firstName={firstName}
          lastName={lastName}
          proTitle={proTitle}
          about={about}
          email={email}
          phone={phone}
          address={address}
          website={website}
          univ={univ}
          degree={degree}
          addinfo={addinfo}
          position={position}
          company={company}
          startcompany={startcompany}
          duties={duties}
          skills={skills}
        />
      </section>
    </div>
  )
}

export default Form
