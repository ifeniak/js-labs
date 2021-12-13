export const EDIT_BUTTON_PREFIX = 'edit-button-';
export const DELETE_BUTTON_PREFIX = 'delete-button-';

const locationInput = document.getElementById("location_input");
const nameInput = document.getElementById("name_input");
const animalsInput = document.getElementById("animals_input");
const powerInput = document.getElementById("power_input");

const itemsContainer = document.getElementById("container__items");

const getItemId = (id) => `item-${id}`

const itemTemplate = ({id, name, location, animals, power}) => `
<li id="${getItemId(id)}" class="item-card">
    <img 
        src = "https://media.istockphoto.com/photos/fjordview-in-norway-encapsulated-by-mountains-picture-id1278122924"
        class="item-container__image" alt="card">
    <div>
        <h4>${name}</h4>
        <h5>${location}</h5>
        <p>Animals: ${animals} heads</p>
        <p>Power: ${power} sigils</p>
    </div>
     <div>
         <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="default_button">Edit</button>
         <button id="${DELETE_BUTTON_PREFIX}${id}" type="button" class="default_button">Delete</button>
     </div>
</li>`;

export const clearInputs = () => {
    locationInput.value = ""; 
    nameInput.value = "";
    animalsInput.value = "";
    powerInput.value = "";
};

export const addItemToPage = ({id, location, name, animals, power} /*, onEditItem*/) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin", 
        itemTemplate({id, location, name, animals, power})
    );

    // const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
    // const removeButton = document.getElementById(`${DELETE_BUTTON_PREFIX}${id}`);

    // editButton.addEventListener("click", onEditItem);
    // removeButton.addEventListener("click", onRemoveItem);
};

export const renderItemsList = (items, onRemoveItem) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item/*, onEditItem, onRemoveItem*/);
    }
};

export const getInputValues = () => {
    return {
        location: locationInput.value,
        name: nameInput.value,
        animals: animalsInput.value,
        power: powerInput.value,
    };
};
