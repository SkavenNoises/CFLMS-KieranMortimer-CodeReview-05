// Parsing json file to obj arr
let movies = JSON.parse(movieList);
console.table(movies);

// Constructing HTML elements from array
function addMovieCards(){
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
    
    console.log("Click listeners attached");
}

// Displaying like counters on each movie
function setLikeCount(){
    for (let i = 0; i < movies.length; i++){
        let likeVal = $(`#movie${i}`).data("likes");
        $(`#movie${i}`).find(".likeCounter").text(likeVal);
    }

    console.log("Like value displayed");
}

$(document).ready(function () {
    // Initial loading of movies
    addMovieCards();
    setLikeCount();

    
    
    // Watching for a change to the sort drop down menu
    $("#sortDropDown").on("change", function() {
        console.log(`${$("#sortDropDown option:selected").val()} has been selected`);

        // On change determine which behaviour to enact
        switch($("#sortDropDown option:selected").val()){
            case "none":                
                
                break;

            case "ascending":

                // Creating an array to store the 2D likes:JqueryObj
                let movieArr = new Array();
               
                // Iterating through the array and detaching the objects into the array
                for (let i = 0; i < movies.length; i++){
                    movieArr.push([$(`#movie${i}`).data("likes"), $(`#movie${i}`).detach()]);
                }

                console.log("Unsorted Array");
                console.table(movieArr);

                // Sort array via 0-index of each array element
                movieArr.sort(function(a, b) {
                    
                    return a[0] - b[0];
                })
         
                console.log("Sorted Array");
                console.table(movieArr);

                // Inserting the detached object back into HTML
                for (movie of movieArr){
                    $("#movieWrapper").append(movie[1]);
                }


               



                break;

            case "descending":

                break;
        }

    });
});