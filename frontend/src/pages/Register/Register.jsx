import { useState } from "react";

import {
  useNavigate,
  Link
}
from "react-router-dom";

import {
  registerUser
}
from "../../services/authService";

import "../../assets/login-bg.css";

function Register() {

  const navigate =
    useNavigate();

  const [name, setName] =
    useState("");

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

        await registerUser({

          name,
          email,
          password

        });

        alert(
          "Registration Successful"
        );

        navigate("/");

      }
      catch (error) {

        alert(
          error?.response?.data?.message ||
          "Registration Failed"
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
          Create Account
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            className="glass-input"
            required
          />

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
                ? "Creating Account..."
                : "Register"
            }

          </button>

        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px"
          }}
        >

          Already have an account?

          <Link

            to="/"

            style={{
              marginLeft: "8px",
              color: "#60a5fa"
            }}

          >

            Login

          </Link>

        </p>

      </div>

    </div>

  );

}

export default Register;