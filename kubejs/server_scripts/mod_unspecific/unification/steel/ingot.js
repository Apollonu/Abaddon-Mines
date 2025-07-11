//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Event
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'ad_astra:steel_ingot'
    let unified_variants = [
        'immersiveengineering:ingot_steel',
        'mekanism:ingot_steel',
        'tfmg:steel_ingot'
    ]

    //Output Recipe Types
    let output_recipe_types = [
        'minecraft:blasting',
        'minecraft:crafting_shapeless',
        'minecraft:smelting',
        'thermal:furnace'
    ]

    //Input Recipe Types
    let input_recipe_types = [
        'minecraft:crafting_shaped',
        'minecraft:crafting_shapeless'
    ]

    //Custom Recipe Types
    let custom_recipe_types = [
        {
            'type': 'tfmg:casting',
            'ingredients': [{
                'amount': 144,
                'fluid': 'tfmg:molten_steel',
                'nbt': {}
            }],
            'processingTime': 200,
            'results': [{'item': unified_individual}]
        }
    ]

    //Other Recipe Types
    event.remove({output: 'immersiveengineering:ingot_steel', input: '#forge:storage_blocks/steel', type: 'minecraft:crafting_shapeless'})
    event.remove({output: 'tfmg:steel_ingot', input: '#forge:storage_blocks/steel', type: 'minecraft:crafting_shapeless'})

    //Unify Items Function Push
    unify_items (
        event,
        unified_individual,
        unified_variants,
        output_recipe_types,
        input_recipe_types,
        custom_recipe_types
    )
})