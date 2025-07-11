//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Event
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'tfmg:kerosene'
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
            'type': 'ad_astra:refining',
            'cookingtime': 1,
            'energy': 30,
            'input': {
                'ingredient': {
                    'fluid': unified_individual
                },
                'millibuckets': 5
            },
            'result': {
                'fluid': 'ad_astra:fuel',
                'millibuckets': 5
            }
        }, {
            'type': 'pneumaticcraft:amadron',
            'id': 'pneumaticcraft:amadron/kerosene_to_emerald',
            'input': {
                'type': 'FLUID',
                'amount': 3000,
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
                'amount': 80,
                'fluid': 'tfmg:gasoline'
            },
            'pressure': 2.0,
            'temperature': {
                'min_temp': 573
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