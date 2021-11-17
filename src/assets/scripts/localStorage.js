let initialData = {
    "name": "Crow",
    "class": "Slayer",
    "level": "1",
    "gold": "100",
    "equipment":["Standard Helmet","Standard Chest","Standard Bottom","Standard Shoes","Standard Weapon","Standard Sub-Weapon"],
    "inventory":[
        ["Gem", "Common", "Common trade item", "50", "junk"],
        ["Ruby", "Uncommon", "Uncommon gemstone", "100", "junk"],
        ["Standard Helmet", "common", "Initial helmet equipment", "10", "Helmet"],
        ["Standard Chest", "common", "Initial chest equipment", "10", "chest"],
        ["Standard Bottom", "common", "Initial bottom equipment", "10", "bottom"],
        ["Standard Shoes", "common", "Initial shoes equipment", "10", "shoes"],
        ["Standard Weapon", "common", "Initial weapon equipment", "10", "weapon"],
        ["Standard Sub-Weapon", "common", "Initial sub-weapon equipment", "10", "subweapon"]
    ]
}

window.localStorage.setItem('playerData', JSON.stringify(initialData));