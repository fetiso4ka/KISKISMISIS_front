import React from "react";
import "./styles.css";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

//put your google calendar api key here
const API_KEY = "AIzaSyC9b7uLUYWu7aKuKh-oigoLtag_QcCwkOk";

//replace calendar id with one you want to test

let calendars = [
  { calendarId: "89f25550f7faf78d9d470bd0c4b23b8ba28f6b78821af4d60ff47facc1a715b7@group.calendar.google.com" }
];

let styles = {
  //you can use object styles
  calendar: {

    borderWidth: "px" //make outer edge of calendar thicker
  },

  //you can also use emotion's string styles (remember to add the line 'import { css } from "@emotion/react";')
  today: css`
    /* highlight today by making the text red and giving it a red border */
    color: red;
    border: 1px solid red;
  `
};

export default function App() {
  return (
    <div className="App">
      <body>
        <div
          style={{
            width: "2000px",
            paddingTop: "100px",
            paddingBottom: "50px",
            margin: "auto",
            maxWidth: "2000px"
          }}
        >
          <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
        </div>
      </body>
    </div>
  );
}
