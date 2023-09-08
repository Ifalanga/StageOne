
const express = require('express');
const moment = require('moment');
const app = express();

app.get('/api', (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  // Get the current day of the week
  const current_day = moment().utc().format('dddd');

  // Get the current UTC time with a +/-2 minute window
  const current_time = moment().utc().format('YYYY-MM-DDTHH:mm:ss[Z]');

  // Define GitHub file and repo URLs
  const github_file_url = 'https://github.com/Ifalanga/StageOne/blob/main/slack-info-endpoint/internship_StageOne.js';
  const github_repo_url = 'https://github.com/Ifalanga/StageOne';

  // Create the response JSON
  const response_json = {
    slack_name,
    current_day,
    utc_time: current_time,
    track,
    github_file_url,
    github_repo_url,
    status_code: 200,
  };

  res.json(response_json);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
