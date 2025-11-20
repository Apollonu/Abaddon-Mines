//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: [
            'tfmg:gasoline'
        ],
        fluid_unified_variants: [
            '"fluid":"pneumaticcraft:gasoline"',
            '"id":"pneumaticcraft:gasoline"',
            '"input":{"fluidTag":"forge:gasoline"',
            '"tag":"forge:gasoline"'
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