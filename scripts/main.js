
const personalProjects = [
{
    title: "Regen",
    subtitle: "Quantitative Sports Betting Engine",
    cardMessage: "Developed a bot sharp enough to get limited by the books.",
    description:
    "<p>Regen is a fully automated sports betting engine I developed in Python (2,300+ lines, solo). It continuously scrapes live odds using Selenium, stores bet data in an SQL database, and computes expected value by devigging Pinnacle’s sharper lines into fair market prices. The system compares these to BetMGM odds across moneylines, spreads, totals, and player props. +EV opportunities are flagged and posted via a Discord bot using the Discord API.</p>" +
    "<p>Regen has delivered over 50% ROI. Due to sustained profitable betting, I am now limited on BetMGM for MLB, NBA, NHL, and player props.</p>",
    tags: ["Python", "Web Scraping", "SQL", "Data Analysis", "Automation", "Expected Value"],
    icon: `<img src="./projects/regen/icon.png" alt="Regen project icon" class="icon-img" />`,
    image: "./projects/regen/preview.png"
},
{
    title: "SolverSheets",
    subtitle: "Automated Solver Analysis & Study Dashboard",
    cardMessage: "Analyzed 2.3TB of solver data in one dynamic spreadsheet.",
    description:
    "<p>Built a VBA-powered Excel tool to analyze large-scale PioSOLVER outputs. The dashboard generates pivot tables, equity maps, and heuristic breakdowns from .csv reports for deep strategy analysis.</p>" +
    "<p>Users can select scenarios via dropdowns, filter flops by board texture, and visualize optimal strategies using conditional formatting and ranking heuristics.</p>",
    tags: ["Excel", "VBA", "Data Visualization", "Automation", "Heuristics", "Pivot Tables"],
    icon: `<img src="./projects/solversheets/icon.png" alt="Regen project icon" class="icon-img" />`,
    image: "./projects/solversheets/preview.png"
},
{
    title: "Sports Betting Sim",
    subtitle: "Bankroll Risk Simulation via Monte Carlo",
    cardMessage: "Modeled 10,000 bets to forecast ROI and risk of ruin.",
    description:
    "<p>This Excel-based Monte Carlo simulator models bankroll trajectories over thousands of individual bets. Users input their edge, bet size, odds, and number of trials to simulate long-run results and assess expected value, variance, and downside risk.</p>" +
    "<p>The simulator leverages VBA to run 10,000+ randomized bets per click, outputting bankroll curves and outcome histograms. It’s designed to stress-test staking strategies and visualize the volatility of +EV betting systems, especially under the Kelly Criterion or fixed-percentage approaches.</p>",
    tags: ["Excel", "Monte Carlo", "VBA", "Risk Analysis", "Stochastic Modeling", "Expected Value"],
    icon: `<img src="./projects/edgesim/icon.png" alt="Regen project icon" class="icon-img" />`,
    image: "./projects/edgesim/preview.png"
},
{
    title: "NumQuant",
    subtitle: "Macro Dashboard & Equity Scanner",
    cardMessage: "Custom watchlists, earnings, and macro data all in one tool.",
    description:
    "<p>A Python dashboard that aggregates live economic indicators, equity screens, earnings calendars, and yield curve data using APIs and web scraping. Designed for macro-informed trading and portfolio research.</p>" +
    "<p>Includes FOMC calendar, CPI, GDP, inflation expectations, and custom watchlist functionality.</p>",
    tags: ["Python", "APIs", "Web Scraping", "Finance", "Data Visualization", "Macroeconomics"],
    icon: `<img src="./projects/numquant/icon.png" alt="Regen project icon" class="icon-img" />`,
    image: "./projects/numquant/preview.png"
},
{
  title: "Momentum Trading Algo",
  subtitle: "Scripted MACD + EMA Strategy in ThinkorSwim",
  cardMessage: "Automated a manual strategy to eliminate discretionary bias.",
  description:
  "<p>Built a ThinkorSwim strategy script using custom MACD thresholds and an EMA differential to generate long/short signals. Mirrors a manually tested system, now automated to ensure rule-based execution.</p>" +
  "<p>Emphasizes simplicity in trend-following and removes subjectivity from real-time decisions.</p>",
  tags: ["Technical Analysis", "Momentum", "MACD", "EMA", "ThinkorSwim", "Automation"],
  icon: `<img src="./projects/momentumalgo/icon.png" alt="MomentumAlgo project icon" class="icon-img" />`,
  image: "./projects/momentumalgo/preview.png"
},
{
  title: "Tee Time Scraper",
  subtitle: "Automated Tee Time Booker with Weighted Course Preferences",
  cardMessage: "Automates booking of released tee times based on user-defined preferences.",
  description:
  "<p>A Python bot that books golf tee times as soon as they release, based on user-specified course weightings, time windows, and group size. Scrapes availability and automates selection to maximize booking odds.</p>" +
  "<p>Designed for high-demand public systems with limited tee slots.</p>",
  tags: ["Python", "Automation", "Web Scraping", "Prioritization Logic", "Booking Tools", "Scheduling"],
  icon: `<img src="./projects/teetimescraper/icon.png" alt="TeeTimeScraper project icon" class="icon-img" />`,
  image: "./projects/teetimescraper/preview.png"
}
];

