import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from '../cmp/Nav/NavBar';
import Footer from '../cmp/Footer';
import TextField  from '@material-ui/core/TextField';
import Pay from '../cmp/Cart/Pay';


const Container = styled.div``;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Wrapper = styled.div`
  padding: 20px;
`;


const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 20%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Button2 = styled.button`
  width: 20%;
  padding: 10px;
  background-color: grey;
  color: white;
  font-weight: 600;
`;


class ShippingDetails extends Component {
    render() {
        return (
            <Container>
        <Navbar/>

        <Wrapper>
        <Title>ShippingDetails</Title>
        <Bottom>
          <form noValidate autoComplete='off' className='form'>
            <Wrapper>
              <TextField
                  label = "First Name"
                  variant = "outlined"
                  color = 'secondary'
              />

              <TextField
                  label = "Last Name"
                  variant = "outlined"
                  color = 'secondary'
          
              />
              <Wrapper></Wrapper>
              <TextField
                  label = "Address"
                  variant = "outlined"
                  color = 'secondary'
              />
             <TextField
                  label = "City"
                  variant = "outlined"
                  color = 'secondary'
              />
              <Wrapper></Wrapper>
              <TextField
                  label = "Zip code"
                  variant = "outlined"
                  color = 'secondary'
              />
             <TextField
                  label = "Phone number"
                  variant = "outlined"
                  color = 'secondary'
              />
              </Wrapper>
              <Pay/>
              <Button>Cash on Delivery</Button>
              <Button2>Cancel</Button2>
          </form>   
        <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
          </Summary>
          </Bottom>
          </Wrapper>

        <Footer/>
    </Container>

        );
    }
}

export default ShippingDetails;