//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Block Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'quark:charcoal_block',
        unified_variants: [
            'thermal:charcoal_block'
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