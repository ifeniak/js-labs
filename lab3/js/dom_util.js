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
</li>`;

export const addItemToPage = ({id, name, location, animals, power}) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin", 
        itemTemplate({id, name, location, animals, power})
    );
};

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    }
};