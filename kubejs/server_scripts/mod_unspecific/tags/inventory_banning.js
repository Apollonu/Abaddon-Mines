//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Item Tag Event
ServerEvents.tags('item', event => {

    //Inventory Types
	let inventory_types = [
        'create:blue_toolbox',
        'create:brown_toolbox',
        'create:cardboard_package_10x12',
        'create:cardboard_package_10x8',
        'create:cardboard_package_12x10',
        'create:cardboard_package_12x12',
        'create:cyan_toolbox',
        'create:gray_toolbox',
        'create:green_toolbox',
        'create:light_blue_toolbox',
        'create:light_gray_toolbox',
        'create:lime_toolbox',
        'create:magenta_toolbox',
        'create:orange_toolbox',
        'create:pink_toolbox',
        'create:purple_toolbox',
        'create:red_toolbox',
        'create:white_toolbox',
        'create:yellow_toolbox',

        'immersiveengeering:crate',
        'immersiveengineering:reinforced_crate',
        'immersiveengineering:toolbox',

        'sophisticatedbackpacks:backpack',
        'sophisticatedbackpacks:copper_backpack',
        'sophisticatedbackpacks:diamond_backpack',
        'sophisticatedbackpacks:gold_backpack',
        'sophisticatedbackpacks:iron_backpack',

        'supplementaries:safe'
    ].forEach(type => {
        event.add('notreepunching:small_vessel_blacklist', type)
        event.add('pneumaticcraft:reinforced_chest_disallowed', type)
    })
})