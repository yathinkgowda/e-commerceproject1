import React from "react";

const Login = () => {
  const handleSubmit =  (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const rememberMe = form.rememberMe.checked;

    // You can replace this with your actual login logic
    console.log("Login submitted:", { email, password, rememberMe });
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="input-group">
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <input type="submit" value="Login" />
      </form>
      <div className="links">
        <a href="/forgot-password">Forgot Password?</a>
        <span> | </span>
        <a href="/register">Create an Account</a>
      </div>
    </div>
  );
};

export default Login;
