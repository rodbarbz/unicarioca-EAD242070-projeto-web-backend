import React, {useEffect, useState} from "react"
import axios from "axios"
import { format } from "date-fns"
import excluir  from "../assets/excluir.png"

interface Projeto {
    nomeProjeto : string;
    responsavel : string;
    email : string;
    dataHoje : string;
    descricao: string;
    idProjeto: string;
    _id: string;
}



export function DeletarDados() {
    const [dados, setDados] = useState<Projeto[]>([]);

    useEffect(() => {
        axios.get('http://192.168.1.12:5002/projects')
        .then(response => setDados(response.data))
        .catch(error => console.error('Error ao achar os dados: ', error))
    }, [])

    const handleDelete = async (_id : string) => {
        try {
            if (confirm("Tem certeza que deseja deletar?")){
                await axios.delete(`http://192.168.1.12:5002/projects/${_id}`);
                setDados(dados.filter((item) => item._id !== _id));
                alert("Dados excluídos com sucesso!")
            }
            else {
                alert("Exclusão cancelada pelo usuário")
            }
        } catch(error) {
            console.error(error)
        }
        console.log(_id)
    }

    return (
        <>  
            <div>
                <h1>Projetos Registrados:</h1>
                <div className="infosProjetoContainer">
                    {dados.map(projeto => (
                        <div key={projeto.idProjeto} className="infosProjeto">
                            <div className="deletar">
                                <button onClick={() => handleDelete(projeto._id)}><img src={excluir} alt="" /></button>
                            </div>
                            <div className="idProjeto">
                                <h1>Id do Projeto: {projeto.idProjeto}</h1>
                            </div>

                            <br></br>
                            <p><b>Nome do projeto:</b> {projeto.nomeProjeto}</p>
                            <br />
                            <p><b>Descrição:</b> {projeto.descricao}</p>

                            <div key={projeto.idProjeto} className="assinaturaProjeto">
                                <p><b>Responsável:</b> {projeto.responsavel}</p>
                                <p><b>e-mail:</b> {projeto.email}</p>
                                <p><b>Data:</b> {format(new Date (projeto.dataHoje), 'dd/MM/yyyy')}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </>
    )
}