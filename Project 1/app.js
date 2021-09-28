const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

// Add Event Listener

closedFace.addEventListener('click',function(){
    closedFace.style.display = 'none';
    openFace.style.display = 'block';
})

openFace.addEventListener('click',function(){
    openFace.style.display = 'none';
    closedFace.style.display = 'block';
})