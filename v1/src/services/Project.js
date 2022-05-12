const Project = require("../models/Project");

const insert = (projectData) => {
    const project = new Project({
        name: projectData.name,
    });
    // project.save();  return olmadıgı için cevabı kontrol etmek için return et
    return project.save();
};

const list = () => {
    return Project.find({});
};

module.exports = {
    insert,
    list,
};
