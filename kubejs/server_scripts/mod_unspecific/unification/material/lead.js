//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Block Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'oreganized:lead_block',
        unified_variants: [
            'thermal:lead_block'
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
        unified_individual: 'thermal:lead_dust',
        unified_variants: [
            'mekanism:dust_lead'
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
        unified_individual: 'oreganized:lead_ingot',
        unified_variants: [
            'thermal:lead_ingot'
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

//Nugget Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'oreganized:lead_nugget',
        unified_variants: [
            'thermal:lead_nugget'
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

//Plate Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'thermal:lead_plate',
        unified_variants: [
            'vintage:lead_sheet'
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

//Raw Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'oreganized:raw_lead',
        unified_variants: [
            'thermal:raw_lead'
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
        unified_individual: 'oreganized:raw_lead_block',
        unified_variants: [
            'thermal:raw_lead_block'
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