function motivacional() {
    fetch("./api.json", {mode: 'no-cors'})
        .then(
            function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                response.status);
                return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
                console.log(data);
                var numero = Math.floor(Math.random() * data.length)
                var autor = data[numero].author;
                var text = data[numero].text;
                console.log(text)
                console.log(autor)
                document.getElementById("frase-motivacional").textContent = text;
                document.getElementById("autor").textContent = autor;
            });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
}