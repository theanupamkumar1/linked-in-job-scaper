// function scrapeJobDescriptions() {
//   const jobDescriptions = [];
//   const jobList = document.querySelector(".scaffold-layout__list-container ul");

//   if (jobList) {
//     const jobItems = jobList.querySelectorAll(
//       ".jobs-search-results__list-item"
//     );

//     jobItems.forEach((jobItem) => {
//       // Your existing code to extract job details
//       // ...
//     });

//     // Handle pagination
//     const nextPageLink = document.querySelector(
//       '.jobs-search-results-list__pagination a[aria-label="Next"]'
//     );
//     if (nextPageLink) {
//       nextPageLink.click();
//       setTimeout(() => {
//         scrapeJobDescriptions(); // Recursively call the function to scrape the next page
//       }, 2000); // Adjust the delay as needed
//     } else {
//       const csvContent = jobDescriptions.join("\n");
//       const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
//       const link = document.createElement("a");
//       link.href = URL.createObjectURL(blob);
//       link.download = "job_descriptions.csv";
//       link.click();
//     }
//   } else {
//     console.log("Unable to find job list container.");
//   }
// }

// scrapeJobDescriptions();

//------------------------------temopray testing-------------------

const jobListContainer = document.querySelector(
  ".scaffold-layout__list-container"
);
let scrapedJobs = []; // Keep track of already scraped job titles

if (jobListContainer) {
  window.addEventListener("scroll", () => {
    const newJobListings = jobListContainer.querySelectorAll(
      ".job-card-list__title"
    );
    for (let i = 0; i < newJobListings.length; i++) {
      const jobTitle = newJobListings[i].textContent;
      if (!scrapedJobs.includes(jobTitle)) {
        scrapedJobs.push(jobTitle);
        console.log(jobTitle);
      }
    }
  });

  // Run the initial scrape for loaded jobs
  const strongElements = jobListContainer.querySelectorAll(
    ".job-card-list__title"
  );
  for (let i = 0; i < strongElements.length; i++) {
    console.log(strongElements[i].textContent);
    scrapedJobs.push(strongElements[i].textContent); // Add to scraped list
  }
} else {
  console.log(
    "Container with class 'scaffold-layout__list-container' not found."
  );
}

//----------------------------------------------------working JOB description extraction by adding the class-------------------------------------------------------------------------

// function addFocusAttribute() {
//     const detailDiv = document.querySelector(".scaffold-layout__detail");

//     if (detailDiv) {
//       const jobDescriptionText = detailDiv.querySelector(".jobs-description-content__text .mt4");

//       if (jobDescriptionText) {
//         // Add the data attribute
//         detailDiv.setAttribute("data-artdeco-is-focused", "true");

//         // Get and display the job description text
//         console.log(jobDescriptionText.textContent);
//       } else {
//         console.log("Job description text element not found.");
//       }
//     } else {
//       console.log("Detail div with class 'scaffold-layout__detail' not found.");
//     }
//   }

//   // Call the function to execute the script
//   addFocusAttribute();

//------------------------------------------------------------working code for scaping job listing--------------------

// const container = document.querySelector(".scaffold-layout__list-container");
// if (container) {
//   const strongElements = container.querySelectorAll(".job-card-list__title");
//   for (let i = 0; i < strongElements.length; i++) {
//     console.log(strongElements[i].textContent);
//   }
// } else {
//   console.log(
//     "Container with class 'scaffold-layout__list-container' not found."
//   );
// }
