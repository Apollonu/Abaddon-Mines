//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Modifier Event
LootJS.modifiers(event => {

    //Iron Loot
    event.addLootTableModifier('minecraft:chests/abandoned_mineshaft').replaceLoot('#forge:ingots/iron', '#forge:ingots/bronze', true)

    //Gold Loot
    event.addLootTableModifier('minecraft:chests/abandoned_mineshaft').replaceLoot('#forge:ingots/gold', '#forge:ingots/copper', true)

    //Diamond Loot
    event.addLootTableModifier('minecraft:chests/abandoned_mineshaft').replaceLoot('#forge:gems/diamond', '#forge:ingots/zinc', true)
})