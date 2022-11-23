function ajax_get(url, callback) {
    document.getElementById("loading").style.visibility = "visible";
    document.getElementById("image").style.visibility = "hidden";

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log('responseText:' + xmlhttp.responseText);
        try {
          var data = JSON.parse(xmlhttp.responseText);
        } catch (err) {
          console.log(err.message + " in " + xmlhttp.responseText);
          return;
        }
        callback(data);
      }
    };
  
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }

loop();

function loop() {
    ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
        document.getElementById("image").setAttribute('src', data[0]["url"])

        ratio = parseInt(data[0]["width"])/parseInt(data[0]["height"])
        height = 100

        width = parseInt(height*ratio)

        while (width > 100) {
            height-- 
            width = parseInt(height*ratio)
        }

        document.getElementById("image").style.height = height + 'vh';   

        document.getElementById("loading").style.visibility = "hidden";
        document.getElementById("image").style.visibility = "visible";
        setTimeout(function () { loop() }, 2500);
    });    
}
  