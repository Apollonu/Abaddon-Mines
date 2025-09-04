//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Modifier Event
LootJS.modifiers(event => {

    //Diamond Loot
    event.addLootTableModifier('friendsandfoes:barrels/citadel').replaceLoot('#forge:gems/diamond', '#forge:ingots/brass', true)
})