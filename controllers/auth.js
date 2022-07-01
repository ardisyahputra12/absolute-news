const forAdmin = (req, res, next) => {
    let user = req.session.user || "";
    user && user.admin ? next() : res.redirect("/forbidden");
};

const forMember = (req, res, next) => {
    let user = req.session.user || "";
    user && !user.admin ? next() : res.redirect("/forbidden");
};

export { forMember, forAdmin };