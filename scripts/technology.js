import { setTechnology, getTechnology } from "./database.js";

const technologies = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technology = () => {
    let html = "<ul>"
    const listItemsArray = technologies.map(technology => {
        return `<li>
        <input type="radio" name="technology" value="${technology.id}" /> ${technology.package}
        </li>`
    })
    html += listItemsArray.join("")
    html += "</ul>"

    return html
}