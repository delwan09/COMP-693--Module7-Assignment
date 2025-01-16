import React from 'react';
import { Badge, Button, Table, Card, Modal } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import EmployeeFilter from './EmployeeFilter.jsx';
import EmployeeAdd from './EmployeeAdd.jsx';

function EmployeeTable(props) {
  const {
    search
  } = useLocation();
  const query = new URLSearchParams(search);
  const q = query.get('employed');
  const employeeRows = props.employees.filter(employee => q ? String(employee.currentlyEmployed) === q : true).map(employee => /*#__PURE__*/React.createElement(EmployeeRow, {
    key: employee._id,
    employee: employee,
    deleteEmployee: props.deleteEmployee
  }));
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Card.Header, {
    as: "h5"
  }, "All Employees ", /*#__PURE__*/React.createElement(Badge, {
    bg: "secondary"
  }, employeeRows.length)), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(Card.Text, null, /*#__PURE__*/React.createElement(Table, {
    striped: true,
    size: "sm"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Extension"), /*#__PURE__*/React.createElement("th", null, "Email"), /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Date Hired"), /*#__PURE__*/React.createElement("th", null, "Currently Employed?"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, employeeRows)))));
}

class EmployeeRow extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteEmployee(this.props.employee._id);
    this.setState({
      modalVisible: false
    });
  }

  toggleModal() {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Link, {
      to: `/edit/${this.props.employee._id}`
    }, this.props.employee.name)), /*#__PURE__*/React.createElement("td", null, this.props.employee.extension), /*#__PURE__*/React.createElement("td", null, this.props.employee.email), /*#__PURE__*/React.createElement("td", null, this.props.employee.title), /*#__PURE__*/React.createElement("td", null, this.props.employee.dateHired.toDateString()), /*#__PURE__*/React.createElement("td", null, this.props.employee.currentlyEmployed ? 'Yes' : 'No'), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Button, {
      variant: "danger",
      size: "sm",
      onClick: this.toggleModal
    }, "X"), /*#__PURE__*/React.createElement(Modal, {
      show: this.state.modalVisible,
      onHide: this.toggleModal,
      centered: true
    }, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, "Delete Employee")), /*#__PURE__*/React.createElement(Modal.Body, null, " Are you sure you want to delete this employee?"), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      variant: "danger",
      className: "mt-4",
      onClick: this.toggleModal
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      variant: "success",
      className: "mt-4",
      onClick: this.handleDelete
    }, "Yes")))));
  }

}

export default class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: []
    };
    this.createEmployee = this.createEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    fetch('/api/employees').then(response => response.json()).then(data => {
      data.employees.forEach(employee => {
        employee.dateHired = new Date(employee.dateHired);
      });
      this.setState({
        employees: data.employees
      });
    }).catch(err => {
      console.log(err);
    });
  }

  createEmployee(employee) {
    fetch('/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    }).then(response => response.json()).then(newEmployee => {
      newEmployee.employee.dateHired = new Date(newEmployee.employee.dateHired);
      const newEmployees = this.state.employees.concat(newEmployee.employee);
      this.setState({
        employees: newEmployees
      });
    }).catch(err => {
      console.log(err);
    });
  }

  deleteEmployee(id) {
    fetch(`/api/employees/${id}`, {
      method: 'DELETE'
    }).then(response => {
      if (!response.ok) {
        console.log('Failed to delete employee');
      } else {
        this.loadData();
      }
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(EmployeeAdd, {
      createEmployee: this.createEmployee
    }), /*#__PURE__*/React.createElement(EmployeeFilter, null), /*#__PURE__*/React.createElement(EmployeeTable, {
      employees: this.state.employees,
      deleteEmployee: this.deleteEmployee
    }));
  }

}