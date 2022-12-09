document.body.innerHTML = `<div class="container">
<div id="timer"></div>
</div>`;

var div = document.getElementById("timer");


              setTimeout(() => {
                div.innerHTML = 3;
                setTimeout(() => {
                  div.innerHTML = 2;
                  setTimeout(() => {
                    div.innerHTML = 1;
                    setTimeout(() => {
                      div.innerHTML = "ADVANCE HAPPY BIRTHDAY CHINNU";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            
