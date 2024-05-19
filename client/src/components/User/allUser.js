import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import ReactToPrint from "react-to-print";
import{ useRef } from 'react';
function AllUser() {
    const [tables, setTables] = useState();
    const [searchkey, setsearchkey] = useState('');
    const componentRef = useRef();



    useEffect(() => {
           axios.get('http://localhost:5000/register/all-user').then(res => {
               setTables(res.data.users)
               console.log(res.data.users)

               
           })


       },[])


       const deleteTable = (e) =>{

        const tableId = e.target.id;

        axios.delete(`http://localhost:5000/register/delete/${tableId}`).then((res) => {
            console.log(res.data)
            alert('User Deleted')

            axios.get('http://localhost:5000/register/all-user/').then(res => {
            setTables(res.data.users)
            console.log(res.data.users)
        })



        })

    }

    const filterPackages = async (e) => {
        console.log(searchkey)

        const response = await axios.get(
            'http://localhost:5000/register/all-user'
          );
        const  filteredPackages = response.data.users.filter((users) =>
            users.name.toLowerCase().includes(searchkey)
          );
          if (filteredPackages.length > 0) {
            setTables(filteredPackages);
          }
            else{
                alert("Search Not Found")
            }


    }
    
  return (
    <div  className="container">

    <h1>All Users</h1>
    <div >

    <div  className="row mb-2">

 <input type="text" className="form-control col-4 mt-1"  onChange={(e) => {setsearchkey(e.target.value)} }
                 placeholder="Search User"   style={{ width: "200px", borderRadius: "10px"}} />
                <div className="col-6 col-md-4">
                 <button className="btn btn-secondary mt-1" style={{marginLeft: "1px"}}
                 onClick={()=>filterPackages(searchkey)}>Search</button>
                <ReactToPrint
                 trigger={() => <button className="btn btn-danger ms-3">Print this out!</button>}
                 content={() => componentRef.current}
               />
                 </div>
                 
                 {/* <div className="col-6 col-md-4">
                    <a href={"/addtable"}>
                    <button className="btn btn-success mt-1" >Add Table</button></a>
                    </div> */}


</div>

    </div>


    <Table striped bordered hover  ref={componentRef}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Delete User</th>
                    </tr>

                </thead>
                <tbody>
                    {tables && tables.map((table , index) => (
                        <tr key={table.name} >
                            <td>{index+1}</td>

                            <td> <a style={{textDecoration: "none", fontWeight:"bold" , color: "black"}} href={`/view/${table._id}`}>
                                {table.name} </a></td>
                            <td>{table.email}</td>
                            <td>{table.mobile}</td>
                            <td>
                                
&nbsp;

                                    
                                
                                <a >
                                    <button id={table._id}
                                    onClick={(e)=> deleteTable(e)}
                                    className="btn btn-danger"> Delete</button>
                                </a>
                                
                            </td>
                        </tr>

                    ))}

                </tbody>

            </Table>


        


        
    </div>
  )
}

export default AllUser