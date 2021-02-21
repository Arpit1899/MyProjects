import React from 'react'
import styled from 'styled-components';


const Hero = () => {
    return (
        <div>
           <Container>
                <Wrapper>
                <Wrapper2>
                    {/* <InnerWrapper>
                        <Left>
                            <h1>Hero </h1>
                        </Left>

                    </InnerWrapper> */}
                </Wrapper2>
                </Wrapper> 
            
           </Container>
        </div>
    )
}

export default Hero;


const Container = styled.div`
    position: absolute;
    width: 687px;
    height: 877px;
    left: 39px;
    top: 162px;
    align-items: center;
    background: rgba(227, 252, 255, 0.53);
    border-radius: 30px;
    
    @media  only screen and (max-width:1440px)  {
        width: 300px;
        height: 400px;
        left: 50px;
        align-items: center;
        flex-direction: row;


    }
`;
const Wrapper = styled.div`
    position: absolute;
    width: 549px;
    height: 107px;
    left: 70px;
    top: 20px;
    align-items: center;
    background: #E6DADA;
    border-radius: 30px;

    @media (max-width:768px) {
        width: 250px;
        left: 25px;
        height: 50px;
        align-items: center;
        

    }

    @media (max-width:1024px) {
        width: 250px;
        left: 25px;
        height: 50px;
        align-items: center;
        background: red;

    }
    



    @media (max-width:1440px) {
        width: 250px;
        left: 25px;
        height: 50px;
        align-items: center;

    }
    

`;
const InnerWrapper = styled.div`
    position: absolute;
    width: 109px;
    height: 54px;
    left: 154px;
    top: 255px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 54px;
    /* identical to box height */

    letter-spacing: 0.06em;

    color: #000000;
    



`;
const Left = styled.div`
   


`;


const Wrapper2 = styled.div`
    position: absolute;
    width: 549px;
    height: 590px;
    left: 5px;
    top: 160px;
    align-items: center;
    background: #E6DADA;
    border-radius: 30px;
        
    @media (max-width:1440px) {
        width: 250px;
        left: 2px;
        height: 280px;
        top: 70px;
        align-items: center;

    }

`;

