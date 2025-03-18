import React, { useState } from "react";

export default function Login() {
  const [formValues, setFormValues] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    userNameError: null,
    emailError: null,
    passwordError: null,
  });

  const handleChangeForm = (event) => {
    const value = event.target.value;
    const fieldName = event.target.name;

    setFormValues({
      ...formValues,
      [fieldName]: value,
    });

    switch (fieldName) {
      case "userName":
        setFormErrors({
          ...formErrors,
          userNameError:
            value.length === 0
              ? "Required"
              : value.includes(" ")
              ? "Username cannot contain spaces"
              : null,
        });
        break;

      case "email":
        setFormErrors({
          ...formErrors,
          emailError:
            value.length === 0
              ? "Required"
              : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
              ? "Invalid email format"
              : null,
        });
        break;

      case "password":
        setFormErrors({
          ...formErrors,
          passwordError:
            value.length === 0
              ? "Required"
              : value.length < 8
              ? "Password must be at least 8 characters"
              : !/[!@#$%^&*(),.?":{}|<>]/.test(value)
              ? "Password must contain at least 1 special character"
              : !/\d/.test(value)
              ? "Password must contain at least 1 digit"
              : null,
        });
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formErrors.userNameError &&
      !formErrors.emailError &&
      !formErrors.passwordError
    ) {
            console.log('submitted')
            setFormValues(    {userName: "",
                email: "",
                password: "",}
            )
    } else {
      console.log("Form has errors. Please fix them before submitting.");
    }
  };

  return (
    <>
      <h2>Registration Form</h2>
      <hr />
      <form onSubmit={handleSubmit} action='/' target="_blank">
        {/* Username Field */}
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            Username
          </label>
          <input
            type="text"
            className={`form-control ${
              formErrors.userNameError ? "border-danger" : ""
            }`}
            id="userName"
            value={formValues.userName}
            onChange={handleChangeForm}
            name="userName"
          />
          {formErrors.userNameError && (
            <div className="form-text text-danger">
              {formErrors.userNameError}
            </div>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${
              formErrors.emailError ? "border-danger" : ""
            }`}
            id="email"
            value={formValues.email}
            onChange={handleChangeForm}
            name="email"
          />
          {formErrors.emailError && (
            <div className="form-text text-danger">
              {formErrors.emailError}
            </div>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${
              formErrors.passwordError ? "border-danger" : ""
            }`}
            id="password"
            value={formValues.password}
            onChange={handleChangeForm}
            name="password"
          />
          {formErrors.passwordError && (
            <div className="form-text text-danger">
              {formErrors.passwordError}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}