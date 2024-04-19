function generate() {
    var quotes = {
        "- Ayrton Senna" : '"No que diz respeito ao empenho, ao compromisso, ao esforço, à dedicação, não existe meio termo. Ou você faz uma coisa bem feita ou não faz."',
        "- David Goggins" : '"⁠Precisamos nos cercar de pessoas que nos digam o que precisamos ouvir, não o que queremos ouvir, mas que ao mesmo tempo não nos deem a sensação de estar tentando o impossível."',  
        "- Kobe Bryant" : '"⁠A dor não diz quando você deve parar. A dor é a vozinha em sua cabeça que tenta impedi-lo pois sabe que, se você continuar, você irá mudar."'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}