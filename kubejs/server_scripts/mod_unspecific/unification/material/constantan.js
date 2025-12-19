//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Ingot Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'thermal:constantan_ingot',
        unified_variants: [
            'tfmg:constantan_ingot'
        ],
        output_recipe_types: [
            'create:mixing'
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
        unified_individual: 'thermal:constantan_plate',
        unified_variants: [
            'vintage:constantan_sheet'
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

//Wire Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'tfmg:constantan_wire',
        json_ids: [
            'vintage:rolling/constantan_plate'
        ],
        json_recipes: [
            {
                'type': 'createaddition:rolling',
                'input': {'tag': 'forge:plates/constantan'},
                'result': {'item': 'tfmg:constantan_wire', 'count': 2}
            }
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})