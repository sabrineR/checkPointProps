import React from 'react';
import img2 from '../photo2.jpg';
import {PropTypes} from "prop-types";
const Profil =({fullName,bio,profession,children,fnc})=>{
    
    return (
        <div  style={{display:'flex'}}>
            <p>{children}</p>
            <div style={{padding:30,color:'red'}} >
            <p>fullName:{fullName}</p>
            <p>Bio:{bio}</p>
            <p>Profession:{profession}</p>
            <button onClick={()=> fnc(fullName)}>ok</button>
            </div>
            

        </div>
        
        )
}

Profil.defaultProps={
    fullName:'x',
    bio:'etudiant',
    profession:'etudiant',
    children:<img src={img2} alt="tof"/>,
    fnc:()=>{
        alert('user name inconnu');
    }
  
}
Profil.propTypes={
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
    children:PropTypes.element,
    handleName:PropTypes.func
};
export default Profil;
