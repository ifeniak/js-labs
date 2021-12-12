import { renderItemsList } from "./dom_util.js";
import { getAllFarms } from "./farms.js";

const findButton = document.getElementById("find__button");
const clearfindButton = document.getElementById("clear__find__button");
const input = document.getElementById("input");
const sortCheckbox = document.getElementById("sort__checkbox");
const countButton = document.getElementById("count__button");

let farms = [];

export const refetchAllFarms = () => {
    const allFarms = getAllFarms();

    farms = allFarms.sort((a, b) => b.name.localeCompare(a.name));

    renderItemsList(farms);
};

findButton.addEventListener("click", () => {
    const foundFarms = farms.filter((farm) => farm.name.search(input.value) !== -1);

    renderItemsList(foundFarms);
});

clearfindButton.addEventListener('click', () => {
    renderItemsList(farms);

    input.value = "";
});

sortCheckbox.addEventListener("change", function() {
    if (this.checked) {
        const sortedFarms = farms.sort(
            (a, b) => parseInt(a.power) - parseInt(b.power));
        
        renderItemsList(sortedFarms);
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