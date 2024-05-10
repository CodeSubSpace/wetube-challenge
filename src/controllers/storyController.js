export const story = (req, res) => {
    res.send("Hello! This is story page!!!");
}

export const storyEdit = (req, res) => {
    const { id } = req.params;
    res.send(`Hello! This is story ${id} edit page`);
}

export const storyDelete = (req, res) => {
    const { id } = req.params;
    res.send(`Hello! This is story ${id} delete page`);
}