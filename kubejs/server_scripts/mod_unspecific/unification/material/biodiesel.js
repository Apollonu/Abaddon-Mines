//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'immersiveengineering:biodiesel'
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
            'type': 'createaddition:liquid_burning',
            'input': {
                'fluid': unified_individual,
                'amount': 1000
            },
            'burnTime': 24000,
            'superheated': true
        }
    ]

    //Other Recipe Types
    event.forEachRecipe({type: 'pneumaticcraft:fluid_mixer'}, recipe => {
        const output = recipe.json.get('fluid_output')
        if (!output) return
        const output_variant = output.get('fluid')?.asString
        if (!output_variant) return
        output_variant.includes('pneumaticcraft:biodiesel') && output.addProperty('fluid',
            output_variant.replace('pneumaticcraft:biodiesel', unified_individual)
        )
    })
    event.forEachRecipe({type: 'pneumaticcraft:thermo_plant'}, recipe => {
        const output = recipe.json.get('fluid_input')
        if (!output) return
        const output_variant = output.get('tag')?.asString
        if (!output_variant) return
        if (output_variant.includes('forge:biodiesel')) {
            output.remove('tag')
            output.addProperty('fluid',
                output_variant.replace('forge:biodiesel', unified_individual)
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