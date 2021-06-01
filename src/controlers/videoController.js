const videos = [
	{
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
	}
]

export const trending = (req, res) => res.render("home", { pageTitle: "Home", video });
export const see = (req, res) => res.render("watch", { pageTitle: "Home" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Home" });
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => res.send("deleteVideo");