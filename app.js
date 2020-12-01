/* lalala function addFavouriteMovie (movieNames)=["The"+ "Godfather","Casablanca", "Inception","The"+ "Mermaid"];
if ("the"+ " godfather"=="the"+ " godfather" )//true


"the"+ " godfather"=="the"+ " godfather" //false, go to add

"casbalanca"!="the"+" casbalanca"

"inception"=="the"+" inception"

"the"+ " mermaid"=="the"+ " mermaid"//


const cart=[ "apple", "pear", "orange"];
cart.push('pear');
console.log(cart);

const number=[1,2,3];
const total=number.push(4);
console.log(total);

const favouriteMovies=[];
favouriteMovies.push("Mulan");
console.log(favouriteMovies);*/









fToC(100);

function fToC (fahrenheit){
    var fToC=(fahrenheit-32)/(9/5);
    var message= "When " + fahrenheit+"\xB0F"+ " is," + fToC+"\xB0C";
    console.log(message);
}


/*C to F:

function cToF(celsius){
    var cTemp=celsius;
    var cToFah=(cTemp*(9/5))+32;
    var message= cTemp+'xB0C'+" is" + cToFah+ 'xB0F';
    console.log(message);
}
*/



/*task 2: movie*/
var favouriteMovies=[];
function addFavouriteMovie(movieNames){
   if (movieNames.includes('the')!=true){
       favouriteMovies.push(movieNames);
    }
}


function printFavouriteMovies (){
    console.log("Favourite Movies:...", );
    console.log( favouriteMovies.length);
    console.log(favouriteMovies);
    var i=0; 
    while (i<favouriteMovies.length){
        console.log ( (i+1) +": "+ favouriteMovies[i]);
        i=i+1;
    }
}
addFavouriteMovie("mulan");
addFavouriteMovie("the godfather");
addFavouriteMovie("inception");
 printFavouriteMovies();

 












