import styled from "styled-components"


export const Container = styled.div`
display: flex;
padding: ${p=>p.theme.spacing(2)};
gap: ${p=>p.theme.spacing(2)};
`

export const InfoFilm = styled.div`
line-height: 2;
text-align: justify;
`

export const GenreInfo = styled.ul`
display: flex;
gap:${p=>p.theme.spacing(2)};
`

export const Information = styled.div`
padding: ${p=>p.theme.spacing(2)};
line-height: 2;
`