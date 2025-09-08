//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Event
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