//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'immersiveengineering:biodiesel',
        json_ids: [
            'pneumaticcraft:fluid_mixer/biodiesel'
        ],
        json_recipes: [
            {
                'type': 'pneumaticcraft:fluid_mixer',
                'fluid_output': {'amount': 50,'fluid': 'immersiveengineering:biodiesel'},
                'input1': {'type': 'pneumaticcraft:fluid', 'amount':25, 'tag': 'forge:plantoil'},
                'input2': {'type': 'pneumaticcraft:fluid', 'amount': 25, 'tag': 'forge:ethanol'},
                'item_output': {'item': 'pneumaticcraft:glycerol'},
                'pressure': 2.0,
                'time':300
            }
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})