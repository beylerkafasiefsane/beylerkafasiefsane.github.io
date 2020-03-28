var vid = document.getElementById("myVideo");
var kap = document.getElementById("kapatici");
//vid.play();

function invisible()
{
  kap.style.visibility = "hidden";
  vid.style.visibility = "hidden";
  vid.pause();
}

function enableAutoplay()
{
  if(vid.paused)
  {
  vid.play();
  vid.style.visibility = "visible";
  kap.style.visibility = "visible";
  }
  else {
    vid.pause();
    vid.style.visibility = "hidden";
    kap.style.visibility = "hidden";
      }
}

function volumeUp()
{
  if(vid.volume==0.00)
  {
      vid.volume=0.1;

  }

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
function camigizle()
{
  document.getElementById("yenicami").className = "goster";
  document.getElementById("sirepazari").className = "gizle";
  document.getElementById("orduzu").className = "gizle";
  document.getElementById("silahtarmustafa").className = "gizle";
  document.getElementById("arslantepe").className = "gizle";
  document.getElementById("battalgazi").className = "gizle";
  document.getElementById("kanli").className = "gizle";
  document.getElementById("levent").className = "gizle";
  document.getElementById("poyrazkonagi").className = "gizle";
  document.getElementById("sanatsokagi").className = "gizle";
  document.getElementById("semsiyesokak").className = "gizle";
  document.getElementById("tashoron").className = "gizle";
}
function sirepazarigizle()
{
  document.getElementById("sirepazari").className = "goster";
  document.getElementById("yenicami").className = "gizle";
  document.getElementById("orduzu").className = "gizle";
  document.getElementById("silahtarmustafa").className = "gizle";
  document.getElementById("arslantepe").className = "gizle";
  document.getElementById("battalgazi").className = "gizle";
  document.getElementById("kanli").className = "gizle";
  document.getElementById("levent").className = "gizle";
  document.getElementById("poyrazkonagi").className = "gizle";
  document.getElementById("sanatsokagi").className = "gizle";
  document.getElementById("semsiyesokak").className = "gizle";
  document.getElementById("tashoron").className = "gizle";
}
function orduzugizle()
{
  document.getElementById("sirepazari").className = "gizle";
  document.getElementById("yenicami").className = "gizle";
  document.getElementById("orduzu").className = "goster";
  document.getElementById("silahtarmustafa").className = "gizle";
  document.getElementById("arslantepe").className = "gizle";
  document.getElementById("battalgazi").className = "gizle";
  document.getElementById("kanli").className = "gizle";
  document.getElementById("levent").className = "gizle";
  document.getElementById("poyrazkonagi").className = "gizle";
  document.getElementById("sanatsokagi").className = "gizle";
  document.getElementById("semsiyesokak").className = "gizle";
  document.getElementById("tashoron").className = "gizle";
}
function silahtarmustafagizle()
{
  document.getElementById("sirepazari").className = "gizle";
  document.getElementById("yenicami").className = "gizle";
  document.getElementById("orduzu").className = "gizle";
  document.getElementById("silahtarmustafa").className = "goster";
  document.getElementById("arslantepe").className = "gizle";
  document.getElementById("battalgazi").className = "gizle";
  document.getElementById("kanli").className = "gizle";
  document.getElementById("levent").className = "gizle";
  document.getElementById("poyrazkonagi").className = "gizle";
  document.getElementById("sanatsokagi").className = "gizle";
  document.getElementById("semsiyesokak").className = "gizle";
  document.getElementById("tashoron").className = "gizle";
}
function arslantepegizle()
{
  document.getElementById("sirepazari").className = "gizle";
  document.getElementById("yenicami").className = "gizle";
  document.getElementById("orduzu").className = "gizle";
  document.getElementById("silahtarmustafa").className = "gizle";
  document.getElementById("arslantepe").className = "goster";
  document.getElementById("battalgazi").className = "gizle";
  document.getElementById("kanli").className = "gizle";
  document.getElementById("levent").className = "gizle";
  document.getElementById("poyrazkonagi").className = "gizle";
  document.getElementById("sanatsokagi").className = "gizle";
  document.getElementById("semsiyesokak").className = "gizle";
  document.getElementById("tashoron").className = "gizle";
}
function battalgazigizle()
{
  document.getElementById("sirepazari").className = "gizle";
  document.getElementById("yenicami").className = "gizle";
  document.getElementById("orduzu").className = "gizle";
  document.getElementById("silahtarmustafa").className = "gizle";
  document.getElementById("arslantepe").className = "gizle";
  document.getElementById("battalgazi").className = "goster";
  document.getElementById("kanli").className = "gizle";
  document.getElementById("levent").className = "gizle";
  document.getElementById("poyrazkonagi").className = "gizle";
  document.getElementById("sanatsokagi").className = "gizle";
  document.getElementById("semsiyesokak").className = "gizle";
  document.getElementById("tashoron").className = "gizle";
}
function kanligizle()
{
  document.getElementById("sirepazari").className = "gizle";
  document.getElementById("yenicami").className = "gizle";
  document.getElementById("orduzu").className = "gizle";
  document.getElementById("silahtarmustafa").className = "gizle";
  document.getElementById("arslantepe").className = "gizle";
  document.getElementById("battalgazi").className = "gizle";
  document.getElementById("kanli").className = "goster";
  document.getElementById("levent").className = "gizle";
  document.getElementById("poyrazkonagi").className = "gizle";
  document.getElementById("sanatsokagi").className = "gizle";
  document.getElementById("semsiyesokak").className = "gizle";
  document.getElementById("tashoron").className = "gizle";
}
function leventgizle()
{
  document.getElementById("sirepazari").className = "gizle";
  document.getElementById("yenicami").className = "gizle";
  document.getElementById("orduzu").className = "gizle";
  document.getElementById("silahtarmustafa").className = "gizle";
  document.getElementById("arslantepe").className = "gizle";
  document.getElementById("battalgazi").className = "gizle";
  document.getElementById("kanli").className = "gizle";
  document.getElementById("levent").className = "goster";
  document.getElementById("poyrazkonagi").className = "gizle";
  document.getElementById("sanatsokagi").className = "gizle";
  document.getElementById("semsiyesokak").className = "gizle";
  document.getElementById("tashoron").className = "gizle";
}
function poyrazkonagigizle()
{
  document.getElementById("sirepazari").className = "gizle";
  document.getElementById("yenicami").className = "gizle";
  document.getElementById("orduzu").className = "gizle";
  document.getElementById("silahtarmustafa").className = "gizle";
  document.getElementById("arslantepe").className = "gizle";
  document.getElementById("battalgazi").className = "gizle";
  document.getElementById("kanli").className = "gizle";
  document.getElementById("levent").className = "gizle";
  document.getElementById("poyrazkonagi").className = "goster";
  document.getElementById("sanatsokagi").className = "gizle";
  document.getElementById("semsiyesokak").className = "gizle";
  document.getElementById("tashoron").className = "gizle";
}
function sanatsokagigizle()
{
  document.getElementById("sirepazari").className = "gizle";
  document.getElementById("yenicami").className = "gizle";
  document.getElementById("orduzu").className = "gizle";
  document.getElementById("silahtarmustafa").className = "gizle";
  document.getElementById("arslantepe").className = "gizle";
  document.getElementById("battalgazi").className = "gizle";
  document.getElementById("kanli").className = "gizle";
  document.getElementById("levent").className = "gizle";
  document.getElementById("poyrazkonagi").className = "gizle";
  document.getElementById("sanatsokagi").className = "goster";
  document.getElementById("semsiyesokak").className = "gizle";
  document.getElementById("tashoron").className = "gizle";
}
function semsiyesokakgizle()
{
  document.getElementById("sirepazari").className = "gizle";
  document.getElementById("yenicami").className = "gizle";
  document.getElementById("orduzu").className = "gizle";
  document.getElementById("silahtarmustafa").className = "gizle";
  document.getElementById("arslantepe").className = "gizle";
  document.getElementById("battalgazi").className = "gizle";
  document.getElementById("kanli").className = "gizle";
  document.getElementById("levent").className = "gizle";
  document.getElementById("poyrazkonagi").className = "gizle";
  document.getElementById("sanatsokagi").className = "gizle";
  document.getElementById("semsiyesokak").className = "goster";
  document.getElementById("tashoron").className = "gizle";
}
function tashorongizle()
{
  document.getElementById("sirepazari").className = "gizle";
  document.getElementById("yenicami").className = "gizle";
  document.getElementById("orduzu").className = "gizle";
  document.getElementById("silahtarmustafa").className = "gizle";
  document.getElementById("arslantepe").className = "gizle";
  document.getElementById("battalgazi").className = "gizle";
  document.getElementById("kanli").className = "gizle";
  document.getElementById("levent").className = "gizle";
  document.getElementById("poyrazkonagi").className = "gizle";
  document.getElementById("sanatsokagi").className = "gizle";
  document.getElementById("semsiyesokak").className = "gizle";
  document.getElementById("tashoron").className = "goster";
}
function hepsinigoster()
{
  document.getElementById("sirepazari").className = "normal";
  document.getElementById("yenicami").className = "normal";
  document.getElementById("orduzu").className = "normal";
  document.getElementById("silahtarmustafa").className = "normal";
  document.getElementById("arslantepe").className = "normal";
  document.getElementById("battalgazi").className = "normal";
  document.getElementById("kanli").className = "normal";
  document.getElementById("levent").className = "normal";
  document.getElementById("poyrazkonagi").className = "normal";
  document.getElementById("sanatsokagi").className = "normal";
  document.getElementById("semsiyesokak").className = "normal";
  document.getElementById("tashoron").className = "normal";
}
