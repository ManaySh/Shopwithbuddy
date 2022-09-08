import { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillAlipayCircle, AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import { Link, useLocation } from "react-router-dom";
import Rating from "./Rating";

const Checkout = () => {
  const [total, setTotal] = useState();
  const {
    state: { cart },
  } = CartState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  const handleClick=(e)=>{
   
    alert(`Your Payment is successfull of  ₹ ${total} - Thanks for Buying with ShopWithBuddy`)
  }
  return (
    <div
      className="checkout"
      style={{ textAlign: "center", marginTop: "2rem" }}
    >
      <h2 className="mb-2"> Thanks for Shopping with ShopWithBuddy</h2>

      <div className="container mt-2 px-5 ">
        <div className="mb-4">
          <h2>Confirm order and pay</h2>
          <span>
            Please make the payment, after that you can enjoy all the features
            and benefits.
          </span>
        </div>

        <div className="row ">
          <div className="col-md-12 ">
            <div className="card p-3 border border-dark">
              <h6 className="text-uppercase">Payment details</h6>
              <div className="inputbox mt-3">
                {" "}
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required="required"
                />{" "}
                <span>Name on card</span>{" "}
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="inputbox mt-3 mr-2">
                    {" "}
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required="required"
                    />{" "}
                    <i className="fa fa-credit-card"></i>{" "}
                    <span>Card Number</span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex flex-row">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>Expiry</span>{" "}
                    </div>

                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>CVV</span>{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 mb-4">
                <h6 className="text-uppercase">Billing Address</h6>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>Street Address</span>{" "}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>City</span>{" "}
                    </div>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>State/Province</span>{" "}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>Zip code</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 mb-4 d-flex justify-content-between">
              <Link to="/cart">
              <Button>Previous step</Button>
              </Link>

              <Button className="btn btn-danger px-3" onClick={(e)=>handleClick(e)}>Pay ₹ {total}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
