//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Modifier Event
LootJS.modifiers(event => {

    //Diamond Loot
    event.addLootTableModifier('minecraft:chests/jungle_temple').replaceLoot('#forge:gems/diamond', 'spelunkery:rough_lazurite', true)

    //Diamond Horse Armor Loot
    event.addLootTableModifier('minecraft:chests/jungle_temple').replaceLoot('minecraft:diamond_horse_armor', 'everythingcopper:copper_horse_armor')
})