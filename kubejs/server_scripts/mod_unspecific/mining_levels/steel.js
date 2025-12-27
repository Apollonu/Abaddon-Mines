//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Block Tag Event
ServerEvents.tags('block', event => {
	
	//Variables
	let material = 'steel'

	//Individual Blocks
	let individual_blocks = [
		'ad_astra:airlock',
		'ad_astra:encased_steel_block',
		'ad_astra:glowing_steel_pillar',
		'ad_astra:steel_door',
		'ad_astra:steel_factory_block',
		'ad_astra:steel_pillar',
		'ad_astra:steel_plating',
		'ad_astra:steel_plating_pressure_plate',
		'ad_astra:steel_plating_slab',
		'ad_astra:steel_plating_stairs',
		'ad_astra:steel_sliding_door',
		'ad_astra:steel_trapdoor',

		'immersiveengineering:chute_steel',
		'immersiveengineering:heavy_engineering',
		'immersiveengineering:metal_ladder_steel',
		'immersiveengineering:blastbrick_reinforced',
		'immersiveengineering:slab_steel_scaffolding_grate_top',
		'immersiveengineering:slab_steel_scaffolding_standard',
		'immersiveengineering:slab_steel_scaffolding_wooden_top',
		'immersiveengineering:slab_storage_steel',
		'immersiveengineering:stairs_steel_scaffolding_grate_top',
		'immersiveengineering:stairs_steel_scaffolding_standard',
		'immersiveengineering:stairs_steel_scaffolding_wooden_top',
		'immersiveengineering:steel_fence',
		'immersiveengineering:steel_post',
		'immersiveengineering:steel_scaffolding_grate_top',
		'immersiveengineering:steel_scaffolding_standard',
		'immersiveengineering:steel_scaffolding_wooden_top',
		'immersiveengineering:steel_slope',
		'immersiveengineering:steel_wallmount',

		'mekanism:steel_casing',

		'tconstruct:slimesteel_block',

		'tfmg:blast_furnace_reinforcement'
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