$(document).ready(function () {
    // Parsing json file to obj arr
    let movies = JSON.parse(movieList);
    console.table(movies);

    // Constructing HTML elements from array
    for (let i = 0; i < movies.length; i++){
        $("#movieWrapper").append(`
            <div id="movie${i}" class="movieCard">
                <img src="img/${movies[i].imgsrc}"></img>

                <div class="cardInfo">
                    <h3>${movies[i].name}</h3>

                    <p>${movies[i].blurb}</p>

                    <div class="likes">
                        <p class="likeBtn">Like</p>

                        <div class="grnCircle">
                            <p class="likeCounter"></p>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }

    console.log("Film list constructed");

    // Attaching empty like counters to each movie
    for (let i = 0; i < movies.length; i++){
        $(`#movie${i}`).data("likes", 0);
    }

    console.log("Data attached");

    // Displaying like counters on each movie
    for (let i = 0; i < movies.length; i++){
        let likeVal = $(`#movie${i}`).data("likes");
        $(`#movie${i}`).find(".likeCounter").text(likeVal);
    }

    console.log("Like value displayed");

    // Attaching click listener to each film
    for (let i = 0; i < movies.length; i++){
        $(`#movie${i}`).on("click", function(){
            console.log(`Movie${i} has been clicked`);

            // Updating the like value for that movie
            $(this).data("likes", $(this).data("likes") + 1);
            console.log(`Movie${i} Likes: ${$(this).data("likes")}`);

            // Displaying the updated value
            $(this).find(".likeCounter").text(`${$(this).data("likes")}`);



        });
    }
});