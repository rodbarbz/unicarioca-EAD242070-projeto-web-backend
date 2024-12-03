import {useEffect, useState} from "react"
import axios from "axios"
import { format } from "date-fns"

interface Projeto {
    nomeProjeto : string;
    responsavel : string;
    email : string;
    dataHoje : string;
    descricao: string;
    idProjeto: string;
    _id: string;
}


export function DadosDB() {
    const [dados, setDados] = useState<Projeto[]>([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5002/projects')
        .then(response => setDados(response.data))
        .catch(error => console.error('Error ao achar os dados: ', error))
    }, [])

    return (
        <>  
            <div>
                <h1>Projetos Registrados:</h1>
                <div className="infosProjetoContainer">
                    {dados.map(projeto => (
                        <div key={projeto._id} className="infosProjeto">
                            <div className="idProjeto">
                                <h1>Id do Projeto: {projeto.idProjeto}</h1>
                            </div>

                            <br></br>
                            <p><b>Nome do projeto:</b> {projeto.nomeProjeto}</p>
                            <br />
                            <p><b>Descrição:</b> {projeto.descricao}</p>

                            <div key={projeto._id} className="assinaturaProjeto">
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