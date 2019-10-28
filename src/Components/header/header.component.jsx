import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionContainerDiv,
    OptionContainerLink
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionContainerLink to='/shop'>SHOP</OptionContainerLink>
            <OptionContainerLink to='/contact'>CONTACT</OptionContainerLink>
            {
                currentUser ? 
                    (<OptionContainerDiv className='option' onClick={signOutStart}>SIGN OUT</OptionContainerDiv>)
                    :
                    (<OptionContainerLink className='option' to='/signin'>SIGN IN</OptionContainerLink>)
            }

            <CartIcon />
        </OptionsContainer>
        {hidden || <CartDropdown />}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);