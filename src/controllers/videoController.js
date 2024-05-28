

export const getUpload = async (req, res) => {
    return res.render("upload", {
        pageTitle: "Upload Video"
    })    
}

export const postUplod = async (req, res) => {
    const { video, title, description} = req.body
    console.log(req.file);
}