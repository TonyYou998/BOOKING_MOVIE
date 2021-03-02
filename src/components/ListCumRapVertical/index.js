import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Link} from "react-router-dom";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const useStyles=makeStyles({
    root:{
      padding:0, 
      // width:'250px',
    }
  });
  const classes=useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other} style={{width:"50%",overflowY:"scroll"}}
    >
      {value === index && (
        <Box classes={{
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function ListCumRapVertical(props) {
  const classes = useStyles();
  const {data}=props;
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const renderListCumRap=(data)=>{
      
      if(data){
          return data.map((item,index)=>{
              return(
                   <Tab label={item.tenCumRap} {...a11yProps(0)} />
              )

          })
      }

  }
  const renderTime=(data)=>{
        if(data)  {
            
            return data.map((item,index)=>{
                console.log(item);
                    return(
                        <Link to={`/checkout/${item.maLichChieu}`} className="btn btn-success m-1" style={{fontSize:"12px",width:"90%"}}>
                            {item.ngayChieuGioChieu}
                        </Link>
                    )

            })
        }
    
  }
  const renderTabPanel=(data)=>{
    if(data){
      
      return data.map((item,index)=>{
     
          return (
           
              <TabPanel value={value} index={index}>
              
                 {renderTime(item.lichChieuPhim)}
                
               </TabPanel>
          )

      })
    }
  }
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
       
        {renderListCumRap(data)}
      </Tabs>
      {renderTabPanel(data)}
    </div>
  );
}
