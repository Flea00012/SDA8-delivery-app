import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RedeemIcon from '@material-ui/icons/Redeem';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';

import GoogleMap from '../pages/GoogleMap';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
    backgroundColor: '#fed8b1',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({ data }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const {
    id,
    status,
    eta,
    parcel_id,
    sender,
    verification_required,
    location_id,
    location_name,
    location_coordinate_latitude,
    location_coordinate_longitude,
    location_status_ok,
    user_phone,
    user_name,
    notes,
    last_updated,
  } = data;

  const longitude = data.location_coordinate_longitude;
  const latitude = data.location_coordinate_latitude;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleGeoLocationCLick = () => {
    return (
      <div>
        <Link to="/googlemap">
          <GoogleMap long={longitude} lat={latitude} />
        </Link>
      </div>
    );
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            P
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`Package for ${user_name}`}
      />
      <CardMedia className={classes.media} title="Package" />
      <CardContent>
        <RedeemIcon style={{ height: 150, width: '100%' }} />
        <Typography variant="body2" color="textSecondary" component="p">
          Locate Package on Map
        </Typography>
        <Link to="/location">
          <GpsFixedIcon
            style={{ height: 50 }}
            onClick={handleGeoLocationCLick}
          />
        </Link>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Package ID: {parcel_id}</Typography>
          <Typography paragraph>Package Sender: {sender}</Typography>
          <Typography paragraph>Expected Delivery time: {eta}</Typography>
          <Typography paragraph>Present location: {location_name}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
