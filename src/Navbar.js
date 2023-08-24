import { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
       width: 100%;
       background :linear-gradient(to right, rgba(106, 17, 203, 0.5), rgba(37, 117, 252, 0.6));;
       height: 70;
        display: flex;
       justify-content: space-between;
       position:relative;
       padding:10;
`
const Title =styled.div`
        margin:7px;
        padding:12px;
        font-size:20px;
        font-weight:800;
        color:white;
        &:hover{transform:scale(1.2);};
        
`;
const CartConatainer = styled.div`
        position: relative;
        cursor: pointer;
`;
const ImgIcon= styled.img`
    height:45px;
    width:45px;
    margin-right:1.2em;
    padding-top:8px;
`;
const CartCount =styled.span`
    background: ${(props)=>props.color};
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 10px;
    top: 2px;
    font-size: 12px;
    visibility: ${(props)=>props.show?"visible":"hidden"};
`

class Navbar extends Component{
 
   render(){
    const {cartCount} = this.props;
     return(
     <Nav>
       <Title>Movie App</Title>
        <CartConatainer>
        <ImgIcon alt="CartIcon" src="https://cdn-icons-png.flaticon.com/128/4663/4663830.png"></ImgIcon>  
        <CartCount color="yellow" show={true}>{cartCount}</CartCount>
        </CartConatainer>
        </Nav>
     )
   }
}
// const style= {
//     // nav:{
//     //     width: "100%" , 
//     //     background :"blue",
//     //     height: 70,
//     //    display: "flex",
//     //    justifyContent: "space-between",
//     //    position:"relative",
//     //    padding:10
//     // },
//     // title:{
//     //     margin:5,
//     //     padding:8,
//     //     fontSize:30,
//     //     fontWeight:800,
//     //     color:"white"
        
//     // },
//     // cartIconContainer: {
//     //     position: "relative",
//     //     cursor: "pointer",
//     //   },
//       cartCount: {
//         background: "orange",
//         borderRadius: "50%",
//         padding: "4px 8px",
//         position: "absolute",
//         right: 10,
//         top: -5,
//         fontSize: 12,
//       },
//       imgIcon:{
//         height:60,
//         width:60,
//         marginRight:"1em"
//       }
    
// }

export default Navbar;

