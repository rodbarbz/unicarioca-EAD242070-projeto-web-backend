import Aluno from "../assets/aluno.png"
import HomeMenu from "../assets/home-menu.png"

export function Navbar(){
    return (
        <>
            <nav className="menu">
                <a href="/"><img src={HomeMenu} alt="" /></a>
                <div className="logo">
                    Projetos
                    <img src={Aluno} alt="" />
                </div>
            </nav>
        </>
    )
}