//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'immersiveengineering:plantoil'
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
            'burnTime': 4800
        }, {
            'type': 'create:mixing',
            'ingredients': [{
                'tag': 'forge:crops'
                }, {
                'tag': 'forge:crops'
                }, {
                'fluid': unified_individual,
                'amount': 100
                }
            ],
            'results': [{
                'item': 'createaddition:biomass',
                'count': 1
            }],
            'heatRequirement': 'heated'
        }, {
            'type': 'create:mixing',
            'ingredients': [{
                    'tag': 'minecraft:flowers'
                }, {
                    'tag': 'minecraft:flowers'
                }, {
                    'tag': 'minecraft:flowers'
                }, {
                    'tag': 'minecraft:flowers'
                }, {
                    'tag': 'minecraft:flowers'
                }, {
                    'tag': 'minecraft:flowers'
                }, {
                    'tag': 'minecraft:flowers'
                }, {
                    'tag': 'minecraft:flowers'
                }, {
                    'fluid': unified_individual,
                    'amount': 100
                }
            ],
            'results': [{
                'item': 'createaddition:biomass',
                'count': 1
            }],
            'heatRequirement': 'heated'
        }, {
            'type': 'create:mixing',
            'ingredients': [{
                    'item': 'minecraft:honeycomb'
                }, {
                    'fluid': unified_individual,
                    'amount': 100
                }
            ],
            'results': [{
                'item': 'createaddition:biomass',
                'count': 1
            }],
            'heatRequirement': 'heated'
        }, {
            'type': 'create:mixing',
            'ingredients': [{
                    'tag': 'minecraft:leaves'
                }, {
                    'tag': 'minecraft:leaves'
                }, {
                    'tag': 'minecraft:leaves'
                }, {
                    'fluid': unified_individual,
                    'amount': 100
                }
            ],
            'results': [{
                'item': 'createaddition:biomass',
                'count': 1
            }],
            'heatRequirement': 'heated'
        }, {
            'type': 'create:mixing',
            'ingredients': [{
                    'tag': 'createaddition:plants'
                }, {
                    'tag': 'createaddition:plants'
                }, {
                    'tag': 'createaddition:plants'
                }, {
                    'fluid': unified_individual,
                    'amount': 100
                }
            ],
            'results': [{
                'item': 'createaddition:biomass',
                'count': 1
            }],
            'heatRequirement': 'heated'
        }, {
            'type': 'pneumaticcraft:thermo_plant',
            'exothermic': false,
            'fluid_output': {
                'amount': 20,
                'fluid': unified_individual
            },
            'item_input': {
                'tag': 'forge:crops'
            },
            'pressure': 2.0,
            'speed': 0.5
        }, {
            'type': 'pneumaticcraft:thermo_plant',
            'exothermic': false,
            'fluid_output': {
                'amount': 50,
                'fluid': unified_individual
            },
            'item_input': {
                'tag': 'forge:seeds'
            },
            'pressure': 2.0,
            'speed': 0.5
        }, {
            'type': 'pneumaticcraft:thermo_plant',
            'exothermic': false,
            'fluid_input': {
                'type': 'pneumaticcraft:fluid',
                'amount': 100,
                'fluid': unified_individual
            },
            'item_input': {
                'tag': 'forge:crops/potato'
            },
            'item_output': {
                'count': 4,
                'item': 'pneumaticcraft:chips'
            },
            'temperature': {
                'min_temp': 423
            }
        }, {
            'type': 'pneumaticcraft:thermo_plant',
            'exothermic': false,
            'fluid_input': {
                'type': 'pneumaticcraft:fluid',
                'amount': 100,
                'fluid': unified_individual
            },
            'item_input': {
                'item': 'pneumaticcraft:raw_salmon_tempura'
            },
            'item_output': {
                'item': 'pneumaticcraft:salmon_tempura'
            },
            'temperature': {
                'min_temp': 423
            }
        }
    ]

    //Other Recipe Types
    event.remove({input: '#c:seeds', type: 'create:compacting'})

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