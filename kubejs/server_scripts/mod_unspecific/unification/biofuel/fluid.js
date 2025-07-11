//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Event
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'industrialforegoing:biofuel'
    let unified_variants = [

    ]

    //Output Recipe Types
    let output_recipe_types = [

    ]

    //Input Recipe Types
    let input_recipe_types = [

    ]

    //Other Recipe Types
    event.recipes.create.mixing(Fluid.of(unified_individual, 125), [
        'minecraft:sugar',
        'create:cinder_flour',
        '2x createaddition:biomass'
    ])

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