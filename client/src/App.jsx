import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Careers from "./pages/Careers";
import Investors from "./pages/Investors";
import Profile from "./pages/Profile";
import Reports from "./pages/Reports";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCancelled from "./pages/PaymentCancelled";
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
        path: "/investors",
        element: <Investors />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/payment/success",
        element: <PaymentSuccess />,
      },
      {
        path: "/payment/cancelled",
        element: <PaymentCancelled />,
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