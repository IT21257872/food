import React, { Component } from 'react';
import '../App.css'



class AdminHome extends Component {
    render() {
        return (
            <body>
                <div
        style={{
          backgroundColor: "hsla(90, 100%, 89%, 0.55)",
        }}
      >
        <div id="bodyadd">
          <div className="infoadmin">
            <div>
              <div class="container">
                <div
                  class="row"
                  style={{
                    backgroundImage:
                      "url('https://as1.ftcdn.net/v2/jpg/02/52/12/40/1000_F_252124067_aCtp9ZD934RboKmjJzkXiwYDL7XkNjpn.jpg')",   backgroundSize: "cover", backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div class="col-lg-10 col-xl-auto mx-auto">
                    <div
                      class="card flex-row my-3 border-5 shadow rounded-5 overflow-hidden"
                      style={{ backgroundColor: "hsla(90, 0%, 100%, 0.7)" }}
                    >
                      <div class="card-img-left d-none d-md-flex"></div>
                      <div class="card-body p-4 p-sm-5">
                        <center>
                          {" "}
                          <h1>Admin Panel DashBord</h1>
                        </center>
                        <hr class="my-4" />

                        <div class="d-flex flex-row align-items-center mb-5">
                          <div class="form-outline mb-2 ">
                            <button
                              class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                              type="submit"
                              style={{width:"450px"}}
                            >
                              <a
                                href="/alluser"
                                style={{
                                  textDecoration: "none",
                                  color: "black"
                                }}
                              >
                                {" "}
                                <i
                                  class="fa fa-user me-2"
                                  aria-hidden="true"
                                ></i>{" "}
                                User Management{" "}
                              </a>
                            </button>
                          </div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;








                          <div class="form-outline mb-2 ">
                            <button
                              class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                              type="submit"
                              style={{width:"450px"}}
                            >
                              <a
                                href="/food/allfood"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {" "}
                                <i
                                  class="fa fa-utensils me-2"
                                  aria-hidden="true"
                                ></i>
                                Food Management
                              </a>
                            </button>
                          </div>
                         




                        </div>






                        <div class="d-flex flex-row align-items-center mb-5">
                          <div class="form-outline mb-2 ">
                            <button
                              class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                              type="submit"
                              style={{width:"450px"}}
                            >
                              <a
                                href="/allbookings"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {" "}
                                <i
                                  class="fas fa-utensils me-2"
                                  aria-hidden="true"
                                  
                                ></i>
                                Table Management
                              </a>
                            </button>
                          </div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                          <div class="form-outline mb-2 ">
                            <button
                              class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                              type="submit"
                              style={{width:"450px"}}
                            >
                              <a
                                href="/allinquiry"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {" "}
                                <i
                                  class="fa fa-phone-volume me-2"
                                  aria-hidden="true"
                                ></i>
                                Inquary Management
                              </a>
                            </button>
                          </div>

                        </div>






                        <div class="d-flex flex-row align-items-center mb-5">
                          <div class="form-outline mb-2 ">
                            <button
                              class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                              type="submit"
                              style={{width:"450px"}}
                            >
                              <a
                                href="/food/allorders"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {" "}
                                <i
                                  class="fas fa-utensils me-2"
                                  aria-hidden="true"
                                  
                                ></i>
                                 Food Delivery Management
                              </a>
                            </button>
                          </div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                          <div class="form-outline mb-2 ">
                            <button
                              class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                              type="submit"
                              style={{width:"450px"}}
                            >
                              <a
                                href="/allinquiry"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {" "}
                                <i
                                  class="fas fa-utensils me-2"
                                  aria-hidden="true"
                                ></i>
                                Table Booking Management
                              </a>
                            </button>
                          </div>

                        </div>
                        <hr class="my-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>















            </body>
        );
    }
}

export default AdminHome;
