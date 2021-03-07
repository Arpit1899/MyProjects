import styled from 'styled-components';



export const HeroStyles = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;


    

  
    
    .boxwrap {
        margin-left: 20px;
        border: 1px solid red;
        width: 100%;
        margin-top: 140px;
        align-items: center;
        
        

        @media screen and (min-width: 1000px) {
            display: flex;
            flex-flow: row nowrap;
            margin_top: 400px;
            align-items: center;
            // justify-content: center;
            justify-contnet: space-around;


        }
    
    
        .PriceBox {
            display: block;
            width: 300px;
            height: 400px;
            margin-top: 5%;
            margin-left:5%;
            flex-flow: row nowrap;
            top: 10px;
            background: rgba(227, 252, 255, 0.53);
            border-radius: 30px;



            @media screen and (max-width: 768px) {

                width: 250px;
                margin-left: 30%; 
                margin-top: 5%;
                height: 340px;
            }

            @media screen and (max-width: 375px) {


                width: 250px;
                margin-left: 51px; 
                margin-top: 5%;
                height: 350px;
            }


            .Price {


                display: grid;
                width: 93%;
                height: 10%;
                margin-left: 9px;
                align-items: center;
                background: #E6DADA;
                border-radius: 30px;
                flex-flow; row nowrap;
                justify-conent: space-between;
                

                .Name {
                    display: flex;
                    align-items: center;
                    margin-left: 5%;
                    font-family: "Poppins", sans-serif;
                    font-size: 25px;
                    font-weight: bold;
                    justify-content: space-around;


                }



            }
            
            .Data {
                
                
                margin-left: 5%;
                width: 90%;
                display: grid;
                height: 80%;
                align-items: center;
                background: #E6DADA;
                border-radius: 30px;
                margin-top: inherit;

                .voll {

                    color: black;
                }
               
            

            }

        }

         .Trending {
           
             width: 600px;
             height: 600px;
             
             margin-top: 35px;
             margin-left:50px;
            
        
             background: rgba(227, 252, 255, 0.53);
             border-radius: 30px;

             @media screen and (min-width: 1000px) {

                width: 900px;
                
                margin-top: 30px;
                height: 550px;
            }

           

            @media screen and (max-width: 768px) {

                width: 650px;
                margin-left: 50px; 
                margin-top: 10px;
                height: 450px;
            }

            @media screen and (max-width: 375px) {

                width: 370px;
                margin-left: 2%; 
                margin-top: 10%;
                height: 450px;
            }

            .head {
                
                display: grid;
                width: 20%;
                height: 8%;
                margin-top: 10px;
                align-items: center;
                background: #E6DADA;
                border-radius: 30px;
                font-family: "Poppins", sans-serif;
                font-size: 25px;
                font-weight: bold;
                justify-content: space-around;


                @media screen and (max-width: 375px) {
                    display: grid;
                    width: 45%


                }
            }
            .Trend {

                margin-left: auto;
                width: 100%;
                display: grid;
                height: 77%;
                align-items: center;
                background: #E6DADA;
                border-radius: 30px;
                margin-top: inherit;
               


            }


            }
         }
    }

`;