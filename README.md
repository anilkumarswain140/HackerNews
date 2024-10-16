
# Hacker News Post Viewer

## Overview

The **Hacker News Post Viewer** is a web application that allows users to browse the latest posts from Hacker News. It fetches the latest stories using the Hacker News API and displays them in an organized and user-friendly interface. The app supports infinite scrolling, meaning that as the user scrolls down, more posts are automatically loaded.

## Features

- **Real-time Updates**: Automatically fetches the latest posts from Hacker News.
- **Infinite Scrolling**: Load more posts as you scroll down the page.
- **User-Friendly Interface**: Designed with simplicity in mind for easy navigation.

## Prerequisites

Before you begin, ensure you have the following software installed:

- **Node.js**: The application is built using Node.js, which you can download and install from [nodejs.org](https://nodejs.org/). Make sure you have Node.js version 18.
- **Angular CLI**: This application uses Angular for building the user interface. Install the Angular CLI globally by running the following command in your terminal:
    ```bash
    npm i @angular/cli@16.2.16 -g
    ```

## Installation

Follow these steps to set up the application on your local machine:

1. **Clone the Repository**: Open your terminal and clone the repository using the command below. This will create a local copy of the project.
    ```bash
    git clone https://github.com/your-username/hacker-news-post-viewer.git
    ```
    Replace `your-username` with your actual GitHub username.

2. **Navigate to the Project Directory**: Change into the directory of the cloned project.
    ```bash
    cd hacker-news-post-viewer
    ```

3. **Install Dependencies**: Install all required dependencies for the project by running:
    ```bash
    npm install
    ```
    This command reads the `package.json` file and installs all necessary libraries and tools needed for the application to run.

## Running the Application

1. **Serve the Application**: To start the application in development mode, execute the following command:
    ```bash
    ng serve
    ```
    This command compiles the application and starts a local development server. By default, it will be accessible at [http://localhost:4200](http://localhost:4200).

2. **Open Your Web Browser**: Open your preferred web browser and go to [http://localhost:4200](http://localhost:4200) to view the application. You should see the Hacker News Post Viewer interface, displaying the latest posts.


# Implemention of Firebase GitHub Action CI/CD 

CI/CD done for automatic deployments

This document provides an overview of enabling Continuous Integration and Continuous Deployment (CI/CD) for an Angular project using Firebase and GitHub Actions.

## Overview

Integrating Firebase with GitHub Actions allows you to automate the deployment of your Angular application whenever changes are pushed to your repository. This setup ensures that your application is always up-to-date and minimizes the risk of human error during deployment.

### Benefits of CI/CD

- **Automation**: Automatically deploy your app on every push to the main branch.
- **Consistency**: Ensure that the same deployment process is followed every time.
- **Speed**: Reduce the time from code commit to deployment.
- **Reliability**: Minimize deployment errors and ensure that the application is tested before deployment.

## Prerequisites

1. **Firebase Account**: Ensure you have a Firebase project set up.
2. **Firebase CLI**: Install the Firebase CLI on your local machine.
3. **GitHub Repository**: Your Angular project should be hosted on GitHub.

## Steps to Enable CI/CD with GitHub Actions

1. **Set Up Firebase in Your Angular Project**:
   - Install Firebase and AngularFire in your Angular project:
     ```bash
     ng add @angular/fire
     ```
   - Configure Firebase in your application using the Firebase configuration object.

2. **Create Firebase Hosting Configuration**:
   - Run the following command to initialize Firebase Hosting:
     ```bash
     firebase init hosting
     ```
   - Follow the prompts to set up hosting for your project.

3. **Add Firebase Service Account to GitHub Secrets**:
   - Go to your Firebase console, navigate to **Project Settings** > **Service accounts**, and generate a new private key.
   - Save the key as JSON and add it to your GitHub repository secrets (under **Settings** > **Secrets and variables** > **Actions**). Name it `FIREBASE_SERVICE_ACCOUNT`.

4. **Triggering the Workflow**:
   - Once set up, the workflow is triggered automatically on every push to the main branch. Check the **Actions** tab in your GitHub repository to monitor the workflow progress and logs.

# Alternative to deploy 
  Just push your changes to Github branch the Github action will trigger automatic deployment 

## App is Live on this URL  
https://hackernews-1a522--pr3-dev-mc2813d8.web.app/


## Video documentation for codebase overview
https://drive.google.com/file/d/158Aldmqpm2Jc67SKo7Q8ZV5QUOE13k7u/view?usp=sharing

## Usage

- Upon loading the application, it will automatically fetch and display the latest posts from Hacker News.
- As you scroll down the page, additional posts will be loaded automatically due to the infinite scrolling feature.
- You can click on any post to view more details about it (if applicable).

## Acknowledgments

- **Hacker News API** for providing the data source for posts.
- **Angular** for the powerful framework that makes building the application possible.

## Key Sections Explained:

1. **Overview**: Introduces the application and its purpose.
2. **Features**: Highlights key functionalities of the application.
3. **Prerequisites**: Lists software requirements necessary for running the app.
4. **Installation**: Step-by-step guide on how to set up the application locally, including cloning the repository and installing dependencies.
5. **Running the Application**: Instructions on how to run the app and where to access it in a web browser.
6. **Usage**: Brief usage instructions for interacting with the app.
7. **Acknowledgments**: Credits to external sources and technologies used in the project.
