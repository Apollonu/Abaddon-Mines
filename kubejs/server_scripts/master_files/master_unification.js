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
	let json_unified_variants = data.json_unified_variants
	let json_recipe_types = data.json_recipe_types
	let fluid_unified_variants = data.fluid_unified_variants
	let fluid_recipe_types = data.fluid_recipe_types

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
	if (unified_individual != null && json_unified_variants != null && json_recipe_types != null) {
		json_unified_variants.forEach(variant => {
			json_recipe_types.forEach(type => {
				event.forEachRecipe({type: type}, recipe => {
					let json = recipe.json.toString()
					variant = variant.toString()
					if (json.includes(variant)) {
						console.log('/// JSON Recipe Start')
						console.log('Variant: ' + variant)
						console.log('Recipe: ' + json)

						let unified_individual_string = '"item":"' + unified_individual + '"'
						if (type.includes('ad_astra:compressing')) unified_individual_string = unified_individual_string.replace('item', 'id')
						console.log('Unified Individual: ' + unified_individual_string)

						json = json.replace(variant, unified_individual_string)

						console.log('Altered Recipe: ' + json)
						console.log('/// JSON Recipe End')

						recipe.merge(JSON.parse(json))
					}
				})
			})
		})
	}

	//Fluid Recipe Logic
	if (unified_individual != null && fluid_unified_variants != null && fluid_recipe_types != null) {
		fluid_unified_variants.forEach(variant => {
			fluid_recipe_types.forEach(type => {
				event.forEachRecipe({type: type}, recipe => {
					let json = recipe.json.toString()
					variant = variant.toString()
					if (json.includes(variant)) {
						console.log('/// Fluid Recipe Start')
						console.log('Variant: ' + variant)
						console.log('Recipe: ' + json)

						let unified_individual_string = '"fluid":"' + unified_individual + '"'
						if (type.includes('createaddition:liquid_burning') && variant.includes('plantoil') && variant.includes('"input":{') == 0) return
						if (type.includes('createaddition:liquid_burning')) unified_individual_string = '"input":{' + unified_individual_string
						if (type.includes('pneumaticcraft:amadron')) unified_individual_string = unified_individual_string.replace('fluid', 'id')
						console.log('Unified Individual: ' + unified_individual_string)

						json = json.replace(variant, unified_individual_string)

						console.log('Altered Recipe: ' + json)
						console.log('/// Fluid Recipe End')

						recipe.merge(JSON.parse(json))
					}
				})
			})
		})
	}
}