import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkButton = styled(Link)`
width: 150px;
display: block;
padding:  ${p=>p.theme.spacing(4)};
font-size: 25px;
border: thick double #32a1ce; 
border-radius: 10px;
`