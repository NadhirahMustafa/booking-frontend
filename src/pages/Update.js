import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import "../styles/page.css";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Label
} from "reactstrap";
const {REACT_APP_UPDATEURL} = process.env;

const UpdatePage = (props) => {
  const [id, setID] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [post, setPost] = React.useState(null);
  function refreshPage(){
	  window.location.reload(true);
  }

  const updateBooking = async () =>{
	console.log("req::"+date)
	axios
	.put(REACT_APP_UPDATEURL+"/"+id, {
		date: moment(date).format("YYYY-MM-DD"),
		time: time 
	})
	.then((response) => {
		console.log("response::"+JSON.stringify(response.data));
		alert("Update Success!!\n"+JSON.stringify(response.data));
		setPost(response.data);
		refreshPage();
	})
	.catch((e) => {
    alert("Request failed!\n" + e.response.data.error.message);
    console.log("ERRORRR:::" + e.response.data.error.message);
  });
  }

  return (
      <Card>
      <CardHeader>
        <CardTitle tag="h5" className="page-title">Update Appointment Details</CardTitle>
      </CardHeader>

      <CardBody>
      <div>
        <Label  for="order-id" className="update-label">
          Booking ID: {" "}
        </Label>
          <input
            type="text"
            name="id"
            className="page-input"
            value={id}
            onChange={(e) => setID(e.target.value)}
          />
        </div>

        <div>
        <Label for="exp-date" className="ml-5" style={{ width: 120 }}>
          Appointment Date: {" "}
          <input
            type="date"
            name="app-date"
            placeholder="yyyy-mm-dd"
            className="page-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Label>
        </div>

        <div>
        <Label for="app-time" className="ml-5" style = {{width: 120}}>
          Appointment Time: {" "}
          <select name="app-time" className="page-input"value={time} onChange={(e) => setTime(e.target.value)}>
            <option value="" disabled hidden>
              Select Time
            </option>
            <option value="9-10">9am-10am</option>
            <option value="10-11">10am-11am</option>
            <option value="11-12">11am-12pm</option>
            <option value="12-13">12pm-1pm</option>
            <option value="13-14">1pm-2pm</option>
            <option value="14-15">2pm-3pm</option>
            <option value="15-16">3pm-4pm</option>
            <option value="16-17">4pm-5pm</option>
            <option value="17-18">5pm-6pm</option>
          </select>
        </Label>
        </div>

        <div>
        <Button className="page-button" onClick={updateBooking} disabled={!id || !time || !date}>
          Update{" "}
        </Button>
        </div>
      </CardBody>
    </Card> 
  );
};
  
export default UpdatePage;