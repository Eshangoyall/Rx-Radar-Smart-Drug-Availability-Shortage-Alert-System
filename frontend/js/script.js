const availableMedicines = [

    "Paracetamol",
    "Amoxicillin",
    "Insulin"

];

function searchMedicine(){

    const medicineName = document
        .getElementById("medicineInput")
        .value
        .trim();

    // Empty input validation

    if(medicineName === ""){

        alert("Please enter medicine name");
        return;
    }

    // Check if medicine exists

    const medicineExists = availableMedicines.some(medicine =>
        medicine.toLowerCase() === medicineName.toLowerCase()
    );

    // If medicine not found

    if(!medicineExists){

        alert("Medicine not found in database");
        return;
    }

    // Save search

    localStorage.setItem("medicineSearch", medicineName);

    // Redirect

    window.location.href = "search.html";

}

function handleKeyPress(event){

    if(event.key === "Enter"){
        searchMedicine();
    }

}

window.onload = function(){

    document.getElementById("medicineInput").value = "";

}