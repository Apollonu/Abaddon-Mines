//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Event
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'spelunkery:sulfur'
    let unified_variants = [
        'mekanism:dust_sulfur',
        'tfmg:sulfur_dust',
        'thermal:sulfur_dust'
    ]

    //Output Recipe Types
    let output_recipe_types = [
        'create:crushing',
        'create:milling',
        'mekanism:enriching',
        'mekanism:injecting',
        'minecraft:crafting_shapeless',
        'thermal:pulverizer',
        'thermal:refinery'
    ]

    //Input Recipe Types
    let input_recipe_types = [
        'create:mixing'
    ]

    //Custom Recipe Types
    let custom_recipe_types = [

    ]

    //Other Recipe Types
    

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