//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Block Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'oreganized:silver_block',
        unified_variants: [
            'thermal:silver_block'
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
        unified_individual: 'thermal:silver_dust',
        unified_variants: [
            'moremekanismprocessing:dust_silver'
        ],
        output_recipe_types: [
            'mekanism:enriching',
            'mekanism:crushing'
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
        unified_individual: 'oreganized:silver_ingot',
        unified_variants: [
            'thermal:silver_ingot'
        ],
        output_recipe_types: [
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
        unified_individual: 'oreganized:silver_nugget',
        unified_variants: [
            'thermal:silver_nugget'
        ],
        output_recipe_types: [
            'thermal:press',
            'thermal:smelter'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})

//Raw Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'oreganized:raw_silver',
        unified_variants: [
            'thermal:raw_silver'
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

//Raw Block Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'oreganized:raw_silver_block',
        unified_variants: [
            'thermal:raw_silver_block'
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