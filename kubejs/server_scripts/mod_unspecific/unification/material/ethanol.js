//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'immersiveengineering:ethanol',
        json_ids: [
            'pneumaticcraft:thermo_plant/ethanol_from_apple',
            'pneumaticcraft:thermo_plant/ethanol_from_melon',
            'pneumaticcraft:thermo_plant/ethanol_from_poisonous_potato',
            'pneumaticcraft:thermo_plant/ethanol_from_potato',
            'pneumaticcraft:thermo_plant/ethanol_from_sugar',
            'pneumaticcraft:thermo_plant/ethanol_from_sweet_berries'
        ],
        json_recipes: [
            {
                'type': 'pneumaticcraft:thermo_plant',
                'exothermic': true,
                'fluid_input': {
                    'type': 'pneumaticcraft:fluid',
                    'amount': 100,
                    'tag': 'pneumaticcraft:yeast_culture'
                },
                'fluid_output': {'amount': 50, 'fluid': 'immersiveengineering:ethanol'},
                'item_input': {'item': 'minecraft:apple'},
                'speed': 0.25,
                'temperature': {'max_temp': 333, 'min_temp': 303}
            }, {
                'type': 'pneumaticcraft:thermo_plant',
                'exothermic': true,
                'fluid_input': {
                    'type': 'pneumaticcraft:fluid',
                    'amount': 100,
                    'tag': 'pneumaticcraft:yeast_culture'
                },
                'fluid_output': {'amount': 10, 'fluid': 'immersiveengineering:ethanol'},
                'item_input': {'item': 'minecraft:melon_slice'},
                'speed': 0.4,
                'temperature': {'max_temp': 333, 'min_temp': 303}
            }, {
                'type': 'pneumaticcraft:thermo_plant',
                'exothermic': true,
                'fluid_input': {
                    'type': 'pneumaticcraft:fluid',
                    'amount': 100,
                    'tag': 'pneumaticcraft:yeast_culture'
                },
                'fluid_output': {'amount': 50, 'fluid': 'immersiveengineering:ethanol'},
                'item_input': {'item': 'minecraft:poisonous_potato'},
                'speed': 0.25,
                'temperature': {'max_temp': 333, 'min_temp': 303}
            }, {
                'type': 'pneumaticcraft:thermo_plant',
                'exothermic': true,
                'fluid_input': {
                    'type': 'pneumaticcraft:fluid',
                    'amount': 100,
                    'tag': 'pneumaticcraft:yeast_culture'
                },
                'fluid_output': {'amount': 25, 'fluid': 'immersiveengineering:ethanol'},
                'item_input': {'tag': 'forge:crops/potato'},
                'speed': 0.25,
                'temperature': {'max_temp': 333, 'min_temp': 303}
            }, {
                'type': 'pneumaticcraft:thermo_plant',
                'exothermic': true,
                'fluid_input': {
                    'type': 'pneumaticcraft:fluid',
                    'amount': 100,
                    'tag': 'pneumaticcraft:yeast_culture'
                },
                'fluid_output': {'amount': 50, 'fluid': 'immersiveengineering:ethanol'},
                'item_input': {'item': 'minecraft:sugar'},
                'speed': 0.5,
                'temperature': {'max_temp': 333, 'min_temp': 303}
            }, {
                'type': 'pneumaticcraft:thermo_plant',
                'exothermic': true,
                'fluid_input': {
                    'type': 'pneumaticcraft:fluid',
                    'amount': 100,
                    'tag': 'pneumaticcraft:yeast_culture'
                },
                'fluid_output': {'amount': 20, 'fluid': 'immersiveengineering:ethanol'},
                'item_input': {'item': 'minecraft:sweet_berries'},
                'speed': 0.4,
                'temperature': {'max_temp': 333, 'min_temp': 303}
            }
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})