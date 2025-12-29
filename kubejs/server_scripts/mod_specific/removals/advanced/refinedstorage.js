//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'refinedstorage:'
	const all_individual_items = []
	let color_variants = [
		'', 'black_', 'blue_', 'brown_', 'cyan_', 'gray_', 'green_', 'light_blue_', 'light_gray_',
		'lime_', 'magenta_', 'orange_', 'pink_', 'purple_', 'red_', 'white_', 'yellow_'
	]
	let item_variants = [
		'1k_', '4k_', '16k_', '64k_'
	]
	let fluid_variants = [
		'64k_', '256k_', '1024k_', '4096k_'
	]


	//Individual Items
	let individual_items = [
		prefix + 'cable',
		prefix + 'constructor',
		prefix + 'cover',
		prefix + 'crafting_upgrade',
		prefix + 'creative_fluid_storage_block',
		prefix + 'creative_fluid_storage_disk',
		prefix + 'creative_portable_grid',
		prefix + 'creative_storage_block',
		prefix + 'creative_storage_disk',
		prefix + 'creative_wireless_crafting_monitor',
		prefix + 'creative_wireless_fluid_grid',
		prefix + 'creative_wireless_grid',
		prefix + 'destructor',
		prefix + 'disk_drive',
		prefix + 'exporter',
		prefix + 'external_storage',
		prefix + 'filter',
		prefix + 'fluid_interface',
		prefix + 'fortune_1_upgrade',
		prefix + 'fortune_2_upgrade',
		prefix + 'fortune_3_upgrade',
		prefix + 'hollow_cover',
		prefix + 'importer',
		prefix + 'interface',
		prefix + 'network_card',
		prefix + 'pattern',
		prefix + 'portable_grid',
		prefix + 'range_upgrade',
		prefix + 'regulator_upgrade',
		prefix + 'security_card',
		prefix + 'silk_touch_upgrade',
		prefix + 'speed_upgrade',
		prefix + 'stack_upgrade',
		prefix + 'storage_housing',
		prefix + 'storage_monitor',
		prefix + 'upgrade',
		prefix + 'wireless_crafting_monitor',
		prefix + 'wireless_fluid_grid',
		prefix + 'wireless_grid',
		prefix + 'wrench'
	]

	//Color Types
	let color_types = [
		'controller',
		'crafter',
		'crafter_manager',
		'crafting_grid',
		'crafting_monitor',
		'creative_controller',
		'detector',
		'disk_manipulator',
		'fluid_grid',
		'grid',
		'network_receiver',
		'network_transmitter',
		'pattern_grid',
		'relay',
		'security_manager',
		'wireless_transmitter'
	].forEach(type => {
		color_variants.forEach(variant => {
			let individual = prefix + variant + type
			all_individual_items.push(individual)
		})
	})

	//Item Types
	let item_types = [
		'storage_block',
		'storage_disk',
		'storage_part'
	].forEach(type => {
		item_variants.forEach(variant => {
			let individual = prefix + variant + type
			all_individual_items.push(individual)
		})
	})

	//Fluid Types
	let fluid_types = [
		'fluid_storage_block',
		'fluid_storage_disk',
		'fluid_storage_part'
	].forEach(type => {
		fluid_variants.forEach(variant => {
			let individual = prefix + variant + type
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