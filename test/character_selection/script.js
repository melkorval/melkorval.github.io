// script.js

// Define the Character class with properties for name, description, and image URL
class Character {
    constructor(name, description, imageUrl) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}

// Create instances of the Character class for each character
const characters = [
    new Character("Warrior", "A strong and brave fighter.", "warrior.jpg"),
    new Character("Mage", "A wise and powerful sorcerer.", "mage.jpg"),
    new Character("Rogue", "A stealthy and cunning thief.", "rogue.jpg")
];

// Function to inject character cards into the container
function displayCharacters() {
    // Get the container element where characters will be displayed
    const container = document.getElementById('container_characters');

    // Iterate over each character and create HTML elements to display them
    characters.forEach(character => {
        const charDiv = document.createElement('div');
        charDiv.className = 'character';

        const charImage = document.createElement('img');
        charImage.src = character.imageUrl;
        charImage.alt = character.name;

        const charName = document.createElement('h3');
        charName.textContent = character.name;

        const charDescription = document.createElement('p');
        charDescription.textContent = character.description;

        // Append the image, name, and description to the character div
        charDiv.appendChild(charImage);
        charDiv.appendChild(charName);
        charDiv.appendChild(charDescription);

        // Append the character div to the container
        container.appendChild(charDiv);

        // Add click event listener to each character div for selection
        charDiv.addEventListener('click', () => {
            // Remove 'selected' class from all character divs
            document.querySelectorAll('.character').forEach(c => c.classList.remove('selected'));
            // Add 'selected' class to the clicked character div
            charDiv.classList.add('selected');
        });
    });

    // Add click event listener to the select button
    document.getElementById('select_button').addEventListener('click', () => {
        // Get the selected character div
        const selectedCharacter = document.querySelector('.character.selected');
        // Display an alert with the selected character's name or prompt the user to select a character
        if (selectedCharacter) {
            alert(`You have selected: ${selectedCharacter.querySelector('h3').textContent}`);
        } else {
            alert('Please select a character first!');
        }
    });
}

// Ensure the DOM content is fully loaded before running the displayCharacters function
document.addEventListener('DOMContentLoaded', displayCharacters);
