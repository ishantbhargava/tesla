import React from 'react'
import styled from 'styled-components'
import teslalogo from "../images/logo.svg"

function Header() {
  return (
    <Container>
     <a href=""><img src={teslalogo} /></a>
     <Menu>
      <p><a href="">Model S</a></p>
      <p><a href="">Model X</a></p>
      <p><a href="">Model Y</a></p>
      <p><a href="">Model 3</a></p>   
     </Menu>
     <RightMenu>
     <a href="">Shop</a>
     <a href="">Tesla Account</a>
     

     </RightMenu>

    </Container>
  )
}

export default Header

const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
top:0;
right:0;
left:0;

align-items:center;
padding:0 20px;


`

const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a {
text-transform:uppercase;

font-weight:600;
padding:0 10px;
flex-wrap:nowrap;
}
`
const RightMenu = styled.div`
a {
  text-transform:uppercase;
  
  font-weight:600;
  padding:0 10px;
  
  margin-right:10px;
  }
`