const academicProjects = [
{
  title: "Predicting Market Crashes",
  subtitle: "Naive Bayes Market Crash Classifier",
  cardMessage: "Outperformed the S&P 500 nearly 3x over 38 years using macro data.",
  description:
  "<p>Built a Naive Bayes model to predict monthly market crashes using VIX, inflation, unemployment, and more. Strategy sold on predicted crash months and re-entered on stable signals, avoiding large drawdowns.</p>" +
  "<p>Backtesting over 1985–2023 showed a 6600% cumulative return, outperforming the S&P 500 with lower volatility.</p>",
  tags: ["Machine Learning", "Quant Finance", "Backtesting", "Macroeconomics", "Python", "Naive Bayes"],
  icon: `<img src="./projects/crashpredict/icon.png" alt="CrashPredict project icon" class="icon-img" />`,
  image: "./projects/crashpredict/preview.png",
  pdf: "./projects/crashpredict/report.pdf",
},
{
  title: "Asset Pricing Factor Models",
  subtitle: "PCA-Enhanced Fama-French Asset Pricing Study",
  cardMessage: "Tested PCA, liquidity, and sector factors across 101 portfolios.",
  description:
  "<p>Expanded traditional CAPM and Fama-French models with additional factors like momentum, liquidity, and principal components. Assessed model fit using rolling regressions, GRS testing, and variable selection.</p>" +
  "<p>Found that simpler 3-factor models still performed best, highlighting the limits of overfitting in real asset pricing.</p>",
  tags: ["Asset Pricing", "PCA", "Regression", "Portfolio Theory", "Finance", "Machine Learning"],
  icon: `<img src="./projects/factorforecast/icon.png" alt="Factor Forecast project icon" class="icon-img" />`,
  image: "./projects/factorforecast/preview.png",
  pdf: "./projects/factorforecast/report.pdf"
},
{
  title: "Consumer Volatility Forecast",
  subtitle: "Predictive ML Models for ETF Risk",
  cardMessage: "Compared regressions and ensemble trees across XLY and XLP.",
  description:
  "<p>Forecasted 1-year volatility of consumer ETF sectors using regression and random forest models. Included K-means clustering and feature selection to improve interpretability.</p>" +
  "<p>Linear models with fewer lags outperformed more complex ones, emphasizing simplicity and generalization.</p>",
  tags: ["Volatility Forecasting", "Regression", "Random Forest", "Finance", "Time Series", "Python"],
  icon: `<img src="./projects/sectorvol/icon.png" alt="SectorVol project icon" class="icon-img" />`,
  image: "./projects/sectorvol/preview.png",
  pdf: "./projects/sectorvol/report.pdf"
},
{
  title: "BAC Valuation Pitch",
  subtitle: "Two-Stage Dividend Discount Model for Bank of America",
  cardMessage: "Valued Bank of America with a dividend growth approach.",
  description:
  "<p>Built a two-stage Dividend Discount Model (DDM) for BAC, avoiding traditional DCF issues related to non-physical assets. Valuation estimated ~15% upside based on forward dividend growth.</p>" +
  "<p>Pitch included peer comps, macro trends, and regulatory analysis across financial institutions.</p>",
  tags: ["Valuation", "Dividend Discount Model", "Banking", "Fundamental Analysis", "Finance", "Equity Research"],
  icon: `<img src="./projects/bac/icon.png" alt="BAC Pitch project icon" class="icon-img" />`,
  image: "./projects/bac/preview.png",
  pdf: "./projects/bac/report.pdf"
}
];

