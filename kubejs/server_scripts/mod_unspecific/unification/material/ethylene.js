//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'mekanism:ethene'
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
            'heatRequirement': 'heated',
            'ingredients': [{
                'amount': 500,
                'fluid': 'tfmg:naphtha',
                'nbt': {}
            }],
            'machines': [
                'tfmg:mixing'
            ],
            'minSize': 1,
            'results': [{
                'amount': 250,
                'fluid': unified_individual
            },
            {
                'amount': 250,
                'fluid': 'tfmg:propylene'
            }]
        }, {
            'type': 'create:mixing',
            'ingredients': [{
                'amount': 250,
                'fluid': 'minecraft:water',
                'nbt': {}
            }, {
                'amount': 1000,
                'fluid': unified_individual,
                'nbt': {}
            }],
            'results': [{
                'amount': 250,
                'fluid': 'tfmg:cooling_fluid'
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