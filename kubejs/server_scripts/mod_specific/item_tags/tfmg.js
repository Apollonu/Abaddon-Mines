//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Item Tag Event
ServerEvents.tags('item', event => {

    //Variables
	let prefix = 'tfmg:'

    //Hammer Tag
    event.add('c:hidden_from_recipe_viewers', prefix + 'unfinished_steel_mechanism')
})