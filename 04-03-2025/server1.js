const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

let users = [];

app.post('/users', (req, res) => {
    const newUser = req.body;
    const user = users.filter(u => u.id === newUser.id);
    if (user && user.length > 0) return res.status(400).send("User Already existed");
    users.push(newUser);
    res.status(201).send(newUser);
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/users/:id', (req, res) => {
    const user = users.filter(u => u.id == req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.send(user);
});

app.put('/users/:id', (req, res) => {
    console.log(req.params.id)
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).send('User not found');

    user.name = req.body.name;
    user.email = req.body.email;
    res.send(user);
});

app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id == req.params.id);
    if (userIndex === -1) return res.status(404).send('User not found');

    const deletedUser = users.splice(userIndex, 1);
    res.send(deletedUser);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});