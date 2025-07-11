//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

    //Phytogro Recipes
    event.recipes.create.mixing('4x thermal:phytogro', ['#forge:sand', 'minecraft:bone_meal', '#forge:dusts/apatite', '#forge:dusts/saltpeter'])
    event.recipes.create.mixing('2x thermal:phytogro', ['#forge:sand', 'minecraft:bone_meal', 'thermal:rich_slag', '#forge:dusts/saltpeter'])
    event.recipes.create.mixing('8x thermal:phytogro', ['#forge:sand', '2x #forge:dusts/apatite', '#forge:dusts/saltpeter'])
})