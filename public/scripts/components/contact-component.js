class ContactComponent extends HTMLElement {
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
                .contact-container {
                    box-shadow: 0 5px 10px #333;
                    margin: 20px auto;
                    padding: 0 5% 40px;
                    width: 65%;
                }
                .input-group input {
                    height: 50px;
                }
                textarea {
                    height: 220px;
                }
                button {
                    margin-top: 25px;
                    width: 150px;
                }
                .social {
                    width: 80px;
                    bottom: 60px;
                    padding: 0 20px;
                    box-shadow: 0 5px 10px #333;
                    border-radius: 0 25px 25px 0;
                }
                .social a {
                    font-size: 36px;
                }
            </style>
            <a href="/" title="Back to Home"><i class="bi bi-arrow-left-circle-fill"></i></a>
            <div class="contact-container text-center">
                <h2 class="text-decoration-underline p-4">Hubungi Kami</h2>
                <form>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Nama" required>
                    </div>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Alamat Email" required>
                    </div>
                    <div class="input-group">
                        <textarea class="form-control" placeholder="Pesan Anda . . ." required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Kirim</button>
                </form>
            </div>
            <div class="d-flex flex-column social position-fixed">
                <a href="https://facebook.com/" target="blank" title="Facebook" class="my-1"><i class="bi bi-facebook"></i></a>
                <a href="https://instagram.com/" target="blank" title="Instagram" class="my-1"><i class="bi bi-instagram"></i></a>
                <a href="https://twitter.com/" target="blank" title="Twitter" class="my-1"><i class="bi bi-twitter"></i></a>
                <a href="https://youtube.com/" target="blank" title="Youtube" class="my-1"><i class="bi bi-youtube"></i></a>
                <a href="https://whatsapp.com/" target="blank" title="Whatsapp" class="my-1"><i class="bi bi-whatsapp"></i></a>
            </div>
        `;
        document.querySelector("form").addEventListener("submit", (e) => {
            alert("Terimakasih, pesan Anda telah kami terima.");
            e.preventDefault();
        })
    }
}

customElements.define("contact-component", ContactComponent);