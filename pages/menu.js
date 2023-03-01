export default function Menu() {
    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong" style={{ marginBottom: '3%' }} >
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" style={{marginLeft: '42%',}}>	&#128526;- Jonas Monteiro - &#128516;  </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav>
        </>
    )
}