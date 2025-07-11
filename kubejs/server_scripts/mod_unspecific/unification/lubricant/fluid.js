//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Event
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'tfmg:lubrication_oil'
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
            'id': 'pneumaticcraft:amadron/emerald_to_lubricant',
            'input': {
                'type': 'ITEM',
                'amount': 5,
                'id': 'minecraft:emerald'
            },
            'level': 0,
            'output': {
                'type': 'FLUID',
                'amount': 1000,
                'id': unified_individual
            },
            'static': true
        }, {
            'type': 'pneumaticcraft:amadron',
            'id': 'pneumaticcraft:amadron/lubricant_to_emerald',
            'input': {
                'type': 'FLUID',
                'amount': 2500,
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
            'air_use_multiplier': 5.0,
            'exothermic': false,
            'fluid_input': {
                'type': 'pneumaticcraft:fluid',
                'amount': 4000,
                'fluid': unified_individual
            },
            'item_input': {
                'tag': 'forge:ingots/compressed_iron'
            },
            'item_output': {
                'item': 'pneumaticcraft:drill_bit_compressed_iron'
            },
            'pressure': 4.0,
            'speed': 0.25,
            'temperature': {
                'min_temp': 573
            }
        }, {
            'type': 'pneumaticcraft:thermo_plant',
            'air_use_multiplier': 10.0,
            'exothermic': false,
            'fluid_input': {
                'type': 'pneumaticcraft:fluid',
                'amount': 8000,
                'fluid': unified_individual
            },
            'item_input': {
                'tag': 'forge:storage_blocks/diamond'
            },
            'item_output': {
                'item': 'pneumaticcraft:drill_bit_diamond'
            },
            'pressure': 7.5,
            'speed': 0.1,
            'temperature': {
                'min_temp': 773
            }
        }, {
            'type': 'pneumaticcraft:thermo_plant',
            'air_use_multiplier': 2.0,
            'exothermic': false,
            'fluid_input': {
                'type': 'pneumaticcraft:fluid',
                'amount': 2000,
                'fluid': unified_individual
            },
            'item_input': {
                'tag': 'forge:ingots/iron'
            },
            'item_output': {
                'item': 'pneumaticcraft:drill_bit_iron'
            },
            'pressure': 3.0,
            'speed': 0.5
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