import React from 'react'
import styled from 'styled-components';

const Textdiv=styled.body`
padding: 10px;
`

const Styledlist=styled.ol`
& > li {
    margin: 10px;
}

`

const Bold=styled.p`
color: red;
padding: 0px;
`

const Footerdiv=styled.body`
color: red;
`

export default function HomePage() {
    return (
    

             <Textdiv>
                   
                       
                  
                   <h2>Home</h2>
                       <div>
                       <h1>Web Usability</h1>
                       
                       <Styledlist>
                           <li>Avoid using all capital letters</li>
                           <li>Avoid using bright colors</li>
                           <li>Avoid using all lower case letters</li>
                           <li>Avoid using Blue color behind any links</li>
                           <li>Avoid horizontal scrolling </li>
                           <li>Avoid using too many different font styles keep font formatting consistent</li>
                           <li>Avoid using blinking images and links</li>
                           <li>Avoid making your page very cluttery</li>
                           <li>Contrast: i did not use any low contrast between text and background of tex so it would be easy to read</li>
                           <li>Spacing between lines: I have spacing between lines to make it easier to read</li>
                       </Styledlist>

                       </div>

                       <Footerdiv>
                           <p>This page was last modified on 02/04/2021, 10:58:11 AM</p>
                       </Footerdiv>
              
               </Textdiv>
    )
}
