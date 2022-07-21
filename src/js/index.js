//variables

const form=document.getElementById('addForm');
const itemList=document.getElementById('items');
const searchItems=document.getElementById("search");


//event listeners

//form submission event
form.addEventListener("submit",addItem);
//search some data like filtering
searchItems.addEventListener("keyup",searchItem);
//delete some items
itemList.addEventListener("click",deleteItem);
//Edit some items
itemList.addEventListener("click",EditItems);

//function 

//add items
function addItem(e){
    e.preventDefault();
    let items=document.getElementById('item').value;
    console.log(items);
    if(items==""){
        document.getElementById('item').style.borderColor="red"

    }else{
    let li=document.createElement('li');
    let br=document.createElement('br');
    let btn=document.createElement('button');
    let btn1=document.createElement('button');
   li.innerHTML=items;
   
   
    li.classList="list-group-item";
    btn.classList="btn btn-danger btn-sm float-right ms-5  edit";
    btn1.classList="btn btn-danger btn-sm float-right ms-5  delete";
    console.log(li);
    btn.textContent="Edit"
    btn1.textContent="Delete"
   li.appendChild(btn);
   li.appendChild(btn1)
   itemList.append(li);
   itemList.appendChild(br);
    }
}
//Edit items
function EditItems(e,li){

    let newValue=prompt("Enter Edited value you are not edit the delete this item please cencel",e.target.parentElement.firstChild.textContent);
    // console.log(newValue)
   let a= e.target.parentElement.firstChild.textContent=newValue;
   console.log(a)

}





//delete items
function deleteItem(e){

    if(e.target.classList.contains("delete")){
        
            let li=e.target.parentElement;
            itemList.removeChild(li);
    }


}

//Search Items
function searchItem(e){
    
    var text=e.target.value.toLowerCase();
    console.log(text);
    //get list of items
    var items=itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        console.log(itemName)
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else{
            item.style.display="none";
        }
    })
}