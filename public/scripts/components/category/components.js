const mainComponent = `
    <style>
        .main-component {
            margin: 40px;
        }
        .middle-content {
            margin-right: 25px;
        }
        .aside-content h4 {
            margin-bottom: 30px;
            background-color: #142F43;
            padding: 5px 0;
        }
        .alert-danger {
            width: 90%;
            margin: 0 auto;
        }
        .card-group {
            margin-bottom: 20px;
        }
        .wrapper {
            display: none;
            z-index: 9999;
            background-color: rgba(0, 0, 0, 0.7);
            right: 0;
            left: 0;
            overflow-y: scroll;
        }
        .bi-arrow-left-circle-fill {
            font-size: 50px;
            cursor: pointer;
            margin-left: 30px;
        }
        .detail {
            width: 60%;
            min-height: 100%;
        }
    </style>
    <article class="main-component d-flex justify-content-center">
        <section class="middle-content w-75"></section>
        <aside class="aside-content w-25">
            <h4 class="text-white text-center">- Rekomendasi -</h4>
        </aside>
    </article>
`;

const errorContent = `
    <div class="alert alert-danger text-center m-5" role="alert">
        Data gagal dimuat! Silahkan cek koneksi internet Anda!
    </div>
`;

const midContent = (data) => {
    document.querySelector(".middle-content").innerHTML += `
        <div>
            <article class="card mb-3 shadow">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${data.urlToImage}" class="rounded-start" alt="${data.source.name}" width=100% height=100%>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${data.title}</h5>
                            <p class="card-text">${data.description}</p>
                            <p class="card-text">Penulis: ${data.author}</p>
                            <p class="card-text"><small class="text-muted">Tanggal: ${data.publishedAt.replace("T", ", Waktu: ").replace("Z", "")}</small></p>
                            <button type="button" class="btn btn-outline-secondary seeMore">Baca selengkapnya</button>
                        </div>
                    </div>
                </div>
            </article>
            <article class="wrapper position-fixed top-0 bottom-0" id="wrapper">
                <i title="Back" class="bi bi-arrow-left-circle-fill text-white position-fixed"></i>
                <div class="detail card m-auto shadow p-5">
                    <h2 class="card-title">${data.title}</h2>
                    <div class="d-flex justify-content-between">
                        <p class="card-text">Penulis: ${data.author}</p>
                        <p class="card-text"><small class="text-muted">Tanggal: ${data.publishedAt.replace("T", ", Waktu: ").replace("Z", "")}</small></p>
                    </div>
                    <img src="${data.urlToImage}" class="rounded-start p-3" alt="${data.source.name}" width=100% height=100%>
                    <p class="card-text">${data.content}</p>
                    <button type="button" class="btn btn-outline-secondary my-4 readMore"><a href=${data.url} target="blank" class="text-decoration-none d-block" title="Anda akan dialihkan ke halaman web asli untuk membaca lebih lanjut">Baca lebih lanjut</a></button>
                </div>
            </article>
        </div>
    `;

    document.querySelectorAll(".seeMore").forEach(more => {
        more.addEventListener("click", (e) => {
            const parentE = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
            parentE.querySelector(".wrapper").setAttribute("style", "display: block");
            parentE.querySelector(".bi-arrow-left-circle-fill").addEventListener("click", () => {
                parentE.querySelector(".wrapper").setAttribute("style", "display: none");
            });
        });
    });
}

const asdContent = data => {
    document.querySelector(".aside-content").innerHTML += `
        <div>
            <article class="card-group">
                <div class="card">
                    <img src="${data.urlToImage}" class="card-img-top" alt="${data.source.name}">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.description}
                        <p class="card-text">Penulis: ${data.author}</p>
                        <p class="card-text"><small class="text-muted">Tanggal: ${data.publishedAt.replace("T", ", Waktu: ").replace("Z", "")}</small></p>
                        <button type="button" class="btn btn-outline-secondary seeMoreAsd">Baca selengkapnya</button>
                    </div>
                </div>
            </article>
            <article class="wrapper position-fixed top-0 bottom-0" id="wrapper">
                <i title="Back" class="bi bi-arrow-left-circle-fill text-white position-fixed"></i>
                <div class="detail card m-auto shadow p-5">
                    <h2 class="card-title">${data.title}</h2>
                    <div class="d-flex justify-content-between">
                        <p class="card-text">Penulis: ${data.author}</p>
                        <p class="card-text"><small class="text-muted">Tanggal: ${data.publishedAt.replace("T", ", Waktu: ").replace("Z", "")}</small></p>
                    </div>
                    <img src="${data.urlToImage}" class="rounded-start p-3" alt="${data.source.name}" width=100% height=100%>
                    <p class="card-text">${data.content}</p>
                    <button type="button" class="btn btn-outline-secondary my-4 readMore"><a href=${data.url} target="blank" class="text-decoration-none d-block" title="Anda akan dialihkan ke halaman web asli untuk membaca lebih lanjut">Baca lebih lanjut</a></button>
                </div>
            </article>
        </div>
    `;

    document.querySelectorAll(".seeMoreAsd").forEach(more => {
        more.addEventListener("click", (ev) => {
            const parentEl = ev.target.parentElement.parentElement.parentElement.parentElement;
            parentEl.querySelector(".wrapper").setAttribute("style", "display: block");
            parentEl.querySelector(".bi-arrow-left-circle-fill").addEventListener("click", () => {
                parentEl.querySelector(".wrapper").setAttribute("style", "display: none");
            });
        });
    });
}

export { mainComponent, errorContent, midContent, asdContent };