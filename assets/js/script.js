 const mobileToggle = document.getElementById('mobileToggle');
        const navMenu = document.getElementById('navMenu');
        const navItems = document.querySelectorAll('.nav-item');
        const searchBtn = document.getElementById('searchBtn');
        const searchContainer = document.getElementById('searchContainer');
        const searchOverlay = document.getElementById('searchOverlay');
        const closeSearchBtn = document.getElementById('closeSearchBtn');
        const searchInput = document.getElementById('searchInput');

        // Mobile menu toggle
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Dropdown toggle on mobile
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                if (window.innerWidth <= 968) {
                    e.stopPropagation();
                    item.classList.toggle('active');
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });

        // Open search
        searchBtn.addEventListener('click', () => {
            searchContainer.classList.add('active');
            searchOverlay.classList.add('active');
            setTimeout(() => {
                searchInput.focus();
            }, 300);
        });

        // Close search
        function closeSearch() {
            searchContainer.classList.remove('active');
            searchOverlay.classList.remove('active');
            searchInput.value = '';
        }

        closeSearchBtn.addEventListener('click', closeSearch);
        searchOverlay.addEventListener('click', closeSearch);

        // Close search on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchContainer.classList.contains('active')) {
                closeSearch();
            }
        });