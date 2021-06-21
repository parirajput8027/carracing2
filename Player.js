class Player{
    constructor(){

    }
    getCount(){
    var playercompreff = database.ref("cardatabase/playerComp");
     
    playercompreff.on("value",function(data){
     playerCount=data.val();
     alert(playerCount);
    });
    
    }
    updateCount(count){
    var countRef =  database.ref("cardatabase/playerComp");
    countRef.update({
    playerComp: count
    })
    }

}