//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Event
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'immersiveengineering:ethanol'
    let unified_variants = [

    ]

    //Output Recipe Types
    let output_recipe_types = [
        
    ]

    //Input Recipe Types
    let input_recipe_types = [
        
    ]

    //Custom Recipe Types
    let custom_recipe_types = [
        {
            'type':'createaddition:liquid_burning',
            'input': {
                'fluid': unified_individual,
                'amount': 1000
            },
            'burnTime': 6000
        }, {
            'type': 'pneumaticcraft:thermo_plant',
            'exothermic': true,
            'fluid_input': {
                'type': 'pneumaticcraft:fluid',
                'amount': 100,
                'tag': 'pneumaticcraft:yeast_culture'
            },
            'fluid_output': {
                'amount': 20,
                'fluid': unified_individual
            },
            'item_input': {
                'item': 'minecraft:sweet_berries'
            },
            'speed': 0.4,
            'temperature': {
                'max_temp': 333,
                'min_temp': 303
            }
        }, {
            'type': 'pneumaticcraft:thermo_plant',
            'exothermic': true,
            'fluid_input': {
                'type': 'pneumaticcraft:fluid',
                'amount': 100,
                'tag': 'pneumaticcraft:yeast_culture'
            },
            'fluid_output': {
                'amount': 50,
                'fluid': unified_individual
            },
            'item_input': {
                'item': 'minecraft:sugar'
            },
            'speed': 0.5,
            'temperature': {
                'max_temp': 333,
                'min_temp': 303
            }
        }, {
            'type': 'pneumaticcraft:thermo_plant',
            'exothermic': true,
            'fluid_input': {
                'type': 'pneumaticcraft:fluid',
                'amount': 100,
                'tag': 'pneumaticcraft:yeast_culture'
            },
            'fluid_output': {
                'amount': 25,
                'fluid': unified_individual
            },
            'item_input': {
                'tag': 'forge:crops/potato'
            },
            'speed': 0.25,
            'temperature': {
                'max_temp': 333,
                'min_temp': 303
            }
        }, {
            'type': 'pneumaticcraft:thermo_plant',
            'exothermic': true,
            'fluid_input': {
                'type': 'pneumaticcraft:fluid',
                'amount': 100,
                'tag': 'pneumaticcraft:yeast_culture'
            },
            'fluid_output': {
                'amount': 50,
                'fluid': unified_individual
            },
            'item_input': {
                'item': 'minecraft:poisonous_potato'
            },
            'speed': 0.25,
            'temperature': {
                'max_temp': 333,
                'min_temp': 303
            }
        }, {
            'type': 'pneumaticcraft:thermo_plant',
            'exothermic': true,
            'fluid_input': {
                'type': 'pneumaticcraft:fluid',
                'amount': 100,
                'tag': 'pneumaticcraft:yeast_culture'
            },
            'fluid_output': {
                'amount': 10,
                'fluid': unified_individual
            },
            'item_input': {
                'item': 'minecraft:melon_slice'
            },
            'speed': 0.4,
            'temperature': {
                'max_temp': 333,
                'min_temp': 303
            }
        }, {
            'type': 'pneumaticcraft:thermo_plant',
            'exothermic': true,
            'fluid_input': {
                'type': 'pneumaticcraft:fluid',
                'amount': 100,
                'tag': 'pneumaticcraft:yeast_culture'
            },
            'fluid_output': {
                'amount': 50,
                'fluid': unified_individual
            },
            'item_input': {
                'item': 'minecraft:apple'
            },
            'speed': 0.25,
            'temperature': {
                'max_temp': 333,
                'min_temp': 303
            }
        }
    ]

    //Other Recipe Types
    

    //Unify Items Function Push
    unify_items (
        event,
        unified_individual,
        unified_variants,
        output_recipe_types,
        input_recipe_types,
        custom_recipe_types
    )
})