# Landing Page Project

## Table of Contents

-   [Project Title](Udacity-Landing-Page-Project)

-   [Table of contents](table-of-contents)

-   [Development](development)

-   [Contribute](contribute)

-   [License & Copyright](#License-&-Copyright)

---

## Development

[(Back to top)](#table-of-contents)

>**_JS Version: ES2015/ES6._**

JavaScript code that enhances the functionality and interactivity of a webpage with a navigation menu and scroll-to-top button. Let's break down its functionality:

1.Code begins by defining several global variables, including references to sections, the navigation bar, the navigation menu, the page header.

2.buildNav() function is responsible for dynamically building the navigation menu based on the available sections in the HTML document. It iterates over the sections, creates list items and anchor links for each section, and appends them to the navigation menu.

3.scrollToSection() function is an event handler for clicking on navigation links. It prevents the default anchor link behavior, extracts the target section's ID from the clicked link, and smoothly scrolls the page to the target section.

4.setActiveSection() function determines the active section based on its position in the viewport. It applies a special class, "your-active-class," to the active section and updates the corresponding navigation link with the class "active_button" to visually indicate the current section to the user.

5.toggleNavBar() function controls the visibility of the page header (navbar) based on user scrolling activity. When the user scrolls, the header's opacity is set to 1 to make it visible. After a certain timeout period (6 seconds), the header's opacity is set back to 0, making it hidden again.

6.scroll event listener is added to the window object, which triggers the setActiveSection() and toggleNavBar() functions whenever the user scrolls the page.

7.navigation menu has a click event listener attached to it. It checks if the clicked element has the class "menu__link" (to ensure a link within the navigation menu was clicked), and if so, it calls the scrollToSection() function to scroll to the corresponding section.


# Contribute

**- Udacity**

# License & Copyright


 Udacity - Modified by Samer Al Balushi
