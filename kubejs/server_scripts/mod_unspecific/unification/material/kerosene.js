//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'tfmg:kerosene',
        json_ids: [
            'pneumaticcraft:amadron/kerosene_to_emerald',
            'pneumaticcraft:thermo_plant/kerosene' //This Recipe is Removed
        ],
        json_recipes: [
            {
                'type': 'pneumaticcraft:amadron',
                'id': 'pneumaticcraft:amadron/kerosene_to_emerald',
                'input': {'type': 'FLUID', 'amount': 3000, 'id': 'tfmg:kerosene'},
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