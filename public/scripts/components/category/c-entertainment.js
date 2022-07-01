import DataSource from "../../data/data.js";
import { mainComponent, errorContent, midContent, asdContent } from "./components.js";

class CEntertainment extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = mainComponent;
        const dataSource = new DataSource();
        const entertainment = dataSource.data("entertainment");
        const general = dataSource.data("general");

        entertainment.then(object => {
            object.articles.forEach(data => {
                midContent(data);
            });
        }).catch(() => {
            this.innerHTML += errorContent;
        })

        general.then(data => {
            for (let i = 6; i < 9; i++) {
                asdContent(data.articles[i]);
            };
        }).catch(() => {
            this.innerHTML += errorContent;
        })
    }
}

customElements.define("c-entertainment", CEntertainment);