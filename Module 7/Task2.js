function fun(){
    var x;
    x = document.querySelectorAll(".td");
    document.addEventListener("click",function(event) {
        event.target.style.backgroundColor="red";

        
    })
    console.log(x);
}
fun();