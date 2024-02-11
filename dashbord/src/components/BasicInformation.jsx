import React from 'react'
import './form.css'

export default function BasicInformation({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  proTitle,
  setProTitle,
  about,
  setAbout,
}) {
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
  return (
    <>
      <h2 className="title"> Basic information</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label for="fname" className="title-input">
          First name:
        </label>
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
        <label for="lname" className="title-input">
          Last name:
        </label>
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

        <label for="lname" className="title-input">
          Professional Title:
        </label>
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
        <label for="lname" className="title-input">
          About you:
        </label>
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
      </form>
    </>
  )
}
