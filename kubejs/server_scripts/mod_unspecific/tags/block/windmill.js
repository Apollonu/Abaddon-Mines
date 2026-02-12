//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Item Tag Event
ServerEvents.tags('item', event => {

    //Inventory Types
    event.remove('create:windmill_sails', 'create:sail_frame')
})
