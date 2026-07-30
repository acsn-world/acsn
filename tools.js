// HTML एलिमेंट्स को सेलेक्ट करना
const basicTab = document.getElementById("basicTab");
const advancedTab = document.getElementById("advancedTab");
const proTab = document.getElementById("proTab");

const basicPanel = document.getElementById("basicPanel");
const advancedPanel = document.getElementById("advancedPanel");
const proPanel = document.getElementById("proPanel");

// बटन और पैनल्स की लिस्ट
const tabs = [basicTab, advancedTab, proTab];
const panels = [basicPanel, advancedPanel, proPanel];

// शुरुआत में बेसिक बटन को Active सेट करना
basicTab.classList.add("active");

// टैब और पैनल बदलने का फ़ंक्शन
function showPanel(selectedPanel, selectedTab) {
  // 1. सभी पैनल्स को छुपाएं
  panels.forEach(panel => panel.hidden = true);
  
  // 2. सभी बटन से 'active' क्लास हटाएं
  tabs.forEach(tab => tab.classList.remove("active"));

  // 3. चुने गए पैनल को दिखाएं और चुने गए बटन पर 'active' क्लास लगाएं
  selectedPanel.hidden = false;
  selectedTab.classList.add("active");
}

// बटन पर क्लिक इवेंट्स लगाना
basicTab.addEventListener("click", function () {
  showPanel(basicPanel, basicTab);
});

advancedTab.addEventListener("click", function () {
  showPanel(advancedPanel, advancedTab);
});

proTab.addEventListener("click", function () {
  showPanel(proPanel, proTab);
});