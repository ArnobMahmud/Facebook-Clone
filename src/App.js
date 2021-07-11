import "./App.css";
import Contact from "./components/Contact";
import SliverListSection from "./components/SliverListSection";
import HeaderSection from "./components/Header";
import SideBar from "./components/SideBar";
import Login from "./auth/Login";

function App() {
  const user = "null";
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <>
          <div className="root">
            <HeaderSection />
            <div className="app_body">
              <SideBar />
              <SliverListSection />
              <Contact />
            </div>
          </div>
        </>
      )}
    </>
  ); 
  
}

export default App;
