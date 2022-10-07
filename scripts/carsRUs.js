import { ColorChoice } from "./color.js"
import { Interiors } from "./interior.js"
import { WheelChoice } from "./wheel.js"
import { Technology } from "./technology.js"
import { Orders } from "./orderChoice.js"

/* document.addEventListener(
    "click",
    (event) => {
        if (event.target.name === "carsRUs") {
            se 
        }
    }
) */


export const carsRUs = () => {
    return `
    <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices__colors options">
                <h2>Colors</h2>
                ${ColorChoice()}
            </section>
            <section class="choices__interior options">
                <h2>Interiors</h2>
                ${Interiors()}
            </section>
            <section class="choices__wheel options">
                <h2>Wheels</h2>
                ${WheelChoice()}
            </section>
            <section class="choices__technology options">
            <h2>Technologies</h2>
            ${Technology()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create A Personalized Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Design Orders</h2>
            ${Orders()}
        </article>
    `
}