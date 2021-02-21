import React,{useState} from 'react';
import styled from 'styled-components';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Nav>
            <Container>
                
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                </Hamburger>
                {/* <H1>DOGE COIN</H1> */}
                <Menu isOpen={isOpen}>
                    <LinkWrapper>
                        
                        <MenuLink href="">HOME</MenuLink>
                        <MenuLink href="">CONTACT</MenuLink>
                        
                       
                    </LinkWrapper>

                </Menu>
            </Container>
        </Nav>
    );
};

export default Navbar;

const Nav =styled.div`
    
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
    background-color: #AFE6FE;
    position: absolute;
    top:0;
    left:0;
    right:0;
    z-index:3;
    margin: 0px;

    @media screen and (max-width: 768px) {
        
        padding: 1rem;

    }
}
   
    
    

`;


const Container =styled.div`
    
    display:flex;
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-wrap:wrap;
    max-width:1000px;
    margin:auto;
    padding: 2rem;
    

    a {
        text-decoration: none;
        color: #858586;
        font-size: 0.9rem;
        padding: 0.7rem 1.5rem;
        transition: all 0.2s ease-in;
        border-radius: 0.5rem;
        font-weight: 500;
    
        &:hover {
          color: #7781d4;
          background: #e7e9fc;
        }

    }

`;
const Menu =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    
    @media (max-width: 768px) {
        background-color: rgba(255, 255, 255, 0.9);
        @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
          -webkit-backdrop-filter: blur(35px);
          backdrop-filter: blur(15px);
          background-color: rgba(255, 255, 255, 0.4);
        }
        border-radius: 1rem;
        margin-top: 1rem;
        box-shadow: -4px 8px 15px 1px rgba(0, 0, 0, 0.07);
        overflow: hidden;
        flex-direction: column;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
        transition: max-height 0.3s ease-in;
        width: 100%;
      }

`;
const LinkWrapper =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 1.5rem 0;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        margin: 0px;
       

    }

    

`;
const MenuLink =styled.a`   
    text-decoration:none;
    font-size: 0. 8rem;
    padding:0.7rem 1.5rem;
    transition: all 0.2s ease-in;
    color: rgba(0, 0, 0, 0.52);
    font-weight: 600;
    border: 0px solid #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    


    &:hover {
    color: #E5DADA;
    background: #E3FCFF;
    border-radius:30px;
    text-shadow:none;


    }

    

`;


const Hamburger =styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 25px;
        background: #000000;
        margin-bottom: 4px;
        border-radius: 5px;

    }


    @media (max-width: 768px) {
        display: flex;
        margin: 0px;

    }
`;

// const H1 =styled.div`
  
    
   
//     font-size:1.4rem;
//     font-weight: 700;
//     color: #000000;
//     cursor:pointer;
    
    

// `;