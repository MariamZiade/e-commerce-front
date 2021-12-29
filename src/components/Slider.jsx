import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import WomanShopping from '../assets/images/portrait-young-happy-girl-holding-shopping-bags.png';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #FFFF;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute; //parent should be relative
top: 0; //puts arrow in the middle
bottom: 0; //puts arrow in the middle
left:${props=>props.direction === "left" && "10px"};
right: ${props=>props.direction ==="right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
`
const Wrapper = styled.div`
height: 100%;
`

const Slide = styled.div`
/* width: 100vw; */
height: 100vh;
display: flex;
align-items: center;
`
const ImgContainer = styled.div`
height: 100%;
flex: 1;
`
const Image = styled.img`
height: 90%;
margin-left: 100px;

`
const InfoContainer = styled.div`
/* height: 100%; */
flex: 1;
padding: 50px;
`

const Title = styled.h1`
font-size: 70px;
`
const Description = styled.p`
margin: 50px 0;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button = styled.button``
    

export const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
            < ArrowLeftOutlined />
            </Arrow>
            <Wrapper>
               <Slide>
                   <ImgContainer>
                   <Image src={WomanShopping} alt ="Woman Shopping" />
                   </ImgContainer>
                   <InfoContainer>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum aliquet augue et mattis. Praesent ultricies, purus vitae venenatis tincidunt, nibh sapien 
                   </InfoContainer>
               </Slide>
            </Wrapper>
            <Arrow direction="right">
            < ArrowRightOutlined />
            </Arrow>
        </Container>
    )
};


