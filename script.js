document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            name: 'Quote machine',
            url: 'https://kris-perova.github.io/quote-machine',
            gitHubUrl: 'https://github.com/kris-perova/quote-machine'
        },
        {
            name: 'Markdown Previewer',
            url: 'https://kris-perova.github.io/markdown-previewer/',
            gitHubUrl: 'https://github.com/kris-perova/markdown-previewer'
        }
    ];

    const projectList = document.getElementById('project-list');

    function createListElement(listItem, href, textContent) {
        const paragraphElement = document.createElement('p');
        const anchorElement = document.createElement('a');
        anchorElement.href = href;
        anchorElement.textContent = textContent;
        listItem.appendChild(paragraphElement);
        paragraphElement.appendChild(anchorElement);
    }

    function createGitButton (listItem, hrefGit) {
        const anchorElement = document.createElement('a');
        const buttonElement = document.createElement('img');
        anchorElement.href = hrefGit;
        buttonElement.src = 'github.png';
        listItem.appendChild(anchorElement);
        anchorElement.appendChild(buttonElement);
    }

    projects.forEach(project => {
        const listItem = document.createElement('li');
        createListElement(listItem, project.url, project.name);
        createGitButton(listItem, project.gitHubUrl);
        projectList.appendChild(listItem);
    });
});