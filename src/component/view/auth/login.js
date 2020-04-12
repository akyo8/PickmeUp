import React, { useRef } from 'react';
import { Text } from 'react-native';
import PhoneInput from 'react-native-phone-input';

import {
  Container,
  PhoneLoginWrapper,
  Header,
  LogoImage,
  HeaderTitle,
  Body,
  BodyTitle,
  BodySubTitle,
  PhoneInputWrapper,
  LoginButton,
  SocialLoginWrapper,
  FacebookLogin,
  GoogleLogin,
  SocialIcon,
  OptionsText,
} from './styles';

const Logo = require('../../../assets/images/logo.png');
const FacebookIcon = require('../../../assets/images/facebook.png');
const GoogleIcon = require('../../../assets/images/google.png');

const login = () => {
  const phoneInput = useRef(null);
  return (
    <Container>
      <PhoneLoginWrapper>
        <Header>
          <LogoImage source={Logo} />
          <HeaderTitle>Pickmeup</HeaderTitle>
        </Header>
        <Body>
          <BodyTitle>Hey there!</BodyTitle>
          <BodySubTitle>Type in your phone number to get started</BodySubTitle>
        </Body>
        <PhoneInputWrapper>
          <PhoneInput
            ref={phoneInput}
            style={{
              flex: 1,
              height: '100%',
              backgroundColor: '#fff',
              marginRight: 6,
              borderRadius: 5,
              paddingLeft: 10,
            }}
            flagStyle={{}}
            textProps={{placeholder: '0803 123 4567'}}
          />
          <LoginButton>GO</LoginButton>
        </PhoneInputWrapper>
        <OptionsText>or you can sign in with</OptionsText>
      </PhoneLoginWrapper>
      <SocialLoginWrapper>
        <FacebookLogin>
          <SocialIcon source={FacebookIcon} />
          <Text>Facebook</Text>
        </FacebookLogin>
        <GoogleLogin>
          <SocialIcon source={GoogleIcon} />
          <Text>Google</Text>
        </GoogleLogin>
      </SocialLoginWrapper>
    </Container>
  );
};

export default login;
