//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Event
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'thermal:heavy_oil'
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
            'type': 'tfmg:distillation',
            'ingredients': [{
                'amount': 340,
                'fluid': 'tfmg:crude_oil',
                'nbt': {}
            }],
            'results': [{
                    'amount': 120,
                    'fluid': unified_individual
                }, {
                    'amount': 60,
                    'fluid': 'tfmg:diesel'
                }, {
                    'amount': 30,
                    'fluid': 'tfmg:kerosene'
                }, {
                    'amount': 10,
                    'fluid': 'tfmg:naphtha'
                }, {
                    'amount': 60,
                    'fluid': 'tfmg:gasoline'
                }, {
                    'amount': 60,
                    'fluid': 'tfmg:lpg'
                }
            ]
        }, {
            'type': 'tfmg:distillation',
            'ingredients': [{
                'amount': 200,
                'fluid': 'tfmg:crude_oil',
                'nbt': {}
            }],
            'results': [{
                    'amount': 150,
                    'fluid': unified_individual
                }, {
                    'amount': 45,
                    'fluid': 'tfmg:diesel'
                }, {
                    'amount': 5,
                    'fluid': 'tfmg:gasoline'
                }
            ]
        }, {
            'type': 'tfmg:distillation',
            'ingredients': [{
                'amount': 330,
                'fluid': 'tfmg:crude_oil',
                'nbt': {}
            }],
            'results': [{
                    'amount': 120,
                    'fluid': unified_individual
                }, {
                    'amount': 60,
                    'fluid': 'tfmg:diesel'
                }, {
                    'amount': 30,
                    'fluid': 'tfmg:kerosene'
                }, {
                    'amount': 60,
                    'fluid': 'tfmg:gasoline'
                }, {
                    'amount': 60,
                    'fluid': 'tfmg:lpg'
                }
            ]
        }, {
            'type': 'tfmg:distillation',
            'ingredients': [{
                'amount': 200,
                'fluid': unified_individual,
                'nbt': {}
            }],
            'results': [{
                    'amount': 100,
                    'fluid': unified_individual
                }, {
                    'amount': 25,
                    'fluid': 'tfmg:lubrication_oil'
                }, {
                    'amount': 50,
                    'fluid': 'tfmg:diesel'
                }, {
                    'amount': 20,
                    'fluid': 'tfmg:kerosene'
                }, {
                    'amount': 5,
                    'fluid': 'tfmg:naphtha'
                }
            ]
        }, {
            'type': 'tfmg:distillation',
            'ingredients': [{
                'amount': 200,
                'fluid': unified_individual,
                'nbt': {}
            }],
            'results': [{
                    'amount': 100,
                    'fluid': unified_individual
                }, {
                    'amount': 50,
                    'fluid': 'tfmg:diesel'
                }, {
                    'amount': 50,
                    'fluid': 'tfmg:lubrication_oil'
                }
            ]
        }, {
            'type': 'tfmg:distillation',
            'ingredients': [{
                'amount': 200,
                'fluid': unified_individual,
                'nbt': {}
            }],
            'results': [{
                    'amount': 100,
                    'fluid': unified_individual
                }, {
                    'amount': 30,
                    'fluid': 'tfmg:lubrication_oil'
                }, {
                    'amount': 50,
                    'fluid': 'tfmg:diesel'
                }, {
                    'amount': 20,
                    'fluid': 'tfmg:kerosene'
                }
            ]
        }, {
            'type': 'tfmg:vat_machine_recipe',
            'allowedVatTypes': [
                'tfmg:steel_vat',
                'tfmg:firebrick_lined_vat'
            ],
            'heatRequirement': 'heated',
            'ingredients': [{
                    'item': 'tfmg:sulfur_dust'
                }, {
                    'amount': 250,
                    'fluid': unified_individual,
                    'nbt': {}
                }
            ],
            'machines': ['tfmg:mixing'],
            'minSize': 1,
            'results': [{
                'item': 'tfmg:rubber_sheet'
            }]
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