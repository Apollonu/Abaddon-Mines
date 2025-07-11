//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
    
    //Variables
    let prefix = 'silentgear:'
    const all_individual_items = []
    let blueprint_variants = ['', '_blueprint', '_template']

    //Individual Items
    let individual_items = [
        prefix + 'adornment',
        prefix + 'alloy_ingot',
        prefix + 'arrow_heads',
        prefix + 'boot_plates',
        prefix + 'bort',
        prefix + 'bort_block',
        prefix + 'bracelet_band',
        prefix + 'bronze_ingot',
        prefix + 'chestplate_plates',
        prefix + 'coating_smithing_template',
        prefix + 'custom_ingot',
        prefix + 'custom_gem',
        prefix + 'diamond_shard',
        prefix + 'deepslate_bort_ore',
        prefix + 'elytra_wings',
        prefix + 'emerald_shard',
        prefix + 'flax_fiber',
        prefix + 'flax_flowers',
        prefix + 'flax_seeds',
        prefix + 'flax_string',
        prefix + 'fluffy_fabric',
        prefix + 'fluffy_feather',
        prefix + 'fluffy_puff',
        prefix + 'fluffy_seeds',
        prefix + 'fluffy_string',
        prefix + 'gear_smithing_table',
        prefix + 'guide_book',
        prefix + 'helmet_plates',
        prefix + 'hybrid_gem',
        prefix + 'iron_rod',
        prefix + 'jeweler_tools',
        prefix + 'legging_plates',
        prefix + 'metal_alloyer',
        prefix + 'metal_press',
        prefix + 'mixed_fabric',
        prefix + 'recrystallizer',
        prefix + 'refabricator',
        prefix + 'ring_shank',
        prefix + 'sheet_metal',
        prefix + 'shield_plate',
        prefix + 'wild_flax_plant',
        prefix + 'wild_fluffy_plant'
        //prefix + 'dried_sinew',
        //prefix + 'sinew',
        //prefix + 'sinew_fiber'
    ]

    //Individual Tags
	let individual_tags = [
		prefix + 'fluffy_blocks'
	].forEach(tag => {
        event.get(tag).getObjectIds().forEach(individual => {
            all_individual_items.push(individual)
        })
    })

    //Blueprint Items
    let blueprint_types = [
        'arrow',
        'binding',
        'boots',
        'bracelet',
        'chestplate',
        'coating',
        'elytra',
        'fletching',
        'grip',
        'helmet',
        'leggings',
        'lining',
        'ring',
        'shield'
    ].forEach(type => {
        blueprint_variants.forEach(variant => {
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