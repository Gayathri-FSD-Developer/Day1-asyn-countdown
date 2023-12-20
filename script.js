// used setTimer function to call back the another settimer function repeatedly to show the countdown
// 1000 milesecond = 1 sec
 
let seconds = 10;

setTimeout(function () {
    var sec=  document.getElementById("second_col").innerText=seconds;
  setTimeout(function () {
    seconds=seconds-1;
    var sec=  document.getElementById("second_col").innerText=seconds;
    seconds=seconds-1;
    setTimeout(function () {
        seconds=seconds-1;
        var sec=  document.getElementById("second_col").innerText=seconds;

      setTimeout(function () {
        seconds=seconds-1;
        var sec=  document.getElementById("second_col").innerText=seconds;

        setTimeout(function () {
            seconds=seconds-1;
            var sec=  document.getElementById("second_col").innerText=seconds;

          setTimeout(function () {
            seconds=seconds-1;
            var sec=  document.getElementById("second_col").innerText=seconds;
        setTimeout(function(){
            seconds=seconds-1;
            var sec=  document.getElementById("second_col").innerText=seconds;
        setTimeout(function(){
            seconds=seconds-1;
            var sec=  document.getElementById("second_col").innerText=seconds;
            setTimeout(function(){
                seconds=seconds-1;
                var sec=  document.getElementById("second_col").innerText=seconds;
                setTimeout(function(){
                    document.getElementById("second_col").innerText="";
                    var img=document.createElement("img");
                    img.src="independence.gif";
                    img.width = "1000";
                    img.height = "700";
                    var sec=  document.getElementById("second_col");
                    sec.appendChild(img);
                },1000);
            },1000);
        },1000);
        },1000);
          }, 1000);

        }, 1000);

      }, 1000);

    }, 1000);

  }, 1000);

}, 0);
