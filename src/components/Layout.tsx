import Navigation from "./Navigation";
import Wave from "./Wave";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      {/* <Navigation /> */}
      {children}
      <Wave />
    </div>
  );
};

export default Layout;
