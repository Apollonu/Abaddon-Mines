//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

const biomeswevegone_crafting_tables = []    

//Item Tag Event
ServerEvents.tags('item', event => {

    //Oh The Biomes We've Gone Push
    event.get('biomeswevegone:crafting_tables')
    .getObjectIds().forEach(individual => {
        biomeswevegone_crafting_tables.push(individual)
    })
})

//Recipe Event
ServerEvents.recipes(event => {

    //Vanilla Recipe
    event.remove({output: 'minecraft:crafting_table'})
    event.shaped('minecraft:crafting_table', ['BB', 'AA'], {
        A: '#minecraft:planks',
        B: 'minecraft:flint'
    })

    //Oh The Biomes We've Gone Recipes
    biomeswevegone_crafting_tables.forEach((individual) => {
        event.remove({output: individual})
        let plank = individual.toString().replace('crafting_table', 'planks')
        event.shaped(individual, ['BB', 'AA'], {
            A: plank,
            B: 'minecraft:flint'
        })
    })
})