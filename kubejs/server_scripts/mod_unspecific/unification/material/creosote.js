//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'immersiveengineering:creosote',
        fluid_unified_variants: [
            '"fluid":"tfmg:creosote"',
            '"fluid":"thermal:creosote"',
            '"input":{"fluidTag":"forge:creosote"',
        ],
        fluid_recipe_types: [
            'createaddition:liquid_burning',
            'tfmg:coking',
            'thermal:pyrolyzer'
        ]
    }

    //Other Recipe Types
    event.remove({output: 'tfmg:hardened_planks'})
    event.recipes.create.mixing('tfmg:hardened_planks', [
        '#minecraft:planks',
        Fluid.of('immersiveengineering:creosote', 125)
    ]).heated()

    //Unify Items Function Push
    unify_items (
        data
    )
})