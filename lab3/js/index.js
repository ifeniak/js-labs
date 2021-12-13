import {
    getInputValues,
    renderItemsList,
    EDIT_BUTTON_PREFIX,
    DELETE_BUTTON_PREFIX,
    clearInputs,
} from "./dom_util.js";

import { 
    getAllFarms, 
    postFarm, 
    updateFarm,
    deleteFarm,
} from "./api.js";

// import { getAllFarms } from "./farms.js";


const formField = document.getElementById("item_form");
const submitButton = document.getElementById("submit_button");

const findButton = document.getElementById("find__button");
const clearfindButton = document.getElementById("clear__find__button");
const input = document.getElementById("input");
const sortCheckbox = document.getElementById("sort__checkbox");
const countButton = document.getElementById("count__button");

let farms = [];

const onEditItem = async (element) => {
    const itemId = element.target.id.replace(EDIT_BUTTON_PREFIX, "");

    await updateFarm(itemId, getInputValues())
    clearInputs();

    refetchAllFarms();
};

const onRemoveItem = async (element) => {
    const itemId = element.target.id.replace(DELETE_BUTTON_PREFIX, "");

    await deleteFarm(itemId);

    refetchAllFarms(); 
} 


export const refetchAllFarms = async () => {
    const allFarms = await getAllFarms();

    farms = allFarms.sort((a, b) => b.name.localeCompare(a.name));

    renderItemsList(farms, onEditItem, onRemoveItem);
};

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const { location, name, animals, power } = getInputValues();

    clearInputs();

    postFarm({
        location,
        name, 
        animals,
        power,
    }).then(refetchAllFarms);

});

findButton.addEventListener("click", () => {
    const foundFarms = farms.filter((farm) => farm.name.search(input.value) !== -1);

    renderItemsList(foundFarms, onEditItem, onRemoveItem);
});

clearfindButton.addEventListener('click', () => {
    renderItemsList(farms);

    input.value = "";
});

sortCheckbox.addEventListener("change", function() {
    if (this.checked) {
        const sortedFarms = farms.sort(
            (a, b) => parseInt(a.power) - parseInt(b.power));
        
        renderItemsList(sortedFarms, onEditItem, onRemoveItem);
    } else {
        refetchAllFarms();
    }
});

countButton.addEventListener("click", () => {
    let sum = farms.map(o => o.power).reduce((a, c) => { return a + c });
    document.getElementById("total-power").innerText = sum;
    console.log(sum);
});

refetchAllFarms();