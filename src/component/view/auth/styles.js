import styled from 'styled-components/native';
import Text from '../../widget/text';

export const Container = styled.View`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const PhoneLoginWrapper = styled.View`
    position: relative;
    flex-grow: 1;
    background-color: #1c65c4;
    padding: 50px 40px 10px;
`;

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
`;

export const LogoImage = styled.Image`
    width: 45px;
    height: 45px;
    margin-right: 10px;
`;

export const HeaderTitle = styled(Text)`
    color: #fff;
    font-size: 44px;
`;

export const Body = styled.View`
    margin-bottom: 50px;
`;

export const BodyTitle = styled(Text)`
    color: #fff;
    font-size: 28px;
    margin-bottom: 12px;
`;

export const BodySubTitle = styled(Text)`
    color: #fff;
    font-size: 20px;
    line-height: 25px;
`;

export const OptionsText = styled(Text)`
    color: #fff;
    font-size: 14px;
    position: absolute;
    bottom: 10px;
    align-self: center;
`;

export const PhoneInputWrapper = styled.View`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
`;

export const LoginButton = styled(Text)`
    color: #fff;
    text-align: center;
    font-size: 20px;
    line-height: 36px;
    padding: 0 10px;
    height: 100%;
    border: 2px solid #fff;
    border-radius: 5px;
`;

export const SocialLoginWrapper = styled.View`
    padding: 25px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const SocialLoginButton = styled.View`
    height: 30px;
    border-radius: 8px;
    border: 1px solid #000;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const SocialIcon = styled.Image`
    width: 16px;
    height: 16px;
    margin-right: 12px;
`;

export const FacebookLogin = styled(SocialLoginButton)`
    margin-right: 20px;
    border-color: #2a5cf8;
`;

export const GoogleLogin = styled(SocialLoginButton)`
    border-color: #ccc;
`;
