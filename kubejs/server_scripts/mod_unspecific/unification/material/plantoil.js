//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'immersiveengineering:plantoil',
        is_liquid: true,
        json_unified_variants: [
            '"fluid":"pneumaticcraft:vegetable_oil"',
            '"fluidTag":"forge:plantoil"',
            '"input":{"fluidTag":"forge:plantoil"',
            '"tag":"forge:plantoil"'
        ],
        json_recipe_types: [
            'create:mixing',
            'createaddition:liquid_burning',
            'pneumaticcraft:fluid_mixer',
            'pneumaticcraft:thermo_plant'
        ]
    }

    //Other Recipe Types
    event.remove({input: '#c:seeds', type: 'create:compacting'})

    //Unify Items Function Push
    unify_items (
        data
    )
})