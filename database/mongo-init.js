db.createUser({
  user: 'shopping',
  pwd: 'shopping',
  roles: [
    {
      role: 'readWrite',
      db: 'shoppinglist',
    },
  ],
});
