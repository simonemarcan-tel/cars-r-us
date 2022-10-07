const database = {
    paintColors: [
        { id: 1, color: "silver", price: 12000 },
        { id: 2, color: "midnight blue", price: 1000 },
        { id: 3, color: "firebrick red", price: 700 },
        { id: 4, color: "spring green", price: 1400 }
    ],
    interiors: [
        { id: 1, material: "beige fabric", price: 355 },
        { id: 2, material: "charcoal fabric", price: 444 },
        { id: 3, material: "white leather", price: 133432 },
        { id: 4, material: "black leather", price: 909090 }
    ],
    technologies: [
        { id: 1, package: "basic package", price: 3333 },
        { id: 2, package: "navigation package", price: 96024 },
        { id: 3, package: "visibility package", price: 43110 },
        { id: 4, package: "ultra package", price: 80085 }
    ],
    wheels: [
        { id: 1, wheel: "17-inch pair radial", price: 450 },
        { id: 2, wheel: "17-inch pair radial black", price: 550 },
        { id: 3, wheel: "18-inch pair spoke silver", price: 650 },
        { id: 4, wheel: "18 inch pair spoke black", price: 77777 }
    ],
    customOrders: [
        {
            id: 1,
            paintColorsId: 3,
            interiorsId: 4,
            technologiesId: 3,
            wheelsId: 4,
            timestamp: 4654
        }
    ],
    orderBuilder:
    {

    }


}

export const getColor = () => {
    return database.paintColors.map(color => ({ ...color }))
}

export const getInterior = () => {
    return database.interiors.map(interior => ({ ...interior }))
}

export const getTechnology = () => {
    return database.technologies.map(technology => ({ ...technology }))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))
}

export const getOrders = () => {
    database.customOrders.map(customOrder => ({ ...customOrder }))
}

//export the individual order to be used later in the
//cars-r-us HTML section 
export const setColor = (id) => {
    database.orderBuilder.colorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}


export const addCustomOrder = () => {
    //copy current state of user choices
    const newOrder = { ...database.orderBuilder }

    //add primary key
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    //add timestamp fo fun 
    newOrder.timestamp = Date.now()

    //add new order to object custom orders state
    database.customOrders.push(newOrder)

    //reset temporary state for user choices
    database.orderBuilder = {}

    //broadast notif that state changed
    document.dispatchEvent(new CustomEvent("stateChanged"))


}