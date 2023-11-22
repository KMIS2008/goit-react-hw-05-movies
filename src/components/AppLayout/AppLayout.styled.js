import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
margin: 0%, auto;
padding: ${p=>p.theme.spacing(4)};
`
export const Header = styled.header`
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