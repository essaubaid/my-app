import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    background-color: whitesmoke;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Right = styled.div`
    flex: 1;
    padding: 20px;

`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`;

const ListItem = styled.li`
    width: 100%;
    margin-bottom: 10px;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Footer = () => {
    return (
        <Container>

            <Left>
                <Logo>
                    THRIFTY.
                </Logo>
                <Desc>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quasi dignissimos sint nobis nesciunt tempora minus tenetur ipsam a in quia, itaque temporibus laborum perspiciatis? Error nam odit architecto nobis.
                </Desc>
                <SocialContainer>
                    <SocialIcon color='385999'>
                        <Facebook />
                    </SocialIcon>

                    <SocialIcon color='55ACEE'>
                        <Twitter />
                    </SocialIcon>

                    <SocialIcon color='E4405F'>
                        <Instagram />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>
                    Useful Links
                </Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Shop</ListItem>
                    <ListItem>My Account</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} />IBA, Karachi University, Karachi
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} />+92 300 333 4545
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} />contact@thrifty.com
                </ContactItem>
            </Right>

        </Container>
    )
}

export default Footer
