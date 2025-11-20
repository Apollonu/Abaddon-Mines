//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: [
            'industrialforegoing:biofuel'
        ],
        fluid_unified_variants: [
            '"fluid":"createaddition:bioethanol"',
            '"input":{"fluidTag":"forge:biofuel"'
        ],
        fluid_recipe_types: [
            'create:mixing',
            'createaddition:liquid_burning'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})