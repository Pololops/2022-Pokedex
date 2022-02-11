db.createUser({
    user: 'pokemon',
    pwd: 'pok1234',
    roles: [
        {
            role: 'readWrite',
            db: 'pokemon'
        }
    ]
})
