let checkBoxes = document.getElementsByClassName('checkbox');

for(let checkbox of checkBoxes){
    checkbox.addEventListener('change', function(e){
        let req= document.createElement('a');
        req.href=`/update_status?id=${checkbox.classList[2]}`;
        req.click();
    })

    if(checkbox.classList[3]=='check-true'){
        checkbox.setAttribute('checked','checked');
    }
}