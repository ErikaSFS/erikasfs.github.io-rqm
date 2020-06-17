const quotes = [
  {
        "quote": "Numa sociedade racista não basta não ser racista. É necessário ser antiracista.",
        "author": "Angela Davis",
    },

    {
        "quote":"Algumas pessoas perguntam: ‘Por que a palavra feminista? Por que não só dizer que você acredita nos direitos humanos ou algo assim?’ Porque isso seria um jeito de fingir que não são as mulheres que têm, por séculos, sido excluídas. Isso seria uma forma de negar que os problemas de gênero afetam as mulheres.",
        "author" : "Chimamanda Ngozi Adichie",
    },

    {
        "quote":"Eu não sou livre enquanto alguma mulher não o for, mesmo quando as correntes dela forem muito diferentes das minhas.",
        "author": "Audre Lorde",
    },
    {
        "quote":"Há tantos tipos diferentes de feminismo quanto há mulheres no mundo.",
        "author":"Katleen Hannah",
    },
    {
        "quote":"Feminismo é uma noção radical de que as mulheres são seres humanos.",
        "author":"Marie Shear"
    }
];

function randomQuotesGenerator() {
    let getRandomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    let getQuoteElement = document.getElementById("quote-holder");
    let getOwnerElement = document.getElementById("owner");

    getQuoteElement.innerHTML = getRandomQuote.quote;
    getOwnerElement.innerHTML = getRandomQuote.author;
}
