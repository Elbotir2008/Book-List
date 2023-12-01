import Link from "next/link";
import "./signIn.scss";
const page = () => {
  return (
    <div className="signUp">
      <div className="signUp-box">
        <h1>Sign In</h1>
        <button>
          <img src="./social-logos.svg" alt="Eror" />
          <h3>Continue with Google</h3>
        </button>
        <button className="btn2">
          <img src="./social-logos2.svg" alt="Eror" />
          <h3>Continue with Facebook</h3>
        </button>
        <h3>or</h3>
        <div className="input1 input">
          <h4>Your Name</h4>
          <input type="text" id="name" placeholder="Enter Your Name" />
        </div>
        <div className="input2 input">
          <h4>Your Email</h4>
          <input type="email" id="email" placeholder="Enter Your Email" />
        </div>
        <div className="input3 input">
          <h4>Your Username</h4>
          <input type="text" id="username" placeholder="Enter Your Username" />
        </div>
        <div className="input4 input">
          <h4>Your Password</h4>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
          />
        </div>
        <button className="signUp-submit">Submit</button>
        <p>
          Already signed up? <Link href="/">Go to sign up.</Link>
        </p>
      </div>
    </div>
  );
};

export default page;
