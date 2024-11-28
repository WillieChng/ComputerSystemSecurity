import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
// import BarChartIcon from '@mui/icons-material/BarChart';
import './Panel.css';
import TopBar from "./TopBar.jsx";
import Logo from '../public/collabkita-logo.png';
import HomeIcon from '@mui/icons-material/Home';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import InfoIcon from '@mui/icons-material/Info';


export default function Panel({onLogout}) {
  const [collapsed, setCollapsed] = React.useState(false);  

  return (
    <div>
    <TopBar collapsed={collapsed} onLogout={onLogout} />
    {/* Do not Fucking Touch this or I will send you to see God personally myself*/}
    {/* I kinda did tho */}
    <div className='main-effect'>
      <Sidebar backgroundColor='none' collapsed={collapsed}>
        <Menu
          menuItemStyles={{
            button: ({ active, disabled }) => {
              return {
                backgroundColor: active ? '#13395e' : undefined, // Example: Change background on active
                color: disabled ? '#f5f5f5' : undefined, // Example: Change color on disabled

                '&:hover': {
                  backgroundColor: '#7cebaf', // Change background color on hover
                  color: 'white', // Change text color on hover
                },
              };
            }
          }}
          backgroundColor='none'>
          <div className='panel-collapsible'> 
            <button className='panel-collapsible-button' 
              //Icon for the collapsed function         
              onClick={() => setCollapsed(!collapsed)}
            >
              <MenuIcon style={{ fontSize: '38px' }}/>
            </button>
          </div>
          {!collapsed && (
          <div className='account-menu'>
            <div className='account-menu-tab'>
              <img src={Logo} alt="Account" className='account-menu-tab-image' />
              <span>
                <h2> Main Menu </h2>
              </span>
            </div>
          </div>
        )}
          
          <MenuItem 
            icon={<HomeIcon style={{ fontSize: '30px' }} className='menu-icon' />} 
            component={<Link to="/" />} className='menu-item'>  Home </MenuItem>
          <MenuItem 
            icon={<TableRestaurantIcon style={{ fontSize: '30px' }} className='menu-icon' />} 
            component={<Link to="booking" />} className='menu-item'> Booking </MenuItem>
          <MenuItem 
            icon={<InfoIcon style={{ fontSize: '30px' }} className='menu-icon' />} 
            component={<Link to="about-us" />} className='menu-item'> About Us </MenuItem>
        </Menu>
      </Sidebar>

    </div>
    </div>
  );
}
