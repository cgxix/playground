// Create a counter that tracks the amount of likes a post has.

// upvote
function addLike(){
  document.getElementById('likeCounter').innerHTML = likes += 1;
}

// downvote
function removeLike(){
  document.getElementById('likeCounter').innerHTML = likes -= 1;
}

var likes = 0; //counter
var addLinkBtn = document.getElementById('addLikeBtn');
var removeLikeBtn = document.getElementById('removeLikeBtn');

addLikeBtn.addEventListener('click', addLike);
removeLikeBtn.addEventListener('click', removeLike);
