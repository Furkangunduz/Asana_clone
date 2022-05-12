const create = (req, res) => {
    res.status(200).send("Project create");
};

const index = (req, res) => {
    res.status(200).send("Project index");
};

module.exports = {
    create,
    index,
};
