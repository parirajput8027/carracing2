class Form{
    constructor(){

    }
    display(){
        //header
        var title = createElement('h1');
        title.html('Car Racing Game');
        title.position(250,50);
        //input box
        var input = createInput("Name");
        //button
        var btn = createButton("Register");
        var greetings = createElement("h3");
        input.position(250,200);
        btn.position(250,250);
       //expects a funtion name
       // anonymus or unnamed function
        btn.mousePressed(function (){
            input.hide();
            btn.hide();
            var name = input.value();
            alert("before adding");
            playerCount = playerCount + 1;
            alert("after");
            alert(playerCount)
            player.updateCount(playerCount);
           // player.updateName(name);
            greetings.html("Welcome  "+ name);
            greetings.position(250,250);
        })
    }
}