class HeaderApp extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const zero = time => {
            if (time < 10)
                time = "0" + time;
            return time;
        }
        const dates = new Date();
        const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
        const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        let day = days[dates.getDay()];
        let month = months[dates.getMonth()];
        let date = dates.getDate();
        let year = dates.getFullYear();
        let hour = zero(dates.getHours());
        let minute = zero(dates.getMinutes());

        this.innerHTML = `
            <style>
                .date {
                    padding: 3px 90px;
                    background-color: #142F43;
                }
                .top-header{
                    padding: 0 130px 0 40px;
                    height: 100px;
                }
                .form-control {
                    width: 65%;
                }
                .about a{
                    padding: 0 10px;
                    font-size: 18px;
                }
            </style>
            <header>
                <div class="date text-white d-flex">
                    <span>${hour} : ${minute}</span>
                    <span style="margin: 0 25px;">|</span>
                    <span>${day}, ${date} ${month} ${year}</span>
                </div>
                <div class="top-header border-bottom shadow d-flex justify-content-between align-items-center">
                    <a href="/">
                        <img src="../../images/berita-icon.png" alt="AbsoluteNews Logo" width=100px>
                    </a>
                    <input type="search" class="form-control search" placeholder="Cari berita disini..." aria-label="Search">
                    <div class="about">
                        <a href="/about" class="text-decoration-none">
                            <i class="bi bi-person-fill"></i>
                            Tentang
                        </a>
                        <a href="/contact" class="text-decoration-none">
                            <i class="bi bi-telephone-fill"></i>
                            Hubungi
                        </a>
                    </div>
                </div>
            </header>
        `;
    }
}

customElements.define("header-app", HeaderApp);