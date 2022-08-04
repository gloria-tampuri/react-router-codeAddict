import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Home = () => {
  return (
   <>
  

   <section className='section'>
     <h1>This is the Home</h1>
     <Outlet/>
    </section>
   
   </>
  );
};
export default Home;
