import React from 'react'
import Sidebar from './Sidebar';
import styled from 'styled-components';
import HomePage from './HomePage';
import Lab1 from './LABS/Lab1';
import Lab2 from './LABS/Lab2';
import Lab3 from './LABS/Lab3';
import Lab4 from './LABS/Lab4';
import Lab5 from './LABS/Lab5';
import Lab6 from './LABS/Lab6';
import A1 from './Assignments/A1';
import A2 from './Assignments/A2';
import A3 from './Assignments/A3';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Maindiv=styled.body`
display: flex;
flex-direction: row;
min-height: 100%;
position: absolute;
margin: 0;
width: 100%;
top: 0;
left: 0;
font-size: large;


background-color: #DCDCDC;

`



export default function Main() {
    return (
        <Router basename="/~bth645_211b16/">
            <Maindiv>
                <Sidebar/>  
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/Lab1' component={Lab1} />
                    <Route exact path='/Lab2' component={Lab2} />
                    <Route exact path='/Lab3' component={Lab3} />
                    <Route exact path='/Lab4' component={Lab4} />
                    <Route exact path='/Lab5' component={Lab5} />
                    <Route exact path='/Lab6' component={Lab6} />

                    <Route exact path='/A1' component={A1} />
                    <Route exact path='/A2' component={A2} />
                    <Route exact path='/A3' component={A3} />

                </Switch> 
                
            </Maindiv>
        </Router>

    )
}
