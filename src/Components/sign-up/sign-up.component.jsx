import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfile } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    
    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert('password dont match');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfile(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error('create user by email error', error.message);
        }

    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        type='text' name='displayName'
                        label='Display Name'
                        value={displayName}
                    />
                    <FormInput
                        handleChange={this.handleChange} 
                        type='email' 
                        name='email' 
                        label='Email' 
                        value={email} 
                    />
                    <FormInput 
                        handleChange={this.handleChange} 
                        type='password' 
                        name='password' 
                        label='Password' 
                        value={password} 
                    />
                    <FormInput 
                        handleChange={this.handleChange} 
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
}

export default SignUp;