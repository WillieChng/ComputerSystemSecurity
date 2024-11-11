import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import BarChartIcon from '@mui/icons-material/BarChart';
import './Panel.css';
import TopBar from "./TopBar.jsx";
import Logo from '../public/collabkita-logo.png';
import HomeIcon from '@mui/icons-material/Home';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';

export default function Panel() {
  const [collapsed, setCollapsed] = React.useState(false);  
  return (
    <div>
    <TopBar collapsed={collapsed} />
    {/* Do not Fucking Touch this or I will send you to see God personally myself*/}
    <div className='main-effect'>
      <Sidebar backgroundColor='none' collapsed={collapsed}>
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // level - the menu item's level (0 for root, 1 for submenu items, etc.)
              // active - true if the menu item is currently selected
              // disabled - true if the menu item is disabled
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
              {!collapsed && (
                <div className='account-menu-tab'>
                  <img
                    src={Logo}
                    alt="Account"
                    className='account-menu-tab-image'
                  />
                  <span>
                    <h2> Main Menu </h2>
                  </span>
                </div>
                )}
            </div>
            )}


          {/* This SubMenu is for Template For people who wants to do submenu
              I cannot find ways to add selection-effect in the MenuItem so yeahhhh 
              please implement it for every submenu


              please check the latest icon here and import:
              https://mui.com/material-ui/material-icons/

            */}
          
          {/*Edit Based on the Format Given*/}
          <MenuItem 
            icon={<HomeIcon style={{ fontSize: '30px' }} />} 
            component={<Link to="/" />}>  Home </MenuItem>
          <MenuItem 
            icon={<TableRestaurantIcon style={{ fontSize: '30px' }} />} 
            component={<Link to="booking" />}> Booking </MenuItem>
          <MenuItem 
            icon={<InfoIcon style={{ fontSize: '30px' }} />} 
            component={<Link to="aboutus" />}> About Us </MenuItem>
        </Menu>
      </Sidebar>
    </div>
    </div>
  );
}
