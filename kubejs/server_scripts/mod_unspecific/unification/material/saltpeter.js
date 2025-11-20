//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Dust Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'spelunkery:saltpeter',
        unified_variants: [
            'tfmg:nitrate_dust',
            'thermal:niter_dust'
        ],
        output_recipe_types: [
            'create:crushing',
            'minecraft:crafting_shapeless',
            'thermal:pulverizer'
        ],
        input_recipe_types: [
            'create:mixing',
            'thermal:crystallizer'
        ]
    }

    //Other Recipe Types
    event.remove({output: 'thermal:phytogro'})

    //Unify Items Function Push
    unify_items (
        data
    )
})