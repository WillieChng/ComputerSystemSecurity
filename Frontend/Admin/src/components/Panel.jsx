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
import CalendarIcon from '@mui/icons-material/CalendarToday';
import LoginIcon from '@mui/icons-material/Login';
import OverviewIcon from '@mui/icons-material/Dashboard';
import CustomerIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';


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
          <MenuItem
            icon={<LoginIcon style={{ fontSize: '30px'}} />}
            component={<Link to="login" />}> Login</MenuItem> 
            
          <SubMenu
            backgroundColor='none'
            icon={<OverviewIcon style={{ fontSize: '30px' }}/>} 
            label="Overview">
              <MenuItem component={<Link to="/summary" />} className='selection-effect'> Booking Summary </MenuItem>
              <MenuItem component={<Link to="/statistics" />} className='selection-effect'> Customer Statistics </MenuItem>
          </SubMenu>

          <SubMenu
            backgroundColor='none'
            icon={<CalendarIcon style={{ fontSize: '30px' }}/>} 
            label="Booking">
              <MenuItem component={<Link to="/new-booking" />} className='selection-effect'> New Booking </MenuItem>
              <MenuItem component={<Link to="/upcoming-booking" />} className='selection-effect'> Upcoming Booking </MenuItem>
              <MenuItem component={<Link to="/calendar" />} className='selection-effect'> Booking Calendar </MenuItem>
          </SubMenu>

          <SubMenu
            backgroundColor='none'
            icon={<CustomerIcon style={{ fontSize: '30px' }}/>} 
            label="Customer">
              <MenuItem component={<Link to="/profiles" />} className='selection-effect'> Customer Profiles </MenuItem>
              <MenuItem component={<Link to="/feedback" />} className='selection-effect'> Customer Feedback </MenuItem>
          </SubMenu>

          <SubMenu
            backgroundColor='none'
            icon={<SettingsIcon style={{ fontSize: '30px' }}/>} 
            label="Settings">
              <MenuItem component={<Link to="/user-roles" />} className='selection-effect'> User Roles </MenuItem>
              <MenuItem component={<Link to="/system-settings" />} className='selection-effect'> System Settings </MenuItem>
          </SubMenu>

          
          {/*Edit Based on the Format Given*/}

        </Menu>
      </Sidebar>
    </div>
    </div>
  );
}

