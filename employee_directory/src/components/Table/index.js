import React, { Component } from 'react'
import "./style.css";

class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         employees: [
            { id: 1, name: 'Michael Scott'},
            { id: 2, name: 'Dwight Schrute'},
            { id: 3, name: 'Jim Halpert'}
         ]
      }
   }
   renderTableData() {
    return this.state.employees.map((employee, index) => {
       const { id, name} = employee //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
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
          {/* <h1 id='title'>React Dynamic Table</h1> */}
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