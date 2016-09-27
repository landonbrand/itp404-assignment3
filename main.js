function getSubreddits(){
  var subreddit = document.getElementById("subredditBox").value;
  var promise = $.ajax({
    url: "https://www.reddit.com/r/" + subreddit + ".json",
    type: 'get'
  });

  promise.then(function(response) {
    console.log(response);
    var templateSource = $('#hb-template').html();
    console.log(1);
    var template = Handlebars.compile(templateSource);
    console.log(2);
    console.log(response.data.children);
    var newHtml = template({
      redditPost: response.data.children
    });
    console.log(3);
    console.log(newHtml);
    $('#post').html(newHtml);
    console.log("posted");
    console.log(response.data.children[0].data.title);
  }, function(){
    console.log('there was an error');
  });
}
