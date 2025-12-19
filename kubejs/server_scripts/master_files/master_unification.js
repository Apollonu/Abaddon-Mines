//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 4

//Unify Items Function
function unify_items (data) {

	//Variables
	let event = data.event
	let unified_individual = data.unified_individual
	let unified_variants = data.unified_variants
	let output_recipe_types = data.output_recipe_types
	let input_recipe_types = data.input_recipe_types
	let json_ids = data.json_ids
	let json_recipes = data.json_recipes

	//Recipe Logic
	if (unified_individual != null && unified_variants != null) {
		unified_variants.forEach(variant => {
			if (output_recipe_types != null) {
				output_recipe_types.forEach(type => {
					event.replaceOutput({output: variant, type: type},
						variant,
						unified_individual
					)
				})
			}
			if (input_recipe_types != null) {
				input_recipe_types.forEach(type => {
					event.replaceInput({input: variant, type: type},
						variant,
						unified_individual
					)
				})
			}
		})
	}

	//JSON Recipe Logic
	if (unified_individual != null) {
		if (json_ids != null) {
			json_ids.forEach(id => {
				event.remove({id: id})
			})
		}
		if (json_recipes != null) {
			json_recipes.forEach(recipe => {
				event.custom(recipe)
			})
		}
	}
}