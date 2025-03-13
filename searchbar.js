document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.searchbar input');
	const searchBar = document.querySelector('.searchbar');

    searchInput.addEventListener('focus', function() {
       searchBar.style.boxShadow = '0 0 15px rgba(255, 250, 242, 0.7)';

    });

    searchInput.addEventListener('blur', function() {
		searchBar.style.boxShadow = 'none';
    });
});