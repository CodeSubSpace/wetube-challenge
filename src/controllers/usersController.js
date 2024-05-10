export const users = (req, res) => {
    res.send("Hello! This is users Page!!!")
}

export const userId = (req, res) => {
    const { id } = req.params
    res.send(`Hello! This is user ${id} Page!!!`)
}

export const userEdit = (req, res) => {
    res.send("Hello! This is user edit Page!!!")
}