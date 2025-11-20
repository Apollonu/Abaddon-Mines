//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Ingot Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'oreganized:electrum_ingot',
        unified_variants: [
            'thermal:electrum_ingot'
        ],
        output_recipe_types: [
            'minecraft:crafting_shaped',
            'thermal:press',
            'thermal:smelter'
        ],
        input_recipe_types: [
            'minecraft:crafting_shapeless',
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
        unified_individual: 'createaddition:electrum_nugget',
        unified_variants: [
            'thermal:electrum_nugget'
        ],
        output_recipe_types: [
            'minecraft:crafting_shapeless',
            'thermal:press'
        ],
        input_recipe_types: [
            'minecraft:crafting_shaped'
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
        unified_individual: 'thermal:electrum_plate',
        unified_variants: [
            'createaddition:electrum_sheet'
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