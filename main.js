fetch('websites.json')
  .then(response => response.json())
  .then(data => displayWebsites(data))
  .catch(error => console.error('Error loading website data:', error));

function displayWebsites(websites) {
  const listContainer = document.getElementById('website-list');

  websites.forEach(site => {
    const siteDiv = document.createElement('div');
    siteDiv.classList.add('website');

    const link = document.createElement('a');
    link.href = site.link;
    link.textContent = site.link;
    link.target = '_blank';

    const description = document.createElement('p');
    description.textContent = site.description;

    siteDiv.appendChild(link);
    siteDiv.appendChild(description);

    if (site.warning) {
      const warning = document.createElement('p');
      warning.classList.add('warning');
      warning.textContent = `Warning: ${site.warning}`;
      siteDiv.appendChild(warning);
    }

    listContainer.appendChild(siteDiv);
  });
}
