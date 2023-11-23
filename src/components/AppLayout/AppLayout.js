import { Suspense } from "react";
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
        <Suspense fallback={<div>LOADING PAGE...</div>}>
             <Outlet/>
        </Suspense>
           
        </main>     
    </Container>
        
    )
}

export default AppLayout;