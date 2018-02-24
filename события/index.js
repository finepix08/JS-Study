    

    /*var div = document.createElement("div");
    div.id = "container";
    document.body.appendChild(div); 
    var input = document.createElement("input");
    input.name = "enter";
    div.appendChild(input);
    var button = document.createElement("button");
    button.textContent = 'Add';
    div.appendChild(button);


button.addEventListener('click', function (){
    var p = document.createElement("p");
    p.textContent = input.value;
    div.appendChild(p);
});*/

   /* var d = document.getElementById("container");
    d.addEventListener('mousemove', function(e) {
    var x = e.clientX;
    var y = e.clientY;


    var dx = document.getElementById("infoX");
    var dy= document.getElementById("infoY");

    if(dx.children.length > 0) {
        dx.removeChild(dx.children[0]);
    }

    if(dy.children.length > 0) {
        dy.removeChild(dy.children[0]);
    }

    var p1 = document.createElement("p");
    p1.textContent = x;
    dx.appendChild(p1);

     var p2 = document.createElement("p");
     p2.textContent = y;
     dy.appendChild(p2);
});*/


    var buttonAdd = document.getElementsByClassName('button')[0];
    var sectionOut = document.getElementById('posts');
    var section = sectionOut.children[0];

    buttonAdd.addEventListener('click', function () {
        var text = document.getElementsByTagName('textarea')[0].value;
        var sectionNew = section.cloneNode(true);
        sectionNew.querySelector('p').innerHTML = text;
        sectionOut.insertBefore(sectionNew, sectionOut.children[0]);
        addEventListener('click', Delete);
    })
    
    
    var buttons = document.getElementsByClassName('button delete');
    console.log(buttons);


    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', Delete)
    }
    
    function Delete (event) {
        sectionOut.removeChild(event.target.parentElement);
        
    }
