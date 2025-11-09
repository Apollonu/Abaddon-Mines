//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'immersiveengineering:coal_coke'
    let unified_variants = [
        'thermal:coal_coke'
    ]

    //Output Recipe Types
    let output_recipe_types = [
        'thermal:press',
        'thermal:pyrolyzer'
    ]

    //Input Recipe Types
    let input_recipe_types = [
        
    ]

    //Custom Recipe Types
    let custom_recipe_types = [
        {
            'type': 'tfmg:coking',
            'ingredients': [{'item': 'minecraft:coal'}],
            'processingTime': 1200,
            'results': [{
                'item': 'immersiveengineering:coal_coke'
                }, {
                'amount': 1,
                'fluid': 'tfmg:creosote'
                }, {
                'amount': 30,
                'fluid': 'tfmg:carbon_dioxide'
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

//Block Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'immersiveengineering:coke'
    let unified_variants = [
        'thermal:coal_coke_block'
    ]

    //Output Recipe Types
    let output_recipe_types = [
        'thermal:press'
    ]

    //Input Recipe Types
    let input_recipe_types = [
        'thermal:press'
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

//Dust Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'tfmg:coal_coke_dust'
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

    ]

    //Other Recipe Types
    event.recipes.create.crushing('9x ' + unified_individual, '#forge:storage_blocks/coal_coke')
    event.recipes.create.crushing(unified_individual, '#forge:coal_coke')

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