import DataSource from "../data/data.js";
import { errorContent } from "./category/components.js";

class CarouselComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const dataSource = new DataSource();
        const consoleGame = dataSource.data("business");
        consoleGame.then(data => {
            this.innerHTML = `
                <style>
                    #carouselExampleIndicators {
                        height: 50%;
                        margin: 20px auto 50px;
                    }
                </style>
                <div id="carouselExampleIndicators" class="carousel slide w-75" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${data.articles[5].urlToImage}" class="d-block w-100" alt="${data.articles[5].source.name}">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Tanggal: ${data.articles[5].publishedAt.replace("T", ", Waktu: ").replace("Z", "")}</h5>
                                <p>${data.articles[5].title}</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            `;
            const carouselInner = document.querySelector(".carousel-inner");
            for (let i = 6; i < 10; i++) {
                carouselInner.innerHTML += `
                    <div class="carousel-item">
                        <img src="${data.articles[i].urlToImage}" class="d-block w-100" alt="${data.articles[i].source.name}">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Tanggal: ${data.articles[i].publishedAt.replace("T", ", Waktu: ").replace("Z", "")}</h5>
                            <p>${data.articles[i].title}</p>
                        </div>
                    </div>
                `;
            }
        }).catch(() => {
            this.innerHTML += errorContent;
        })
    }
}

customElements.define("carousel-component", CarouselComponent);