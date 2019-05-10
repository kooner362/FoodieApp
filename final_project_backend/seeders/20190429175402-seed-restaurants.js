'use strict';

module.exports = {
  up: async (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   await queryInterface.bulkInsert('tags', [
    {
      name: 'breakfast',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'pasta',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
     name: 'lunch',
     createdAt: new Date(),
     updatedAt : new Date()
    },
    {
     name: 'dinner',
     createdAt: new Date(),
     updatedAt : new Date()
    },
    {
     name: 'brunch',
     createdAt: new Date(),
     updatedAt : new Date()
    },
    {
     name: 'indian',
     createdAt: new Date(),
     updatedAt : new Date()
    },
    {
      name: 'italian',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'mediterranean',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'mexican',
      createdAt: new Date(),
      updatedAt : new Date()},
    {
      name: 'seafood',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'steakhouse',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'japanese',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'canadaian',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'northwest',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'fusion',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'american',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'lounge',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'farm-to-table',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'asia',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'comfort food',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'tapas',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'latin american',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'french',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'spanish',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'pizzeria',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'burger',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'sushi',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'pizza',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'donair',
      createdAt: new Date(),
      updatedAt : new Date()
    }
   ], {});

   await queryInterface.bulkInsert('restaurants', [
    {
      name: 'Pourhouse',
      address: '162 Water St, Vancouver, BC V6B 1B2',
      phone_number:	'(604) 568-7022',
      website:	'pourhousevancouver.com',
      description: "is simply dummy text of the printing "
      + "and typesetting industry. Lorem Ipsum has been the " 
      + "industry's standard dummy text ever since the 1500s, ",
      approved: true,
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'Moderne Burger',
      address: '865 W Broadway, Vancouver, BC V5Z 1J9',
      phone_number:	'(604) 739-0005',
      website:	'moderneburger.com',
      description: "is simply dummy text of the printing "
      + "and typesetting industry. Lorem Ipsum has been the " 
      + "industry's standard dummy text ever since the 1500s, ",
      approved: true,
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'Red Truck Beer’s Truck Stop',
      address: '295 E 1st Ave, Vancouver, BC V5T 1A7',
      phone_number:	'(604) 682-4733',
      description: "is simply dummy text of the printing "
      + "and typesetting industry. Lorem Ipsum has been the " 
      + "industry's standard dummy text ever since the 1500s, ",
      website:	'',
      approved: false,
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'Campagnolo',
      address: '1020 Main St, Vancouver, BC V6A 2W1',
      phone_number:	'(604) 484-6018',
      website:	'campagnolorestaurant.ca',
      description: "is simply dummy text of the printing "
      + "and typesetting industry. Lorem Ipsum has been the " 
      + "industry's standard dummy text ever since the 1500s, ",
      approved: true,
      createdAt: new Date(),
      updatedAt : new Date()
    }
   ], {});

    const restaurant = await queryInterface.sequelize.query(
      `SELECT id from restaurants where name='Pourhouse';`
    );

    const restaurant1 = await queryInterface.sequelize.query(
      `SELECT id from restaurants where name='Moderne Burger';`
    );

    const restaurant3 = await queryInterface.sequelize.query(
      `SELECT id from restaurants where name='Campagnolo';`
    );

    const burgerTagRows = await queryInterface.sequelize.query(
      `SELECT id from tags where name='burger';`
    );

    const pizzaTagRows = await queryInterface.sequelize.query(
      `SELECT id from tags where name='pizza';`
    );
    const pastaTagRows = await queryInterface.sequelize.query(
      `SELECT id from tags where name='pasta';`
    );
    const italianTagRows = await queryInterface.sequelize.query(
      `SELECT id from tags where name='italian';`
    );

    const burgerTagId = burgerTagRows[0][0].id;
    const pizzaTagId = pizzaTagRows[0][0].id;
    const pastaTagId = pastaTagRows[0][0].id;
    const italianTagId = italianTagRows[0][0].id;


    const restaurantId = restaurant[0][0].id;
    const restaurant1Id = restaurant1[0][0].id;
    const restaurant3Id = restaurant3[0][0].id;


   await queryInterface.bulkInsert('restauranttags', [
     {
       tagId: burgerTagId,
       restaurantId: restaurantId,
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
      tagId: burgerTagId,
      restaurantId: restaurant1Id,
      createdAt: new Date(),
      updatedAt : new Date()
     },
     {
      tagId: pizzaTagId,
      restaurantId: restaurant3Id,
      createdAt: new Date(),
      updatedAt : new Date()
     },
     {
      tagId: pastaTagId,
      restaurantId: restaurant3Id,
      createdAt: new Date(),
      updatedAt : new Date()
     },
     {
      tagId: italianTagId,
      restaurantId: restaurant3Id,
      createdAt: new Date(),
      updatedAt : new Date()
     },
   ], {})

   await queryInterface.bulkInsert('menuitems', [
    {
      name: 'The Pourhouse Burger',
      approved: true,
      restaurantId: restaurantId,
      createdAt: new Date(),
      updatedAt : new Date()
    }, 
    {
      name: 'Steak Burger',
      approved: true,
      restaurantId: restaurant1Id,
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'Tagliatelle',
      approved: true,
      restaurantId: restaurant3Id,
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'Spaghetti al Pomodoro',
      approved: true,
      restaurantId: restaurant3Id,
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'Margherita Pizza',
      approved: true,
      restaurantId: restaurant3Id,
      createdAt: new Date(),
      updatedAt : new Date()
    }
   ], {})

    const pourhouseBurgerRows = await queryInterface.sequelize.query(
      `SELECT id from menuitems where name='The Pourhouse Burger';`
    );

    const steakBurgerRows = await queryInterface.sequelize.query(
      `SELECT id from menuitems where name='Steak Burger';`
    );

    const tagliatelleRows = await queryInterface.sequelize.query(
      `SELECT id from menuitems where name='Tagliatelle';`
    );

    const spaghettiRows = await queryInterface.sequelize.query(
      `SELECT id from menuitems where name='Spaghetti al Pomodoro';`
    );

    const pizzaRows = await queryInterface.sequelize.query(
      `SELECT id from menuitems where name='Margherita Pizza';`
    );

    

    
    const pourhouseBurgerId = pourhouseBurgerRows[0][0].id;
    const steakBurgerId = steakBurgerRows[0][0].id;
    const tagliatelleId = tagliatelleRows[0][0].id;
    const spaghettiId = spaghettiRows[0][0].id;
    const pizzaId = pizzaRows[0][0].id;


     await queryInterface.bulkInsert('menuitemtags', [
      {
        tagId: burgerTagId,
        menuitemId: pourhouseBurgerId,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        tagId: burgerTagId,
        menuitemId: steakBurgerId,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        tagId: pastaTagId,
        menuitemId: tagliatelleId,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        tagId: italianTagId,
        menuitemId: tagliatelleId,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        tagId: pastaTagId,
        menuitemId: spaghettiId,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        tagId: italianTagId,
        menuitemId: spaghettiId,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        tagId: pizzaTagId,
        menuitemId: pizzaId,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        tagId: italianTagId,
        menuitemId: pizzaId,
        createdAt: new Date(),
        updatedAt : new Date()
      },
 
    ], {});

    return await queryInterface.bulkInsert('menuitemratings', [
      {
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        menuitemId: pourhouseBurgerId,
        userId: 1
      },
      {
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        menuitemId: pourhouseBurgerId,
        userId: 2
      },
      {
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        menuitemId: steakBurgerId,
        userId: 2
      },
      {
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        menuitemId: steakBurgerId,
        userId: 1
      },
      {
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        menuitemId: tagliatelleId,
        userId: 1
      },
      {
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        menuitemId: tagliatelleId,
        userId: 2
      },
      {
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        menuitemId: tagliatelleId,
        userId: 3
      },
      {
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        menuitemId: spaghettiId,
        userId: 1
      },
      {
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        menuitemId: spaghettiId,
        userId: 2
      },
      {
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        menuitemId: spaghettiId,
        userId: 3
      },
      {
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        menuitemId: pizzaId,
        userId: 1
      },
      {
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        menuitemId: pizzaId,
        userId: 2
      },
      {
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        menuitemId: pizzaId,
        userId: 3
      }
    ], {});
  },

  down: async (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   
   await queryInterface.bulkDelete('menuitems', null, {});
   await queryInterface.bulkDelete('tags', null, {});
   await queryInterface.bulkDelete('restaurants', null, {});

  }
};
