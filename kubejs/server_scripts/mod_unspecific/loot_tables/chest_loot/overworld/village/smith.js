//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Modifier Event
LootJS.modifiers(event => {

    //Iron Gear Types
    let iron_gear_types = [
        'boots',
        'chestplate',
        'helmet',
        'leggings',
        'pickaxe',
        'shovel',
        'sword',
    ].forEach(type => {
        event.addLootTableModifier('ctov:chests/village/village_smith').replaceLoot('minecraft:iron_' + type, 'everythingcopper:copper_' + type, true)
    })

    //Iron Loot
    event.addLootTableModifier('ctov:chests/village/village_smith').replaceLoot('#forge:ingots/iron', '#forge:ingots/tin', true)

    //Diamond Loot
    event.addLootTableModifier('ctov:chests/village/village_smith').replaceLoot('#forge:gems/diamond', '#forge:ingots/iron', true)

    //Diamond Horse Armor Loot
    event.addLootTableModifier('ctov:chests/village/village_smith').replaceLoot('minecraft:diamond_horse_armor', 'everythingcopper:copper_horse_armor')
})