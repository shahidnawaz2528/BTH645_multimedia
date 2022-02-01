import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Maindiv=styled.div`

min-height: 100%;


`

export default function Sidebar() {
    return (
        <Maindiv>
        <ProSidebar>
            <Menu>
                <MenuItem><h3>Shahid Nawaz's Matrix</h3></MenuItem>
                <MenuItem><Link to="/"/>Home</MenuItem>
                <SubMenu title="Labs">
                    <MenuItem>
                     <Link to="/Lab1"/> 
                     Lab-1
                     </MenuItem>
                    <MenuItem>
                    <Link to="/Lab2"/> 
                    Lab-2</MenuItem>
                    <MenuItem>
                    <Link to="/Lab3"/> 
                    Lab-3</MenuItem>
                    <MenuItem>
                    <Link to="/Lab4"/> 
                    Lab-4</MenuItem>
                    <MenuItem>
                    <Link to="/Lab5"/> 
                    Lab-5</MenuItem>
                    <MenuItem>
                    <Link to="/Lab6"/> 
                    Lab-6</MenuItem>
                </SubMenu>

                <SubMenu title="Assignments">
                    <MenuItem>
                    <Link to="/A1"/> 
                    Assignment-1</MenuItem>
                    <MenuItem>
                    <Link to="/A2"/> 
                    Assignment-2</MenuItem>
                    <MenuItem>
                    <Link to="/A3"/> 
                    Assignment-3</MenuItem>
                </SubMenu>
            </Menu>

        </ProSidebar>
        </Maindiv>
    )
}
