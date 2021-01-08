import React from 'react'
import sendImage from '../../assets/img/send.svg';

export default function CheckinForm() {
  return (
    <div className="checkin-wrapper">
    <form className="checkin">
      <div className="form-group">
        <label className="color-primary font-noraml">Check In Date</label>
        <input type="text" placeholder="check in date" />
      </div>
      <div className="form-group">
        <label className="text-primary tfont-normal">Check In Date</label>
        <input type="text" placeholder="check in date" />
      </div>
      <div className="form-group">
        <label className="text-primary font-normal">Rooms</label>
        <input type="text" placeholder="rooms" />
      </div>
      <div className="form-group button-wrapper">
        <button className="button submit-button bg-primary" type="button" placeholder="rooms">
          <img src={sendImage} alt="" />
        </button>
      </div>
    </form>
  </div>
  )
}
