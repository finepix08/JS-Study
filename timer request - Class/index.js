

  /*  var b = document.getElementById('clickbutton');
    console.log(b);
    var p1 = document.createElement('p');
    document.body.appendChild(p1);
    var p2 = document.createElement('p');
    document.body.appendChild(p2);


    b.addEventListener('click', function(){
        function showName() {
            p1.textContent = 'Женя';
        }
        setTimeout(showName, 5000);
    });
    

////////////////////////////////////////////////////////////////////////


    function time() {
        var d = new Date();
        p2.textContent = (d.getSeconds());
    }

    setInterval(time,1000);


////////////////////////////////////////////////////////////////////////


    function shownumbers() {
        for (var i = 0; i < 6; i++) {
            console.log(i);
        }
    }

    var show = setInterval(shownumbers,1000);

    setTimeout(function() {
        clearInterval(show);
    }, 5000);

////////////////////////////////////////////////////////////////////////    

    

    b.addEventListener('click', function (){
        var div = document.createElement("div");
        document.body.appendChild(div); 
        div.textContent = 'notification';
        setTimeout(function() {
            document.body.removeChild(div);
        }, 5000);
    });*/

    


////////////////////////////////////////////////////////////////////////

   /* var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://swapi.co/api/films/', false);
    xhr.send();
    if (xhr.status === 200) {

        var obj = JSON.parse(xhr.responseText);
        array = obj.results;
        console.log(array[0].release_date);

        var starwars = array.map(function(elem) {
            return 'Название эпизода: ' + elem.title + '; Дата релиза: ' + elem.release_date;
        });

    }

    console.log(starwars);*/

////////////////////////////////////////////////////////////////////////

    /*var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.giphy.com/v1/gifs/trending?api_key=CpAF0AM2qwD9R5zJj9tsM7gBQOEpWRBO&limit=8', true);
    xhr.send();
    xhr.onload = function() { 
        if (xhr.status === 200) {
            var obj = JSON.parse(xhr.responseText);
            console.log(obj);
            for (var i = 0; i < obj.data.length; i++) {
                var img = document.createElement('img');
                document.body.appendChild(img);
                var url = obj.data[i].images.fixed_height.url;
                var width = obj.data[i].images.fixed_height.width;
                var height = obj.data[i].images.fixed_height.height;
                img.style.width = width;
                img.style.height = height;
                img.src = url;
            }
        }
    }*/
    

////////////////////////////////////////////////////////////////////////

