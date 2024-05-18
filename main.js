function randomquote() {
    let i = Number.parseInt(Math.random()*quotes.length + 1);
     document.getElementById('quotecontent').innerHTML=
     `
     "${quotes[i].quote}"
     `;
     document.getElementById('authorcontent').innerHTML=
     `
     --${quotes[i].author}
     `;
}

let quotes = [
    { 
     'quote': 'Be yourself; everyone else is already taken.',
     'author': 'Oscar Wilde'
    },
    {
     'quote': 'So many books, so little time.',
     'author': 'Frank Zappa'
    },
    { 
     'quote': 'A room without books is like a body without a soul.',
     'author': 'Marcus Tullius Cicero'
    },
    { 
     'quote': 'You only live once, but if you do it right, once is enough.',
     'author': 'Mae West'
    },
    {
     'quote': 'Be the change that you wish to see in the world.',
     'author': 'Mahatma Gandhi'
    },
    {
     'quote': 'A friend is someone who knows all about you and still loves you.',
     'author': 'Elbert Hubbard'
    }
];
