//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Modifier Event
LootJS.modifiers(event => {

    //Diamond Loot
    let diamond_loot = [
        'betterfortresses:chests/obsidian',
        'betterfortresses:chests/puzzle',
        'betterfortresses:chests/storage'
    ].forEach(type => {
        event.addLootTableModifier(type).replaceLoot('#forge:gems/diamond', '#forge:ingots/compressed_iron', true)
    })

    //Other Diamond Loot
    event.addLootTableModifier('betterfortresses:chests/worship').replaceLoot('#forge:gems/diamond', '#forge:ingots/brass', true)
    event.addLootTableModifier('betterfortresses:chests/quarters').replaceLoot('#forge:gems/diamond', '#forge:ingots/brass', true)
})