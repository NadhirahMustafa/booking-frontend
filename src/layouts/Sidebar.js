//WIP:to be added
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import React from "react";
import 'react-pro-sidebar/dist/css/styles.css';
import Create from '../pages/Create'

export default class Sidebar extends React.Component {
	render(){
		return(
			<ProSidebar>
	  <Menu iconShape="square">
	    <MenuItem href='../pages/Create'>Create</MenuItem>
	    <MenuItem href='../pages/Create'>List</MenuItem>	    
	  </Menu>
	</ProSidebar>
		)
	}
}