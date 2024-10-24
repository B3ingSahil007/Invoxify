import React, { useState } from 'react'
import { toast } from 'react-toastify'

const defaultContact = {
    username: "",
    email: "",
    mnumber: "",
    subject: "",
    message: "",
}

const Contact = () => {
    const [contactData, setContactData] = useState(defaultContact)

    const handleContactInput = (e) => {
        const { name, value } = e.target
        setContactData({ ...contactData, [name]: value })
    }

    const handleContactSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:2189/api/form/contact", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contactData)
            })

            if (response.ok) {
                console.log(contactData);
                setContactData(defaultContact)
                const data = await response.json()
                console.log(data);
                toast.success("Message Sent Successfully")
            } else {
                toast.error("Failed To Sent Message")
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
                        <img style={{ width: '10cm' }} src="image/support.png" alt="Registeration_Image" />
                    </div>
                    <div className="col mx-3">
                        <h3>Get In <span className='custom-shadow' style={{ color: '#5479f7' }}> Touch </span> :</h3>
                        <form className='mt-3' onSubmit={handleContactSubmit}>
                            <div className="row">
                                <div className="input-group col">
                                    <label htmlFor='username' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Username</label>
                                    <input value={contactData.username} onChange={handleContactInput} name="username" id='username' type="text" className="form-control" style={{ backgroundColor: 'transparent', color: 'white' }} aria-label="Recipient's Username" required />
                                </div>
                                <div className="input-group col">
                                    <label htmlFor='email' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">E-Mail</label>
                                    <input value={contactData.email} onChange={handleContactInput} name="email" type="email" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="input-group col">
                                    <label htmlFor='mobilenumber' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Mobile Number</label>
                                    <input value={contactData.mnumber} onChange={handleContactInput} name="mnumber" id='mobilenumber' type="number" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" required />
                                </div>
                                <div className="input-group col">
                                    <label htmlFor='subject' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Subject</label>
                                    <input value={contactData.subject} onChange={handleContactInput} name="subject" id='subject' type="text" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" required />
                                </div>
                            </div>
                            <div className="input-group mt-3">
                                <span style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Message</span>
                                <textarea value={contactData.message} onChange={handleContactInput} name="message" type="message" style={{ backgroundColor: 'transparent', color: 'white', height: '2cm' }} className="form-control" aria-label="With textarea"></textarea>
                            </div>
                            <div className="mt-3">
                                <button style={{ border: '2px solid #5479f7', backgroundColor: '#5479f7' }} type="submit" className="btn btn-outline-dark">Submit Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
