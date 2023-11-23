import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
width: 1200px;
margin: 0%, auto;
padding: ${p=>p.theme.spacing(10)};
background-color: #efef1d;
`
export const Header = styled.header`
width: 900px;
margin: 0%, auto;
margin-bottom: ${p=>p.theme.spacing(4)};;
padding: ${p=>p.theme.spacing(4)};
border: solid 2px ${p=>p.theme.colors.darkblue};
box-shadow: 10px 5px 5px ${p=>p.theme.colors.darkblue};
`
export const Link = styled(NavLink)`

margin-left: ${p=>p.theme.spacing(4)};
font-size: 20px;

&:hover {
    color: ${p=>p.theme.colors.red};;
  }
`