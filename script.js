document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            name: 'Quote machine',
            url: 'https://github.com/kris-perova/quote-machine'
        },
        {
            name: 'Markdown Previewer',
            url: 'https://github.com/kris-perova/markdown-previewer'
        }
    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = project.url;
        link.textContent = project.name;
        listItem.appendChild(link);
        projectList.appendChild(listItem);
    });
});