//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Block Tag Event
ServerEvents.tags('block', event => {
	
	//Variables
	let material = 'brass'

	//Individual Blocks
	let individual_blocks = [
		'create:brass_bars',
		'create:brass_casing',
		'create:brass_door',
		'create:brass_funnel',
		'create:brass_ladder',
		'create:brass_scaffolding',
		'create:brass_table_cloth',
		'create:brass_tunnel',
		'create:clockwork_bearing',
		'create:content_observer',
		'create:elevator_pulley',
		'create:flywheel',
		'create:haunted_bell',
		'create:mechanical_arm',
		'create:mechanical_crafter',
		'create:peculiar_bell',
		'create:rotation_speed_controller',
		'create:sequenced_gearshift',
		'create:stockpile_switch',

		'createaddition:electric_motor',
		'createaddition:modular_accumulator',
		'createaddition:portable_energy_interface',
		'createaddition:tesla_coil',

		'create_new_age:advanced_motor',
		'create_new_age:reinforced_motor',
		
		'tfmg:brass_cable_hub',
		'tfmg:brass_fluid_valve',
		'tfmg:brass_frame',
		'tfmg:brass_mechanical_pump',
		'tfmg:brass_pipe',
		'tfmg:brass_smart_fluid_pipe',
		'tfmg:brass_truss',

		'vintage:laser'
	]

	//Individual Tags
	let individual_tags = [
		'forge:storage_blocks/' + material,
	]
	
	//Block Tags Function Push
	block_tags (
		event,
		material,
		individual_blocks,
		individual_tags
	)
})