import  './style.css'
import RegisterImg from '../../assets/images/taxi-robot.png'
import { Link } from 'react-router-dom';

const RegisterComponet = () => {
    return ( 
        <main className="register-container">
            <div className="register-card">
                <h3>Novo Usuario</h3>
                <div className="img-register">
                    <img src={RegisterImg} alt="" />
                </div>
                <div className="register-form">
                    <h3>Digite os seguintes dados</h3>
                    <form action="" method="post">
                        <input type="text"  id="name" placeholder="Nome"/>
                        <input type="text"  id="email" placeholder="Email"/>
                        <input type="password"  id="password" placeholder="Senha"/>
                        <button>Criar conta</button>
                    </form>
                   <small className="toLogin">Ja tenho conta. <Link to="/">Entrar</Link></small>
                </div>
            </div>
        </main>
     );
}
 
export default RegisterComponet;