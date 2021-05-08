fetch("http://localhost:3000/api/teddies", {mode: 'no-cors'})
    .then
    (
        function(response)
        {
            if (response.ok)
            {
                console.log("pas d'erreur");
            }
        }
    )
    .catch
    {
        console.log("erreur parce que voila");
    }