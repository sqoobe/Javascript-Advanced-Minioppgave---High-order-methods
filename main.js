//Alvas Magiske Marked
const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

// Oppgave 1.
function LessThen200(products) {
  return products.price <= 200;
}

const filtered = products.filter(LessThen200);

console.log(filtered); //

// Oppgave 2.

function prodName(products) {
  return products.name;
}

const productName = products.map(prodName);

console.log(productName); //[ "Smartphone", "Headphones", "Coffee Maker", "Blender", "Laptop", "T-shirt", "Sneakers" ]

// Oppgave 3.

/*
Du får et objekt-array som representerer produkter i en nettbutikk, Alvas Magiske Marked. Alva er en innovativ gründer som selger alt fra elektronikk til klær og kjøkkenapparater. En dag møter hun en utfordring: hun trenger hjelp til å analysere produktlisten sin for å få bedre kontroll på lageret.

Kan du hjelpe Alva med å løse problemene hennes? Hvis du klarer det, lover hun deg 20% rabatt på hele butikken! 🎉
Case 1. 

    1. Finn de mest prisgunstige varene for Alva
    Bruk .filter() for å hente ut alle produkter som koster mindre enn 200 gullmynter. Disse varene selger hun ofte ut raskt, og hun vil gjerne ha dem samlet i en liste.

    2. Lag en liste med produktnavnene for rask oversikt
    Bruk .map() for å lage en liste som kun inneholder navnene på produktene. Alva vil bruke denne listen til å skrive ut skilt i butikken.

    3. Finn de populære elektronikk-varene
    Alva elsker elektronikk, men hun har mistet oversikten over hva som finnes i denne kategorien. Bruk en kjedet kombinasjon av .filter() og .map() for å lage en liste som kun inneholder navnene til produktene i kategorien "electronics".

    4. Finn luksusproduktene i Alvas sortiment
    Bruk .some() for å sjekke om det finnes produkter som koster mer enn 1000 gullmynter. Hvis ja, vil Alva legge dem i et spesielt luksushjørne i butikken.

    5. Regn ut verdien av hele Alvas lager
    Bruk .reduce() for å finne den totale kostnaden av alle produktene. Alva må vite dette for å sette riktig pris på forsikringen av varene sine.
*/
