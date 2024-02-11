import React from 'react'
import './form.css'

function EducationBackground({
  univ,
  setUniv,
  degree,
  setDegree,
  startedu,
  setStartedu,
  addinfo,
  setAddinfo,
}) {
  function handleUnivChange(e) {
    setUniv(e.target.value)
  }
  function handleDegreeChange(e) {
    setDegree(e.target.value)
  }
  const handleAddinfoChange = (e) => {
    setAddinfo(e.target.value)
  }
  function handleStartEduChange(e) {
    setStartedu(e.target.value)
  }
  return (
    <>
      <h2 className="title">Education background</h2>
      <form>
        <label for="univ" className="title-input">
          University:
        </label>
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
        <label for="degree" className="title-input">
          Degree:
        </label>
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
        <label for="start" className="title-input">
          Starting:
        </label>
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
        <label for="addinfo" className="title-input">
          Additional Info(Awards,etc):
        </label>
        <br></br>
        <div className="add-input">
          <input
            type="text"
            id="addinfo"
            name="addinfo"
            placeholder="Add additional information here"
            value={addinfo}
            onChange={handleAddinfoChange}
          ></input>
        </div>
        <input type="submit" value="Submit"></input>
      </form>
    </>
  )
}

export default EducationBackground
