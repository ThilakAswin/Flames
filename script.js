function calculate(){
    
    var index = Math.floor(Math.random() * 6);
    
    const str = ["Friends", "Love" , "Affection", "Marraige" , "Enemy" , "Sister"];

    if(document.querySelector("input").value === "")
    {
        document.querySelector("h2").innerHTML = "Please provide a valid names";
    }

    else
    {
    
    document.querySelector("h2").innerHTML = str[index];

    }
    document.querySelector("h2").style.color = "red";
    
}