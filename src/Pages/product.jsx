import styled from "styled-components"
import Footer from "../cmp/Footer"
import Navbar from "../cmp/Nav/NavBar"
import image from "../assets/default-placeholder.png"
import { Add, Remove } from "@material-ui/icons"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { publicRequest } from "../requestMethod"
import { addProduct } from "../redux/cartRedux"
import { useDispatch } from "react-redux"

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit: contain;

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
border:2px solid teal;
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
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get(`/product/find/${id}`)
                setProduct(res.data)
                setIsLoading(true)
            } catch { }
        }
        getProduct();
    }, [id])

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1)
        }
        else {
            setQuantity(quantity + 1)
        }
    }

    const returnImage = () => {
        if (!isLoading) {
            return (<div>Hello World</div>);
        }
        else {
            return <Image src={`https://qdnmhwmb5d.us-east-1.awsapprunner.com/api/images/${product.productImageURL}`}></Image>
        }
    }

    const handleClick = () => {
        dispatch(
            addProduct({
                ...product, quantity, color, size
            })
        )

    }

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    {returnImage()}
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.productName}</Title>
                    <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, omnis labore eos obcaecati doloribus et molestiae magni! Corporis excepturi distinctio illum, molestias, nam quos blanditiis, tempore eum rerum reiciendis vero.
                    </Desc>
                    <Price>Rs{product.productPrice}</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color?.map((element) => (
                                <FilterColor color={element} key={element} onClick={() => setColor(element)} />
                            ))}

                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(event) => { setSize(event.target.value) }}>
                                {product.size?.map((element) => (
                                    <FilterSizeOption key={element}>{element}</FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>

                    </AddContainer>
                </InfoContainer>
            </Wrapper>


            <Footer />

        </Container>
    )
}


export default Product

