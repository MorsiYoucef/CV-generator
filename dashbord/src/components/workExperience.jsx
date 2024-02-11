import React from 'react'
import './form.css'

function WorkExperience({
  position,
  setPosition,
  company,
  setCompany,
  startcompany,
  setStartcompany,
  duties,
  setDuties,
}) {
  function handleStartCompanyChange(e) {
    setStartcompany(e.target.value)
  }
  function handlePositionChange(e) {
    setPosition(e.target.value)
  }
  function handleCompanyChange(e) {
    setCompany(e.target.value)
  }
  function handleDutiesChange(e) {
    setDuties(e.target.value)
  }

  return (
    <>
      <h2 className="title">Work experience</h2>
      <form>
        <label for="position" className="title-input">
          Position:
        </label>
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
        <label for="company" className="title-input">
          Company:
        </label>
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
        <label for="start" className="title-input">
          Start Date:
        </label>
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
        <label for="duties" className="title-input">
          Duties/Responsibilities:
        </label>
        <br></br>
        <input
          type="text"
          id="duties"
          name="duties"
          placeholder="List duties and responsibilities"
          value={duties}
          onChange={handleDutiesChange}
        ></input>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </>
  )
}

export default WorkExperience
