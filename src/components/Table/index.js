import React, { Component } from 'react'
//import React from 'react'
import "./style.css";
import employees from "../employees.json";

class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = {employees};
   }
   renderTableData() {
    return this.state.employees.map((employee, index) => {
       const { id, name, department} = employee //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{department}</td>
          </tr>
       )
    })
 }

 renderTableHeader() {
    let header = Object.keys(this.state.employees[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

 render() {
    return (
       <div>
          <table id='employees'>
             <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
}

export default Table //exporting a component make it reusable and this is the beauty of react