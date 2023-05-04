import React, { useState } from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("")
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("")
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    let [listOfUsers, setListOfUsers] = useState([])

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
        if (event.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if (event.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (event) => {
        setLastName(event.target.value);
        if (event.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if (event.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
        if (event.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if (event.target.value.length < 2) {
            setEmailError("Email must be at least 2 characters");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
        if (event.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if (event.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
        if (event.target.value !== password) {
            setConfirmPasswordError("Passwords must match");
        } else {
            setConfirmPasswordError("")
        }
    }

    const submitHandler = (event) => {
        event.preventDefault()
        console.log("Form Submitted", firstName, lastName, email, password, confirmPassword)
        let userObj = { firstName, lastName, email, password }
        setListOfUsers([...listOfUsers, userObj])
    }

    return (
        <div>
            <h2>Please, fill out the form to create a User</h2>
            <hr />
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>First Name:</label>
                    <input onChange={handleFirstName} type="text" className='form-label' />
                    {firstNameError ? <p>{firstNameError}</p> : ''}
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input onChange={handleLastName} type="text" className='form-label' />
                    {lastNameError ? <p>{lastNameError}</p> : ''}
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input onChange={handleEmail} type="text" className='form-label' />
                    {emailError ? <p>{emailError}</p> : ''}
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input onChange={handlePassword} type="password" className='form-label' />
                    {passwordError ? <p>{passwordError}</p> : ''}
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input onChange={handleConfirmPassword} type="password" className='form-label' />
                    {confirmPasswordError ? <p>{confirmPasswordError}</p> : ''}
                </div>
                <button className='btn btn-outline-success mt-3' type='submit'>Submit</button>
            </form>
            <hr />
            <div>
                {
                    listOfUsers.map((user, idx) => {
                        return (
                            <div key={idx}>
                                <p>First Name: {user.firstName}</p>
                                <p>Last Name: {user.lastName}</p>
                                <p>Email: {user.email}</p>
                                <p>Password: none ya business!</p>
                                <hr></hr>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Form