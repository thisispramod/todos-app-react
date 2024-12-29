import React from 'react'

const Footer = () => {
  let footerStyle = {
    position: "absolute",
    top:"100vh",
    width:"100%",
    backgroundColor:"rgba(5, 0, 0, 0.05)"
  }
  return (  
      <div className="text-center p-3" style={footerStyle}>
        © 2020 Copyright:
        <a style={{textDecoration:'none', fontWeight:'bold'}} className="text-body" href="javasript:void(0)">Todo App (Todospecial YT)</a> 
      </div>  
  );
};

export default Footer
