export default function Projetos() {
    return (
        <>
            <div className="col-md-12">
                <div class="container mt-4">
                    <div class="card">
                        <div class="card-header bg-secondary text-white">
                            Meus Projetos
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-3 d-flex align-items-stretch">
                                    <div class="card">
                                        <div class="card-header">
                                            API de Produtos
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text">Projeto que implementa uma API de produtos utilizando ASP.NET 7 (MVC e API), EntityFramework, Padrões DDD e TDD.</p>
                                            <p class="card-text">Tecnologias utilizadas: C#, ASP.NET 7, EntityFramework, Padrões DDD e TDD, RabbitMQ e Docker.</p>
                                            <a className="btn btn-secondary" href="https://github.com/jjosinoms/E-CommerceAPI"> Saiba mais </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 d-flex align-items-stretch">
                                    <div class="card">
                                        <div class="card-header">
                                            API de Usuários
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text">Projeto que implementa uma API de usuários utilizando ASP.NET 7 (MVC e API), EntityFramework, Padrões DDD e TDD.</p>
                                            <p class="card-text">Tecnologias utilizadas: C#, ASP.NET 7, EntityFramework, Padrões DDD e TDD, RabbitMQ e Docker.</p>
                                            <a className="btn btn-secondary" href="https://github.com/jjosinoms/ApiUsuarios"> Saiba mais </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 d-flex align-items-stretch">
                                    <div class="card">
                                        <div class="card-header">
                                            Frontend
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text">Projeto que implementa o frontend para consumir as APIs de Usuários e Produtos utilizando Angular 15 e Bootstrap.</p>
                                            <p class="card-text">Tecnologias utilizadas: Angular 15, Bootstrap.</p>
                                            <a className="btn btn-secondary" href="https://github.com/jjosinoms/FrontEnd-Usuarios"> Saiba mais </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="card">
                                        <div class="card-header">
                                            Controle Financeiro
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text">Projeto que implementa um sistema de contas a pagar/receber.</p>
                                            <p class="card-text">Desenvolvimento N Camadas

                                                AspNet MVC - Model, View e Controller

                                                FrontEnd Bootstrap, JQuery DataTables e HighCharts

                                                Dapper e ORM para acesso ao SqlServer

                                                CookieAuthentication para AspNet

                                                Relatórios com EPPLUS (Excel) e iText7 (PDF)

                                                Envio de email para recuperação de senha</p>
                                            <a className="btn btn-secondary" href="https://github.com/jjosinoms/Controle-Financeiro"> Saiba mais </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}