const workExperience = [
{
company: "United Parcel Service",
location: "Parsippany, NJ",
title: "Technician II, Technology Support",
dates: "May 2025 – Present",
bullets: [
    "Delivered technical support to internal teams, maintaining and configuring hardware and software systems",
    "Provisioned user workstations and supported system rollouts across departments",
    "Ensured system uptime and stability across warehouse and office environments through proactive maintenance",
    "Collaborated with cross-functional teams to troubleshoot IT issues and reduce downtime",
    "Lorem ipsum dipsum dtest ets tse tes tse tes tse tse tes tse tes tse t set est set se tse tes tse test"
]
},
{
company: "Hair Luxe",
location: "Cresskill, NJ",
title: "Financial Operations Analyst",
dates: "Apr 2020 – May 2025",
bullets: [
    "Managed monthly budgeting and expense tracking, identifying cost-saving opportunities that led to a 15% reduction in tech-related expenditures",
    "Created and maintained financial models for forecasting and capital planning using Excel and VBA",
    "Produced variance reports and dashboards to support monthly financial reviews and strategic decisions",
    "Streamlined workflows by automating reporting processes, reducing manual input errors and saving 10 hours/month",
    "Collaborated with ownership to evaluate investment opportunities and assess ROI on technology upgrades and services"
]
}
];

function renderWorkExperience(experienceList) {
const container = document.getElementById("work-experience");
experienceList.forEach(job => {
const card = document.createElement("div");
card.className = "card animated-card";
card.innerHTML = `
<div class="card-header">
    <span class="company-name">${job.company}</span>
    <span class="location">${job.location}</span>
</div>
<div class="subtitle">
    <div class="job-title">${job.title}</div>
    <div class="dates">${job.dates}</div>
</div>
<ul class="work-bullets">
    ${job.bullets.map(b => `<li>${b}</li>`).join("")}
</ul>
`;
container.appendChild(card);
});
}

// Render project cards
function renderProjects(projects, containerId) {
const container = document.getElementById(containerId);
projects.forEach(proj => {
    const card = document.createElement("div");
    card.className = "card";
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-pressed', 'false');
    card.setAttribute('aria-label', `Open details for project ${proj.title}`);

    card.innerHTML = `
    <div class="icon-container">${proj.icon}</div>
    <h3>${proj.title}</h3>
    <div class="subtitle">${proj.subtitle || ""}</div>
    <p class="card-message">${proj.cardMessage || ""}</p>
    <div class="tags">${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    `;
    card.onclick = () => openModal(proj);
    card.onkeydown = (e) => { if(e.key === 'Enter' || e.key === ' ') openModal(proj); };
    container.appendChild(card);
});
}

let scrollPosition = 0
// Modal control
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalTags = document.getElementById("modal-tags");
const modalClose = document.getElementById("modal-close");
const modalImage = document.getElementById("modal-image");
const modalPdfContainer = document.getElementById("modal-pdf-container");
const modalPdf = document.getElementById("modal-pdf");

function openModal(project) {
  modalTitle.textContent = project.title + (project.subtitle ? `: ${project.subtitle}` : "");
  modalDesc.innerHTML = project.description;

  if (project.image) {
    modalImage.src = project.image;
    modalImage.alt = project.title + " preview";
    modalImage.style.display = "block";
  } else {
    modalImage.style.display = "none";
  }

  if (project.pdf) {
  modalPdf.src = project.pdf + '#zoom=fit';
  modalPdfContainer.style.display = "block";
  } else {
  modalPdf.src = "";
  modalPdfContainer.style.display = "none";
  }
  modalTags.innerHTML = "";
  project.tags.forEach(tag => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    modalTags.appendChild(span);
  });

  modal.classList.add("active");

  // LOCK SCROLL
  scrollPosition = window.pageYOffset;
  document.body.classList.add("scroll-lock");
  document.body.style.top = `-${scrollPosition}px`;
}


function closeModal() {
  modal.classList.remove("active");

  // UNLOCK SCROLL
  document.body.classList.remove("scroll-lock");
  document.body.style.top = "";
  window.scrollTo(0, scrollPosition);
}

modalClose.onclick = closeModal;
modal.onclick = (e) => {
if(e.target === modal) closeModal();
};

document.addEventListener("keydown", (e) => {
if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
}
});

// Render projects on page load
renderProjects(personalProjects, "personal-projects");
renderProjects(academicProjects, "academic-projects");
renderWorkExperience(workExperience);
window.onload = () => {
document.querySelector(".container").style.opacity = "1";
};