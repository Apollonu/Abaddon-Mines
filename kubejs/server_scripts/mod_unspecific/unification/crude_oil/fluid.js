//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Event
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'tfmg:crude_oil'
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
                'fluid': 'tfmg:crude_oil',
                'amount': 1000
            },
            'burnTime': 9600
        }, {
            'type': 'forge:conditional',
            'recipes': [{
                'conditions': [{
                    'type': 'forge:mod_loaded',
                    'modid': 'tfmg'
                }],
                'recipe': {
                    'type': 'industrialforegoing:laser_drill_fluid',
                    'catalyst': {'item': 'industrialforegoing:laser_lens15'},
                    'entity': 'minecraft:empty',
                    'output': '{Amount:50,FluidName:\'tfmg:crude_oil\'}',
                    'pointer': 0,
                    'rarity': [{
                        'blacklist': {},
                        'depth_max': 60,
                        'depth_min': 20,
                        'weight': 8,
                        'whitelist': {
                            'type': 'minecraft:worldgen/biome',
                            'values': [
                                'minecraft:desert',
                                'minecraft:ocean',
                                'minecraft:cold_ocean',
                                'minecraft:deep_cold_ocean',
                                'minecraft:deep_frozen_ocean',
                                'minecraft:deep_lukewarm_ocean',
                                'minecraft:warm_ocean'
                            ]
                        }
                    }]
                }
            }]
        }, {
            'type': 'thermal:centrifuge',
            'ingredient': {'item': 'thermal:oil_red_sand'},
            'result': [{
                    'item': 'minecraft:red_sand',
                    'chance': 0.75,
                    'locked': true
                }, {
                    'item': 'thermal:bitumen',
                    'chance': 1.5
                }, {
                    'item': 'thermal:tar',
                    'chance': 1.0
                }, {
                    'fluid': unified_individual,
                    'amount': 100
                }
            ],
            'energy': 20000,
            'experience': 1.0
        }, {
            'type': 'thermal:centrifuge',
            'ingredient': {'item': 'thermal:oil_sand'},
            'result': [{
                    'item': 'minecraft:sand',
                    'chance': 0.75,
                    'locked': true
                }, {
                    'item': 'thermal:bitumen',
                    'chance': 1.5
                }, {
                    'item': 'thermal:tar',
                    'chance': 1.0
                }, {
                    'fluid': unified_individual,
                    'amount': 100
                }
            ],
            'energy': 20000,
            'experience': 1.0
        }, {
            'type': 'thermal:refinery',
            'ingredient': {
                'fluid': unified_individual,
                'amount': 100
            },
            'result': [{
                    'fluid': 'thermal:heavy_oil',
                    'amount': 40
                }, {
                    'fluid': 'thermal:light_oil',
                    'amount': 60
                }, {
                    'item': 'thermal:bitumen',
                    'chance': 0.10
                }
            ],
            'energy': 6000,
            'experience': 0.2
        }, {
            'type': 'thermal:centrifuge',
            'ingredient': {'item': 'thermal_and_space:oil_mars_sand'},
            'result': [{
                    'item': 'ad_astra:mars_sand',
                    'chance': 0.75,
                    'locked': true
                }, {
                    'item': 'thermal:bitumen',
                    'chance': 1.5
                }, {
                    'item': 'thermal:tar',
                    'chance': 1.0
                }, {
                    'fluid': unified_individual,
                    'amount': 100
                }
            ],
            'energy': 20000
        }, {
            'type': 'thermal:centrifuge',
            'ingredient': {'item': 'thermal_and_space:oil_moon_sand'},
            'result': [{
                    'item': 'ad_astra:moon_sand',
                    'chance': 0.75,
                    'locked': true
                }, {
                    'item': 'thermal:bitumen',
                    'chance': 1.5
                }, {
                    'item': 'thermal:tar',
                    'chance': 1.0
                }, {
                    'fluid': unified_individual,
                    'amount': 100
                }
            ],
            'energy': 20000
        }, {
            'type': 'thermal:centrifuge',
            'ingredient': {'item': 'thermal_and_space:oil_venus_sand'},
            'result': [{
                    'item': 'ad_astra:venus_sand',
                    'chance': 0.75,
                    'locked': true
                }, {
                    'item': 'thermal:bitumen',
                    'chance': 1.5
                }, {
                    'item': 'thermal:tar',
                    'chance': 1.0
                }, {
                    'fluid': unified_individual,
                    'amount': 100
                }
            ],
            'energy': 20000
        }, {
            'type': 'pneumaticcraft:amadron',
            'id': 'pneumaticcraft:amadron/emerald_to_oil',
            'input': {
                'type': 'ITEM',
                'amount': 1,
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
            'id': 'pneumaticcraft:amadron/oil_to_emerald',
            'input': {
                'type': 'FLUID',
                'amount': 5000,
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
            'type': 'pneumaticcraft:refinery',
            'input': {
                'type': 'pneumaticcraft:fluid',
                'amount': 10,
                'fluid': unified_individual
            },
            'results': [{
                    'amount': 4,
                    'fluid': 'tfmg:diesel'
                }, {
                    'amount': 2,
                    'fluid': 'tfmg:lpg'
                }
            ],
            'temperature': {
                'min_temp': 373
            }
        }, {
            'type': 'pneumaticcraft:refinery',
            'input': {
                'type': 'pneumaticcraft:fluid',
                'amount': 10,
                'fluid': unified_individual
            },
            'results': [{
                    'amount': 2,
                    'fluid': 'tfmg:diesel'
                }, {
                    'amount': 3,
                    'fluid': 'tfmg:kerosene'
                }, {
                    'amount': 2,
                    'fluid': 'tfmg:lpg'
                }
            ],
            'temperature': {
                'min_temp': 373
            }
        }, {
            'type': 'pneumaticcraft:refinery',
            'input': {
                'type': 'pneumaticcraft:fluid',
                'amount': 10,
                'fluid': unified_individual
            },
            'results': [{
                    'amount': 2,
                    'fluid': 'tfmg:diesel'
                }, {
                    'amount': 3,
                    'fluid': 'tfmg:kerosene'
                }, {
                    'amount': 3,
                    'fluid': 'tfmg:gasoline'
                }, {
                    'amount': 2,
                    'fluid': 'tfmg:lpg'
                }
            ],
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