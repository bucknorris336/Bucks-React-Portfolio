import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log({ event });
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <Container style={{ maxWidth: "400px" }} center="true">
      <h2 className="mt-5 mb-2">Contact</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="contactForm.Name">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter your name" />
          <Form.Control.Feedback type="invalid">
            Please enter your name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mt-2" controlId="contactForm.Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter your email" />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mt-2" controlId="contactForm.Message">
          <Form.Label>Message</Form.Label>
          <Form.Control required as="textarea" rows={3} />
          <Form.Control.Feedback type="invalid">
            Please enter your message.
          </Form.Control.Feedback>
        </Form.Group>

        <Button className="mt-2" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
// import React, { useEffect, useState } from "react";

// export default function Contact() {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   useEffect(() => {
//     if (name.length === 0) {
//       setErrorMessage("Name is invalid");
//     } else if (message.length === 0) {
//       setErrorMessage("Message is invalid");
//     } else {
//       setErrorMessage("");
//     }
//   }, [name, message]);

//   function validateEmail(email) {
//     const re =
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
//   }

//   const handleInputChange = (e) => {
//     // Getting the value and name of the input which triggered the change
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;
//     console.log("input", inputType, inputValue);

//     // Based on the input type, we set the state of either email, username, and password
//     if (inputType === "email") {
//       setEmail(inputValue);
//     } else if (inputType === "name") {
//       setName(inputValue);
//     } else if (inputType === "message") {
//       setMessage(inputValue);
//     }
//   };
//   const handleFormSubmit = (e) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     e.preventDefault();

//     // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
//     if (!validateEmail(email) || !email) {
//       setErrorMessage("Email address is invalid");
//       // We want to exit out of this code block if something is wrong so that the user can correct it
//       return;
//       // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
//     }
//     if (!message || !name) {
//       setErrorMessage("Message or Name is invalid");
//       // We want to exit out of this code block if something is wrong so that the user can correct it
//       return;
//       // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
//     }
//     alert(`Hello ${name}`);

//     // If everything goes according to plan, we want to clear out the input after a successful registration.
//     setName("");
//     setMessage("");
//     setEmail("");
//   };
//   return (
//     <div className="div-container">
//       <h1>Contact Page</h1>

//       <div>
//         <form className="form">
//           <input
//             value={email}
//             name="email"
//             onChange={handleInputChange}
//             type="email"
//             placeholder="email"
//           />
//           <input
//             value={name}
//             name="name"
//             onChange={handleInputChange}
//             type="text"
//             placeholder="name"
//           />
//           <input
//             value={message}
//             name="message"
//             onChange={handleInputChange}
//             type="text"
//             placeholder="message"
//           />
//           <button type="button" onClick={handleFormSubmit}>
//             Submit
//           </button>
//         </form>
//         {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
