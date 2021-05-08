fetch("http://localhost:3000/api/teddies")
    .then
    (
        function(response)
        {
            console.log("pas d'erreur");
        }
    )
    .catch
    (
        function(response)
        {
            console.log("erreur parce que voila");
        }
    )