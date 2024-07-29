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

    projects.forEach(project => {
        const listItem = document.createElement('li');
        createListElement(listItem, project.url, project.name);
        createListElement(listItem, project.gitHubUrl, 'Link to GitHub');
        projectList.appendChild(listItem);
    });
});