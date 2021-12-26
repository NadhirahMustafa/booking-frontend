import React, { useState } from "react";
import axios from "axios";
import "../styles/page.css";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Label
} from "reactstrap";
const {REACT_APP_DELETEURL} = process.env;

const DeletePage = (props) => {
  const [id, setID] = useState("");
  const [post, setPost] = React.useState(null);
  function refreshPage(){
	  window.location.reload(true);
  }

  const deleteBooking = async () =>{
	console.log("req::"+id)
	axios
	.delete(REACT_APP_DELETEURL+"/"+id)
	.then((response) => {
		console.log("response::"+JSON.stringify(response.data));
		alert("Your appointment has been cancelled");
		setPost(response.data);
		refreshPage();
	})
	.catch((e) => {
		alert('Request failed!\nPlease contact administrator');
		console.log("ERROR:::"+e.response.data.error.message)
	});
  }

  return (
      <Card>
      <CardHeader>
        <CardTitle tag="h4" className="page-title">Cancel Appointment</CardTitle>
        <h6>Delete your booking ID here to cancel your appointment</h6>
      </CardHeader>

      <CardBody>
      <div>
        <Label for="order-id" className="page-label">
          Booking ID: {" "}
          <input
            type="text"
            name="id"
            className="page-input"
            value={id}
            onChange={(e) => setID(e.target.value)}
          />
        </Label>
        </div>

        <div>
        <Button onClick={deleteBooking} style = {{width: 120}} className="page-button">
          Delete{" "}
        </Button>
        </div>
      </CardBody>
    </Card> 
  );
};
  
export default DeletePage;