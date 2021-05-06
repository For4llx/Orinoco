fetch("http://localhost:3000/api/teddies")
    .then
    (
        function(response)
        {
            if (response.ok)
            {
                console.log(response);
            }
        }
    )
    .catch
    {
        console.log("erreur parce que voila");
    }