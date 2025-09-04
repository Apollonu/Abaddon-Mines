//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Modifier Event
LootJS.modifiers(event => {

    //Spelunkery Lava Sluice Loot
    event.addLootTableModifier('spelunkery:gameplay/sluice/lava/passive').replaceLoot('#forge:ingots/netherite_scrap', 'supplementaries:ash', true)
})