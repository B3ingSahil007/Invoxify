import React from 'react'

const Login = () => {
    return (
        <>
            <div className="container">
                <div className="mt-3 row align-items-center">
                    <div className='col image'>
                        <img style={{ width: '12cm' }} src="image/login.png" alt="Registeration_Image" />
                    </div>
                    <div className="col mx-3">
                        <h3>Login To Your <span className='custom-shadow' style={{ color: '#5479f7' }}> Account </span> :</h3>
                        <form className='mt-3'> 
                            <div className="input-group mt-3">
                                <label htmlFor='email' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Enter Your E-Mail Address</label>
                                <input name="email" type="email" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
                            </div>
                            <div className="input-group mt-3">
                                <label htmlFor='password' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Enter Your Password</label>
                                <input name="password" type="password" style={{ backgroundColor: 'transparent', color: 'white' }} id="inputPassword5" className="form-control" autoComplete='on' aria-describedby="passwordHelpBlock" required />
                            </div>
                            <div className="mt-3">
                                <button style={{ border: '2px solid #5479f7', backgroundColor: '#5479f7' }} type="submit" className="btn btn-outline-dark">Log-In Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
