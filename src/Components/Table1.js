import React from "react";



function Table(){
 return( 

    <div className ='Container'>
 <table >
    <thead>
        <tr>
            <th>Id </th>
            <th>Name </th>
            <th>Ph.No</th>
            <th>Clear</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>surya</td>
            <td>909909099</td>
            <button>Delete</button>
        </tr>
        <tr>
            <td>2</td>
            <td>Ajith</td>
            <td>909909099</td>
            <button>Delete</button>
        </tr>
        <tr>
            <td>2</td>
            <td>Vijay</td>
            <td>909909099</td>
            <button>Delete</button>
        </tr>
    </tbody>
    
    
    </table> </div>
)} export default Table;