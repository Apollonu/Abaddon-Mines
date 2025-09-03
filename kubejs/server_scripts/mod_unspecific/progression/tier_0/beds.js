//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
    
    //Variables
    let color_types = [
        'black',
        'blue',
        'brown',
        'cyan',
        'gray',
        'green',
        'light_blue',
        'light_gray',
        'lime',
        'magenta',
        'orange',
        'pink',
        'purple',
        'red',
        'white',
        'yellow'
    ]

    //Bed Recipe
    event.remove({output: 'minecraft:white_bed', input: 'supplementaries:feather_block'})
    event.shaped('minecraft:white_bed', ['AAA', 'BBB', 'C C'], {
        A: 'supplementaries:feather_block',
        B: '#minecraft:wooden_slabs',
        C: '#minecraft:wooden_fences'
    })

    //Color Type Recipes
    color_types.forEach(type => {
        let bed = 'minecraft:' + type + '_bed'
        let wool = 'minecraft:' + type + '_wool'
        event.remove({output: bed, input: wool})
        event.shaped(bed, ['AAA', 'BBB', 'C C'], {
            A: wool,
            B: '#minecraft:wooden_slabs',
            C: '#minecraft:wooden_fences'
        })
    })
})