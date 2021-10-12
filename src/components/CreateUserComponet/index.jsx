import "./style.css";
import AvatarUser from "../../assets/images/avatar1.png";
import imgCreateUser from "../../assets/images/create_user_illustrator.png";

const CreateUser = () => {
    return (
        <div className="create-user-container">
          <div className="create-user-header">
                <div>rotas</div>

                <div className="user-header">
                    <img src={AvatarUser} alt="" />
                    <div className="user-description">
                        <p>Nome User </p>
                        <p>danieljose@gmail.com</p>
                    </div>
                </div>
            </div> 
            <div className="create-user-card">
                <div className="create-user-card-img">
                    <img src={imgCreateUser} alt="" />
                </div>
                <div className="create-user-card-description">
                    <h2>Cadastro de cliente</h2>
                    <form action="" method="post">
                        <fieldset className="create-user-form-data">
                            <legend>Dados perssoais</legend>
                            <input type="text" placeholder="Nome" id="name" />
                            <input type="text" placeholder="Sobrenome" id="surname" />
                            <input type="number" placeholder="CPF" id="cpf"/>
                        </fieldset>
                        <fieldset>
                            <legend>Dados de endereço</legend>
                            <input type="text" placeholder="Cep" id="cep" />
                            <input type="text" placeholder="Estado" id="state"/>
                            <input type="text" placeholder="Cidade" id="city"/>
                            <input type="text" placeholder="Rua" id="address" />
                            <input type="number" placeholder="Nro" id="nro" />
                            <input type="text" placeholder="Barrio" id="barrio" />
                        </fieldset>
                        <div className="button-form">
                        <button>Cadastrar Cliente</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateUser;
