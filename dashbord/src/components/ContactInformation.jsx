import React from 'react'
import './form.css'

function ContactInformation({
  email,
  setEmail,
  phone,
  setPhone,
  address,
  setAddress,
  website,
  setWebsite,
}) {
  function handleEmailChange(e) {
    setEmail(e.target.value)
  }
  function handleWebsiteChange(e) {
    setWebsite(e.target.value)
  }
  function handlePhoneChange(e) {
    setPhone(e.target.value)
  }
  function handleAddressChange(e) {
    setAddress(e.target.value)
  }
  return (
    <>
      <h2 className="title">Contact information</h2>

      <div>
        <label for="email" className="title-input">
          Email adress:
        </label>
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
        <label for="phone" className="title-input">
          Phone number:
        </label>
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
        <label for="address" className="title-input">
          Address :
        </label>
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
        <label for="website" className="title-input">
          Website:
        </label>
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
      </div>
    </>
  )
}

export default ContactInformation
