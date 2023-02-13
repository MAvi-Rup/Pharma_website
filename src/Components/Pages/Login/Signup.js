import React, { useRef } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
from 'mdb-react-ui-kit';import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Signup = () => {
   
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const emailRef = useRef('');
    const nameRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();


    const formSubmit = async(e) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;
        await createUserWithEmailAndPassword(email,password);
        await updateProfile({ displayName: name });
        if(user){
            navigate(from, { replace: true });
        }


    

       
    }
    

    return (
        <MDBContainer className="my-5">

            <MDBCard>
                <MDBRow className='g-0'>

                    <MDBCol md='6' className='d-flex align-items-center'>
                        <MDBCardImage src='./img/Virgo.png' alt="login form" className='rounded-start w-100' />
                    </MDBCol>

                    <MDBCol md='6'>
                        <MDBCardBody className='d-flex flex-column'>

                            <div className='d-flex flex-row mt-2'>
                                <img width='50px' className='me-3' src="./img/v-logo.png" style={{ color: '#ff6219' }} />
                                <span className="h1 fw-bold mb-0">Virgo Pharma</span>
                            </div>

                            <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Create your account</h5>

                            <MDBInput wrapperClass='mb-4' ref={nameRef} label='Your Name' id='formControlLg' type='text' size="lg" />
                            <MDBInput wrapperClass='mb-4' ref={emailRef} label='Email address' id='formControlLg' type='email' size="lg" />
                            <MDBInput wrapperClass='mb-4' ref={passRef} label='Password' id='formControlLg' type='password' size="lg" />
                            

                            <button onClick={formSubmit} className="btn btn-dark mb-4 px-5" color='dark' size='lg'>SignUp</button>
                            {/* <img src="./img/g-logo.png" width='40px' onClick={() => signInWithGoogle()} alt="" /> */}
                       
                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Already have an account? <Link to="/login" style={{ color: '#393f81' }}>Login here</Link></p>

                            <div className='d-flex flex-row justify-content-start'>
                                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                                <a href="#!" className="small text-muted">Privacy policy</a>
                            </div>

                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>
    );
};

export default Signup;