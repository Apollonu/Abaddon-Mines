//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: [
            'thermal:heavy_oil'
        ],
        fluid_unified_variants: [
            '"fluid":"tfmg:heavy_oil"'
        ],
        fluid_recipe_types: [
            'tfmg:distillation'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})