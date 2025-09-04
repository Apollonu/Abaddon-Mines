//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Modifier Event
LootJS.modifiers(event => {

    //Diamond Loot
    event.addLootTableModifier('minecraft:chests/bastion_treasure').replaceLoot('#forge:gems/diamond', '#forge:nuggets/steel', true)

    //Ancient Debris Types
    let ancient_debris_types = [
        'minecraft:chests/bastion_hoglin_stable',
        'minecraft:chests/bastion_other',
        'minecraft:chests/bastion_treasure'
    ].forEach(type => {
        event.addLootTableModifier(type).replaceLoot('#forge:ores/netherite_scrap', '#forge:ingots/compressed_iron', true)
    })

    //Netherite Scrap Types
    let netherite_scrap_types = [
        'minecraft:chests/bastion_hoglin_stable',
        'minecraft:chests/bastion_other',
        'minecraft:chests/bastion_treasure'
    ].forEach(type => {
        event.addLootTableModifier(type).replaceLoot('#forge:ingots/netherite_scrap', '#forge:ingots/steel')
    })

    //Netherite Loot
    event.addLootTableModifier('minecraft:chests/bastion_treasure').replaceLoot('#forge:ingots/netherite', '#forge:ingots/cobalt')
})