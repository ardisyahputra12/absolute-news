import DataSource from "../../data/data.js";
import { mainComponent, errorContent, midContent, asdContent } from "./components.js";

class CScience extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = mainComponent;
        const dataSource = new DataSource();
        const science = dataSource.data("science");
        const general = dataSource.data("general");

        science.then(object => {
            object.articles.forEach(data => {
                midContent(data);
            });
        }).catch(() => {
            this.innerHTML += errorContent;
        })

        general.then(data => {
            for (let i = 12; i < 15; i++) {
                asdContent(data.articles[i]);
            };
        }).catch(() => {
            this.innerHTML += errorContent;
        })
    }
}

customElements.define("c-science", CScience);