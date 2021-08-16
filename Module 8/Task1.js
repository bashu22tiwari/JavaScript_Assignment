var pic = document.getElementById('photo');
var flag = 0;

pic.addEventListener('load',() => {
    if(flag==0){
        alert('Image is Succesfylly Loaded');
    }
    else{
        alert('New Image is Succesfully Loaded');
    }

    flag=0;
})

pic.addEventListener('error',() => {
    alert('Image is Not Succesfylly Loaded');
    alert('Taking a New Image');
    flag=1;
    pic.src = "https://wallpapercave.com/wp/wp2465898.png";
})