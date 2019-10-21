import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {
    const [signUpData, setSignUpData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = signUpData;

    const handleChange = event => {
        const { name, value } = event.target;

        setSignUpData({ ...signUpData, [name]: value });
    }
    
    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('password dont match');
            return;
        }

        signUpStart({ email, password, displayName });
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    handleChange={handleChange}
                    type='text' name='displayName'
                    label='Display Name'
                    value={displayName}
                />
                <FormInput
                    handleChange={handleChange} 
                    type='email' 
                    name='email' 
                    label='Email' 
                    value={email} 
                />
                <FormInput 
                    handleChange={handleChange} 
                    type='password' 
                    name='password' 
                    label='Password' 
                    value={password} 
                />
                <FormInput 
                    handleChange={handleChange} 
                    type='password' 
                    name='confirmPassword' 
                    label='Confirm Password' 
                    value={confirmPassword} 
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userData => dispatch(signUpStart(userData))
})

export default connect(null, mapDispatchToProps)(SignUp);