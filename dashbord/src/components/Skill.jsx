import React from 'react'
import './form.css'

function SkillsAndTraining({ skills, setSkills }) {
  function handleSkillChange(e) {
    setSkills(e.target.value)
  }
  return (
    <>
      <h2 className="title">Skills and Training</h2>
      <form>
        <label for="skill " className="title-input">
          Skill or Training:
        </label>
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
    </>
  )
}

export default SkillsAndTraining
