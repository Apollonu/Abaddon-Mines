//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'tfmg:lpg',
        json_ids: [
            'pneumaticcraft:amadron/lpg_to_emerald'
        ],
        json_recipes: [
            {
                'type': 'pneumaticcraft:amadron',
                'id': 'pneumaticcraft:amadron/lpg_to_emerald',
                'input': {'type': 'FLUID', 'amount': 1000, 'id': 'tfmg:lpg'},
                'level': 0,
                'output': {'type': 'ITEM','amount': 1,'id': 'minecraft:emerald'},
                'static':true
            }
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})