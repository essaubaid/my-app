import styled from "styled-components"
import Footer from "../cmp/Footer"
import Navbar from "../cmp/Nav/NavBar"
import image from "../assets/default-placeholder.png"
import { Add, Remove } from "@material-ui/icons"

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const Image = styled.img`
width:100%;
height:90vh;
object-fit: cover;

`;
const ImgContainer = styled.div`
flex:1;
`;
const InfoContainer = styled.div`
flex:1;
padding: 0px 50px; 
`;
const Title = styled.h1`
font-weight:200;

`;
const Desc = styled.p`
margin: 20px 0px;
`;
const Price = styled.span`
font-weight:200;
font-size:40px;

`;
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px ;
display:flex;
justify-content: space-between;

`;
const Filter = styled.div`
display:flex;
align-items:center;
`;
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`;
const FilterColor = styled.div`
width: 20px;
height:20px;
border-radius:50%;
background-color: ${props => props.color};
margin: 0px 5px;
cursor: pointer;

`;

const FilterSize = styled.select`
margin-left:5px;
padding:3px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content: space-between;


`;
const AmountContainer = styled.div`
display:flex;
align-items: center;
font-weight: 700;
`;
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border:1px solid teal; 
display:flex;
align-items: center;
justify-content: center;
margin:0px 5px;


`;
const Button = styled.button`
padding: 10px;
border:2px solid teal;
background-color: white;
cursor: pointer; 
font-weight:500;
&:hover{
    background-color: #f8f4f4;
}

`;




const Product = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src={image}></Image>
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jacket</Title>
                    <Desc>Jacket in sturdy cotton denim with a collar, buttons down the front
                        and a yoke front and back. Flap chest pockets with a button and long
                        sleeves with buttoned cuffs. Jacket in sturdy cotton denim with a
                        collar, buttons down the front and a yoke front and back. Flap chest
                        pockets with a button and long sleeves with buttoned cuffs.


                    </Desc>
                    <Price>$30</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="Black" />
                            <FilterColor color="Pink" />
                            <FilterColor color="Maroon" />
                            <FilterColor color="Grey" />

                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>

                    </AddContainer>
                </InfoContainer>
            </Wrapper>


            <Footer />

        </Container>
    )
}


export default Product

