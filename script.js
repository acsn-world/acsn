document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // 1. घड़ी और अभिवादन (Date, Time and Greeting)
  function updateDateTimeAndGreeting() {
    const timeElement = document.getElementById("current-time");
    const greetingElement = document.getElementById("greeting-text");

    if (!timeElement || !greetingElement) return;

    const now = new Date();
    const hours = now.getHours();

    const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };
    timeElement.textContent = now.toLocaleTimeString("en-US", timeOptions);

    let greetingMessage = "Welcome";
    if (hours >= 5 && hours < 12) {
      greetingMessage = "Good Morning";
    } else if (hours >= 12 && hours < 17) {
      greetingMessage = "Good Afternoon";
    } else if (hours >= 17 && hours < 22) {
      greetingMessage = "Good Evening";
    } else {
      greetingMessage = "Good Night";
    }

    greetingElement.textContent = greetingMessage;
  }

  updateDateTimeAndGreeting();
  setInterval(updateDateTimeAndGreeting, 1000);

  // 2. एडवांस्ड सर्च लॉजिक (Smart & Comprehensive Search)
  function initSearch() {
    const searchForm = document.querySelector(".search-box");
    const searchInput = document.getElementById("search");

    if (!searchForm || !searchInput) return;

    function performSearch(event) {
      event.preventDefault();
      const query = searchInput.value.trim().toLowerCase();

      // अगर सर्च बॉक्स खाली है
      if (query === "") {
        alert("Please enter a term to search!");
        searchInput.focus();
        return;
      }

      // कीवर्ड्स की सूचियाँ (Keyword Lists)
      const toolKeywords = ["tool", "tools", "security", "pass", "password", "hash", "scanner", "check", "checker", "verify"];
      const softwareKeywords = ["software", "softwares", "app", "apps", "antivirus", "firewall", "vpn", "cleaner", "browser"];
      const learningKeywords = ["learn", "learning", "guide", "guides", "tutorial", "tutorials", "course", "article", "doc", "docs"];
      const helpKeywords = ["help", "support", "contact", "faq", "faqs", "question", "about", "terms", "privacy"];

      // मैचिंग चेक (Matching Check)
      const isTool = toolKeywords.some(keyword => query.includes(keyword));
      const isSoftware = softwareKeywords.some(keyword => query.includes(keyword));
      const isLearning = learningKeywords.some(keyword => query.includes(keyword));
      const isHelp = helpKeywords.some(keyword => query.includes(keyword));

      // सही पेज पर रीडायरेक्ट लॉजिक
      if (isTool) {
        window.location.href = "tools.html?q=" + encodeURIComponent(query);
      } else if (isSoftware) {
        window.location.href = "software.html?q=" + encodeURIComponent(query);
      } else if (isLearning) {
        window.location.href = "learning.html?q=" + encodeURIComponent(query);
      } else if (isHelp) {
        window.location.href = "help.html";
      } else {
        // यदि यूज़र ऐसा कुछ लिखे जो आपकी साइट पर नहीं है, तो नया और साफ़ संदेश दिखेगा
        alert("No results found for your query. Please try searching for 'Tools', 'Software', 'Guides', or 'Help'.");
        searchInput.value = "";
        searchInput.focus();
      }
    }

    searchForm.addEventListener("submit", performSearch);
  }

  initSearch();

  // 3. फुटर में करेंट ईयर अपडेट (Current Year Updater)
  function updateCurrentYear() {
    const footerParagraph = document.querySelector(".footer p");
    if (!footerParagraph) return;

    const currentYear = new Date().getFullYear();
    footerParagraph.innerHTML = `&copy; ${currentYear} ACSN. All Rights Reserved.`;
  }

  updateCurrentYear();

  // 4. एक्टिव लिंक हाइलाइटर (Active Nav Links)
  function highlightActiveLinks() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".hero-buttons a, .cards a, .footer-links a");

    navLinks.forEach(function (link) {
      link.classList.remove("active");
      const linkPath = link.getAttribute("href");
      if (linkPath === currentPath) {
        link.classList.add("active");
      }
    });
  }

  highlightActiveLinks();

  window.addEventListener("pageshow", function () {
    highlightActiveLinks();
  });
});