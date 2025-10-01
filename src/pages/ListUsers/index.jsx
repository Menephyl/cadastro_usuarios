
import Trash from '../../assets/trash.png'
import api from '../../services/api'
import TopBackground from '../../components/TopBackground'
import {
    useEffect,
    useState
} from 'react'
import {
    Title,
    Container,
    CardUsers,
    ContainerUsers,
    AvatarUser,
    TrashIcon
} from './styles.js'
import Button from '../../components/Button'

import { Navigate } from 'react-router-dom'
function ListUsers() {
    const [users,
        setUsers] = useState([])
    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/usuarios')
            setUsers(data)
        }
        getUsers()

    }, [])
    async function deleteUser(id){
        await api.delete(`usuarios/${id}`)

        const updatedUsers = users.filter(user=> user.id!==id)
        setUsers(updatedUsers)
    }

    return (
        <Container>
            <TopBackground />
            <Title>Listagem de Usuários/Clientes</Title>


            <ContainerUsers>
                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src={Trash} alt="icon-trash" onClick={()=>{deleteUser(user.id)}}/>
                    </CardUsers>
                ))}
            </ContainerUsers>
            <Button type="button" onClick={()=>Navigate('/')}>Voltar</Button>
        </Container>
    )
}

export default ListUsers 