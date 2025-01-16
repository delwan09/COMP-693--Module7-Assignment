import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
export default function EmployeeFilter() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Card.Header, {
    as: "h5"
  }, "Filter"), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(Card.Text, null, "Currently Employed:", ' ', /*#__PURE__*/React.createElement("select", {
    value: searchParams.get('employed') || '',
    onChange: e => navigate(e.target.value ? `/employees?employed=${e.target.value}` : `/employees`)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "All"), /*#__PURE__*/React.createElement("option", {
    value: "true"
  }, "Employed"), /*#__PURE__*/React.createElement("option", {
    value: "false"
  }, "Not Employed")))));
}