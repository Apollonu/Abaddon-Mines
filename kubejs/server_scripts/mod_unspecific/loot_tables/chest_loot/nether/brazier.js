//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Modifier Event
LootJS.modifiers(event => {

    //Diamond Types
    let diamond_types = [
        'netherexp:brazier_chest/exposed',
        'netherexp:brazier_chest/hidden'
    ].forEach(type => {
        event.addLootTableModifier(type).replaceLoot('#forge:gems/diamond', '#forge:ingots/steel', true)
    })

    //Ancient Debris Types
    let ancient_debris_types = [
        'netherexp:brazier_chest/exposed',
        'netherexp:brazier_chest/hidden'
    ].forEach(type => {
        event.addLootTableModifier(type).replaceLoot('#forge:ores/netherite_scrap', '#forge:ingots/cobalt', true)
    })
})