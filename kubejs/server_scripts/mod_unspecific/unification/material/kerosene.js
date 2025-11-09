//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'tfmg:kerosene'
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
        {
            'type': 'ad_astra:refining',
            'cookingtime': 1,
            'energy': 30,
            'input': {
                'ingredient': {
                    'fluid': unified_individual
                },
                'millibuckets': 5
            },
            'result': {
                'fluid': 'ad_astra:fuel',
                'millibuckets': 5
            }
        }
    ]

    //Other Recipe Types
    event.forEachRecipe({type: 'pneumaticcraft:amadron'}, recipe => {
        const output = recipe.json.get('input')
        if (!output) return
        const output_variant = output.get('id')?.asString
        if (!output_variant) return
        output_variant.includes('pneumaticcraft:kerosene') && output.addProperty('id',
            output_variant.replace('pneumaticcraft:kerosene', unified_individual)
        )
    })
    event.forEachRecipe({type: 'pneumaticcraft:refinery'}, recipe => {
        const output = recipe.json.get('results')
        if (!output) return
        output.forEach(entry => {
            const output_variant = entry.get('fluid')?.asString
            if (!output_variant) return
            if (output_variant === 'pneumaticcraft:kerosene') {
                entry.addProperty('fluid', unified_individual)
            }
        })
    })
    event.forEachRecipe({type: 'pneumaticcraft:thermo_plant'}, recipe => {
        const output = recipe.json.get('fluid_output')
        if (!output) return
        const output_variant = output.get('fluid')?.asString
        if (!output_variant) return
        output_variant.includes('pneumaticcraft:kerosene') && output.addProperty('fluid',
            output_variant.replace('pneumaticcraft:kerosene', unified_individual)
        )
    })
    event.forEachRecipe({type: 'pneumaticcraft:thermo_plant'}, recipe => {
        const output = recipe.json.get('fluid_input')
        if (!output) return
        const output_variant = output.get('tag')?.asString
        if (!output_variant) return
        if (output_variant.includes('forge:kerosene')) {
            output.remove('tag')
            output.addProperty('fluid',
                output_variant.replace('forge:kerosene', unified_individual)
            )
        }
    })

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