    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/", true);
    xhr.send();
    xhr.onload = function() {
      if (xhr.status === 200) {
        var obj = JSON.parse(xhr.responseText);
        console.log(obj);
        var arrayid = [];
        for (var i = 0; i < obj.length; i++) {
          var h4 = document.createElement("h4");
          var p1 = document.createElement("p");
          var p2 = document.createElement("p");
          p1.textContent = obj[i].title;
          p2.textContent = obj[i].body;
          document.body.appendChild(h4);
          h4.appendChild(p1);
          h4.appendChild(p2);
          arrayid.push(obj[i].id);
        }
        var arrayh4 = document.getElementsByTagName("h4");
        for (var i = 0; i < arrayh4.length; i++) {
          arrayh4[i].addEventListener("click", function(n) {
            return function () {
              var xhr1 = new XMLHttpRequest();
              xhr1.open(
                "GET",
                "https://jsonplaceholder.typicode.com/comments?postId=" +
                  arrayid[n],
                true
              );
              xhr1.send();
              xhr1.onload = function() {
                if (xhr1.status === 200) {
                  var obj2 = JSON.parse(xhr1.responseText);
                  for (var j = 0; j < obj2.length; j++) {
                    var p3 = document.createElement("p");
                    var p4 = document.createElement("p");
                    var p5 = document.createElement("p");
                    p3.textContent = obj2[j].name;
                    p4.textContent = obj2[j].email;
                    p5.textContent = obj2[j].body;
                    arrayh4[n].appendChild(p3);
                    arrayh4[n].appendChild(p4);
                    arrayh4[n].appendChild(p5);
                  }
                  console.log(obj2);
                }
              };
            };
          }(i));
        }
      }
    };


    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/", true);
    xhr.send();
    xhr.onload = function() {
      if (xhr.status === 200) {
        var obj = JSON.parse(xhr.responseText);
        console.log(obj);
        var arrayid = [];
        for (var i = 0; i < obj.length; i++) {
          var h4 = document.createElement("h4");
          var p1 = document.createElement("p");
          var p2 = document.createElement("p");
          p1.textContent = obj[i].title;
          p2.textContent = obj[i].body;
          document.body.appendChild(h4);
          h4.appendChild(p1);
          h4.appendChild(p2);
          arrayid.push(obj[i].id);
        }
        var arrayh4 = document.getElementsByTagName("h4");
        for (var i = 0; i < arrayh4.length; i++) {
          arrayh4[i].addEventListener("click", function(n) {
            return loadComments();
          }(i));
        }
      }
    };
     
    
    function loadComments() {
      var xhr1 = new XMLHttpRequest();
      xhr1.open(
        "GET",
        "https://jsonplaceholder.typicode.com/comments?postId=" + arrayid[n], true);
      xhr1.send();
      xhr1.onload = request();
    };


    function request() {
        if (xhr1.status === 200) {
          var obj2 = JSON.parse(xhr1.responseText);
          for (var j = 0; j < obj2.length; j++) {
            var p3 = document.createElement("p");
            var p4 = document.createElement("p");
            var p5 = document.createElement("p");
            p3.textContent = obj2[j].name;
            p4.textContent = obj2[j].email;
            p5.textContent = obj2[j].body;
            arrayh4[n].appendChild(p3);
            arrayh4[n].appendChild(p4);
            arrayh4[n].appendChild(p5);
          }
          console.log(obj2);
        }
    };

