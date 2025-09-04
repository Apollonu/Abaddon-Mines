//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Modifier Event
LootJS.modifiers(event => {

    //Gold Loot
    event.addLootTableModifier('minecraft:chests/shipwreck_treasure').replaceLoot('#forge:ingots/gold', '#forge:ingots/zinc', true)

    //Iron Loot
    event.addLootTableModifier('minecraft:chests/shipwreck_treasure').replaceLoot('#forge:ingots/iron', '#forge:ingots/copper', true)

    //Diamond Loot
    event.addLootTableModifier('minecraft:chests/shipwreck_treasure').replaceLoot('#forge:gems/diamond', '#forge:ingots/iron')
})