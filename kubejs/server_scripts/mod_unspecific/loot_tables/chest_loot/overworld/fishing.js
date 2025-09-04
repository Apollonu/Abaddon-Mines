//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Modifier Event
LootJS.modifiers(event => {

    //Diamond Types
    let diamond_types = [
        'tide:gameplay/fishing/climates/depths',
        'tide:gameplay/fishing/crates/overworld/lava_deep',
        'tide:gameplay/fishing/crates/overworld/water_deep',
        'tide:gameplay/fishing/special/desert_well'
    ].forEach(type => {
        event.addLootTableModifier(type).replaceLoot('#forge:gems/diamond', '#forge:raw_materials/silver')
    })

    //Diamond Loot
    event.addLootTableModifier('tide:gameplay/fishing/crates').replaceLoot('#forge:gems/diamond', '#forge:gems/niter')

    //Diamond Special Loot
    event.addLootTableModifier('tide:gameplay/fishing/special').replaceLoot('#forge:gems/diamond', 'spelunkery:rough_lazurite')

    //Diamond Lava Underground Loot
    event.addLootTableModifier('tide:gameplay/fishing/crates/overworld/lava_underground').replaceLoot('#forge:gems/diamond', 'spelunkery:rough_cinnabar')
})