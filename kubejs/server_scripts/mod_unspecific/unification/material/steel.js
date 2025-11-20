//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Ingot Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'ad_astra:steel_ingot',
        unified_variants: [
            'immersiveengineering:ingot_steel',
            'mekanism:ingot_steel',
            'tfmg:steel_ingot'
        ],
        output_recipe_types: [
            'minecraft:blasting',
            'minecraft:crafting_shapeless',
            'minecraft:smelting',
            'thermal:furnace'
        ],
        input_recipe_types: [
            'minecraft:crafting_shaped',
            'minecraft:crafting_shapeless'
        ]
    }

    //Other Recipe Types
    event.remove({output: 'immersiveengineering:ingot_steel', input: '#forge:storage_blocks/steel', type: 'minecraft:crafting_shapeless'})
    event.remove({output: 'tfmg:steel_ingot', input: '#forge:storage_blocks/steel', type: 'minecraft:crafting_shapeless'})

    //Unify Items Function Push
    unify_items (
        data
    )
})

//Plate Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'ad_astra:steel_plate',
        unified_variants: [
            'tfmg:heavy_plate'
        ],
        input_recipe_types: [
            'create:mechanical_crafting',
            'minecraft:crafting_shaped'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})

//Rod Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        json_unified_individual: [
            '"ad_astra:steel_rod"'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})