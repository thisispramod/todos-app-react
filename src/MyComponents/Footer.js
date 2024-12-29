import React from 'react'

const Footer = () => {
  let footerStyle = { 
    backgroundColor:"rgba(5, 0, 0, 0.05)"
  }
  return (  
      <div className="text-center bg-dark text-light p-3" style={footerStyle}>
        © 2020 Copyright:
        <a style={{textDecoration:'none', fontWeight:'bold', backgroundColor:'white', borderRadius:'6px'}} className="text-body " href="javasript:void(0)">Todo App (Todospecial YT)</a> 
      </div>  
  );
};

export default Footer
