$(document).ready(function () {
    // Parsing json file to obj arr
    let movies = JSON.parse(movieList);
    console.table(movies);

    // Constructing HTML elements from array
    for (let i = 0; i < movies.length; i++){
        $("#movieWrapper").append(`
            <div id="movie${i}" class "movieCard">
                <img src="img/${movies[i].imgsrc}"></img>

                <div class="cardInfo">
                    <h3>${movies[i].name}</h3>

                    <p>${movies[i].blurb}</p>

                    <div class="likes">
                        <p class="likeBtn">Like</p>

                        <div class="grnCircle">
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>
        

        `);
    }







});