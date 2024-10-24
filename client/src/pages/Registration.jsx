import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const defaultRegistration = {
    firstname: "",
    lastname: "",
    username: "",
    profilepicture: "",
    mnumber: "",
    address: {
        "street": "",
        "city": "",
        "state": "",
        "zipCode": "",
        "country": "",
    },
    email: "",
    password: "",
}

const Registration = () => {
    const [registrationData, setRegistrationData] = useState(defaultRegistration)
    const navigate = useNavigate()

    const handleRegistrationInput = (e) => {
        const { name, value } = e.target;
        if (["street", "city", "state", "zipCode", "country"].includes(name)) {
            setRegistrationData({
                ...registrationData,
                address: { ...registrationData.address, [name]: value }
            });
        } else {
            setRegistrationData({ ...registrationData, [name]: value });
        }
    };


    const handleRegistrationSubmit = async (e) => {
        e.preventDefault()
        console.log(registrationData);

        try {
            const response = await fetch("http://localhost:2189/api/auth/registration", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registrationData)
            })

            if (response.ok) {
                const data = await response.json()
                console.log(data);
                toast.success("Registration Successfull");
                setRegistrationData(defaultRegistration)
                navigate("/login")
            } else {
                console.error("Invalid Credentials !!");
                toast.error("Invalid Credentials !!");
            }
        } catch (error) {
            console.error(error);
            toast.error("An Internal Error Occurred. Please Try Again Later.");
        }
    }

    return (
        <>
            <div className="container">
                <div className="mt-3 row align-items-center">
                    <div className='col-4 image'>
                        <img style={{ width: '10cm' }} src="image/register.png" alt="Registeration_Image" />
                    </div>
                    <div className="col mx-3">
                        <h3>Register Here, For Our <span className='custom-shadow' style={{ color: '#5479f7' }}> Great Services </span> :</h3>
                        <form onSubmit={handleRegistrationSubmit} className='mt-3'>
                            <div className="input-group">
                                <label htmlFor='firstlastname' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">First and Last Name</label>
                                <input onChange={handleRegistrationInput} name="firstname" id='firstname' style={{ backgroundColor: 'transparent', color: 'white' }} type="text" aria-label="First name" className="form-control" required />
                                <input onChange={handleRegistrationInput} name="lastname" id='lastname' style={{ backgroundColor: 'transparent', color: 'white' }} type="text" aria-label="Last name" className="form-control" required />
                            </div>
                            <div className="row">
                                <div className="input-group mt-3 col">
                                    <label htmlFor='username' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Username</label>
                                    <input onChange={handleRegistrationInput} name="username" id='username' type="text" className="form-control" style={{ backgroundColor: 'transparent', color: 'white' }} aria-label="Recipient's Username" required />
                                </div>
                                <div className="input-group mt-3 col">
                                    <label htmlFor='mobilenumber' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Mobile Number</label>
                                    <input onChange={handleRegistrationInput} name="mnumber" id='mobilenumber' type="number" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" required />
                                </div>
                            </div>
                            <div className="input-group mt-3">
                                <label htmlFor='profilepicture' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Profile Picture</label>
                                <input onChange={handleRegistrationInput} style={{ backgroundColor: 'transparent', color: 'white' }} type="file" aria-label="profilepicture" className="form-control" required />
                            </div>
                            <div className="input-group mt-3">
                                <label htmlFor='email' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">E-Mail Address</label>
                                <input onChange={handleRegistrationInput} name="email" type="email" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
                            </div>
                            <div className="input-group mt-3">
                                <label htmlFor='password' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Password</label>
                                <input onChange={handleRegistrationInput} name="password" type="password" style={{ backgroundColor: 'transparent', color: 'white' }} id="inputPassword5" className="form-control" autoComplete='on' aria-describedby="passwordHelpBlock" required />
                            </div>
                            <div className="mt-3">
                                <h6>Address <span className='custom-shadow' style={{ color: '#5479f7' }}> Details </span> :</h6>
                                <div className="input-group">
                                    <label htmlFor='street' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Street</label>
                                    <input onChange={handleRegistrationInput} name="street" id='street' style={{ backgroundColor: 'transparent', color: 'white' }} type="text" className="form-control" required />
                                </div>
                                <div className="row mt-2">
                                    <div className="input-group col">
                                        <label htmlFor='city' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">City</label>
                                        <input onChange={handleRegistrationInput} name="city" id='city' style={{ backgroundColor: 'transparent', color: 'white' }} type="text" className="form-control" required />
                                    </div>
                                    <div className="input-group col">
                                        <label htmlFor='state' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">State</label>
                                        <input onChange={handleRegistrationInput} name="state" id='state' style={{ backgroundColor: 'transparent', color: 'white' }} type="text" className="form-control"  required />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="input-group col">
                                        <label htmlFor='zipCode' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Zip Code</label>
                                        <input onChange={handleRegistrationInput} name="zipCode" id='zipCode' style={{ backgroundColor: 'transparent', color: 'white' }} type="text" className="form-control" required />
                                    </div>
                                    <div className="input-group col">
                                        <label htmlFor='country' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Country</label>
                                        <input onChange={handleRegistrationInput} name="country" id='country' style={{ backgroundColor: 'transparent', color: 'white' }} type="text" className="form-control"  required />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <button style={{ border: '2px solid #5479f7', backgroundColor: '#5479f7' }} type="submit" className="btn btn-outline-">Register Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration