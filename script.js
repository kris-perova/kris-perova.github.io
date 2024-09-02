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
        const paragraphElement = document.createElement('p');
        const anchorElement = document.createElement('a');
        leftButton.className = 'left-button';
        anchorElement.href = href;
        anchorElement.textContent = 'Play';
        listItem.appendChild(leftButton);
        leftButton.appendChild(paragraphElement);
        paragraphElement.appendChild(anchorElement);
    }

    function createGitButton (listItem, hrefGit) {
        const rightButton = document.createElement('div');
        const anchorElement = document.createElement('a');
        const buttonElement = document.createElement('img');
        rightButton.className = 'right-button';
        anchorElement.href = hrefGit;
        buttonElement.src = 'github.png';
        listItem.appendChild(rightButton);
        rightButton.appendChild(anchorElement);
        anchorElement.appendChild(buttonElement);
    }

    projects.forEach(project => {
        const listItem = document.createElement('li');

        const nameProject = document.createElement('p');
        nameProject.textContent = project.name;
        nameProject.className = 'project-name';
        listItem.appendChild(nameProject);

        const descriptionProject = document.createElement('p');
        descriptionProject.textContent = project.description;
        listItem.appendChild(descriptionProject);

        createPlayButton(listItem, project.url);
        createGitButton(listItem, project.gitHubUrl);
        projectList.appendChild(listItem);
    });
});