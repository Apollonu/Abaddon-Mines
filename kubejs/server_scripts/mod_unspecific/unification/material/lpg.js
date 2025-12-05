//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'tfmg:lpg',
        is_liquid: true,
        json_unified_variants: [
            '"id":"pneumaticcraft:lpg"',
            '"tag":"forge:lpg"'
        ],
        json_recipe_types: [
            'pneumaticcraft:amadron',
            'pneumaticcraft:thermo_plant'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})