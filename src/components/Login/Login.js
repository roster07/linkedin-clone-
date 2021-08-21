import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { auth } from "../../firebase";
import "./Login.css";
import logo from "../../assets/linkedin-logo.svg";
import TextField from "@material-ui/core/TextField";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Button } from "@material-ui/core";

function Login() {
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login_container">
      <img src={logo} alt=""></img>
      <div className="login">
        <div>
          <h2 className="login_title">Sign In</h2>
          <p>
            Stay updated on your professional world <br />
            (Only read access, write access to particular users )
          </p>
        </div>

        <form>
          {/* <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name (required if registering)"
          />
          <input
            type="text"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            placeholder="Profile picture URL (optional)"
          /> */}
          {/* <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          /> */}
          {/* <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          /> */}
          {/* <TextField
            id="outlined-search"
            label="Full Name"
            type="search"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-search"
            label="Profile URL"
            type="search"
            variant="outlined"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          /> */}
          <TextField
            id="outlined-search"
            label="Email"
            type="search"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            placeholder="123456"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            variant="outlined"
            className="inputfield"
          />
          {/* <button type="submit" onClick={loginToApp}>
            Sign In
          </button> */}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={loginToApp}
          >
            Sign In
          </Button>
        </form>
        <div className="join">
          <span>&nbsp;</span>

          {/*<span>New to LinkedIn? &nbsp;</span>
           <span className="login_register" onClick={register}>
            Join Now
          </span> */}
        </div>
      </div>
      <div className="bottom">
        <p>LinkedIn Clone For Learning purpose Only.</p>
        <p>
          Made with 💻 and ☕ by{" "}
          <a href="https://blogtheorem.com/">blogtheorem</a>
        </p>
        <div className="bottom_github">
          <a href="https://github.com/enggsuraj/linkedin-clone-app">
            <div>
              <span>Project Github Code</span>
              <GitHubIcon />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
