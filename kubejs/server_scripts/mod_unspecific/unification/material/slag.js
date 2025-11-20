//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'thermal:slag',
        unified_variants: [
            'tfmg:slag'
        ],
        output_recipe_types: [
            'create:crushing'
        ],
        input_recipe_types: [
            'create:mixing'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})