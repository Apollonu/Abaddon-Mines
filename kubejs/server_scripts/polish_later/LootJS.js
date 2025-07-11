//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Modifier Event
LootJS.modifiers(event => {

    //Uranium types
    event.addBlockLootModifier('mekanism:uranium_ore')
	.replaceLoot('mekanism:raw_uranium', 'immersiveengineering:raw_uranium')
    event.addBlockLootModifier('mekanism:deepslate_uranium_ore')
	.replaceLoot('mekanism:raw_uranium', 'immersiveengineering:raw_uranium')

    //Lead Types
    let lead_types = [
        'mekanism:deepslate_lead_ore',
        'mekanism:lead_ore',
        'mekanismaaa:glacio_lead_ore',
        'mekanismaaa:mercury_lead_ore',
        'mekanismaaa:venus_lead_ore'
    ].forEach(type => {
        event.addBlockLootModifier(type)
        .replaceLoot('mekanism:raw_lead', 'oreganized:raw_lead')
    })
    
    //Silver Types
    let silver_types = [
        'thermal:deepslate_silver_ore',
        'thermal:silver_ore',
        'thermal_and_space:glacio_silver_ore',
        'thermal_and_space:mars_silver_ore',
        'thermal_and_space:mercury_silver_ore',
        'thermal_and_space:moon_silver_ore',
        'thermal_and_space:venus_silver_ore'
    ].forEach(type => {
        event.addBlockLootModifier(type)
        .replaceLoot('thermal:raw_silver', 'oreganized:raw_silver')
    })
})