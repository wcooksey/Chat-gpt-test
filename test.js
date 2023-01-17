const API_KEY = "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";
const API_URL = "https://api.openai.com/v1/engines/davinci-codex/completions";

async function generateProfile() {
    let height = document.getElementById("height").value;
    let location = document.getElementById("location").value;
    let interests = document.getElementById("interests").value;

    // Prepare the input for the GPT-3 API
    let input = `I am a ${height} tall person living in ${location}. My interests are ${interests}`;

    // Make the API call
    let response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            prompt: input,
            max_tokens: 100
        })
    });

    // Process the API response
    let json = await response.json();
    let generatedText = json.choices[0].text;

    // Display the generated dating profile to the user
    let output = document.getElementById("output");
    output.innerHTML = generatedText;
}