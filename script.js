function searchAnimal() {

    let animal = document.getElementById("animalInput").value.toLowerCase();
    let result = document.getElementById("result");

    let animals = {
        lion: {
            info: "Lion is known as the king of the jungle.",
            habitat: "Grasslands and savannas",
            food: "Carnivore",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg"
        },

        tiger: {
            info: "Tiger is the largest wild cat.",
            habitat: "Forests",
            food: "Carnivore",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg"
        },

        elephant: {
            info: "Elephants are the largest land animals.",
            habitat: "Forests and grasslands",
            food: "Herbivore",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg"
        }
    };

    if (animals[animal]) {
        result.innerHTML = `
            <h2>${animal.toUpperCase()}</h2>
            <img src="${animals[animal].image}">
            <p><b>About:</b> ${animals[animal].info}</p>
            <p><b>Habitat:</b> ${animals[animal].habitat}</p>
            <p><b>Food:</b> ${animals[animal].food}</p>
        `;
    } else {
        result.innerHTML = "<p>Animal not found ❌</p>";
    }
}