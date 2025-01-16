import React from 'react';
import { Button, Container, Row, Col, Modal } from 'react-bootstrap';
export default class EmployeeAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false // Correctly initialize state

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleHideModal = this.handleHideModal.bind(this);
  } // Method to show the modal


  handleShowModal() {
    this.setState({
      modalVisible: true
    });
  } // Method to hide the modal


  handleHideModal() {
    this.setState({
      modalVisible: false
    });
  } // Handle form submission


  handleSubmit(e) {
    const form = document.forms.employeeAdd;
    const employee = {
      name: form.name.value,
      extension: form.ext.value,
      email: form.email.value,
      title: form.title.value
    };
    this.props.createEmployee(employee);
    form.name.value = '';
    form.ext.value = '';
    form.email.value = '';
    form.title.value = '';
    this.setState({
      modalVisible: false
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "addEmployee"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      onClick: this.handleShowModal
    }, "New Employee")), /*#__PURE__*/React.createElement(Modal, {
      show: this.state.modalVisible,
      onHide: this.handleHideModal // Ensure the modal hides on close

    }, /*#__PURE__*/React.createElement(Modal.Header, {
      closeButton: true
    }, /*#__PURE__*/React.createElement(Modal.Title, null, "Add New Employee")), /*#__PURE__*/React.createElement(Modal.Body, null, /*#__PURE__*/React.createElement(Container, {
      fluid: true
    }, /*#__PURE__*/React.createElement("form", {
      name: "employeeAdd"
    }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
      md: 3
    }, "Name:"), /*#__PURE__*/React.createElement(Col, {
      md: "auto"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "name"
    }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
      md: 3
    }, " Extension:"), /*#__PURE__*/React.createElement(Col, {
      md: "auto"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "ext",
      maxLength: 4
    }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
      md: 3
    }, " Email:"), /*#__PURE__*/React.createElement(Col, {
      md: "auto"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "email"
    }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
      md: 3
    }, "Title:"), /*#__PURE__*/React.createElement(Col, {
      md: "auto"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "title"
    })))))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      variant: "success",
      size: "sm",
      onClick: this.handleSubmit
    }, "Add Employee"))));
  }

}