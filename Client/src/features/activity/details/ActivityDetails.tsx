import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import { useActivities } from "../../../lib/hooks/useActivities";
import { Link, useParams } from "react-router";

export default function ActivityDetails() {
  const { id } = useParams();
  const { activity } = useActivities(id);

  if (!activity) return <Typography>Loading...</Typography>;
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia
        component="img"
        src={`/images/categoryImages/${activity.category}.jpg`}
      />
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography variant="subtitle1" fontWeight="light">
          {activity.date}
        </Typography>
        <Typography variant="body1">{activity.description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to={`/manage/${activity.activityId}`}
          color="primary"
        >
          Edit
        </Button>
        <Button component={Link} to={"/activities"} color="inherit">
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}
