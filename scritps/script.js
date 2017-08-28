$(document).ready(function(){

  // myFunction();
   getInfo('https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=814dd1ae5a9941a7b2ac5a4981a68b1a');

console.log('naomi');
});

//get the headline, author  and picture

function getInfo(newsAPI) {

  //the first getJSON gets an array of inforamtion for the news endpoint it is here that we limit the locations to only 3 and we get the img url, title and author

  $.getJSON(newsAPI, function(data){
    //test to see if the data appears


    var arr = data.response;

               //a variable created and our informaiton will be appeneded to this variable
    for(i = 0; i < 3; i++){

               var title_results = $('.info ')[i];
               var link_results = $('.link_out')[i];
    var author_results = $('.author')[i];
    var img_results = $('img.main-pic')[i];
     //this for loop will search through the a variety of arrays in order to get the headline, auhtor and photo
  var newsUrl = data.articles[i].url;
  $(link_results).attr('href', newsUrl);

                 var newsId = data.articles[i].title;


    title_results.append(newsId);

                 var authorId =  data.articles[i].author;

    author_results.append(authorId);
                 var imgId = data.articles[i].urlToImage;

    $(img_results).attr('src', imgId);



             }

  });

}
