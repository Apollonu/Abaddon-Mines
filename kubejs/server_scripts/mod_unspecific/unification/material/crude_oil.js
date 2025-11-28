//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: [
            'immersivepetroleum:crudeoil'
        ],
        fluid_unified_variants: [
            '"fluid":"thermal:crude_oil"',
            '"fluid_tag":"forge:crude_oil"',
            '"id":"pneumaticcraft:oil"',
            '"input":{"fluidTag":"forge:crude_oil"',
            '"tag":"forge:crude_oil"'
        ],
        fluid_recipe_types: [
            'createaddition:liquid_burning',
            'pneumaticcraft:amadron',
            'pneumaticcraft:refinery',
            'thermal:centrifuge',
            'thermal:refinery'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})