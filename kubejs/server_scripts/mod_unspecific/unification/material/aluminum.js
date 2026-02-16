//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Wire Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'tfmg:aluminum_wire',
        json_ids: [
            'vintageimprovements:rolling/aluminum_plate'
        ],
        json_recipes: [
            {
                'type': 'createaddition:rolling',
                'input': {'tag': 'forge:plates/aluminum'},
                'result': {'item': 'tfmg:aluminum_wire', 'count': 2}
            }
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})
