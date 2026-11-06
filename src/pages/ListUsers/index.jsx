

import { useNavigate } from "react-router-dom"
import api from "../../services/api"
import { useEffect, useState } from "react"
import Button from "../../components/Button"
import TopBackground from "../../components/TopBackground"
import Trash from '../../assets/trash.svg'
import {Container, Title, CardUsers, TrashIcon, ContainerUsers, AvatarUsers } from "./styles"


function ListUsers() {

    const navigate = useNavigate()

    const [users, setUsers] = useState([])

    useEffect(() => {
      async function getUsers() {
        const {data} = await api.get('/usuarios')
        setUsers(data)
      }
        getUsers()

    }, [])

    async function deleteUsers (id) {
        await api.delete(`/usuarios/${id}`)

        const upadateUsers = users.filter(user => user.id !== id)

        setUsers(upadateUsers)
        
    }
    

    return(
        <Container>
            <TopBackground/>
            <Title>Lista de Usuários</Title>
        <ContainerUsers>
        {users.map((user) => (
            <CardUsers key={user.id}>
                <AvatarUsers src={`https://avatarapi.runflare.run/public/${user.age}`}/>
            <div>
                <h3>{user.name}</h3>
                <p>{user.age + " anos"}</p>
                <p>{user.email}</p>
            </div>
            <TrashIcon src={Trash} alt='icone-lixo' onClick={() => deleteUsers(user.id)} />
            </CardUsers>
        ))}
        </ContainerUsers>
            <Button theme="primary" type="button"  onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    )
}

export default ListUsers