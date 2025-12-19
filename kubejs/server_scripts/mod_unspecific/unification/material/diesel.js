//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'immersivepetroleum:diesel',
        json_ids: [
            'pneumaticcraft:amadron/diesel_to_emerald'
        ],
        json_recipes: [
            {
                'type': 'pneumaticcraft:amadron',
                'id': 'pneumaticcraft:amadron/diesel_to_emerald',
                'input': {'type': 'FLUID', 'amount': 4000, 'id': 'immersivepetroleum:diesel'},
                'level': 0,
                'output': {'type': 'ITEM', 'amount': 1, 'id': 'minecraft:emerald'},
                'static': true
            }
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})