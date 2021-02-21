import React from 'react'
import styled from 'styled-components';

const Trending = () => {
    return (
        <Container>
            <Wrapper> Trending
            <Wrapper2>
                <Innertext>




                </Innertext>
            </Wrapper2>

            </Wrapper>
            
        </Container>
    )
}

export default Trending;


const Container = styled.div`
    position: absolute;
    width: 1030px;
    height: 874px;
    left: 1050px;
    top: 165px;

    background: rgba(227, 252, 255, 0.53);
    border-radius: 30px;

    
    @media (max-width: 1440px) {
        width: 995px;
        height: 600px;
        left: 400px;
       
 
     }

   


`;
const Wrapper = styled.div`
    position: absolute;
    width: 549px;
    height: 107px;
    left: 230px;
    top: 20px;
    justify-content: center;
    align-items: center;
    background: #E6DADA;
    border-radius: 30px;
    margin: auto;
    display: flex;
    

    @media (max-width: 1440px) {

        width: 200px;
        height: 49px;
        left: 378px;
    }

`;
const Wrapper2 = styled.div`
    position: absolute;
    width: 900px;
    height: 650px;
    left: -160px;
    top: 160px;
    align-items: center;
    background: #E6DADA;
    border-radius: 30px;
    
    
    @media (max-width: 1440px) {

        width: 900px;
        height: 487px;
        left: -327px;
        top: 78px;
       

    }

    
`;
const Innertext = styled.div``;
