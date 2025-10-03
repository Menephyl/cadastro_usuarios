import UsersImage from '../../assets/clients3.png'
import  Background  from './styles.js'
function TopBackground() {
    return (
        <Background>
            <img src={UsersImage} alt="imagem-cadastros" />
        </Background>
    )
}


export default TopBackground