/* dar play do video quando o cursor estiver sobre */


document.addEventListener('mouseover',houverVideo, false);
var vid= document.getElementsByTagName("video");
[].forEach.call(vid, function (item) {
  item.addEventListener('mouseover', houverVideo, false);
  item.addEventListener('mouseout', hideVideo, false);
  
});

function houverVideo(e)
 {
  this.play();
  
  
}
function  hideVideo(e)
{
  this.pause();
  
  
}
