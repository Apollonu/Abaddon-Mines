//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Event
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'immersiveengineering:biodiesel'
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
            'type': 'createaddition:liquid_burning',
            'input': {
                'fluid': unified_individual,
                'amount': 1000
            },
            'burnTime': 24000,
            'superheated': true
        }, {
            'type': 'pneumaticcraft:thermo_plant',
            'exothermic': false,
            'fluid_input': {
                'type': 'pneumaticcraft:fluid',
                'amount': 100,
                'fluid': unified_individual
            },
            'fluid_output': {
                'amount': 1000,
                'fluid': 'pneumaticcraft:plastic'
            },
            'item_input': {
                'item': 'minecraft:charcoal'
            },
            'temperature': {
                'min_temp': 373
            }
        }, {
            'type': 'pneumaticcraft:thermo_plant',
            'exothermic': false,
            'fluid_input': {
                'type': 'pneumaticcraft:fluid',
                'amount': 1000,
                'fluid': unified_individual
            },
            'fluid_output': {
                'amount': 1000,
                'fluid': 'tfmg:lubrication_oil'
            },
            'item_input': {
                'tag': 'forge:dusts/redstone'
            },
            'temperature': {
                'min_temp': 373
            }
        }, {
            'type': 'pneumaticcraft:fluid_mixer',
            'fluid_output': {
                'amount': 50,
                'fluid': unified_individual
            },
            'input1': {
                'type': 'pneumaticcraft:fluid',
                'amount': 25,
                'fluid': 'immersiveengineering:plantoil'
            },
            'input2': {
                'type': 'pneumaticcraft:fluid',
                'amount': 25,
                'fluid': 'immersiveengineering:ethanol'
            },
            'item_output': {
                'item': 'pneumaticcraft:glycerol'
            },
            'pressure': 2.0,
            'time': 300
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