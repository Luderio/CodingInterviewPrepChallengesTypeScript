const updateInventory = (current_inventory: (number | string)[][], new_inventory: (number | string)[][]): (number | string)[][]  => {
    const inventory = [...current_inventory];
    const new_items = [...new_inventory];

    const check_inventory = inventory.map((inventory_item, index) => {
        new_items.forEach((new_item, index) => {
            if (inventory_item[1] === new_item[1]) {
                if (typeof(inventory_item[0]) === 'number' && typeof(new_item[0]) === 'number') {
                    inventory_item[0] = inventory_item[0] + new_item[0];
                    new_items.splice(index, 1);
                }
            }
            return new_item;
        });
        
        return inventory_item
    });
    check_inventory.push(...new_items);
    const updated_inventory = check_inventory.map((item) => [item[1], item[0]]).sort().map((item) => [item[1], item[0]]);

    return updated_inventory;
}

var curInv: (number | string)[][] = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv: (number | string)[][] = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);