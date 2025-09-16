
import { Button, Container, Inputs, Title, TopBackground, ContainerInputs, InputLabel, Form} from './styles.js'
import UsersImage from '../../assets/cats.png'



function App() {

  return (
    <>
      <Container>
        <TopBackground>
         <img src={UsersImage} alt="cat" />
        </TopBackground>
        <Form>
          <Title>CADASTRO DE USUÁRIO</Title>

          <ContainerInputs>
           
              <div>
                <InputLabel>Nome <span> * </span>
                </InputLabel>
                <Inputs type='text' placeholder=' Digite Nome' />
              </div>

              <div>
                <InputLabel>Idade <span> * </span>
                 </InputLabel>
                  <Inputs type='text' placeholder=' Digite Idade' />
              </div>
            <div style={{width:'100%'}}>
              <InputLabel>Contato <span> * </span>
               </InputLabel>
                <Inputs type='text' placeholder='  E-mail ou Whatsapp'/>
            </div>
            <Button>
              Cadastrar

            </Button>
          </ContainerInputs>
        </Form>

      </Container>
    </>
  )
}

export default App
