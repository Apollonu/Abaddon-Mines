//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'tconstruct:molten_steel',
        fluid_unified_variants: [
            '"fluid":"tfmg:molten_steel"'
        ],
        fluid_recipe_types: [
            'tfmg:industrial_blasting'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})

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
        unified_individual: 'ad_astra:steel_rod',
        unified_variants: [
            'tfmg:rebar'
        ],
        input_recipe_types: [
            'create:mechanical_crafting',
            'minecraft:crafting_shaped',
            'vintage:auto_curving'
        ],
        json_unified_variants: [
            '"item":"vintage:steel_rod"'
        ],
        json_recipe_types: [
            'createaddition:rolling'
        ]
    }

    //Other Recipe Types
    event.shapeless('9x ' + data.unified_individual, 'tfmg:rebar_pile')

    //Unify Items Function Push
    unify_items (
        data
    )
})