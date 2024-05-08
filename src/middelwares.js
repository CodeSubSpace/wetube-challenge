// 어플리케이션 수준의 미들웨어
export const urlLogger = (req, res, next) => {
    console.log(`Path: ${req.originalUrl}`);
    next();
}
export const timeLogger = (req, res, next) => {
    const now = Date.now()
    const date = new Date(now);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    console.log(`Time: ${year}.${month}.${day}`);
    next();
}
export const securityLogger = (req, res, next) => {
    const protocol = req.protocol
    if (protocol === "http") {
        console.log("secure")
    } else {
        console.log("insecure")
    };
    next();
}

// 라우터 수준의 미들웨어
export const protector = (req, res, next) => {
    res.redirect("/");
}