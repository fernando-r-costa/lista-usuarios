import Usuario from '../Usuario';
import './Formulario.css';
import { useState } from 'react';

const users = [
    {
        id: "123456789",
        name: "João Silva",
        age: 25,
        city: "São Paulo",
        profession: "Desenvolvedor web"
    },
    {
        id: "987654321",
        name: "Maria Santos",
        age: 32,
        city: "Rio de Janeiro",
        profession: "Analista de dados"
    },
    {
        id: "456789123",
        name: "Pedro Oliveira",
        age: 28,
        city: "Belo Horizonte",
        profession: "Engenheiro de software"
    },
    {
        id: "321654987",
        name: "Ana Costa",
        age: 30,
        city: "Curitiba",
        profession: "Designer gráfico"
    },
    {
        id: "789123456",
        name: "Lucas Souza",
        age: 27,
        city: "Porto Alegre",
        profession: "Testador de software"
    },
    {
        id: "654321789",
        name: "Julia Lima",
        age: 29,
        city: "Salvador",
        profession: "Gerente de projetos"
    },
    {
        id: "147258369",
        name: "Bruno Alves",
        age: 31,
        city: "Recife",
        profession: "Administrador de redes"
    },
    {
        id: "369258147",
        name: "Fernanda Rocha",
        age: 26,
        city: "Brasília",
        profession: "Consultora de TI"
    },
    {
        id: "258369147",
        name: "Carlos Mendes",
        age: 33,
        city: "Fortaleza",
        profession: "Arquiteto de sistemas"
    },
    {
        id: "963852741",
        name: "Camila Dias",
        age: 24,
        city: "Manaus",
        profession: "Programadora mobile"
    },
    {
        id: "1593574862",
        name: "Rafael Nunes",
        age: 34,
        city: "Florianópolis",
        profession: "Segurança da informação"
    },
    {
        id: "7539518642",
        name: "Leticia Martins",
        age: 23,
        city: "Goiânia",
        profession: "Suporte técnico"
    },
    {
        id: "9517538642",
        name: "Gabriel Ribeiro",
        age: 35,
        city: "Natal",
        profession: "Instrutor de TI"
    },
    {
        id: "3579514862",
        name: "Renata Carvalho",
        age: 28,
        city: "Vitória",
        profession:
            "Desenvolvedora de jogos"
    },
    {
        id: "4862951375",
        name: "Leonardo Gomes",
        age: 30,
        city: "Campinas",
        profession: "Cientista de dados"
    },
    {
        id: "2951375486",
        name: "Aline Silva",
        age: 27,
        city: "Santos",
        profession: "Web designer"
    },
    {
        id: "1375486295",
        name: "Rodrigo Oliveira",
        age: 32,
        city: "Maceió",
        profession: "Analista de sistemas"
    },
    {
        id: "5486295137",
        name: "Vanessa Lima",
        age: 26,
        city: "Campo Grande",
        profession: "Especialista em SEO"

    },
    {
        id: "6295137548",
        name: "Felipe Costa",
        age: 29,
        city: "Teresina",
        profession: "Hacker ético"
    },
    {
        id: "5137548629",
        name: "Bianca Souza",
        age: 25,
        city: "Cuiabá",
        profession: "Banco de dados"
    }
];

const Formulario = () => {

    const [busca, setBusca] = useState('');

    const lowerBusca = busca.toLowerCase()

    const usersFilter = users.filter((user) => user.name.toLowerCase().includes(lowerBusca));

    return (
        <div className="formulario">
            <div className="cabecalho">
                <h1>Lista de usuários</h1>

                <div className="campo-busca">
                    <input
                        type={'text'}
                        placeholder={'Digite um nome para buscar'}
                        onChange={(event) => setBusca(event.target.value)}
                        value={busca}
                    />
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
                    {usersFilter.map(user => <Usuario
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