export default function Menu() {
    return (
        <>

            <div style={{ backgroundPositionY: 'center', backgroundImage: "url('https://i.ibb.co/60RPqYf/Jonas-Preto-EBranco2.png')",backgroundSize:'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <div style={{ margin: '52%' }}></div>
            </div>
            <hr style={{color: 'white'}}></hr>
            {/* Serviços */}
            <div id='servicos' className="row" >
                <h1 style={{ color: 'white;', textAlign: 'center', marginTop: '3%' }}>SERVIÇOS</h1>
            </div>
            <div className="row" >
                <div className="col-md-3" >
                    <div class="card" style={{ margin: '5%' }}>
                        <img src="https://4success.com.br/wp-content/uploads/2019/11/integracao-gerenciada.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">CRIAÇÃO DE SISTEMAS</h5><br></br><br></br>
                            <a href="#" class="btn btn-primary">Fale comigo</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card" style={{ margin: '5%' }}>
                        <img src="https://id7.com.br/wp-content/webpc-passthru.php?src=https://id7.com.br/wp-content/uploads/2017/10/desenvolvimento-de-site-intelipost-medio-02.png&nocache=1" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">ELABORAÇÃO DE SITES</h5><br></br><br></br>
                            <a href="#" class="btn btn-primary">Fale comigo</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card" style={{ margin: '5%' }}>
                        <img src="https://neilpatel.com/wp-content/uploads/2019/05/word-image-10.jpeg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">CHAT BOT</h5><br></br><br></br>
                            <a href="#" class="btn btn-primary">Fale comigo</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card" style={{ margin: '5%' }}>
                        <img src="https://mundodecursos.com.br/wp-content/uploads/2022/01/curso-gratuito-montagem-manutencao-de-computadores.webp" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">MANUTENÇÃO DE PC</h5><br></br><br></br>
                            <a href="#" class="btn btn-primary">Fale comigo</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" >
                <h1 style={{ color: 'white;', textAlign: 'center', marginTop: '3%' }}>PROJETOS</h1>
            </div>
            <hr style={{color: 'white'}}></hr>
            {/* Carousel - Projetos */}
            <div className="row" id='projetos'>

            </div>
            <hr style={{color: 'white'}}></hr>
            {/* Sobre */}
            <div id='sobre' className="row">
                <div className="col-md-12">
                    <div class="card" style={{ margin: '5%' }}>
                        <div class="card-header">
                            SOBRE
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">JONAS JOSINO MONTEIRO DA SILVA</h5>
                            <p class="card-text">Sou graduado em Sistemas de Informação pela Estácio de Sá / Técnico em Informática pelo Senac.
                                No momento estou buscando uma oportunidade de trabalho como Desenvolvedor Web / Analista de Sistemas Jr.
                                Possuo experiência em HTML5, CSS, JavaScript, React, NextJs, Node.js, Python, .Net, Angular, Orientação a objetos e Metodologias Ágeis.
                                Possuo inglês intermediário e aproximadamente 4 anos de experiência que tive nas empresas pelas quais passei:
                                Desenvolvimento de sistemas, Service Desk e manutenção de sistemas legados.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <hr style={{color: 'white'}}></hr>
            {/* Contato */}
            <div id='contato' className="row">
                <div className="col-md-12">
                    <div class="card" style={{ height: '20rem;', margin: '5%' }}>
                        <div class="card-header">
                            CONTATO
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">CONTATO</h5><br></br>
                            <p class="card-text">Telefone:(21)98630-0507</p>
                            <p class="card-text">E-Mail: jjosinoms@gmail.com</p><br></br>
                            <a href="https://github.com/jjosinoms" class="btn btn-primary" style={{ margin: '1%' }}>Github</a>
                            <a href="https://www.linkedin.com/in/jonas-josino-b5064257/" class="btn btn-primary" style={{ margin: '1%' }}>Linkedin</a>
                            <a href="https://www.instagram.com/jonasjosino/" class="btn btn-primary" style={{ margin: '1%' }}>Instagram</a>
                            <a href="https://www.facebook.com/jonasjosino89" class="btn btn-primary" style={{ margin: '1%' }}>Facebook</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <a href="https://imgbb.com/">
                <img src="https://i.ibb.co/60RPqYf/Jonas-Preto-EBranco2.png" alt="Jonas-Preto-EBranco2" border="0" />
            </a>
            </div> */}

            {/* <a href="https://imgbb.com/">
                <img src="https://i.ibb.co/VqFLW8t/Jonas-Preto-EBranco.png" alt="Jonas-Preto-EBranco" border="0" />
            </a> */}

            <hr style={{color: 'white'}}></hr>
        </>
    )
}