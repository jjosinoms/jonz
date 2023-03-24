import Contato from "./contato";
import Projetos from "./projetos";
import Servicos from "./servicos";
import Sobre from "./sobre";


export default function Menu() {
    return (
        <>

            <div style={{ backgroundPositionY: 'center', backgroundImage: "url('https://i.ibb.co/60RPqYf/Jonas-Preto-EBranco2.png')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <div style={{ margin: '52%' }}></div>
            </div>
            <hr style={{ color: 'white' }}></hr>

            {/* Serviços */}

            <Servicos/>
            
       
            {/* PROJETOS */}

            <Projetos />

       
            {/* Carousel - Projetos */}



            {/* Sobre */}

            <Sobre/> 

            {/* Contato */}

            <Contato/>

            {/* <a href="https://imgbb.com/">
                <img src="https://i.ibb.co/60RPqYf/Jonas-Preto-EBranco2.png" alt="Jonas-Preto-EBranco2" border="0" />
            </a>
            </div> */}

            {/* <a href="https://imgbb.com/">
                <img src="https://i.ibb.co/VqFLW8t/Jonas-Preto-EBranco.png" alt="Jonas-Preto-EBranco" border="0" />
            </a> */}

            <hr style={{ color: 'white' }}></hr>
        </>
    )
}