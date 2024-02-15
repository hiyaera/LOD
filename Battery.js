
// function checkbox(){
//     const checkboxes = document.querySelectorAll('input[name="category"]:checked');
//     const values = [];

//     for (const data of checkboxes)  {
//         values.push(data.value)
//     }
//     console.log(values);
// }

    // const checkboxes = document.querySelectorAll('input[name="category"]:checked');
    // for(const data of checkboxes){
    //     console.log(data.value);
    // }


    
    const values = [];
    function checkbox(element) {

        const elPos = values.indexOf(element.value);

        if( elPos!= -1 && !element.checked){
            values.splice(elPos,1)
        }else{
            values.push(element.value)
        }
        console.log(values);
    }
    




   




