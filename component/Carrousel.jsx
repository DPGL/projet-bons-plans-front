import { Carousel } from 'react-carousel-minimal';

function Carrousel() {
  const data = [
     {
       image: "https://img.leboncoin.fr/api/v1/lbcpb1/images/ba/3e/31/ba3e314904a218a8d872ab7f1cda8657e2c9b43b.jpg?rule=ad-large"
     },
     {
       image: "https://img.leboncoin.fr/api/v1/lbcpb1/images/2d/6a/84/2d6a84e486e0f30ae191468cab5f7c38a2a040c3.jpg?rule=ad-large"
     },
     {
       image: "https://img.leboncoin.fr/api/v1/lbcpb1/images/19/87/fa/1987facf06fc33ddd4c65d9a5a10396d09fd1f45.jpg?rule=ad-large"
     },
     {
       image: "https://img.leboncoin.fr/api/v1/lbcpb1/images/48/56/cc/4856cc0d642365a3d7c98c02d9896789d5ac1efa.jpg?rule=ad-large"
     },
     {
       image: "https://img.leboncoin.fr/api/v1/lbcpb1/images/80/85/a0/8085a0b9827b3b083b5c70d78ab92d26938bda38.jpg?rule=ad-large"
     },
     {
       image: "https://img.leboncoin.fr/api/v1/lbcpb1/images/7f/42/bd/7f42bd0c2171e202414a1ceca81c3e2b499691b8.jpg?rule=ad-large"
     },
     {
       image: "https://img.leboncoin.fr/api/v1/lbcpb1/images/07/04/94/0704944d8795e4593345c2840ecff865190a9d50.jpg?rule=ad-large"
     },
     {
       image: "https://img.leboncoin.fr/api/v1/lbcpb1/images/d1/ad/83/d1ad83495bee6d4c9504a1241541e4160910fc9e.jpg?rule=ad-large"
     }
   ];
 
   const captionStyle = {
     fontSize: '2em',
     fontWeight: 'bold',
   }
   const slideNumberStyle = {
     fontSize: '20px',
     fontWeight: 'bold',
   }
   return (
     <div className="App">
       <div style={{ textAlign: "center" }}>
         <div style={{
           padding: "0 20px"
         }}>
           <Carousel
             data={data}
             time={2000}
             width="340px"
             height="200px"
             captionStyle={captionStyle}
             radius="10px"
             slideNumber={false}
             slideNumberStyle={slideNumberStyle}
             captionPosition="bottom"
             automatic={false}
             dots={false}
             pauseIconColor="white"
             pauseIconSize="40px"
             slideBackgroundColor="darkgrey"
             slideImageFit="cover"
             thumbnails={true}
             thumbnailWidth="100px"
             style={{
               textAlign: "center",
               maxWidth: "850px",
               maxHeight: "500px",
               margin: "40px auto",
             }}
           />
         </div>
       </div>
     </div>
   );
 }
 
 export default Carrousel;