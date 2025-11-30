//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Wire Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'pneumaticcraft:printed_circuit_board',
        unified_variants: [
            'tfmg:circuit_board'
        ],
        input_recipe_types: [
            'create:mechanical_crafting'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})