//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'immersivepetroleum:lubricant',
        fluid_unified_variants: [
            '"fluid":"pneumaticcraft:lubricant"',
            '"id":"pneumaticcraft:lubricant"',
            '"tag":"forge:lubricant"'
        ],
        fluid_recipe_types: [
            'minecraft:crafting_shaped',
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