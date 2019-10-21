import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
    const [userData, setUserData] = useState({ email: '', password: '' });
    
    const { email, password } = userData;

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password)
    }

    const handleChange = e => {
        const { name, value } = e.target;

        setUserData({ ...userData, [name]: value });
        
    }

    return (
        <div className='sign-in'>
            <h1 className='title'>I already have an account</h1>
            <span className='title'>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput handleChange={handleChange} label="email" type='email' name='email' value={email} />
                <FormInput handleChange={handleChange} label="password" type='password' name='password' value={password} />

                <div className='buttons'>
                    <CustomButton type='submit' >Sign In</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} googleSignIN >Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);