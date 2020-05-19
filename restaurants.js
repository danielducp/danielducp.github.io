//Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();


const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);



//Open a new connection, using the GET request on the URL endpoint 
request.open('GET', 'https://developers.zomato.com/api/v2.1/search?apikey=e2d8e360811be83dfa09e9a026e11dc7&&entity_id=322&entity_type=city', true);
request.onload = function() {
    //Begin accessing JSON data
    var data = JSON.parse(this.response);
    var html = " ";


    
    data.quotesArray.forEach(function(val) {
        var keys = Object.keys(val);
          html += "<div class = 'text-output'>";
            keys.forEach(function(key){ 
                html += val[key];

            });
               html += "</div>"
         });


       $(".realquote").html(html);
   
   }