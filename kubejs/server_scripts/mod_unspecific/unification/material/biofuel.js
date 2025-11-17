//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'industrialforegoing:biofuel'
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
    event.forEachRecipe({type: 'create:mixing'}, recipe => {
        const output = recipe.json.get('results')
        if (!output) return
        output.forEach(type => {
            const output_variant = type.get('fluid')?.asString
            if (!output_variant) return
            output_variant.includes('createaddition:bioethanol') && type.addProperty('fluid',
                output_variant.replace('createaddition:bioethanol', unified_individual)
            )
        })
        
    })
    event.forEachRecipe({type: 'createaddition:liquid_burning'}, recipe => {
        const output = recipe.json.get('input')
        if (!output) return
        const output_variant = output.get('fluidTag')?.asString
        if (!output_variant) return
        if (output_variant.includes('forge:biofuel')) {
            output.remove('fluidTag')
            output.addProperty('fluid',
                output_variant.replace('forge:biofuel', unified_individual)
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