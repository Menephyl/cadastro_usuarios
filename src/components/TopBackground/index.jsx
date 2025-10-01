import UsersImage from '../../assets/cats.png'
import  Background  from './styles.js'
function TopBackground() {
    return (
        <Background>
            <img src={UsersImage} alt="imagem-cadastros" />
        </Background>
    )
}


export default TopBackground