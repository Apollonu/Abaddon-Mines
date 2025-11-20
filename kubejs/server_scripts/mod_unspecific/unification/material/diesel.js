//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: [
            'tfmg:diesel'
        ],
        fluid_unified_variants: [
            '"fluid":"pneumaticcraft:diesel"',
            '"id":"pneumaticcraft:diesel"',
            '"input":{"fluidTag":"forge:diesel"',
            '"tag":"forge:diesel"'
        ],
        fluid_recipe_types: [
            'createaddition:liquid_burning',
            'pneumaticcraft:amadron',
            'pneumaticcraft:refinery',
            'pneumaticcraft:thermo_plant'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})