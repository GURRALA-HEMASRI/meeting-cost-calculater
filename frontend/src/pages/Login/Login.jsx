import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../../services/authService";

import "../../assets/login-bg.css";

function Login() {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      setLoading(true);

      try {

        const data =
          await loginUser({

            email,
            password

          });

        localStorage.setItem(
          "token",
          data.token
        );

        navigate(
          "/dashboard"
        );

      }
      catch (error) {

        alert(
          error?.response?.data?.message ||
          "Invalid Credentials"
        );

      }
      finally {

        setLoading(false);

      }

    };

  return (

    <div className="login-container">

      <div className="glass-card">

        <h1 className="glass-title">
          Meeting Cost Calculator
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="glass-input"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="glass-input"
            required
          />

          <button
            type="submit"
            className="glass-btn"
          >

            {
              loading
                ? "Signing In..."
                : "Login"
            }

          </button>

        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px"
          }}
        >

          Don't have an account?

          <Link

            to="/register"

            style={{
              marginLeft: "8px",
              color: "#60a5fa"
            }}

          >

            Register

          </Link>

        </p>

      </div>

    </div>

  );

}

export default Login;