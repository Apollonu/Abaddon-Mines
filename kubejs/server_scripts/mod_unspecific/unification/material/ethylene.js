//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'mekanism:ethene',
        fluid_unified_variants: [
            '"fluid":"tfmg:ethylene"'
        ],
        fluid_recipe_types: [
            'create:mixing',
            'tfmg:vat_machine_recipe'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})