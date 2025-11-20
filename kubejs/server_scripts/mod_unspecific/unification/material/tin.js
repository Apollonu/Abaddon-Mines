//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Dust Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'thermal:tin_dust',
        unified_variants: [
            'mekanism:dust_tin'
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