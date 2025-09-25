import { Typography, List, ListItem } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((response) => setActivities(response.data));
  }, []);
  return (
    <>
      <Typography variant="h3">MeetUp's</Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.activityId}>{activity.title}</ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
