//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Dust Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'spelunkery:sulfur'
    let unified_variants = [
        'mekanism:dust_sulfur',
        'tfmg:sulfur_dust',
        'thermal:sulfur_dust'
    ]

    //Output Recipe Types
    let output_recipe_types = [
        'create:crushing',
        'create:milling',
        'mekanism:enriching',
        'mekanism:injecting',
        'minecraft:crafting_shapeless',
        'thermal:pulverizer',
        'thermal:refinery'
    ]

    //Input Recipe Types
    let input_recipe_types = [
        'create:mixing'
    ]

    //Custom Recipe Types
    let custom_recipe_types = [

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

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'mekanism:sulfuric_acid'
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
            'type': 'tfmg:vat_machine_recipe',
            'allowedVatTypes': [
                'tfmg:steel_vat',
                'tfmg:firebrick_lined_vat'
            ],
            'ingredients': [{
                'tag': 'forge:dusts/sulfur'
                }, {
                'tag': 'forge:dusts/sulfur'
                }, {
                'tag': 'forge:dusts/sulfur'
                }, {
                'item': 'spelunkery:saltpeter'
                }, {
                'amount': 1000,
                'fluid': 'minecraft:water',
                'nbt': {}
            }],
            'machines': ['tfmg:mixing'],
            'minSize': 1,
            'results': [{
                'amount': 500,
                'fluid': unified_individual
            }]
        }, {
        'type': 'create:mixing',
        'ingredients': [
            {'item': 'minecraft:copper_ingot'},
            {
                'amount': 500,
                'fluid': unified_individual,
                'nbt': {}
            }
        ],
        'results': [{'item': 'tfmg:copper_sulfate'}]
        }, {
            'type': 'tfmg:vat_machine_recipe',
            'allowedVatTypes': [
                'tfmg:steel_vat',
                'tfmg:cast_iron_vat',
                'tfmg:firebrick_lined_vat'
            ],
            'ingredients': [
                {'item': 'tfmg:coated_circuit_board'},
                {
                    'amount': 250,
                    'fluid': unified_individual,
                    'nbt': {}
                }
            ],
            'machines': [],
            'minSize': 1,
            'processingTime': 100,
            'results': [{'item': 'tfmg:etched_circuit_board'}]
        }, {
            'type': 'vintage:pressurizing',
            'secondaryFluidInput': 1,
            'ingredients': [ {
                    'fluid': 'mekanism:sulfur_trioxide',
                    'amount': 1000
                }, {
                    'fluid': 'minecraft:water',
                    'amount': 1000
                }
            ],
            'results': [{
                'fluid': unified_individual,
                'amount': 1000
            }],
            'processingTime': 600
        }, {
            'type': 'vintage:pressurizing',
            'ingredients': [ {
                    'fluid': unified_individual,
                    'amount': 200
                }, {
                    'fluid': 'minecraft:water',
                    'amount': 200
                },
                {'tag': 'forge:ingots/copper'}
            ],
            'results': [{'item': 'tfmg:copper_sulfate'}],
            'processingTime': 800
        }, {
            'type': 'vintage:pressurizing',
            'secondaryFluidOutput': 0,
            'heatRequirement': 'heated',
            'ingredients': [ {
                    'fluid': 'mekanism:sulfur_dioxide',
                    'amount': 250
                },
                {'tag': 'forge:nuggets/vanadium'}
            ],
            'results': [{
                'fluid': 'mekanism:sulfur_trioxide',
                'amount': 250
            }],
            'processingTime': 400
        }, {
            'type': 'vintage:pressurizing',
            'secondaryFluidOutput': 0,
            'heatRequirement': 'superheated',
            'ingredients': [{
                    'fluid': 'mekanism:sulfur_dioxide',
                    'amount': 250
                },
                {'tag': 'forge:nuggets/iron'}
            ],
            'results': [{
                'fluid': 'mekanism:sulfur_trioxide',
                'amount': 250
            }],
            'processingTime': 400
        }, {
            'type': 'vintage:pressurizing',
            'secondaryFluidOutput': 0,
            'heatRequirement': 'heated',
            'ingredients': [{'tag': 'forge:gems/sulfur'}],
            'results': [{
                'fluid': 'mekanism:sulfur_dioxide',
                'amount': 1000
            }],
            'processingTime': 600
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

//Gem Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'thermal:sulfur'
    let unified_variants = [
        'vintage:sulfur'
    ]

    //Output Recipe Types
    let output_recipe_types = [
        'minecraft:crafting_shaped'
    ]

    //Input Recipe Types
    let input_recipe_types = [
        'create:crushing',
        'create:milling'
    ]

    //Custom Recipe Types
    let custom_recipe_types = [

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