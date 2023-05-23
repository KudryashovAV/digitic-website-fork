import React, {useEffect} from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import {gql, useMutation} from "@apollo/client";
import shopifyHeaders from "../services/shopifyClient";

const createCustomer = gql`
  mutation customerCreate {
  customerCreate(input: { email: "askqd@krononsoft.com", password: "12345678", firstName: "Alexey", lastName: "XXd", phone: "+375339025006", acceptsMarketing: false }) {
    customerUserErrors {
      code
      field
      message
    }
    customer {
      id
      access_token
    }
  }
}
`




const Signup = () => {
  const [customerCreation, { data:customerData }] = useMutation(createCustomer);

  useEffect(() => {
    if (customerData) {
      console.log("customerData", customerData)
    }
  }, [customerData])

  const signupUsr = (event) => {
    event.preventDefault()
    console.log("signup")
    customerCreation({ context: { headers: shopifyHeaders } })
  }

  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form
                action=""
                className="d-flex flex-column gap-15"
                onSubmit={(e) =>
                  signupUsr(e)
                }
              >
                <CustomInput type="text" name="name" placeholder="Name" />
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button
                      className="button border-0"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
