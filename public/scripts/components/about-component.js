class AboutComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .bi-arrow-left-circle-fill {
                    font-size: 50px;
                    cursor: pointer;
                    margin-left: 30px;
                    color: #142F43;
                }
                .about-container {
                    box-shadow: 0 5px 10px #333;
                    margin: 20px 100px;
                    padding: 10px 0 40px;
                }
                .card {
                    margin: 20px;
                    width: 18rem;
                    cursor: pointer;
                    box-shadow: 0 5px 7px #142F43;
                }
                .card:hover {
                    box-shadow: inset 0 5px #142F43;
                }
                .card img {
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    margin: 20px auto;
                }
            </style>
            <a href="/" title="Back to Home"><i class="bi bi-arrow-left-circle-fill"></i></a>
            <div class="about-container text-center">
                <h2 class="text-decoration-underline py-3">Absolute Team</h2>
                <div class="person d-flex justify-content-center">
                    <div class="card" title="Ardi">
                        <img src="../../images/ardi.jpg" class="card-img-top" alt="Ardi Saputra">
                        <div class="card-body">
                            <h5 class="card-title">Ardi Saputra</h5>
                            <p class="card-text">201111952</p>
                            <p class="card-text">Simeulue - Aceh</p>
                            <p class="card-text">Mahasiswa Teknik Informatika Universitas Mikroskil</p>
                        </div>
                    </div>
                    <div class="card" title="Fitrah">
                        <img src="../../images/fitrah.jpg" class="card-img-top" alt="Fitrah P.U Bangun">
                        <div class="card-body">
                            <h5 class="card-title">Fitrah P.U Bangun</h5>
                            <p class="card-text">201111591</p>
                            <p class="card-text">Asrama Martoba - P.Siantar</p>
                            <p class="card-text">Mahasiswa Teknik Informatika Universitas Mikroskil</p>
                        </div>
                    </div>
                    <div class="card" title="Indra">
                        <img src="../../images/indra.jpg" class="card-img-top" alt="Indra Gunawan Gulo">
                        <div class="card-body">
                            <h5 class="card-title">Indra Gunawan Gulo</h5>
                            <p class="card-text">201111448</p>
                            <p class="card-text">Gunung Sitoli - Nias</p>
                            <p class="card-text">Mahasiswa Teknik Informatika Universitas Mikroskil</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("about-component", AboutComponent);