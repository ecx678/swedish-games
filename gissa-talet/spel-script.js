// JS: Vi sparar det hemliga numret (t.ex. 7)
let hemligtNummer = 4;
let poang = 0;
let poangElement = document.getElementById("poang");
poangElement.innerText = poang;
// JS: En funktion som körs när man klickar på knappen
function kollaGissning() {
    // Hämta talet från input-rutan
    let spelarensGissning = document.getElementById("gissningInput").value;
            
    // Hämta textrutan där vi vill skriva svaret
    let resultatElement = document.getElementById("resultatText");

    // JS: En if-sats för att se om gissningen är rätt!
    if (spelarensGissning == hemligtNummer) {
        resultatElement.innerText = "🎉 Rätt gissat! Du vann! Jag tänker på ett nytt tal!";
        resultatElement.style.color = "green";
        hemligtNummer = Math.floor(Math.random() * 10) + 1; // Randomiza ett nytt tal
        poang = poang + 1
        poangElement.innerText = poang;
    } else {
        resultatElement.innerText = "❌ Fel! Försök igen.";
        resultatElement.style.color = "red";
    }
}