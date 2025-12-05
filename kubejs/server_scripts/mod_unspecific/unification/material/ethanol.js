//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'immersiveengineering:ethanol',
        is_liquid: true,
        json_unified_variants: [
            '"fluid":"pneumaticcraft:ethanol"',
            '"input":{"fluidTag":"forge:ethanol"',
            '"tag":"forge:ethanol"',
        ],
        json_recipe_types: [
            'createaddition:liquid_burning',
            'pneumaticcraft:fluid_mixer',
            'pneumaticcraft:thermo_plant'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})