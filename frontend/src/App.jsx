import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { useUser } from "./hooks/useUser";
import { useEffect } from "react"; // Import useEffect
import Contact from "./components/Aboutus";
import Footer from "./components/Footer";

function App() {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <>
      {user ? (
        <>
          <Header />
          <Outlet />
          <Contact />
          <Footer />
        </>
      ) : (
        // Nothing needs to be rendered here, the redirect happens in useEffect
        null
      )}
    </>
  );
}

export default App;