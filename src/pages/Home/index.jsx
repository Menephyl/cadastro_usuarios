import { useRef } from 'react'

import api from '../../services/api'
import {
  Button,
  Container,
  Inputs, Title,
  TopBackground,
  ContainerInputs,
  InputLabel,
  Form
} from './styles.js'
import UsersImage from '../../assets/cats.png'



function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function registerNewUser(){
   const data = await api.post('/usuarios',{
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    })
    console.log(data)

  }
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
              <Inputs type='text' placeholder=' Digite Nome'  ref={inputName} />
            </div>

            <div >
              <InputLabel>Idade <span> * </span>
              </InputLabel>
              <Inputs type='text' placeholder=' Digite Idade' ref={inputAge} />
            </div>
            <div style={{ width: '100%' }}>
              <InputLabel>Contato <span> * </span>
              </InputLabel>
              <Inputs type='text' placeholder='  E-mail ou Whatsapp'ref={inputEmail} />
            </div>
            <Button onClick={registerNewUser}>
              Cadastrar

            </Button>
          </ContainerInputs>
        </Form>

      </Container>
    </>
  )
}

export default Home
