import React  from "react";
import "./style.css";


const ModalComponet = ({ text,hide,functionM,success }) => {
   

    

    return (
        <div className="card--modal" style={hide ? {display: 'flex'}:{display: 'none'} }>
            <div className="modal--content">
                {success ? <i className="fas fa-check-circle fa-5x"></i> : <i className="fas fa-times-circle fa-5x" style={{color:"#E6664A"}}></i>}
                <h2>{text}</h2>
                <button onClick={functionM} >Voltar</button>
            </div>
        </div>
    );
};

export default ModalComponet;
