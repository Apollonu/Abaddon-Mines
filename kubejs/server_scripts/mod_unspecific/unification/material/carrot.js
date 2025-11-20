//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Block Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'farmersdelight:carrot_crate',
        unified_variants: [
            'thermal:carrot_block'
        ],
        output_recipe_types: [
            'thermal:press'
        ],
        input_recipe_types: [
            'thermal:gourmand_fuel',
            'thermal:press'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})