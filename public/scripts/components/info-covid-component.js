import DataSource from "../data/data.js";
import { errorContent } from "./category/components.js";

class InfoCovidComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                thead {
                    position: sticky;
                    top: 56px;
                    z-index: 222;
                    background-color: #142F43;
                }
            </style>
            <div class="container">
                <h1 class="text-center p-4 text-danger">Data Covid-19 Di Indonesia</h1>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" class="text-center text-white">Provinsi</th>
                            <th scope="col" class="text-center text-white">Kasus</th>
                            <th scope="col" class="text-center text-white">Sembuh</th>
                            <th scope="col" class="text-center text-white">Meninggal</th>
                            <th scope="col" class="text-center text-white">Dirawat</th>
                        </tr>
                    </thead>
                    <tbody id="myTable"></tbody>
                </table>
            </div>
        `;

        const dataSource = new DataSource();
        let dataCovid = dataSource.dataCovid();

        dataCovid.then(data => {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                console.log(data[i]);
                document.getElementById('myTable').innerHTML += `
                    <tr>
                        <td>${data[i].provinsi}</td>
                        <td class="text-center">${data[i].kasus}</td>
                        <td class="text-center">${data[i].sembuh}</td>
                        <td class="text-center">${data[i].meninggal}</td>
                        <td class="text-center">${data[i].dirawat}</td>
                    </tr>
                `;
            }
        }).catch(() => {
            this.innerHTML += errorContent;
        });
    }
}

customElements.define("info-covid-component", InfoCovidComponent);