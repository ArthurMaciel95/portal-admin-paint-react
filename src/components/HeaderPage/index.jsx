import React from 'react'
import AvatarUser from "../../assets/images/avatar1.png";


const HeaderPageComponent = () => {
    return (   
  <div className="create-user-header">
    <div>rotas</div>

    <div className="user-header">
        <img src={AvatarUser} alt="" />
        <div className="user-description">
            <p>Nome User </p>
            <p>danieljose@gmail.com</p>
        </div>
    </div>
</div>  );
}
 
export default HeaderPageComponent;