//import components you want to be in the layout

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Layout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        {/*enter the layout comp here */}
        <NavBar />
        <div className="app-container">
          <Component {...props} />
        </div>
        <Footer />
      </div>
    );
  };
export default Layout;
