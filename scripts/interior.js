import { setInterior, getInterior } from "./database.js";

const interiors = getInterior()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    let html = "<ul>"

    const listItemsArray = interiors.map(interior => {
        return `<li>
        <input type="radio" name="style" value="${interior.id}" /> ${interior.fabric}
        </li>`
    })

    html += listItemsArray.join("")
    html += "</ul>"

    return html
}