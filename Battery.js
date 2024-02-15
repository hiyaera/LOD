
function checkbox() {
    const checkboxes = document.querySelectorAll('input[name="category"]:checked');
   
    for(const data of checkboxes){
        console.log(data.value);
    }
}

    

