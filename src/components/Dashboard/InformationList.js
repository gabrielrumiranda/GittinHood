import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FollowLists from './FollowLists'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: '#0F1319',
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    height: 270,
  },
  tabs: {
    color: '#FAFAFA',
    '&:hover': {
      color: theme.palette.secondary.dark,
      opacity: 1,
    },
    '&$selected': {
      color: theme.palette.secondary.dark,
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: theme.palette.secondary.dark,
    },
  },
  tabPanel: {
    width: 500,
    height: 270,
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  },
}));

export default function InformationList(props) {
  const classes = useStyles();
  const theme = useTheme();
  const followers_url = props.userData.followers_url;
  const following_url = props.userData.followers_url;
  const [value, setValue] = React.useState(0);
  const [followersData, setFollowersData] = useState([])
  const [followingData, setFollowingData] = useState([]);
  
  useEffect(() => {
    axios.get(followers_url)
    .then(res => {
      if(res.status === 200){
        setFollowersData(...res.data);
      }
    })
  },[followers_url])

  useEffect(() => {
    axios.get(following_url)
    .then(res => {
      if(res.status === 200){
        setFollowingData(...res.data);
      }
    })
  },[following_url])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          variant="fullWidth"
          indicatorColor="secondary"
          aria-label="full width tabs example"
        >
          <Tab className={classes.tabs} label="Followers" {...a11yProps(0)} />
          <Tab className={classes.tabs} label="Following" {...a11yProps(1)} />
          <Tab className={classes.tabs} label="Stars" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <SwipeableViews
        className={classes.tabPanel}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <FollowLists listData={followersData} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <FollowLists listData={followingData}  />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
