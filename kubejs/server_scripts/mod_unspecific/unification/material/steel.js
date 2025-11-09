//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Ingot Recipe Unification
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

//Plate Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'ad_astra:steel_plate'
    let unified_variants = [
        'tfmg:heavy_plate'
    ]

    //Output Recipe Types
    let output_recipe_types = [
        
    ]

    //Input Recipe Types
    let input_recipe_types = [
        'create:mechanical_crafting',
        'minecraft:crafting_shaped'
    ]

    //Custom Recipe Types
    let custom_recipe_types = [

    ]

    //Other Recipe Types
    

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

//Rod Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'ad_astra:steel_rod'
    let unified_variants = [

    ]

    //Output Recipe Types
    let output_recipe_types = [

    ]

    //Input Recipe Types
    let input_recipe_types = [
        
    ]
    
    //Custom Recipe Types
    let custom_recipe_types = [
        {
            'type': 'createaddition:rolling',
            'input': {
                'tag': 'forge:ingots/steel',
                'count': 1
            },
            'result': {
                'item': unified_individual,
                'count': 2
            }
        }
    ]

    //Other Recipe Types
    

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