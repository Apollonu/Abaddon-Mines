//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 4

//Unify Items Function
function unify_items (event, unified_individual, unified_variants, output_recipe_types, input_recipe_types, custom_recipe_types) {

	//Recipe Logic
	unified_variants.forEach(variant => {
		output_recipe_types.forEach(type => {
			event.replaceOutput({output: variant, type: type},
            	variant,
            	unified_individual
        	)
		})
		input_recipe_types.forEach(type => {
			event.replaceInput({input: variant, type: type},
            	variant,
            	unified_individual
        	)
		})
	})

	//Custom Recipe Logic
	custom_recipe_types.forEach(individual => {
		event.custom(individual)
	})
}