//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'tfmg:lpg',
        json_ids: [
            'pneumaticcraft:amadron/lpg_to_emerald',
            'pneumaticcraft:thermo_plant/lpg'
        ],
        json_recipes: [
            {
                'type': 'pneumaticcraft:amadron',
                'id': 'pneumaticcraft:amadron/lpg_to_emerald',
                'input': {'type': 'FLUID', 'amount': 1000, 'id': 'tfmg:lpg'},
                'level': 0,
                'output': {'type': 'ITEM','amount': 1,'id': 'minecraft:emerald'},
                'static':true
            }, {
                'type': 'pneumaticcraft:thermo_plant',
                'exothermic': false,
                'fluid_input': {
                    'type': 'pneumaticcraft:fluid',
                    'amount': 100,
                    'tag': 'forge:gasoline'
                },
                'fluid_output': {'amount': 80, 'fluid': 'tfmg:lpg'},
                'pressure': 2.0,
                'temperature': {'min_temp': 573}
            }
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})