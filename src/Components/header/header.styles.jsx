import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyle = css`
    padding: 10px 15px;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionContainerDiv = styled.div`
    ${OptionContainerStyle}
`;

export const OptionContainerLink = styled(Link)`
    ${OptionContainerStyle}
`;