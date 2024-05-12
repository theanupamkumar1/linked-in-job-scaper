import requests
from bs4 import BeautifulSoup

# Define the URL of the job posting website
url = "https://www.example.com/jobs?position=desired_position"

# List to store job descriptions
job_descriptions = []

for i in range(1, 51):  # Loop through the top 50 job posts
    # Send a GET request to the URL
    response = requests.get(url + "&page=" + str(i))

    # Parse the HTML content of the page with BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find the element that contains the job description
    job_description_element = soup.find('div', class_='job-description')

    # Extract the job description from the element
    job_description = job_description_element.text

    # Add the job description to the list
    job_descriptions.append(job_description)

# Print the job descriptions
for i, job_description in enumerate(job_descriptions):
    print(f"Job {i+1}: {job_description}\n")