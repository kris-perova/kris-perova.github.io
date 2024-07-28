document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            name: 'Quote machine',
            url: 'https://kris-perova.github.io/quote-machine',
            gitHubUrl: 'https://github.com/kris-perova/quote-machine'
        },
        {
            name: 'Markdown Previewer',
            url: 'https://github.com/kris-perova/markdown-previewer'
        }
    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const listItem = document.createElement('li');

        const newParName = document.createElement('p');
        const link = document.createElement('a');
        link.href = project.url;
        link.textContent = project.name;
        listItem.appendChild(newParName);
        newParName.appendChild(link);

        const newParGit= document.createElement('p');
        const gitHubLink = document.createElement('a');
        gitHubLink.href = project.gitHubUrl;
        gitHubLink.textContent = 'Link to GitHub';
        listItem.appendChild(newParGit);
        newParGit.appendChild(gitHubLink);
        projectList.appendChild(listItem);
    });
});