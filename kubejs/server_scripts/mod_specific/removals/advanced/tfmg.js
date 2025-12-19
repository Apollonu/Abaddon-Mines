//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'tfmg:'
	const all_individual_items = []
	let block_variants = ['_stairs', '_slab', '_wall']
	let color_variants = [
		'black', 'blue', 'brown', 'cyan', 'gray', 'green', 'light_blue', 'light_gray', 'lime',
		'magenta', 'orange', 'pink', 'purple', 'red', 'white', 'yellow'
	]
	let ore_ingot_variants = ['_ore', '_ingot', '_nugget', '_block']
	let tool_variants = ['axe', 'hoe', 'pickaxe', 'shovel', 'sword']

	//Individual Items
	let individual_items = [
		prefix + 'accumulator',
		prefix + 'aluminum_cable_hub',
		prefix + 'aluminum_frame',
		prefix + 'aluminum_lamp',
		prefix + 'aluminum_sheet',
		prefix + 'aluminum_spool',
		prefix + 'bitumen',
		prefix + 'brass_cable_hub',
		prefix + 'cable_connector',
		prefix + 'cable_tube',
		prefix + 'cast_iron_chemical_vat',
		prefix + 'casting_basin',
		prefix + 'cement',
		prefix + 'centrifuge',
		prefix + 'circuit_board',
		prefix + 'circular_light',
		prefix + 'coal_coke',
		prefix + 'coal_coke_block',
		prefix + 'coated_circuit_board',
		prefix + 'concrete',
		prefix + 'concrete_hose',
		prefix + 'concrete_mixture',
		prefix + 'concrete_slab',
		prefix + 'concrete_stairs',
		prefix + 'concrete_wall',
		prefix + 'constantan_block',
		prefix + 'constantan_ingot',
		prefix + 'constantan_nugget',
		prefix + 'constantan_spool',
		prefix + 'converter',
		prefix + 'copper_cable_hub',
		prefix + 'copper_electrode',
		prefix + 'copper_grenade',
		prefix + 'copper_spool',
		prefix + 'copper_sulfate',
		prefix + 'copper_wire',
		prefix + 'copycat_cable_block',
		prefix + 'creative_generator',
		prefix + 'debug_cinderblock',
		prefix + 'deposit_item',
		prefix + 'deepslate_lead_ore',
		prefix + 'deepslate_lithium_ore',
		prefix + 'deepslate_nickel_ore',
		prefix + 'diagonal_cable_block',
		prefix + 'electric_diode',
		prefix + 'electric_motor',
		prefix + 'electric_post',
		prefix + 'electric_pump',
		prefix + 'electrical_switch',
		prefix + 'electrode_holder',
		prefix + 'electromagnetic_coil',
		prefix + 'empty_circuit_board',
		prefix + 'empty_spool',
		prefix + 'etched_circuit_board',
		prefix + 'fireproof_chemical_vat',
		prefix + 'galena_pillar',
		prefix + 'generator',
		prefix + 'glass_cable_insulator',
		prefix + 'glass_insulator_segment',
		prefix + 'golden_turbo',
		prefix + 'graphite_electrode',
		prefix + 'heavy_cable_hub',
		prefix + 'heavy_casing_encased_aluminum_cogwheel',
		prefix + 'heavy_casing_encased_shaft',
		prefix + 'heavy_casing_encased_large_aluminum_cogwheel',
		prefix + 'heavy_casing_encased_large_steel_cogwheel',
		prefix + 'heavy_casing_encased_steel_cogwheel',
		prefix + 'heavy_plate',
		prefix + 'industrial_mixer',
		prefix + 'industrial_pipe',
		prefix + 'large_pumpjack_hammer_connector',
		prefix + 'large_pumpjack_hammer_head',
		prefix + 'large_pumpjack_hammer_part',
		prefix + 'layered_galena',
		prefix + 'light_bulb',
		prefix + 'liquid_concrete_bucket',
		prefix + 'lit_lithium_blade',
		prefix + 'lithium_blade',
		prefix + 'lithium_ore',
		prefix + 'lead_sheet',
		prefix + 'machine_input',
		prefix + 'mixer_blade',
		prefix + 'modern_light',
		prefix + 'multimeter',
		prefix + 'napalm_bomb',
		prefix + 'neon_tube',
		prefix + 'nickel_sheet',
		prefix + 'nitrate_dust',
		prefix + 'oil_deposit',
		prefix + 'plastic_sheet',
		prefix + 'polarizer',
		prefix + 'potentiometer',
		prefix + 'pumpjack_base',
		prefix + 'pumpjack_crank',
		prefix + 'pumpjack_hammer',
		prefix + 'pumpjack_hammer_connector',
		prefix + 'pumpjack_hammer_head',
		prefix + 'pumpjack_hammer_part',
		prefix + 'raw_lead',
		prefix + 'raw_lead_block',
		prefix + 'raw_lithium',
		prefix + 'raw_lithium_block',
		prefix + 'raw_nickel',
		prefix + 'raw_nickel_block',
		prefix + 'rebar',
		prefix + 'rebar_block',
		prefix + 'resistor',
		prefix + 'rotor',
		prefix + 'rubber_sheet',
		prefix + 'screwdriver',
		prefix + 'segmented_display',
		prefix + 'slag',
		prefix + 'stator',
		prefix + 'steel_bars',
		prefix + 'steel_block',
		prefix + 'steel_boots',
		prefix + 'steel_cable_hub',
		prefix + 'steel_casing_cable_hub',
		prefix + 'steel_chemical_vat',
		prefix + 'steel_chestplate',
		prefix + 'steel_distillation_controller',
		prefix + 'steel_distillation_output',
		prefix + 'steel_encased_aluminum_cogwheel',
		prefix + 'steel_encased_large_aluminum_cogwheel',
		prefix + 'steel_encased_large_steel_cogwheel',
		prefix + 'steel_encased_shaft',
		prefix + 'steel_encased_steel_cogwheel',
		prefix + 'steel_frame',
		prefix + 'steel_helmet',
		prefix + 'steel_ingot',
		prefix + 'steel_leggings',
		prefix + 'steel_nugget',
		prefix + 'steel_scaffolding',
		prefix + 'steel_trapdoor',
		prefix + 'sulfur_dust',
		prefix + 'surface_scanner',
		prefix + 'synthetic_leather',
		prefix + 'traffic_light',
		prefix + 'transformer',
		prefix + 'transistor_item',
		prefix + 'turbo',
		prefix + 'winding_machine',
		prefix + 'unfinished_capacitor',
		prefix + 'unfinished_circuit_board',
		prefix + 'unfinished_electric_motor',
		prefix + 'unfinished_electromagnetic_coil',
		prefix + 'unfinished_generator',
		prefix + 'unfinished_insulator',
		prefix + 'unfinished_potentiometer',
		prefix + 'unfinished_resistor',
		prefix + 'unfinished_transistor',
		prefix + 'unfired_insulator',
		prefix + 'unprocessed_heavy_plate',
		prefix + 'voltage_observer',
		prefix + 'voltmeter',
		prefix + 'zinc_electrode',
		prefix + 'zinc_grenade'
	]

	//Concrete Types
	color_variants.forEach(color => {
		block_variants.forEach(variant => {
			let individual = prefix + color + '_concrete' + variant
			all_individual_items.push(individual)
		})
		all_individual_items.push(prefix + color + '_concrete')
	})

	//Galena Types
	let galena_types = [
		'galena',
		'cut_galena',
		'polished_cut_galena'
	].forEach(type => {
		block_variants.forEach(variant => {
			let individual = prefix + type + variant
			all_individual_items.push(individual)
		})
		all_individual_items.push(prefix + type)
	})

	//Galena Brick Types
	let galena_brick_types = [
		'cut_galena_bricks',
		'small_galena_bricks'
	].forEach(type => {
		let length = type.length
		block_variants.forEach(variant => {
			let individual = prefix + type.slice(0, length - 1) + variant
			all_individual_items.push(individual)
		})
		all_individual_items.push(prefix + type)
	})

	//Multimeter Types
	color_variants.forEach(color => {
		let individual = prefix + color + '_multimeter'
		all_individual_items.push(individual)
	})

	//Ore & Ingot Types
	let ore_ingot_types = [
		'nickel',
		'lead'
	].forEach(type => {
		ore_ingot_variants.forEach(variant => {
			let individual = prefix + type + variant
			all_individual_items.push(individual)
		})
	})

	//Tool Types
	let tool_types = [
		'lead_',
		'steel_'
	].forEach(type => {
		tool_variants.forEach(variant => {
			let individual = prefix + type + variant
			all_individual_items.push(individual)
		})
	})
	
	//Individual Combine
	individual_items.forEach(individual => {
		all_individual_items.push(individual)
	})
	
	//Remove Items Function Push
	remove_items (
		event,
		all_individual_items
	)
})

//Recipe Event
ServerEvents.recipes(event => {

	//Recipe Types
	let recipe_types = [
		'tfmg:casting',
		'tfmg:distillation',
		'tfmg:vat_machine_recipe'
	].forEach(type => {
		event.remove({type: type})
	})
})