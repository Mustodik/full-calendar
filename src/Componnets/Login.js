import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Login() {
  const navigate = useNavigate();

  const { success, loading, user, authLogin } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (success) {
      navigate("/home");
    }
  }, [success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    authLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 m-3 p-3 bg-info">
        <div className="form-group m-2">
          <label htmlFor="email">email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="password">password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary m-2">
          {loading ? "Loading..." : "Login"}
        </button>
        <div>
          I don't have an account
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Login;
