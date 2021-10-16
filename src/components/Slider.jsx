import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import WomanShopping from '../assets/images/portrait-young-happy-girl-holding-shopping-bags_171337-2608.jpg';

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
height: 70%;

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
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum aliquet augue et mattis. Praesent ultricies, purus vitae venenatis tincidunt, nibh sapien convallis ligula, ut maximus ex leo vitae nulla. Phasellus hendrerit, purus non rhoncus lacinia, sem dolor cursus magna, non sodales augue ante et arcu. Cras congue arcu id urna bibendum, sit amet imperdiet dolor luctus. Nam sapien neque, consectetur id fermentum commodo, aliquet at magna. Duis et arcu eros. Phasellus ante eros, scelerisque nec magna auctor, eleifend placerat ligula. Donec tempus, mauris vitae commodo consectetur, est orci condimentum orci, nec bibendum nisl felis in nisl. Vestibulum a diam turpis. Sed convallis urna enim, ut dictum justo aliquam at. Mauris finibus quis nisi id vestibulum. Nam rutrum leo quis diam elementum iaculis quis consectetur justo. Vestibulum ultrices mollis felis eu accumsan. Praesent et ligula dolor. Maecenas mi dolor, faucibus sed justo quis, dignissim posuere lacus. Curabitur ac arcu mattis, tempor ipsum ac, porttitor augue.

Morbi ac massa sollicitudin, cursus velit venenatis, facilisis justo. Integer sed pretium massa, sit amet ultrices lorem. Nam in ante quam. Ut finibus felis non est scelerisque, sed placerat ligula aliquet. In hac habitasse platea dictumst. Nam porttitor odio vitae justo sagittis venenatis. Curabitur id turpis magna. In at bibendum risus. Pellentesque consectetur non arcu eget luctus. Mauris mattis hendrerit tristique. Ut mollis, mauris quis mattis faucibus, tortor urna faucibus neque, quis sagittis urna mi ac leo. Mauris cursus neque ac urna laoreet interdum pulvinar sit amet nulla. Donec lacinia convallis justo, dapibus lacinia arcu porttitor nec. Suspendisse et felis eu ipsum luctus volutpat nec in elit.
                   </InfoContainer>
               </Slide>
            </Wrapper>
            <Arrow direction="right">
            < ArrowRightOutlined />
            </Arrow>
        </Container>
    )
};


