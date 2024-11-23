export function Buttons(){
    return (
        <>  
            <div className="botoes">
                <button>Editar</button>
                <button>Deletar</button>
                <a href="/adicionar"><button>Adicionar Novo</button></a>
                <a href="/visualizar"><button>Visualizar</button></a>
                <a href="/creditos"><button>Créditos</button></a>
            </div>
        </>
    )
}