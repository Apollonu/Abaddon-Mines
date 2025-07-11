//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Block Tag Event
ServerEvents.tags('block', event => {
	
	//Variables
	let material = 'andesite_alloy'

	//Individual Blocks
	let individual_blocks = [
		'create:adjustable_chain_gearshift',
		'create:andesite_bars',
		'create:andesite_casing',
		'create:andesite_door',
		'create:andesite_encased_cogwheel',
		'create:andesite_encased_large_cogwheel',
		'create:andesite_encased_shaft',
		'create:andesite_funnel',
		'create:andesite_tunnel',
		'create:basin',
		'create:cart_assembler',
		'create:chute',
		'create:clutch',
		'create:cogwheel',
		'create:contraption_controls',
		'create:copycat_panel',
		'create:copycat_step',
		'create:crushing_wheel',
		'create:deployer',
		'create:depot',
		'create:display_board',
		'create:encased_chain_drive',
		'create:encased_fan',
		'create:gantry_carriage',
		'create:gantry_shaft',
		'create:gearbox',
		'create:gearshift',
		'create:large_cogwheel',
		'create:mechanical_bearing',
		'create:mechanical_drill',
		'create:mechanical_harvester',
		'create:mechanical_mixer',
		'create:mechanical_piston',
		'create:mechanical_plough',
		'create:mechanical_press',
		'create:mechanical_roller',
		'create:mechanical_saw',
		'create:millstone',
		'create:nozzle',
		'create:portable_storage_interface',
		'create:redstone_contact',
		'create:rope_pulley',
		'create:shaft',
		'create:sticker',
		'create:sticky_mechanical_piston',
		'create:vertical_gearbox',
		'create:weighted_ejector',
		'create:windmill_bearing',
		'create:schematicannon',

		'createaddition:connector',
		'createaddition:large_connector',
		'createaddition:rolling_mill',
		'createaddition:small_light_connector',

		'createlowheated:basic_burner',

		'vintage:belt_grinder',
		'vintage:centrifuge',
		'vintage:curving_press',
		'vintage:helve_hammer',
		'vintage:lathe',
		'vintage:spring_coiling_machine',
		'vintage:vacuum_chamber',
		'vintage:vibrating_table'
	]
	
	//Individual Tags
	let individual_tags = [
		'forge:storage_blocks/' + material
	]
	
	//Block Tags Function Push
	block_tags (
		event,
		material,
		individual_blocks,
		individual_tags
	)
})