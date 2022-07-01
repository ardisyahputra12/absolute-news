import DataSource from "../../data/data.js";
import { mainComponent, errorContent, midContent, asdContent } from "./components.js";

class CHealth extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = mainComponent;
        const dataSource = new DataSource();
        const health = dataSource.data("health");
        const general = dataSource.data("general");

        health.then(object => {
            object.articles.forEach(data => {
                midContent(data);
            });
        }).catch(() => {
            this.innerHTML += errorContent;
        })

        general.then(data => {
            for (let i = 9; i < 12; i++) {
                asdContent(data.articles[i]);
            };
        }).catch(() => {
            this.innerHTML += errorContent;
        })
    }
}

customElements.define("c-health", CHealth);