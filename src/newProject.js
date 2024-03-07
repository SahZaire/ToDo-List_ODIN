function editProject() {
    var project_list = document.querySelector(".project-list");
    var userName = document.querySelector(".user").textContent;
    var project_0 = document.querySelector(".project-0");
    var new_project_btn = document.querySelector(".new-project");

    new_project_btn.addEventListener("click", function () {
            var create_project = project_0.cloneNode(true);
            create_project.textContent = "";
            var create_projectname = document.createElement("input");
            create_projectname.setAttribute("type", "text");
            create_projectname.setAttribute("id", "new-projectname");
            create_projectname.setAttribute("placeholder", "");
            create_project.appendChild(create_projectname);
            project_list.appendChild(create_project);
    });
}

export default editProject;