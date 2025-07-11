//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Event
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'tfmg:lpg'
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
            'type': 'pneumaticcraft:amadron',
            'id': 'pneumaticcraft:amadron/lpg_to_emerald',
            'input': {
                'type': 'FLUID',
                'amount': 1000,
                'id': unified_individual
            },
            'level': 0,
            'output': {
                'type': 'ITEM',
                'amount': 1,
                'id': 'minecraft:emerald'
            },
            'static': true
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
                'item': 'minecraft:coal'
            },
            'temperature': {
                'min_temp': 373
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