import { Navbar } from "../components/Navbar";
import GitHub from "../assets/github-menu.svg"
import Linkedin from "../assets/linkedin-menu.svg"

export function Creditos(){
    return (
        <>
            <Navbar />
            <div className="creditos">
                <h1>Desenvolvido por:</h1>
                <div className="nomes">
                    <p>Pedro Luis Gaspar Vieira de Souza </p> 
                    <h2>
                        <a href="https://github.com/PLGVS" target="blank"><img src={GitHub} alt="" /></a>
                        <a href="https://www.linkedin.com/in/pedro-gaspar-02b123211/" target="blank"><img src={Linkedin} alt="" /></a>
                    </h2>
                    <p>Ingrid Santana Santos</p>
                    <h2>
                        <a href="https://github.com/PLGVS" target="blank"><img src={GitHub} alt="" /></a>
                        <a href="https://github.com/PLGVS" target="blank"><img src={Linkedin} alt="" /></a>
                    </h2>
                    <p>Gabriel Correia de Sousa</p>
                    <h2>
                        <a href="https://github.com/PLGVS" target="blank"><img src={GitHub} alt="" /></a>
                        <a href="https://github.com/PLGVS" target="blank"><img src={Linkedin} alt="" /></a>
                    </h2>
                    <p>Rodrigo de Mesquita Barboza</p>
                    <h2>
                        <a href="https://github.com/PLGVS" target="blank"><img src={GitHub} alt="" /></a>
                        <a href="https://github.com/PLGVS" target="blank"><img src={Linkedin} alt="" /></a>
                    </h2>
                    <p>Hiago Rodrigues de Mello</p>
                    <h2>
                        <a href="https://github.com/PLGVS" target="blank"><img src={GitHub} alt="" /></a>
                        <a href="https://github.com/PLGVS" target="blank"><img src={Linkedin} alt="" /></a>
                    </h2>
                    <p>Gabrielly Tavares de Góis</p>
                    <h2>
                        <a href="https://github.com/PLGVS" target="blank"><img src={GitHub} alt="" /></a>
                        <a href="https://github.com/PLGVS" target="blank"><img src={Linkedin} alt="" /></a>
                    </h2>
                </div>
            </div>
        </>
    )
}