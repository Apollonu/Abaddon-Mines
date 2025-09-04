//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Modifier Event
LootJS.modifiers(event => {

    //Iron Loot
    event.addLootTableModifier('minecraft:chests/buried_treasure').replaceLoot('#forge:ingots/iron', '#forge:ingots/bronze', true)

    //Diamond Loot
    event.addLootTableModifier('minecraft:chests/buried_treasure').replaceLoot('#forge:gems/diamond', '#forge:ingots/iron', true)
})