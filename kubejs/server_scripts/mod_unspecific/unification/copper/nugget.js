//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Event
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'spelunkery:copper_nugget'
    let unified_variants = [
        'create:copper_nugget',
        'thermal:copper_nugget'
    ]

    //Output Recipe Types
    let output_recipe_types = [
        'create:splashing',
        'thermal:press',
        'thermal:smelter'
    ]

    //Input Recipe Types
    let input_recipe_types = [
        'create:mixing',
        'minecraft:crafting_shaped'
    ]

    //Custom Recipe Types
    let custom_recipe_types = [

    ]

    //Other Recipe Types
    event.remove({output: '#forge:ingots/copper', input: unified_individual, type: 'minecraft:crafting_shaped'})
    event.shapeless('9x #forge:nuggets/copper', ['#forge:ingots/copper'])

    //Unify Items Function Push
    unify_items (
        event,
        unified_individual,
        unified_variants,
        output_recipe_types,
        input_recipe_types,
        custom_recipe_types
    )
})