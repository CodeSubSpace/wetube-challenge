import User from "./models/User";
import bcrypt from "bcrypt";

export const home = (req, res) => {
    res.render("home", { pageTitle: "Home" });
}

export const getJoin = (req, res) => {
    res.render("join", {
        pageTitle: "Join",
        joinMessage: "Join our Site!"
    });
}

export const postJoin = async (req, res) => {
    const { username, password, crossPassword } = req.body;

    if (password !== crossPassword) {
        return res.status(400).render("join", {
            pageTitle: "Join",
            joinMessage: "❌ Password confirmation does not match. 🙁",
        });
    }

    const exists = await User.exists({ username });
    if (exists) {
        return res.status(400).render("join", {
            pageTitle: "Join",
            joinMessage: "❌ Username is already taken. 🙁",
        });
    }

    try {
        await User.create({
            username,
            password
        });
        return res.redirect("/login");
    } catch (error) {
        return res.status(400).render("join", {
            pageTitle: "Join",
            joinMessage: error._message,
        });
    }
}

export const getLogin = (req, res) => {
    res.render("login", {
        pageTitle: "login",
    })
}
export const postLogin = async (req, res) => {
    const { username, password } = req.body;
    
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).render("login",
            {   pageTitle: "login",
                errorMessage: "❌ An account with this username doesn't exists 🙁" }
        )
    }

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
        return res.status(400).render("login",
            { 
                pageTitle: "login",
                errorMessage: "❌ Wrong Password! 🙁" }
        )
    }
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/")
}
