import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import EmployeeList from './EmployeeList.jsx';
import EmployeeReport from './EmployeeReport.jsx';
import EmployeeEdit from "./EmployeeEdit.jsx";
export default function Contents() {
  const NotFound = () => /*#__PURE__*/React.createElement("h1", null, "Page Not Found");

  return /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/employees",
    element: /*#__PURE__*/React.createElement(EmployeeList, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/edit/:id",
    element: /*#__PURE__*/React.createElement(EmployeeEdit, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/report",
    element: /*#__PURE__*/React.createElement(EmployeeReport, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Navigate, {
      replace: true,
      to: "/employees"
    })
  }), /*#__PURE__*/React.createElement(Route, {
    path: "*",
    element: /*#__PURE__*/React.createElement(NotFound, null)
  }));
}