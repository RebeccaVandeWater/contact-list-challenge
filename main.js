let addElement = document.getElementById("add");
let deleteElement = document.getElementById("delete");


// *SECTION - Draw Forms

// *TODO - Make button disabled instead of adding and deleting 'show'.


function drawAddContact(){
    if(deleteElement.classList.contains("show")){
        alert("Please press 'Submit' to finish deleting contact, or press 'Cancel'.")
    } else{
        addElement.classList.remove("hidden");
        addElement.classList.add("show");
    }
}

function drawDeleteContact(){
    if(addElement.classList.contains("show")){
        alert("Please press 'Submit' to finish adding contact, or press 'Cancel'.")
    } else{
        deleteElement.classList.remove("hidden");
        deleteElement.classList.add("show");
    }
}

function drawContactList(){

}


// *SECTION - Add Contact

function addContact(event){
    event.preventDefault();


    addElement.classList.add("hidden")
}

function cancelAdd(event){
    event.preventDefault();

    addElement.classList.add("hidden");
    addElement.classList.remove("show");
}


// *SECTION - Delete Contact

function deleteContact(event){
    event.preventDefault();
    
    deleteElement.classList.add("hidden");
}

function cancelDelete(event){
    event.preventDefault();

    deleteElement.classList.add("hidden");
    deleteElement.classList.remove("show");
}
