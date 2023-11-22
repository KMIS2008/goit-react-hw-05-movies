import { Outlet } from "react-router-dom";
import{Container,
       Header,
       Link} from "./AppLayout.styled";

const AppLayout=()=>{
    return (
    <Container>
        <Header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </nav>
        </Header>   

        <main>
            <Outlet/>
        </main>     
    </Container>
        
    )
}

export default AppLayout;