# AboutHenri
This project contains files to generate a static website showcasing my hobbies, interests and professional skillset.  This project is important in the sense that it serves as a testimony to my **front-end** skills.  More specifically, this webpage is crafted from **HTML**, **Cascading Style Sheets (CSS)**, and **JavaScript** files.

## Table of Contents
* [**Installation**](https://github.com/HenriBranken/AboutHenri/new/master?readme=1#installation)
* [**Usage**](https://github.com/HenriBranken/AboutHenri/new/master?readme=1#usage)
* [**Folder Structure**](https://github.com/HenriBranken/AboutHenri/new/master?readme=1#folder-structure)
* [**Credits**](https://github.com/HenriBranken/AboutHenri/new/master?readme=1#credits)

### Installation
1. Clone the repo to your local computer.  In order to do this, you need to navigate to the Code button on the GitHub website.
  * You may clone via either **HTTPS** or **SSH**.
  * Alternatively, you may download a **ZIP** file.  Please see the example picture below:
![codeDropdown](https://user-images.githubusercontent.com/35679864/220116355-e790e4ca-f682-46e5-923f-9f3ce6f68745.png)  
2. Open the contents that you have downloaded, and double-click on the `index.html` file.
3. Alternatively, you can also open the folder in **Visual Studio Code**, navigate to `index.html`, and click on the `Go Live` button.
4. At this stage, you should be able to see the website on an internet browser on your computer.
5. Fom here, you may edit the source files (with your favourite text editor) to make changes to the website as you see fit.

### Usage
As a general rule of thumb, one can make the following categorization:
* `.html` files provide the _structure_ of webpages.
* `.css` files give the _visual representation_ (styling) of webpages.
* `.js` files control the _behaviour_ of webpages.

In any webapp project, it is always important to apply the **"Separation of Concerns"** mindset.  In other words, isolate the `.html`, `.css`, `.js` files in separate folders.
In other words, don't mix `.html`, `.css` and `.js` files in your working directory.  By separating different file types into separate folders makes your workflow more logical, and also more manageable.  Following this train of thought, you must also create a separate folder for all the images used in the webapp; feel free to create a sub-hierarchy in the images folder (e.g. logos, buttons, background, foreground).

If you want to implement a new feature in the webpage, or fix a code bug, it's best practise to checkout to another git branch (other than `master`), and proceed from there.  Of course, this `README.md` is not a git tutorial, so to get more information on git branching, visit this [site](https://www.youtube.com/watch?v=e2IbNHi4uCI&ab_channel=freeCodeCamp.org).

It is very important to be comfortable with the following Git basics:
```
git status
git add
git commit
```
If this is new to you, please watch "Introduction to GitHub" videos on YouTube (for example, [this](https://www.youtube.com/watch?v=RGOj5yH7evk&ab_channel=freeCodeCamp.org) video).  Also, don't forget the Git [documentation](https://git-scm.com/doc).

If you want to browse the webapp with _GitHub Pages_ doing the hosting, please visit this [**link**](https://henribranken.github.io/AboutHenri/).

### Folder Structure
![folder_structure](https://user-images.githubusercontent.com/35679864/220106731-d681d9f8-82e6-48d6-a66e-ab97f15fd7c8.png)

For each `.html` page, there will be a corresponding `.scss` and `.js` file.  For example, the following three files are "connected":
* `nihongo.html`
* `scss/_nihongo.scss`  This file defines the styling of `nihongo.html`.
* `js/nihongo-script.js`  This file defines the behaviour when interacting with `nihongo.html`.

There are, however, some exceptions, viz.:
* `scss/_config.scss`  Initialises the global styling, and contains `@mixin` definitions.
* `scss/main.scss`  Pulls all of the `.scss` files together in one spot, defines header navigation styling, as well as styling for _"like"_ and _"save for later"_ buttons.  Bear in mind that `css\main.css` is the file that gets generated from `scss\main.scss`.
* `js/global-script.js`  Defines the behaviour when clicking on _"like"_ and _"save for later"_ buttons.

Please **do not tamper** with the `css` folder and its contents.  As already mentioned, `css/` gets populated by the `scss/main.scss` file, so there is no extra work needed on your side.  Just make sure that your SCSS Extention is **"Watching"** your `.scss` work, so that a new `css/main.css` file gets generated everytime you save a `.scss` file.  In **Visual Studio Code**, please make sure that you are acquainted with the following two statuses:

![eyeWatching](https://user-images.githubusercontent.com/35679864/220115095-71a7df10-8488-475f-af31-b211a4b2049f.png)

![Watching](https://user-images.githubusercontent.com/35679864/220115157-0add98d4-a72b-404a-af91-dda17475b616.png)

### Credits
Thank you to the **HyperionDev** team in supervising this project.
