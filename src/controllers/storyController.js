export const story = (req, res) => {
    res.render(`story`, { pageTitle : "story"});
}

export const storyEdit = (req, res) => {
    const { id } = req.params;
    res.render(`storyEdit`, { pageTitle : "story Edit"});
}

export const storyDelete = (req, res) => {
    const { id } = req.params;
    res.render(`storyDelete`, { pageTitle : "story Delete"});
}