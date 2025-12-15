import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Careers from "./pages/Careers";
import UnderConstruction from "./components/UnderConstruction";

function App() {

  const Layout = () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" ,backgroundColor:'var(--bg-primary)'}}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Outlet className='' />
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/app-update",
        element: <UnderConstruction />,
      },

    ]
  }]);
  return <RouterProvider router={router} />;

}


export default App