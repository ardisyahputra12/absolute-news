import DataSource from "../../data/data.js";
import { mainComponent, errorContent, midContent, asdContent } from "./components.js";

class CHome extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = mainComponent;
        const dataSource = new DataSource();
        const home = dataSource.data();
        const technology = dataSource.data("technology");

        home.then(object => {
            object.articles.forEach(data => {
                midContent(data);
            });
        }).catch(() => {
            this.innerHTML += errorContent;
        })

        technology.then(data => {
            for (let i = 0; i < 3; i++) {
                asdContent(data.articles[i]);
            };
        }).catch(() => {
            this.innerHTML += errorContent;
        })
    }
}

customElements.define("c-home", CHome);