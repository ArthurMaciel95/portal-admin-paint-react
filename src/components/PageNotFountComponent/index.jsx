import './style.css'
import ImgNotFound from '../../assets/images/404_illustrator.png'
import { Link } from 'react-router-dom';
const PageNotFount = () => {
    return ( <div className="page-not-found-container">
        <div className="page-no-found">
            <div className="not-found-description">
                <h1>Pagina não encontrada 404</h1>
                A pagina na qual você intenta acessar nâo se encontra disponivel. 
                <Link to="/">Ir ao Inicio</Link>
            </div>
            <img src={ImgNotFound} alt="" />
        </div>
    </div> );
}
 
export default PageNotFount;

