document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            name: 'Quote machine',
            description: 'Application for generation random quotes',
            url: 'https://kris-perova.github.io/quote-machine',
            gitHubUrl: 'https://github.com/kris-perova/quote-machine'
        },
        {
            name: 'Markdown Previewer',
            description: 'Application for live preview markdown',
            url: 'https://kris-perova.github.io/markdown-previewer/',
            gitHubUrl: 'https://github.com/kris-perova/markdown-previewer'
        }
    ];

    const projectList = document.getElementById('project-list');

    function createPlayButton(listItem, href) {
        const leftButton = document.createElement('div');
        const anchorElement = document.createElement('a');
        leftButton.className = 'left-button';
        anchorElement.href = href;
        anchorElement.textContent = "Play";
        listItem.appendChild(leftButton);
        leftButton.appendChild(anchorElement);
    }

    function createGitButton (listItem, hrefGit) {
        const rightButton = document.createElement('div');
        const anchorElement = document.createElement('a');
        rightButton.className = 'right-button';
        anchorElement.href = hrefGit;
        anchorElement.textContent = "Link to GitHub";
        listItem.appendChild(rightButton);
        rightButton.appendChild(anchorElement);
    }

    projects.forEach(project => {
        const listItem = document.createElement('li');

        const nameProject = document.createElement('p');
        nameProject.textContent = project.name;
        nameProject.className = 'project-name';
        listItem.appendChild(nameProject);

        const descriptionProject = document.createElement('p');
        descriptionProject.textContent = project.description;
        descriptionProject.className = 'project-description';
        listItem.appendChild(descriptionProject);

        createPlayButton(listItem, project.url);
        createGitButton(listItem, project.gitHubUrl);
        projectList.appendChild(listItem);
    });
});