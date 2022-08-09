import React from "react";

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>메뉴</div>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
