//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Dust Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'thermal:emerald_dust'
    let unified_variants = [
        'mekanism:dust_emerald'
    ]

    //Output Recipe Types
    let output_recipe_types = [
        'mekanism:crushing'
    ]

    //Input Recipe Types
    let input_recipe_types = [
        
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

//Nugget Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'spelunkery:emerald_shard'
    let unified_variants = [

    ]

    //Output Recipe Types
    let output_recipe_types = [

    ]

    //Input Recipe Types
    let input_recipe_types = [
        
    ]

    //Custom Recipe Types
    let custom_recipe_types = [

    ]

    //Other Recipe Types
    event.remove({output: '#forge:gems/emerald', input: unified_individual, type: 'minecraft:crafting_shaped'})
    event.shaped('#forge:gems/emerald', ['AAA','AAA','AAA'], {A: unified_individual})

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