import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Contents from "./Contents.jsx";

function NavBar() {
  return /*#__PURE__*/React.createElement(Navbar, {
    bg: "dark",
    variant: "dark"
  }, /*#__PURE__*/React.createElement(Navbar.Brand, {
    href: "/"
  }, "Employee Management Application"), /*#__PURE__*/React.createElement(Nav, null, /*#__PURE__*/React.createElement(Nav.Link, {
    href: "/employees"
  }, "All Employees"), /*#__PURE__*/React.createElement(Nav.Link, {
    href: "/report"
  }, "Reports")));
}

export default function Page() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavBar, null), /*#__PURE__*/React.createElement(Contents, null));
}