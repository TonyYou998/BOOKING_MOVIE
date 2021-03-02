import React,{useEffect} from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ListCumRapVertical from "../../components/ListCumRapVertical"
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const useStyles=makeStyles({
    root:{
      padding:10, 
      // width:'200px',
    }
  });
  const classes=useStyles();
  return (
    <div
      role="tabpanel" 
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box  classes={{
          root:classes.root,
        }} p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ShowTime(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const {data}=props;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 const renderListCinema=(data)=>{
    if(data){
      
      return data.map((item,index)=>{
          return (
            <Tab label={item.maHeThongRap} {...a11yProps(0)} />
            
          )

      })
    }

  }
  const renderListCumRapVertical=(data)=>{
   
    return <ListCumRapVertical data={data}/>

  }
  const renderTabPanel=(data)=>{
    if(data){
      
      return data.map((item,index)=>{
        
          return (
           
             <TabPanel value={value} index={index}>
                {renderListCumRapVertical(item.cumRapChieu)}
                
              </TabPanel>
          )

      })
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
         
          {renderListCinema(data && data.heThongRapChieu)}
        </Tabs>
      </AppBar>
     
      {renderTabPanel(data && data.heThongRapChieu)}
    </div>
  );
}