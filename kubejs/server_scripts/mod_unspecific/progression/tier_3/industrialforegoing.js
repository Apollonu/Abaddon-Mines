//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
    
	//Aluminum Recipes
    event.replaceInput({input: '#forge:ingots/iron', mod: 'industrialforegoing', not: {input: 'industrialforegoing:meat_bucket'}},
        '#forge:ingots/iron',
        '#forge:ingots/aluminum'
    )

    //Compressed Iron Gear Recipes
    event.replaceInput({input: '#forge:gears/iron', mod: 'industrialforegoing'},
        '#forge:gears/iron',
        '#forge:gears/compressed_iron'
    )
})