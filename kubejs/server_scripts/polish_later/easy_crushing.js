//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

    //Variables
    let dust_variants =[
        '#forge:ores/',
        '#forge:raw_materials/'
    ]

    //Dust Recipes
    event.remove({output: '#forge:dusts', input: 'immersiveengineering:hammer'})

    //Easy Ore Types
    let easy_ore_types = [
        'copper',
        'lead',
        'nickel',
        'tin',
        'zinc'
    ].forEach(type => {
        dust_variants.forEach(variant => {
            let individual = variant + type
            let dust = '#forge:dusts/' + type

            event.shapeless(dust, [individual, '#forge:hammers']).damageIngredient('#forge:hammers')
            event.recipes.create.milling(dust, individual)
        })
    })

    //Medium Ore Types
    let medium_ore_types = [
        'gold',
        'iron',
        'silver'
    ].forEach(type => {
        dust_variants.forEach(variant => {
            let individual = variant + type
            let dust = '#forge:dusts/' + type

            event.recipes.create.milling(Item.of(dust).withChance(0.8), individual)
        })
    })
})