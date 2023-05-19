import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (name.length === 0) {
      setErrorMessage("Name is required");
    } else if (message.length === 0) {
      setErrorMessage("Message is required");
    } else {
      setErrorMessage("");
    }
  }, [name, message]);

  function validateEmail(email) {
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return re.test(String(email).toLowerCase());
  }

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    console.log("input", inputType, inputValue);

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !email) {
      setErrorMessage("Email address is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!message || !name) {
      setErrorMessage("Message or Name is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    alert(`Hello ${name}`);
    // send email

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setMessage("");
    setEmail("");
  };
  return (
    <Container style={{ maxWidth: "400px" }} center="true">
      <h2 className="my-4">Contact Page</h2>

      <div>
        <Form>
          <input
            className="form-control mb-3"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            className="form-control mb-3"
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
          <input
            className="form-control mb-3"
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
          />
          <Button
            variant="outline-primary"
            type="submit"
            onClick={handleFormSubmit}
          >
            Submit
          </Button>
        </Form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </Container>
  );
}
