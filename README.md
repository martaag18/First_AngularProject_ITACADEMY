# S5. Angular Basics


|   |   |   |
|---|---|---|
| ![image](https://github.com/user-attachments/assets/4171a779-ef10-4bbd-9891-fb14ae850665) | ![image](https://github.com/user-attachments/assets/197382d5-c5c9-4478-80e0-06c42920213e) | ![image](https://github.com/user-attachments/assets/c44e15bc-a379-46da-8bd1-4019af368fc3) |



## 📄 Description

In this project, we are building a digital onboarding application using Angular. 
The application will display a series of onboarding steps, where each step contains a phrase and an image. 
The user will be able to navigate through the steps using buttons, and the UI will update to reflect the current step. 
This project focuses on creating components, using services, and passing data between parent and child components.



## 🚀 Technologies Used

HTML/SASS/Bootstrap 5: For structuring and styling the application to ensure responsiveness and a user-friendly interface.
Angular: Framework for building the application, including components, services, and data binding.
Interfaces: To define the structure of data used across components.
@Input(): For passing data from parent to child components.
Angular 19 directives @if @else @for


### 📋 Requirements

To run this project, you’ll need:

Node.js (version 14 or higher)
npm (usually included with Node.js)
Angular CLI for project setup and running the application
Visual Studio Code (recommended editor)



## 🌐 Deployment

To run or test changes locally:

Clone the repository:

bash
Copiar código
git clone <repository_url>
Install dependencies:

bash
Copiar código
npm install
Run the application:

bash
Copiar código
ng serve -o


## 📝 Functionality Overview

Step Display:
The application shows one onboarding phrase at a time. The user can navigate between steps using "Next" and "Previous" buttons.

Dynamic Data:
The onboarding phrases and related data are stored in a service and passed to components using an @Input() property.

Navigation:
The user can advance or go back through the onboarding steps, with the interface reflecting the current step.

Step Indicator:
Small indicators (or "dots") are displayed to show the user's progress, with the active step having a different design.

Responsive Design:
The onboarding steps are styled to be responsive, ensuring proper display across various screen sizes.

Animations:
Animations are implemented to smoothly transition between steps.



## ⚙️ Testing Notes

To ensure the functionality works correctly:

Verify that the onboarding phrases are correctly passed from the service to the Escena component.
Check that the "Next" and "Previous" buttons navigate through the steps and that the active step is indicated correctly.
Test the responsiveness of the UI to ensure it looks good on different screen sizes.
Ensure the animation transitions work smoothly when navigating through the steps.



## 💬 Fun Notes

Building this onboarding process will help you practice key Angular concepts like components, services, and data binding. 
By creating this interactive UI, you'll gain a better understanding of how to manage data flow between components and make the user experience seamless and engaging. 
Enjoy implementing these features as you explore Angular!






