//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'immersiveengineering:plantoil',
        json_ids: [
            'pneumaticcraft:thermo_plant/vegetable_oil_from_crops',
            'pneumaticcraft:thermo_plant/vegetable_oil_from_seeds'
        ],
        json_recipes: [
            {
                'type': 'pneumaticcraft:thermo_plant',
                'exothermic': false,
                'fluid_output': {'amount' :20, 'fluid': 'immersiveengineering:plantoil'},
                'item_input': {'tag': 'forge:crops'},
                'pressure': 2.0,
                'speed': 0.5
            }, {
                'type': 'pneumaticcraft:thermo_plant',
                'exothermic': false,
                'fluid_output': {'amount': 50, 'fluid': 'immersiveengineering:plantoil'},
                'item_input': {'tag': 'forge:seeds'},
                'pressure': 2.0,
                'speed': 0.5
            }
        ]
    }

    //Other Recipe Types
    event.remove({input: '#c:seeds', type: 'create:compacting'})

    //Unify Items Function Push
    unify_items (
        data
    )
})