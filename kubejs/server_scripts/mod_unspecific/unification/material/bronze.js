//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Block Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'mekanism:block_bronze',
        unified_variants: [
            'thermal:bronze_block'
        ],
        output_recipe_types: [
            'thermal:press'
        ],
        input_recipe_types: [
            'thermal:press'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})

//Dust Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'mekanism:dust_bronze',
        unified_variants: [
            'thermal:bronze_dust'
        ],
        output_recipe_types: [
            'thermal:pulverizer'
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
        unified_individual: 'mekanism:ingot_bronze',
        unified_variants: [
            'thermal:bronze_ingot'
        ],
        output_recipe_types: [
            'minecraft:crafting_shapeless',
            'thermal:press',
            'thermal:smelter'
        ],
        input_recipe_types: [
            'thermal:press'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})

//Nugget Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'mekanism:nugget_bronze',
        unified_variants: [
            'thermal:bronze_nugget'
        ],
        output_recipe_types: [
            'thermal:press'
        ]
    }

    //Other Recipe Types

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
        unified_individual: 'thermal:bronze_plate',
        unified_variants: [
            'vintage:bronze_sheet'
        ],
        output_recipe_types: [
            'create:pressing'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})