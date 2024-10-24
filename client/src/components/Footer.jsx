import React from 'react'
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa6";


const Footer = () => {
    return (
        <>
            <div className='d-flex justify-content-center text-dark' style={{ backgroundColor: '#5479f7', marginTop: '1cm', padding: '15px 0' }}>
                <div className="row">
                    <div className="col">
                        <h6>Invoxify, All Rights Reserved, 2024 ©</h6>
                        <h6 className='mb-1'>Customer Support : <a href='mailto:chhipasahil163@gmail.com' style={{ color: '#fff', textDecoration: 'underline' }}>chhipasahil163@gmail.com</a></h6>
                        <h6>Follow Us :
                            <a className='mx-2' href='https://linkedin.com/in/sahil-miyawala' target='_blank' style={{ color: '#fff', textDecoration: 'underline' }}>LinkedIn</a> |
                            <a className='mx-2' href='https://instagram.com/b3ing_sahil_007' target='_blank' style={{ color: '#fff', textDecoration: 'underline' }}>Instagram</a> |
                            <a className='mx-2' href='https://twitter.com/sahilmiyawala' target='_blank' style={{ color: '#fff', textDecoration: 'underline' }}>Twitter</a>
                        </h6>
                        <h6>Contact Us : +91 9638473047</h6>
                    </div>
                    <div className="col">
                        <div style={{ width: '15cm' }} className='d-flex justify-content-center'>
                            <a className='mx-2' href='/privacy-policy' style={{ color: '#fff', padding: '0', textDecoration: 'underline' }}>Privacy Policy</a> |
                            <a className='mx-2' href='/terms-of-service' style={{ color: '#fff', padding: '0', textDecoration: 'underline' }}>Terms of Service</a> |
                            <a className='mx-2' href='/return-policy' style={{ color: '#fff', padding: '0', textDecoration: 'underline' }}>Return Policy</a> |
                            <a className='mx-2' href='/shipping-policy' style={{ color: '#fff', padding: '0', textDecoration: 'underline' }}>Shipping Policy</a>
                        </div>
                        <div className='d-flex justify-content-center mt-2'>
                            <a className='mx-2' href='/about-us' style={{ color: '#fff', textDecoration: 'underline' }}>About Us</a> |
                            <a className='mx-2' href='/faq' style={{ color: '#fff', textDecoration: 'underline' }}>FAQ</a> |
                            <a className='mx-2' href='/careers' style={{ color: '#fff', textDecoration: 'underline' }}>Careers</a> |
                            <a className='mx-2' href='/contact-us' style={{ color: '#fff', textDecoration: 'underline' }}>Contact Us</a>
                        </div>
                        <div style={{ width: '15cm' }} className="mt-2 d-flex justify-content-center">
                            <p>Accepted Payment Methods :</p>
                            <div className="d-flex justify-content-around">
                                <div className="mx-2"><RiVisaFill style={{ fontSize: '30px', color: 'black' }} /></div>
                                <div className="mx-2"><FaCcMastercard style={{ fontSize: '30px', color: 'black' }} /></div>
                                <div className="mx-2"><FaCcPaypal style={{ fontSize: '30px', color: 'black' }} /></div>
                                <div className="mx-2"><SiPaytm style={{ fontSize: '30px', color: 'black' }} /></div>
                                <div className="mx-2"><FaGooglePay style={{ fontSize: '30px', color: 'black' }} /></div>
                                <div className="mx-2 mt-1"><h6 style={{ color: 'black' }}>COD</h6></div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <p>Version 1.6 - Growing with Style . . .</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
