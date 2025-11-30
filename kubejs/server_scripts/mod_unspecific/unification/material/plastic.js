//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'pneumaticcraft:plastic',
        unified_variants: [
            'industrialforegoing:plastic',
            'tfmg:plastic_sheet'
        ],
        output_recipe_types: [
            'minecraft:crafting_shapeless',
            'minecraft:smelting',
            'thermal:furnace'
        ],
        input_recipe_types: [
            'create:sequenced_assembly',
            'minecraft:crafting_shaped',
            'minecraft:crafting_shapeless'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'pneumaticcraft:plastic',
        fluid_unified_variants: [
            '"fluid":"tfmg:molten_plastic"'
        ],
        fluid_recipe_types: [
            'tfmg:vat_machine_recipe'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})