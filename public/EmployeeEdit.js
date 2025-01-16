import React from "react";
import { Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';
export default class EmployeeEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      employee: [],
      alertVisible: false,
      alertColor: 'success',
      alertMessage: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const id = window.location.pathname.split('/')[2];
    fetch(`/api/employees/${id}`).then(response => response.json()).then(data => {
      data.employee.dateHired = new Date(data.employee.dateHired);
      this.setState({
        employee: data.employee
      });
    }).catch(err => {
      console.log(err);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.employeeUpdate;
    let id = form.id.value;
    let name = form.name.value;
    let extension = form.extension.value;
    let email = form.email.value;
    let title = form.title.value;
    let currentlyEmployed = form.currentlyEmployed.checked;
    let url = `/api/employees/${id}`;
    fetch(url, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        "name": name,
        "extension": extension,
        "email": email,
        "title": title,
        "currentlyEmployed": currentlyEmployed
      })
    }).then(response => response.json()).then(data => {
      this.setState({
        alertVisible: true,
        alertMessage: data.msg
      });
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Card.Header, {
      as: "h5"
    }, "Edit ", this.state.employee.name), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(Card.Text, null, /*#__PURE__*/React.createElement(Container, {
      fluid: true
    }, /*#__PURE__*/React.createElement("form", {
      name: "employeeUpdate",
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
      md: 2
    }, "ID:"), /*#__PURE__*/React.createElement(Col, {
      md: "auto"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "id",
      readOnly: "readOnly",
      defaultValue: this.state.employee._id
    }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
      md: 2
    }, "Name:"), /*#__PURE__*/React.createElement(Col, {
      md: "auto"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "name",
      defaultValue: this.state.employee.name
    }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
      md: 2
    }, "Extension:"), /*#__PURE__*/React.createElement(Col, {
      md: "auto"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "extension",
      defaultValue: this.state.employee.extension
    }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
      md: 2
    }, "Email:"), /*#__PURE__*/React.createElement(Col, {
      md: "auto"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "email",
      defaultValue: this.state.employee.email
    }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
      md: 2
    }, "Title:"), /*#__PURE__*/React.createElement(Col, {
      md: "auto"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "title",
      defaultValue: this.state.employee.title
    }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
      md: 2
    }, "Date:"), /*#__PURE__*/React.createElement(Col, {
      md: "auto"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "dateHired",
      readOnly: "readOnly",
      defaultValue: this.state.employee.dateHired
    }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
      md: 2
    }, "Currently Employed"), /*#__PURE__*/React.createElement(Col, {
      md: "auto"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      name: "currentlyEmployed",
      className: "mt-2",
      defaultChecked: this.state.employee.currentlyEmployed
    }))), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      variant: "primary",
      size: "sm",
      className: "my-3"
    }, "Update Employee"), /*#__PURE__*/React.createElement(Alert, {
      variant: this.state.alertColor,
      show: this.state.alertVisible,
      onClose: e => this.setState({
        alertVisible: false
      }),
      dismissible: true
    }, this.state.alertMessage))))));
  }

}