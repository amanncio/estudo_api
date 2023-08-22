const usersData = [
    {
        userId: 1,
        name: 'Moura',
        age: 12,
        cpf: 11555788877
    },
    {
        userId: 2,
        firstName: 'Matheus',
        age: 12,
        cpf: 11555788877
    },
    {
        userId: 3,
        name: 'Elison',
        age: 12,
        cpf: 11555788877
    }
];


exports.getUser = (req, res, next) => {
    const id = parseInt(req.params.id);

    if (!isNaN(id)) {
        const user = usersData.find(userData => userData.userId === id);

        if (user) {
            const message = "Usuário encontrado com sucesso!";
            res.status(200).json({
                "message": message,
                "Data": user
            });
        } else {
            const message = "Usuário não encontrado.";
            res.status(404).json({
                "message": message
            });
        }
    } else {
        const message = "Este não é um ID inválido.";
        res.status(400).json({
            "Status": message
        });
    }
}

exports.getAll = (req, res, next) => {
    res.json({
        "message": "Usuários encontrados!",
        "Usuários": usersData
    });
    res.status(200).send();
}

exports.saveUser = (req, res, next) => {
    try {
        let message = "Não foi possível criar um novo usuário!";
        const params = req.body;

        if(Object.keys(params).length === 0) {
            throw new Error("Dados não encontrados");
        }

        if(!params['name']) {
            throw new Error("O nome é obrigatório!");
        } else if(!params['age']) {
            throw new Error("A idade é obrigatória!")
        }
        
        message = "Usuário cadastrado com sucesso!";
        res.json({
            "message": message,
            "data": params
        }).status(200).send();
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
}