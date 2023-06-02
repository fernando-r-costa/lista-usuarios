import Usuario from '../Usuario';
import './Formulario.css';
import { useState, useEffect } from 'react';
import api from '../../Services/api.js'

const Formulario = () => {

    const [users, setUsers] = useState([]);
    const [busca, setBusca] = useState('');
    const [url, setUrl] = useState('');
    const [campo, setCampo] = useState('name')

    const aoBuscar = (evento) => {
        evento.preventDefault()
        if (busca === "") {
            setUrl('')
        } else {
            setUrl(`?${campo}=${busca}`)
        }
    }

    useEffect(() => {
        api
            .get(`${url}`)
            .then((response) => setUsers(response.data))
            .catch((err) => {
                console.error("Ocorreu um erro" + err);
            });
    }, [url]);


    // const lowerBusca = busca.toLowerCase()

    // const usersFilter = users.filter((user) => user.name.toLowerCase().includes(lowerBusca));

    return (
        <div className="formulario">
            <div className="cabecalho">
                <h1>Lista de usuários</h1>

                <div className="campo-busca">
                    <form onSubmit={aoBuscar}>
                        <div className='input-texto'>
                            <input
                                type='text'
                                placeholder='Buscar'
                                onChange={(evento) => setBusca(evento.target.value)}
                                value={busca}
                            />
                            <button>
                                &#128269;
                            </button>
                        </div>
                        <div className='input-radio'>
                            <label htmlFor="id">
                                <input
                                    type="radio"
                                    id="id"
                                    value="id"
                                    name="busca-avancada"
                                    onChange={(evento) => setCampo(evento.target.value)}
                                />Cartão Identificação</label>
                            <label htmlFor="name">
                                <input
                                    type="radio"
                                    id="name"
                                    value="name"
                                    name="busca-avancada"
                                    onChange={(evento) => setCampo(evento.target.value)}
                                    checked
                                />Nome</label>
                            <label htmlFor="age">
                                <input
                                    type="radio"
                                    id="age"
                                    value="age"
                                    name="busca-avancada"
                                    onChange={(evento) => setCampo(evento.target.value)}
                                />Idade</label>
                            <label htmlFor="city">
                                <input
                                    type="radio"
                                    id="city"
                                    value="city"
                                    name="busca-avancada"
                                    onChange={(evento) => setCampo(evento.target.value)}
                                />Cidade</label>
                            <label htmlFor="profession">
                                <input
                                    type="radio"
                                    id="profession"
                                    value="profession"
                                    name="busca-avancada"
                                    onChange={(evento) => setCampo(evento.target.value)}
                                />Profissão</label>
                        </div>
                    </form>
                </div>
            </div>

            <table>

                <thead>
                    <tr>
                        <th>Cartão Identificação</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Cidade</th>
                        <th>Profissão</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map(user => <Usuario
                        key={user.id}
                        identificacao={user.id}
                        nome={user.name}
                        idade={user.age}
                        cidade={user.city}
                        profissao={user.profession}
                    />)}
                </tbody>

            </table>

        </div>
    )
}

export default Formulario