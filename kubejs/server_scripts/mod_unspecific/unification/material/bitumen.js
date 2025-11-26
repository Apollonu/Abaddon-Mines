//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'immersivepetroleum:bitumen',
        unified_variants: [
            'tfmg:bitumen',
            'thermal:bitumen'
        ],
        output_recipe_types: [
            'minecraft:crafting_shapeless',
            'thermal:centrifuge',
            'thermal:press',
            'thermal:refinery'
        ],
        input_recipe_types: [
            'create:mixing',
            'minecraft:crafting_shaped',
            'thermal:press',
            'thermal:pyrolyzer'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})