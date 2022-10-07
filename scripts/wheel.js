import { getWheels, setWheel } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const WheelChoice = () => {
    let html = "<ul>"

    const listItems = wheels.map(wheel => {
        return `<li>
        <input type= "radio" name="wheel" value="${wheel.id}" /> ${wheel.wheel}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"
    return html
}