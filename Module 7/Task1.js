var textarea = document.getElementById('textarea');
var button = document.getElementById('button');
var flag=1;

button.addEventListener('click',() => {
    if(textarea.value==""){
        alert('Your Message Is Empty');
    }
    else{
        alert('Your Message Was Saved');
        textarea.value = "";
    }

})

window.addEventListener('beforeunload',(event) =>{
    event.preventDefault();
    if(textarea.value!=""){
        event.returnValue = 'Your Message was Not Saved';
    }
});