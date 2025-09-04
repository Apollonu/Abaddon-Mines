//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Modifier Event
LootJS.modifiers(event => {

    //Gold Loot
    event.addLootTableModifier('minecraft:chests/desert_pyramid').replaceLoot('#forge:ingots/gold', '#forge:ingots/zinc', true)

    //Iron Loot
    event.addLootTableModifier('minecraft:chests/desert_pyramid').replaceLoot('#forge:ingots/iron', '#forge:ingots/copper', true)

    //Diamond Loot
    event.addLootTableModifier('minecraft:chests/desert_pyramid').replaceLoot('#forge:gems/diamond', '#forge:ingots/iron')

    //Diamond Horse Armor Loot
    event.addLootTableModifier('minecraft:chests/desert_pyramid').replaceLoot('minecraft:diamond_horse_armor', 'everythingcopper:copper_horse_armor')
})