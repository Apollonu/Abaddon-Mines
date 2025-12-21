//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Bronze Dust Recipe
	event.shapeless('2x #forge:dusts/bronze', [
		'#forge:dusts/copper',
		'#forge:dusts/copper',
		'#forge:dusts/copper',
		'#forge:dusts/tin'
	])

	//Boiler Types
	let boiler_types = [
		'bronze',
		'cast_iron'
	].forEach(type => {
		let pipe = 'create:fluid_pipe'
		if (type == 'cast_iron') pipe = 'tfmg:cast_iron_pipe'

		//Boiler Recipe Recipe
		event.remove({output: 'steampowered:' + type + '_boiler'})
		event.shaped('steampowered:' + type + '_boiler', ['AAA', 'ABA', 'ABA'], {
			A: '#forge:ingots/' + type,
			B: pipe
		})

		//Burning Chamber Recipe
		event.remove({output: 'steampowered:' + type + '_burner'})
		event.shaped('steampowered:' + type + '_burner', ['AAA', 'ACA', 'BBB'], {
			A: '#forge:ingots/' + type,
			B: 'minecraft:bricks',
			C: 'createlowheated:basic_burner'
		})

		//Flywheel Recipe
		event.shaped('steampowered:' + type + '_flywheel', ['ABA', 'BCB', 'ADA'], {
			A: '#forge:ingots/' + type,
			B: 'create:cogwheel',
			C: 'create:andesite_casing',
			D: 'create:shaft'
		})

		//Steam Engine Recipe
		event.remove({output: 'steampowered:' + type + '_steam_engine'})
		event.shaped('steampowered:' + type + '_steam_engine', ['ABA', 'CBD', 'ABA'], {
			A: '#forge:ingots/' + type,
			B: pipe,
			C: 'create:shaft',
			D: 'create:mechanical_press'
		})
	})
})