import DataSource from "../../data/data.js";
import { mainComponent, errorContent, midContent, asdContent } from "./components.js";

class CBusiness extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = mainComponent;
        const dataSource = new DataSource();
        let business = dataSource.data("business");
        let general = dataSource.data("general");

        business.then(object => {
            object.articles.forEach(data => {
                midContent(data);
            });
        }).catch(() => {
            this.innerHTML += errorContent;
        })

        general.then(data => {
            for (let i = 3; i < 6; i++) {
                asdContent(data.articles[i]);
            };
        }).catch(() => {
            this.innerHTML += errorContent;
        })
    }
}

customElements.define("c-business", CBusiness);