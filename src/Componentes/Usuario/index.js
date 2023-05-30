import './Usuario.css';

const Usuario = ({identificacao, nome, idade, cidade, profissao}) => {
    return (
        <tr>
            <td>{identificacao}</td>
            <td>{nome}</td>
            <td>{idade}</td>
            <td>{cidade}</td>
            <td>{profissao}</td>
        </tr>
    )
}

export default Usuario