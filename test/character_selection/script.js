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

    //That is, the container is selected by its ID where the characters
    //will appear.
    const container = document.getElementById('container_characters');

    // Iterate over each character and create HTML elements to display them
    //This starts a loop that goes through each character in the characters array.
    characters.forEach(character => {

        //This creates a new div element for each character and assigns it the class character.
        const charDiv = document.createElement('div');
        charDiv.className = 'character';

        //This creates an img element, sets its source to the 
        //character's image URL, and provides an alternative 
        //text (alt) with the character's name.
        const charImage = document.createElement('img');
        charImage.src = character.imageUrl;
        charImage.alt = character.name;
        //It is description of the image in case
        //it cannot be viewed

        //These lines create h3 and p elements for the 
        //character's name and description, respectively, 
        //and set their text content.
        const charName = document.createElement('h3'); 
        //create the h3 element and then display the character's name in it.
        charName.textContent = character.name;
        //place the character name in the created element h3

        const charDescription = document.createElement('p');
        //create the p element
        charDescription.textContent = character.description;
        //show p element the description of the character.



        // Append the image, name, and description to the character div
        charDiv.appendChild(charImage);
        charDiv.appendChild(charName);
        charDiv.appendChild(charDescription);
        //appendChild it is a method that allows adding new elements 
        //to a parent container for this case is for div charDiv for the 
        //characters

        // Append the character div to the container
        container.appendChild(charDiv);

        // Add click event listener to each character div for selection
        charDiv.addEventListener('click', () => {
            // Remove 'selected' class from all character divs
            //Logic: This adds a click event listener to each character div. When a character is clicked, 
            //it removes the selected class from all character divs and adds it to the clicked one.
            //Analogy: When you click on a picture frame on the bulletin board, 
            //all frames are unmarked, and the clicked one gets a special mark indicating it is selected.

            document.querySelectorAll('.character').forEach(c => c.classList.remove('selected'));
            //Code explanation:
            //document: This represents the whole HTML document loaded in the browser.
            //querySelectorAll: This method selects all elements in the document with
            //the class name "character". It returns a NodeList (a collection of nodes) 
            //representing all the elements that match the specified CSS selector.
            //.forEach(c => ...): This method iterates over each element in the NodeList returned
            //by "querySelectorAll". The "c" parameter represents each individual element (in this 
            //case, each element with the class "character"), this is similar to the character i in a
            //loop for.
            //c.classList.remove('selected'): For each element c, this method removes 
            //the selected class from the element's class list.


            // Add 'selected' class to the clicked character div
            charDiv.classList.add('selected');
        });
    });

    // Add click event listener to the select button
    document.getElementById('select_button').addEventListener('click', () => {
        // Get the selected character div
        const selectedCharacter = document.querySelector('.character.selected');
        //Display an alert with the selected character's name or prompt the user to select a character
        //querySelector: Select elements according to their selector can be a class or an HTML element
        if (selectedCharacter) {
            alert(`You have selected: ${selectedCharacter.querySelector('h3').textContent}`);
        } else {
            alert('Please select a character first!');
        }
    });
}

// Ensure the DOM content is fully loaded before running the displayCharacters function
document.addEventListener('DOMContentLoaded', displayCharacters);

//DOM: Document Object Model, it allows you to interact with the 
//HTML from Javascript through methods such as querySelector or
//getElementById
