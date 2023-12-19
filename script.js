document.addEventListener('DOMContentLoaded', () =>
  (updateTime)
)

let seconds = 10;
function updateTime()
{
  if(seconds>=1)
      {
        setTimeout(updateTime,1000)
        var sec=  document.getElementById("second_col").innerText=seconds;
        // console.log(seconds);
        seconds--;
      }
      else{
        var image = document.createElement("img");
        // image.setAttribute("src","independence.png");
        // image.setAttribute("width","200");
        // image.setAttribute("height","300");
        image.src = "independence.gif";
    image.alt = "Description of the image";
    image.width = "700";
    image.height = "500";

    var sec=  document.getElementById("second_col");
         sec.appendChild(image);
        // console.log(image);
      }
}
requestAnimationFrame(updateTime);