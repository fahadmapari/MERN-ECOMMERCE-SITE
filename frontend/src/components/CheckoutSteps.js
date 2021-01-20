import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4 w-100">
      <Nav.Item className="m-0">
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>
              <i class="fas fa-user"></i> Sign In
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            <i class="fas fa-user"></i> Sign In{" "}
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item className="m-0">
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>
              <i class="fas fa-shipping-fast"></i> Shipping
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            <i class="fas fa-shipping-fast"></i> Shipping{" "}
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item className="m-0">
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link>
              <i class="fas fa-money-bill-wave"></i> Payment
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            <i class="fas fa-money-bill-wave"></i> Payment{" "}
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item className="m-0">
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>
              <i class="fas fa-shopping-basket"></i> Place Order
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            <i class="fas fa-shopping-basket"></i> Place Order{" "}
          </Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
