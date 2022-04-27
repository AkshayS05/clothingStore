import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import "./sign-up-form.styles.scss";
import {
  createAuthWithUserAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input.component";
import Button from "./button.component";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const { displayName, email, password, confirmPassword } = formFields;
  const handleSubmit = async (event) => {
    event.preventDefault();

    //1. comfirm if password matches
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    //2. check if we have authenticated the user with email and password
    try {
      const { user } = await createAuthWithUserAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email already in use!");
      } else {
        console.error("user creation encountered an error", error.message);
      }
    }
    //3. create user doc
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span> Create your account using email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
export default SignUp;
