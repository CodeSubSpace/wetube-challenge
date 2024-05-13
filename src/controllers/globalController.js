export const home = (req, res) => {
    res.render("home", { pageTitle: "home"})
}

export const trending = (req, res) => {
    res.render("trending", { pageTitle: "trending"});
}

export const new_ = (req, res) => {
    res.render("new", { pageTitle : "new"});
}

export const join = (req, res) => {
    res.render("join", { pageTitle : "join"});
}

export const login = (req, res) => {
    res.render("login", { pageTitle : "login"});
}