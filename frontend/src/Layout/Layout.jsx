import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div  >
      <div>

      {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
