//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'immersiveengineering:biodiesel',
        fluid_unified_variants: [
            '"fluid":"pneumaticcraft:biodiesel"',
            '"input":{"fluidTag":"forge:biodiesel"',
            '"tag":"forge:biodiesel"',
        ],
        fluid_recipe_types: [
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