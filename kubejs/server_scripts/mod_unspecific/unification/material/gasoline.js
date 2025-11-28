//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: [
            'immersivepetroleum:gasoline'
        ],
        fluid_unified_variants: [
            '"id":"pneumaticcraft:gasoline"',
            '"input":{"fluidTag":"forge:gasoline"',
            '"tag":"forge:gasoline"'
        ],
        fluid_recipe_types: [
            'createaddition:liquid_burning',
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