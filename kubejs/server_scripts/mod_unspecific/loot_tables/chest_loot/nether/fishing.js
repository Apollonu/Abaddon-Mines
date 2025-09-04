//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Modifier Event
LootJS.modifiers(event => {

    //Netherite Scrap Types
    let netherite_scrap_types = [
        'tide:gameplay/fishing/climates/nether',
        'tide:gameplay/fishing/crates',
        'tide:gameplay/fishing/crates/nether/lava'
    ].forEach(type => {
        event.addLootTableModifier(type).replaceLoot('#forge:ingots/netherite_scrap', '#forge:raw_materials/cobalt')
    })
})