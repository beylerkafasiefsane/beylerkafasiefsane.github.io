var vid = document.getElementById("myVideo");
vid.play();
function enableAutoplay()
{
  if(vid.paused)
  vid.play();
  else {
    vid.pause();
      }
}

function volumeUp()
{
  if(vid.volume==0.00)
  vid.volume=0.1;
  else if (vid.volume==0.1) {
    vid.volume=0.2;
  }
  else if (vid.volume==0.2) {
    vid.volume=0.3;
  }
  else
  {
    vid.volume=0.4;
  }

}
function volumeDown()
{
  if (vid.volume==0.4) {
   vid.volume=0.3;
  }
  else if (vid.volume==0.3) {
    vid.volume=0.2;
  }
  else if (vid.volume==0.2) {
    vid.volume=0.1;
  }
  else {
    vid.volume=0.00;
      }
}
