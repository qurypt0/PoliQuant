# PoliQuant Articles

Welcome to the **PoliQuant Articles** repository! This project is a website dedicated to providing in-depth quantitative analysis and insights on Polymarket events. The site features a clean, modern design with a focus on readability and user experience.

## Features

- **Responsive Design**: The website is fully responsive and works seamlessly on all devices.
- **Dark Mode**: Includes a dark mode toggle for better readability in low-light environments.
- **Dynamic Content**: Articles are loaded dynamically using JavaScript.
- **Smooth Scrolling**: Smooth scrolling for anchor links.
- **Search Functionality**: Allows users to search for articles by title.

## Technologies Used

- **HTML5**: For structuring the content.
- **CSS3**: For styling the website.
- **JavaScript**: For dynamic content loading and interactivity.
- **Google Fonts**: For typography.

## Code Overview

### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="PoliQuant Articles - Explore in-depth quantitative analysis and insights on Polymarket events.">
  <link rel="icon" href="images/favicon.png" type="image/png">
  <title>PoliQuant Articles</title>
  <link href="https://fonts.googleapis.com/css2?family=Georgia:wght@400;700&family=Times+New+Roman:wght@400;700&display=swap" rel="stylesheet">
  <style>
    /* General Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    /* Body styles */
    body {
      font-family: 'Georgia', serif;
      background-color: #f9f9f9;
      color: #333;
      line-height: 1.8;
      padding: 20px;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* Header Section */
    header {
      background-color: #2c3e50;
      color: #fff;
      text-align: center;
      padding: 30px 20px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-bottom: 4px solid #d4af37;
    }

    header h1 {
      font-size: 3rem;
      font-weight: 600;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    header p {
      font-size: 1.3rem;
      margin-top: 10px;
      font-weight: 400;
      line-height: 1.4;
    }

    /* Article Section */
    .articles {
      max-width: 800px;
      margin: 40px auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .articles h2 {
      font-size: 2.5rem;
      color: #2c3e50;
      margin-bottom: 20px;
    }

    .articles .article {
      margin-bottom: 20px;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    }

    .articles .article h3 {
      font-size: 2rem;
      color: #2c3e50;
      margin-bottom: 10px;
    }

    .articles .article p {
      font-size: 1.1rem;
      color: #555;
      margin-bottom: 20px;
      line-height: 1.8;
    }

    .articles .article a {
      color: #d4af37;
      text-decoration: none;
      font-weight: bold;
    }

    .articles .article a:hover {
      text-decoration: underline;
    }

    /* Footer Section */
    footer {
      background-color: #2c3e50;
      color: #fff;
      text-align: center;
      padding: 20px 0;
      margin-top: auto;
      font-size: 0.9rem;
      border-top: 4px solid #d4af37;
    }

    footer p {
      color: #d4af37;
    }

    /* Responsive design adjustments */
    @media (max-width: 768px) {
      header h1 {
        font-size: 2.2rem;
      }

      header p {
        font-size: 1.1rem;
      }

      .articles h2 {
        font-size: 2rem;
      }

      .articles .article h3 {
        font-size: 1.8rem;
      }
    }
  </style>
</head>
<body>
  <!-- Header -->
  <header>
    <img src="images/loga.png" alt="PoliQuant Logo">
    <h1>PoliQuant Articles</h1>
    <p>In-Depth Analysis and Insights on Polymarket Events</p>
  </header>

  <!-- Articles Section -->
  <section class="articles">
    <h2>Latest Articles</h2>

    <!-- Article 1 -->
    <div class="article">
      <h3>Understanding Market Volatility</h3>
      <p>
        Market volatility is a key concept in quantitative analysis. In this article, we explore the factors driving volatility and how to model it effectively. Learn how to identify trends and make data-driven decisions.
      </p>
      <a href="#">Read More</a>
    </div>

    <!-- Article 2 -->
    <div class="article">
      <h3>The Future of Prediction Markets</h3>
      <p>
        Prediction markets are evolving rapidly. This article dives into the latest trends, including the role of AI and machine learning in shaping the future of these markets.
      </p>
      <a href="#">Read More</a>
    </div>

    <!-- Article 3 -->
    <div class="article">
      <h3>Quantitative Models in Trading</h3>
      <p>
        Discover how quantitative models are revolutionizing trading strategies. We break down the most effective models and how they can be applied to real-world scenarios.
      </p>
      <a href="#">Read More</a>
    </div>

    <!-- Article 4 -->
    <div class="article">
      <h3>Weekly Market Analysis</h3>
      <p>
        Stay updated with our weekly analysis of market movements. This week, we focus on the impact of geopolitical events on market trends.
      </p>
      <a href="#">Read More</a>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <p>&copy; 2025 PoliQuant | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
  </footer>

  <!-- Link to JavaScript File -->
  <script src="script.js" defer></script>
</body>
</html>