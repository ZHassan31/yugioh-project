# Yu-Gi-Oh! Card Search

This is a simple web app that lets you look up Yu-Gi-Oh! cards by name. It pulls data straight from the [YGOPRODeck API](https://db.ygoprodeck.com/api-guide/), so you’ll always get the most up-to-date card information.  

## How it works
- Type in the name of a card.  
- The app fetches the details from the API.  
- It then displays the card’s image, description, and key stats (like type, attribute, attack, defence, and level/rank).  

If the card doesn’t exist or something goes wrong, you’ll see an error message instead.  

## Features
- Search any Yu-Gi-Oh! card by name.  
- View card art and description.  
- See important stats at a glance.  
- Handles errors cleanly when a card isn’t found.  

## Tech stack
- **HTML, CSS, JavaScript** (no frameworks required).  
- **Fetch API** to get card data asynchronously.  
- **YGOPRODeck API** for the card database.  
