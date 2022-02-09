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
    deleteFarm
} from "./api.js";

import { 
    // getAllFarms,
    // postFarm,
    // updateFarm

} from "./farms.js";


const formField = document.getElementById("item_form");
const locationInput = document.getElementById("location_input");
const nameInput = document.getElementById("name_input");
const animalsInput = document.getElementById("animals_input");
const powerInput = document.getElementById("power_input");

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find__button");
const clearfindButton = document.getElementById("clear__find__button");
const input = document.getElementById("input");
const sortCheckbox = document.getElementById("sort__checkbox");
const countButton = document.getElementById("count__button");

let farms = [];

const onEditItem = async (e) => {
    // if (!validateInput()) {
    //     return;
    // };

    const itemId = e.target.id.replace(EDIT_BUTTON_PREFIX, "");
    // console.log(e.target);
    // console.log(itemId);

    await updateFarm(itemId, getInputValues())
    clearInputs();

    refetchAllFarms();
};

const onRemoveItem = async (e) => {
    const itemId = e.target.id.replace(DELETE_BUTTON_PREFIX, "");
    console.log("hello");

    await deleteFarm(itemId);
    console.log("hello fuck");

    refetchAllFarms(); 
} 


export const refetchAllFarms = async () => {
    const allFarms = await getAllFarms();

    farms = allFarms.sort((a, b) => b.name.localeCompare(a.name));

    renderItemsList(farms, onEditItem, onRemoveItem);
    // renderItemsList(farms);
};

// const validateInput = () => {
//     var a = locationInput.value;
//     var b = nameInput.value;
//     var c = animalsInput.value;
//     var d = powerInput.value;
//     if (a == null || a == "" || b == null || b == ""|| c == null || c == "" || d == null || d == "") {
//       alert("Please Fill All Required Field");
//       return false;
//     }
//     return true;
// };

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    // if (!validateInput()) {
    //     return;
    // };

    const { location, name, animals, power } = getInputValues();

    clearInputs();

    postFarm({
        location,
        name, 
        animals,
        power,
    }).then(refetchAllFarms());

});

findButton.addEventListener("click", () => {
    const foundFarms = farms.filter((farm) => farm.name.search(input.value) !== -1);

    renderItemsList(foundFarms, onEditItem, onRemoveItem);
    // renderItemsList(foundFarms);
});

clearfindButton.addEventListener('click', () => {
    renderItemsList(farms, onEditItem, onRemoveItem);

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
    // console.log(sum);
});

refetchAllFarms();