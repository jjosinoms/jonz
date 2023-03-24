import Bootstrap from "./bootstrap/bootstrap"
import Menu from "./menu"
import Rodape from "./rodape"
import Conteudo from "./conteudo"
import ScriptBlip from "./script"

export default function Index() {
    return (
        <>
        <Bootstrap />
            <div style={{ backgroundColor: 'black;' }}>
                <div className="container" >
                    <div className="row" style={{ textAlign: "center;" }}>
                        <Menu />
                        <Conteudo />
                        <Rodape />
                        <ScriptBlip/>
                        
                    </div>
                </div>
            </div>
            
        </>
    )
}