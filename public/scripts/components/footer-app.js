class FooterApp extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .bi-arrow-up-circle-fill {
                    font-size: 50px;
                    cursor: pointer;
                    margin: 0 0 20px 94%;
                    color: #142F43;
                }
            </style>
            <i title="Back to Top" class="bi bi-arrow-up-circle-fill d-block"></i>
            <footer class=" footer container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 mt-5 border-top">
                <p class="col-md-4 mb-0 text-muted">Copyright © 2021 - AbsoluteNews</p>
                <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img src="../../images/berita-icon.png" alt="AbsoluteNews Logo" class="w-25">
                </a>
                <ul class="nav col-md-4 justify-content-end">
                    <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Home</a></li>
                    <li class="nav-item"><a href="/contact" class="nav-link px-2 text-muted">Hubungi</a></li>
                    <li class="nav-item"><a href="/about" class="nav-link px-2 text-muted">Tentang</a></li>
                </ul>
            </footer>
        `;

        const arrowUp = document.querySelector(".bi-arrow-up-circle-fill");

        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                arrowUp.classList.add("fixed-bottom");
            } else {
                arrowUp.classList.remove("fixed-bottom");
            }
        });

        arrowUp.addEventListener("click", () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    }
}

customElements.define("footer-app", FooterApp);