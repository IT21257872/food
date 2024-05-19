import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { If , Then, Else } from 'react-if-elseif-else-render';

function MyInquiries() {
    const [inquiries, setInquiries] = useState();

    const [id,setId] = useState();
    

    


    if (localStorage.getItem("token") == null){

        alert("Please Login")
        window.location.replace("/login")
  
  
    }



    useEffect((e) => {
        //Runs on every render 

        console.log("useEffect Called")
        
        const len = localStorage.getItem("token").length

        let result = localStorage.getItem("token").slice(1,len-1)
        const abc = {token:result}
        
        
        axios.post('http://localhost:5000/register/view', abc).then(res=>{
           
            
                setId(res.data.userId)
                console.log(res.data.userId)
                const ids = res.data.userId
        
        axios.get(`http://localhost:5000/inquiry/book/${ids}`).then(res => {
         
         if(res.data.length != 0){
              setInquiries(res.data)
         }else{
           
            
         }

            console.log(res.data)

            
        })
                
              
            
        })
        
        
        
        .catch((err)=>{
            alert(err);
        })
  
    },[]);


    const deleteInquiry = (e) => {

        const inquiryId = e.target.id;

        axios.delete(`http://localhost:5000/inquiry/${inquiryId}`).then((res) => {
            console.log(res.data)
            alert('Inquiry Deleted Successfully')
            window.location.reload()

            
        })
    }




    

  return (
    <div>
          {inquiries && inquiries.map((inquiry, index) => (
                <section id="select">
                    <div className="rt-container">
                        <div className="col-rt-12">
                            <div className="Scriptcontent">
                                <div className="student-profile py-4">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="card shadow-lg">
                                                    <div className="card-header bg-transparent border-3">
                                                        <h3 className="mb-0"><i className="far fa-clone pr-1"></i> &nbsp; Inquiry Details</h3>
                                                    </div>
                                                    &nbsp;
                                                    <div className="card-body pt-0">
                                                        <table className="table">
                                                            <tr>
                                                                <th width="30%"><i class="fa fa-user" aria-hidden="true"></i> &nbsp;Name</th>
                                                                <td width="2%">:</td>
                                                                <td>{inquiry.name}</td>
                                                            </tr>
                                                            &nbsp;
                                                            <tr>
                                                                <th width="30%"><i class="fa fa-phone" aria-hidden="true"></i> &nbsp;Phone Number</th>
                                                                <td width="2%">:</td>
                                                                <td>+{inquiry.phone}</td>
                                                            </tr>
                                                            &nbsp;
                                                            <tr>
                                                                <th width="30%"><i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;Email</th>
                                                                <td width="2%">:</td>
                                                                <td>{inquiry.email}</td>
                                                            </tr>
                                                            &nbsp;
                                                            <tr>
                                                                <th width="30%"><i class="fa fa-comment" aria-hidden="true"></i> &nbsp;Inquiry</th>
                                                                <td width="2%">:</td>
                                                                <td>{inquiry.inq}</td>
                                                            </tr>
                                                            &nbsp;
                                                            <tr>
                                                                <th width="30%"><i class="fas fa-eye" aria-hidden="true"></i> &nbsp;Status</th>
                                                                <td width="2%">:</td>
                                                                <td>
                                                                   
                                                                    {inquiry.adreply == "Our team will response to your inquiry soon" ?
                                                                     <a>
                                                                     <button className="btn btn-danger btn-sm" type="button"  >
                                                                         <i className="fa fa-times" aria-hidden="true"></i> &nbsp;
                                                                         Haven't Responded
                                                                     </button>
                                                                 </a>
                                                                 :
                                                                 <a>
                                                                 <button className="btn btn-success btn-sm" type="button"  >
                                                                     <i className="fa fa-check" aria-hidden="true"></i> &nbsp;
                                                                     Response Added
                                                                 </button>
                                                             </a>


                            }
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="card-c shadow-sm border rounded shadow-lg">
                                                    <div className="card-header bg-transparent text-center">
                                                        <Form>
                                                            <div className="form-group" style={{ marginBottom: '15px' }}>

                                                                <div className="p-2 bg-dark text-white rounded">
                                                                    <i className="fa fa-user" aria-hidden="true"></i> &nbsp;
                                                                    <label style={{ marginBottom: '5px' }}><b>Your Inquiry ({inquiry.name})</b></label>
                                                                    &nbsp;&nbsp;
                                                                </div>
                                                                &nbsp;
                                                                <h6> {inquiry.inq}</h6>
                                                            </div>
                                                        </Form>
                                                    </div>
                                                </div>
                                                &nbsp;
                                                <div className="card-c shadow-sm border rounded shadow-lg">
                                                    <div className="card-body text-center">
                                                        <Form>
                                                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                                                <div className="p-2 bg-success text-white rounded">
                                                                    <i className="fa fa-comments" aria-hidden="true"></i> &nbsp;
                                                                    <label style={{ marginBottom: '5px' }}><b>Response From Administration</b></label>
                                                                    &nbsp;&nbsp;
                                                                </div>
                                                                &nbsp;
                                                                <h6 className='rounded'> {inquiry.adreply}</h6>
                                                            </div>
                                                        </Form>
                                                    </div>
                                                </div>
                                                <br /><br />
                                                <div className="row">
                                                    <div className="col">
                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                        <a href={`/editinquiry/${inquiry._id}`} className="btn btn-warning"><i className="fas fa-edit"></i>&nbsp; Edit Inquiry</a>
                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                        <a id={inquiry._id} onClick={(e) => deleteInquiry(e)} className="btn btn-danger"><i className="fas fa-trash-alt"></i>&nbsp;Delete Inquiry</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                </section>
            ))}

    </div>
  )
}

export default MyInquiries