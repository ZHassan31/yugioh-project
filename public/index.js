// Async function to fetch card data
async function fetchCardData() {
    const cardName = document.getElementById('cardName').value;
    const apiUrl = `/cards?name=${encodeURIComponent(cardName)}`; // Updated to hit local endpoint
    // const apiUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(cardName)}`;

    try {
        const response = await fetch(apiUrl);  // Await the fetch response
        if (!response.ok) {
            throw new Error("Card not found or an error occurred");
        }

        const data = await response.json();  // Await the parsing of the JSON
        displayCardData(data);
    } catch (error) {
        document.getElementById('result').innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
}

// Function to display the card data
function displayCardData(data) {
    const card = data.data[0];  // Get the first result from the returned data
    const resultDiv = document.getElementById('result');

    // Display the card information
    resultDiv.innerHTML = `
                <div id="card-container">
                    <div>
                        <img id="card-image" src="${card.card_images[0].image_url}" alt="${card.name} image">
                    </div>
                    <div id="card-info">
                        <h2>Card Name: ${card.name}</h2>
                        <p><strong>Description:</strong> ${card.desc}</p>

                        <div id="stats">
                            <div><strong>Type:</strong> ${card.type}</div>
                            <div><strong>Attribute:</strong> ${card.attribute}</div>
                            <div><strong>Attack:</strong> ${card.atk || 'N/A'}</div>
                            <div><strong>Defense:</strong> ${card.def || 'N/A'}</div>
                            <div><strong>Level/Rank:</strong> ${card.level || 'N/A'}</div>
                        </div>
                    </div>
                </div>
            `;
}