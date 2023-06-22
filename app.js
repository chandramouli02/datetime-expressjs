const express = require("express");

const app = express();

// api get to send todays date as response..
console.log(new Date());
app.get("/", (request, response) => {
  let todayDate = new Date();
  let dayMonthYear = `${todayDate.getDate()}-${todayDate.getMonth()}-${todayDate.getFullYear()}`;
  console.log(dayMonthYear);
  response.send(`${dayMonthYear}`);
});

app.listen(3002);

module.exports = app;
