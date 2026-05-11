async function searchMedicine(){

    const searchInput = document
        .getElementById("medicineInput")
        .value
        .trim();

    const resultContainer = document
        .getElementById("searchResults");

    // Validation

    if(searchInput === ""){

        resultContainer.innerHTML =
            "<p>Please enter medicine name</p>";

        return;

    }

    // Fetch inventory data

    const response = await fetch(
        `http://localhost/Rx-Radar/backend/api/searchInventory.php?query=${searchInput}`
    );

    const medicines = await response.json();

    // Clear old results

    resultContainer.innerHTML = "";

    // No results

    if(medicines.length === 0){

        resultContainer.innerHTML =
            "<p>No medicines found</p>";

        return;

    }

    // Display inventory

    medicines.forEach((medicine) => {

        const stockStatus =
            medicine.quantity > 0
            ? "Available"
            : "Out of Stock";

        resultContainer.innerHTML += `

            <div class="medicine-card">

                <h3>${medicine.medicine_name}</h3>

                <p>Strength: ${medicine.strength}</p>

                <p>Pharmacy: ${medicine.pharmacy_name}</p>

                <p>Location: ${medicine.location}</p>

                <p>
                    Quantity: ${medicine.quantity}
                </p>

                <p>
                    Status:
                    <strong>${stockStatus}</strong>
                </p>

            </div>

        `;

    });

}



// ENTER KEY SUPPORT

document.addEventListener("DOMContentLoaded", () => {

    const medicineInput =
        document.getElementById("medicineInput");

    if(medicineInput){

        medicineInput.addEventListener("keypress", (event) => {

            if(event.key === "Enter"){

                searchMedicine();

            }

        });

    }

});