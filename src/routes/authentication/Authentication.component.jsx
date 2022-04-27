import SignUp from "../../components/signupform/sign-up-form.component.jsx";
import SignIn from "../../SignIn/Sign-In-form.component";
//scss
import "./authentication.styles.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default Authentication;
