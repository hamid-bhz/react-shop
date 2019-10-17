import React from 'react';
import SignIn from '../../Components/sign-in/sign-in.component';
import SignUp from '../../Components/sign-up/sign-up.component';
import './sign-in-up.styles.scss';

const SignInUpPage = () => (
    <div className='sign-in-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInUpPage;