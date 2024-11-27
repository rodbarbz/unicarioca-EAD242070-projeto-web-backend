import {useState, useEffect} from 'react'
import axios from 'axios'

export function FormularioProjeto(){
    const [nomeProjeto, setNomeProjeto] = useState('')
    const [responsavel, setResponsavel] = useState('')
    const [dataHoje, setDataHoje] = useState('');
    const [email, setEmail] = useState('')
    const [descricao, setDescricao] = useState('')

  useEffect(() => {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, '0'); 
    const dia = String(hoje.getDate()).padStart(2, '0');
    const dataFormatada = `${ano}-${mes}-${dia}`;
    setDataHoje(dataFormatada);
  }, []);
    
    const handleSubmit = async (e: { preventDefault: () => void;}) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5002/projects', {
                nomeProjeto,
                responsavel,
                email,
                dataHoje
            });
            console.log(response.data, nomeProjeto, responsavel)
        }
        catch (error){
            console.error('Erro ao enviar os dados', error)
        }
    } 

    return (
        <>
            <div className="dadosFuncionalidade">
                <form onSubmit={handleSubmit}>
                    <div className="dadosProjeto">
                        <label>Nome do Projeto:</label>
                        <input 
                        type="text" 
                        name="nomeFuncionalidade"
                        value={nomeProjeto}
                        onChange={(e) => setNomeProjeto(e.target.value)}
                        />
                    </div>
                    <br />
                    <div className="dadosProjeto">
                        <label>Responsável:</label>
                        <input 
                        type="text" 
                        name="responsavel"
                        value={responsavel}
                        onChange={(e) => setResponsavel(e.target.value)}
                        />
                    </div>
                    <br />
                    <div className="dadosProjeto">
                        <label>E-mail:</label>
                        <input 
                        type="email" 
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <br />
                    <div className="dadosProjeto">
                        <label>Data:</label>
                        <input 
                        type="date" 
                        value={dataHoje}
                        onChange={(e) => setDataHoje(e.target.value)}
                        />
                    </div>
                    <br />
                    <div className="dadosProjeto">
                        <label>Descrição:</label>
                        <textarea
                        name="descricao"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        ></textarea>
                    </div>
                    <br />
                    <button type="submit">Registrar</button>
                </form>
            </div>
        </>
    )
}