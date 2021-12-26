import React from "react";
import axios from "axios";
import moment from "moment";
import "../styles/table.css";
import "../styles/page.css";
import { Card, CardBody, CardTitle, CardHeader } from "reactstrap";
import "../styles/table.css";
const { REACT_APP_GETLIST } = process.env;

const ListPage = () => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(REACT_APP_GETLIST).then((response) => {
      console.log("list::", response.data);
      setPost(response.data);
    });
  }, []);

  function formatTime(time) {
    let timeUpdate;
    switch (time) {
      case "9-10":
        timeUpdate = "9am-10am";
        break;
      case "10-11":
        timeUpdate = "10am-11am";
        break;
      case "11-12":
        timeUpdate = "11am-12pm";
        break;
      case "12-13":
        timeUpdate = "12pm-1pm";
        break;
      case "13-14":
        timeUpdate = "1pm-2pm";
        break;
      case "14-15":
        timeUpdate = "2pm-3pm";
        break;
      case "15-16":
        timeUpdate = "3pm-4pm";
        break;
      case "16-17":
        timeUpdate = "4pm-5pm";
        break;
      case "17-18":
        timeUpdate = "5pm-6pm";
        break;

      default:
        break;
    }
    return timeUpdate;
  }
  console.log("arrData::" + post);
  var tableData;
  if (post) {
    tableData = post.map(function (obj) {
      return (
        <tr key={obj._id}>
          <td>{obj._id}</td>
          <td>{obj.user}</td>
          <td>{moment(obj.date).format("YYYY-MM-DD")}</td>
          <td>{formatTime(obj.time)}</td>
        </tr>
      );
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4" className="page-title">
          Booking List
        </CardTitle>
        <h6>Track your appointment here</h6>
      </CardHeader>
      <table classname="App">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Name</th>
            <th>Booking Date</th>
            <th>Booking Time</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    </Card>
  );
};
export default ListPage;
