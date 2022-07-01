import DataSource from "./data/data.js";
import { errorContent } from "./components/category/components.js";

const main = () => {
    const searchInput = document.querySelector(".search");
    const mainSearch = document.querySelector("main");

    searchInput.addEventListener("keyup", () => {
        mainSearch.innerHTML = `
            <style>
                .bi-arrow-left-circle-fill {
                    font-size: 50px;
                    cursor: pointer;
                    margin-left: 30px;
                    color: #142F43;
                }
                .card:hover {
                    box-shadow: 0 5px 7px #000;
                }
                .card-s {
                    min-height: 625px;
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
            <a href="/" title="Back to Home"><i class="bi bi-arrow-left-circle-fill"></i></a>
            <h2 class="d-flex justify-content-center p-3 text-decoration-underline">AbsoluteNews</h2>
            <div class="wrapperSrc">
                <div class="row row-cols-1 row-cols-md-4 g-4 m-3 main-search"></div>
            </div>
        `;

        const dataSource = new DataSource();
        const mainSrch = document.querySelector(".main-search");
        const searchNews = dataSource.searchData(searchInput.value);

        searchNews.then(object => {
            object.articles.forEach(data => {
                mainSrch.innerHTML += `
                    <div>
                        <article class="col">
                            <div class="card card-s">
                                <img src="${data.urlToImage}" class="card-img-top" alt="${data.source.name}">
                                <div class="card-body">
                                    <h5 class="card-title">${data.title}</h5>
                                    <p class="card-text">${data.description}</p>
                                    <p class="card-text">Penulis: ${data.author}</p>
                                    <p class="card-text"><small class="text-muted">Tanggal: ${data.publishedAt.replace("T", ", Waktu: ").replace("Z", "")}</small></p>
                                    <button type="button" class="btn btn-outline-secondary seeMoreSrc">Baca selengkapnya</button>
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
            });

            document.querySelectorAll(".seeMoreSrc").forEach(more => {
                more.addEventListener("click", (e) => {
                    const parentE = e.target.parentElement.parentElement.parentElement.parentElement;
                    parentE.querySelector(".wrapper").setAttribute("style", "display: block");
                    parentE.querySelector(".bi-arrow-left-circle-fill").addEventListener("click", () => {
                        parentE.querySelector(".wrapper").setAttribute("style", "display: none");
                    });
                });
            });
        }).catch(() => {
            document.querySelector(".wrapperSrc").innerHTML += errorContent;
        });
    });

    let navLink = document.querySelectorAll(".nav-link");
    navLink.forEach(el => {
        if (window.location.href == el) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });
}

export default main;