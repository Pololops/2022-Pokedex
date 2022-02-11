db.createUser(
    {
        user: "admin",
        pwd: "12345",
        roles: [
            {
                role: "readWrite",
                db: "pokemon"
            }
        ]
    }
);