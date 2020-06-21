const quotes = [
   {
     "quote": "Quando me atrevo a ser poderosa, a usar minha força ao serviço da minha visão, o medo que sinto se torna cada vez menos importante.",
     "author": "Audre Lorde",
   },
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
    },
    {
        "quote":"Você tem que agir como se fosse possível transformar radicalmente o mundo. E você tem que fazer isso o tempo todo.",
        "author":"Angela Davis",
    },
   {
        "quote":"qual é a maior lição que uma mulher pode aprender? Que desde o primeiro dia, ela sempre teve tudo o que precisa dentro de si mesma. foi o mundo que a convenceu que ela não tinha.",
        "author":"Rupi Kaur",
    },
   {
        "quote":"Os homens temem que as mulheres riam deles. As mulheres temem que os homens as matem.",
        "author":"Margareth Antwood",
    },
   {
        "quote":"Pela maior parte da História, 'anônimo' foi uma mulher.",
        "author":"Virgínia Woolf",
    },
   {  
     "quote": "Honrar a nós mesmas, amar nossos corpos, é uma fase avançada na construção de uma autoestima saudável.",
      "author": "Bell Hooks",
   }
];

function randomQuotesGenerator() {
    let getRandomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    let getQuoteElement = document.getElementById("quote-holder");
    let getOwnerElement = document.getElementById("owner");

    getQuoteElement.innerHTML = getRandomQuote.quote;
    getOwnerElement.innerHTML = getRandomQuote.author;
}
