export const users = (req, res) => {
    res.render("users", { pageTitle: "users"})
}

export const userId = (req, res) => {
    const { id } = req.params
    res.render("userId", { pageTitle: "userID"})
}

export const userEdit = (req, res) => {
    res.render("userEdit", { pageTitle: "userEdit"})
}