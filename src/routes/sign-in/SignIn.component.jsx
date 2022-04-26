import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h2>Sign In</h2>
      <button onClick={logGoogleUser}> Sign In with Google</button>
    </div>
  );
};
export default SignIn;
