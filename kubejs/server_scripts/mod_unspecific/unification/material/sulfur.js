//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Dust Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'spelunkery:sulfur',
        unified_variants: [
            'mekanism:dust_sulfur',
            'tfmg:sulfur_dust',
            'thermal:sulfur_dust'
        ],
        output_recipe_types: [
            'create:crushing',
            'create:milling',
            'mekanism:enriching',
            'mekanism:injecting',
            'minecraft:crafting_shapeless',
            'thermal:pulverizer',
            'thermal:refinery'
        ],
        input_recipe_types: [
            'create:mixing'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})

//Fluid Acid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: [
            'mekanism:sulfuric_acid'
        ],
        fluid_unified_variants: [
            '"fluid":"vintage:sulfuric_acid"'
        ],
        fluid_recipe_types: [
            'vintage:pressurizing'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})

//Fluid Dioxide Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: [
            'mekanism:sulfur_dioxide'
        ],
        fluid_unified_variants: [
            '"fluid":"vintage:sulfur_dioxide"'
        ],
        fluid_recipe_types: [
            'vintage:pressurizing'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})

//Fluid Trioxide Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: [
            'mekanism:sulfur_trioxide'
        ],
        fluid_unified_variants: [
            '"fluid":"vintage:sulfur_trioxide"'
        ],
        fluid_recipe_types: [
            'vintage:pressurizing'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})

//Gem Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'thermal:sulfur',
        unified_variants: [
            'vintage:sulfur'
        ],
        output_recipe_types: [
            'minecraft:crafting_shaped'
        ],
        input_recipe_types: [
            'create:crushing',
            'create:milling'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})