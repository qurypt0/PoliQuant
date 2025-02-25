// ==================== Dark Mode Toggle with System Preference ====================
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Function to toggle dark mode
const toggleDarkMode = () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
};

// Check for saved dark mode preference or system preference
const savedMode = localStorage.getItem('dark-mode');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedMode === 'true' || (savedMode === null && systemPrefersDark)) {
  body.classList.add('dark-mode');
}

// Event listener for dark mode toggle button
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', toggleDarkMode);
}

// ==================== Smooth Scrolling ====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==================== Dynamic Content Loading ====================
const loadArticles = async () => {
  try {
    const response = await fetch('data/articles.json'); // Replace with your JSON file or API endpoint
    const articles = await response.json();

    const articlesContainer = document.querySelector('.articles');
    if (articlesContainer) {
      articlesContainer.innerHTML = articles
        .map(
          (article) => `
          <div class="article">
            <h3>${article.title}</h3>
            <p>${article.summary}</p>
            <a href="${article.link}">Read More</a>
          </div>
        `
        )
        .join('');
    }
  } catch (error) {
    console.error('Error loading articles:', error);
  }
};

// Load articles on page load
window.addEventListener('DOMContentLoaded', loadArticles);

// ==================== Infinite Scroll ====================
let isLoading = false;
const loadMoreArticles = async () => {
  if (isLoading) return;
  isLoading = true;

  try {
    const response = await fetch('data/more-articles.json'); // Replace with your JSON file or API endpoint
    const newArticles = await response.json();

    const articlesContainer = document.querySelector('.articles');
    if (articlesContainer) {
      newArticles.forEach((article) => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');
        articleElement.innerHTML = `
          <h3>${article.title}</h3>
          <p>${article.summary}</p>
          <a href="${article.link}">Read More</a>
        `;
        articlesContainer.appendChild(articleElement);
      });
    }
  } catch (error) {
    console.error('Error loading more articles:', error);
  } finally {
    isLoading = false;
  }
};

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 100) {
    loadMoreArticles();
  }
});

// ==================== Animations with IntersectionObserver ====================
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
};

// Initialize animations
animateOnScroll();

// ==================== Debounced Search Functionality ====================
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

const setupSearch = () => {
  const searchInput = document.getElementById('searchInput');
  const articlesContainer = document.querySelector('.articles');

  if (searchInput && articlesContainer) {
    const handleSearch = debounce((e) => {
      const searchTerm = e.target.value.toLowerCase();
      const articles = articlesContainer.querySelectorAll('.article');

      articles.forEach((article) => {
        const title = article.querySelector('h3').textContent.toLowerCase();
        const summary = article.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchTerm) || summary.includes(searchTerm)) {
          article.style.display = 'block';
        } else {
          article.style.display = 'none';
        }
      });
    }, 300);

    searchInput.addEventListener('input', handleSearch);
  }
};

// Initialize search functionality
setupSearch();

// ==================== Lazy Loading for Images ====================
const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    },
    { rootMargin: '0px 0px 200px 0px' } // Load images 200px before they come into view
  );

  images.forEach((img) => {
    observer.observe(img);
  });
};

// Initialize lazy loading
lazyLoadImages();

// ==================== Responsive Navigation Menu ====================
const setupResponsiveNav = () => {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
};

// Initialize responsive navigation
setupResponsiveNav();

// ==================== Form Submission with Fetch API ====================
const validateForm = () => {
  const form = document.getElementById('subscribeForm');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (!email || !email.includes('@')) {
        showToast('Please enter a valid email address.', 'error');
        return;
      }

      try {
        const response = await fetch('https://api.example.com/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          showToast('Subscription successful!', 'success');
          form.reset();
        } else {
          showToast('Subscription failed. Please try again.', 'error');
        }
      } catch (error) {
        showToast('An error occurred. Please try again.', 'error');
      }
    });
  }
};

// Initialize form validation
validateForm();

// ==================== Toast Notifications ====================
const showToast = (message, type) => {
  const toast = document.createElement('div');
  toast.classList.add('toast', type);
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
};

// ==================== Initialize All Features ====================
window.addEventListener('DOMContentLoaded', () => {
  loadArticles();
  animateOnScroll();
  setupSearch();
  lazyLoadImages();
  setupResponsiveNav();
  validateForm();
});