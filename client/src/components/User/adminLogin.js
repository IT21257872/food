
import  React from 'react'
export default function Admin  (){



    
    function myFunction() {
        
        
        const adminuser = document.getElementById('user1').value;
        const adminpass =document.getElementById('pass1').value;

            if(adminuser =="admin" && adminpass =="admin"){
                
                window.location.href="/admin-home" ;
 
            }else{
                alert("login Fail")
                
            }
      }


    return (
       
        
        <div className="body1">
            
            <div className="info">
           
         




            <div class="card container mt-5" style={{width: "38rem"}}>
  <div class="card-body">
    <h2 className="h222 card-title mb-5" style={{color:"black",fontWeight:"bold",textAlign:"center"}}>System admin Login</h2>
    <form  className="form12">
             
            
  
             
    
                          
  <div class="mb-5">
    <label for="exampleInputEmail1" class="form-label ">Enter Your User Name</label>
    <input type="text" class="form-control" placeholder="Username" id="user1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Enter Your Password</label>
    <input type="password" class="form-control" placeholder="Password" id="pass1"/>
  </div>
  <a className="form-control form-control-lg btn btn-success a123"  onClick={myFunction}>
                                <i className ="fas fa-login"></i>&nbsp;Log In
                            </a>











            </form>
  </div>
</div>
           

         
            
            
            </div>
                </div>
               

       
    )

}