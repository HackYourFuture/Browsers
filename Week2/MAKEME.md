# Homework Browsers Week 2

## **Todo list**

1. Presentation assignment 1
2. JavaScript 30 Refactors (Optional)
3. Project!
4. Optional: Post-project side project ideas

## **1. Presentation**

Have a look at the assignment over [here](https://github.com/HackYourFuture/presentation-module/blob/main/assignment1.md).

## **2. JavaScript 30 Refactors (Optional)**

If you have time before the start of the project, continue with your JavaScript 30 refactoring that you started last week. These will help you navigate bigger code bases.

## **3. Project**

Have a look at the [project description](../PROJECT.md) to see what to do here.

## **4. Optional: Post-project side project ideas**

> A part of the HackYourFuture curriculum is to work on as many side projects as you can throughout the time you have. This is a nice way to add extra knowledge to your arsenal and show in your CV that you are motivated to learn new technologies. This is also a great time to learn new things as there are plenty of mentors available to help you out in the `#projects` channel! You will not get this amount of time and support once you start working. Have a look at the [hyf_projects repo](https://github.com/HackYourFuture/hyf_projects/blob/main/README.md#project-2-a-try-out-application) for more details.

### 4.1 Project rewrite

During the project you used a specific structure that we prepared for you or that your mentor decided on, but in this kind of project there are many ways to approach it. A way to get a better idea on how folder structures work is by refactoring the same project but use a different guideline of splitting up the components.

In our project we are separating the `view` components away from the `logic` and `data` of our application. This is a very common way of splitting via what is called the Model View Controller method (where controller is synonymous with `logic` and model is synonymous with `data`). In the rest of the curriculum you are going to see this pattern used a lot with varying names, but with a similar idea.

#### 4.1.1 Feature based split
Another way to separate your code that some of our mentors do in their work is to separate it by feature. So instead of a `view` folder you would have a `question` folder that contains all of the logic/html/data that that specific feature needs. Any global data and the initialisation of your app would then be in the main folder. For example:


```
├── public
└── src
    └── features
    |   └── question
    |   |   └── questionHandlers.js
    |   |   └── questionViews.js
    |   |   └── questionData.js
    |   └── timer
    |   |   └── timerHandlers.js
    |   |   └── timerViews.js
    |   |   └── timerData.js
    |   └── ...
    └── util
    app.js
    constants.js
    data.js
```

You can still see the same split in files inside each `feature` folder (handlers as logic, views as views and data as the model) but every feature is split up in a separate folder. In bigger projects this will be mandatory as your `views` folder will be filled with hundreds of files.

To have a go, create a new folder in your quiz folder called `component-structure` and copy over all of the current files in the `src` directory. Then start creating some files in `src` to create this structure. You can copy paste the code from the 'old' structure by looking in the `component-structure` folder. 

We want you to notice how easy it is to make these kinds of changes because we made use of code separation and used imports. Imagine having to change the `index.html` to import all the new files rather than just `app.js` in your `src` folder!

#### 4.1.2 Change data structure to an Object-oriented programming (OOP) methodology
Your `data.js` file in the starter repository contains a simple object with a couple of properties. The manipulation of this data is then handled all over the other files, which could become an issue if you would spend a little longer on this project. The reason is that this data is now `global` and as such can be changed from anywhere to whatever you want. To save ourselves some weird bugs in the future we could rewrite this using the OOP way of thinking by using classes. Classes are outside of the scope of the curriculum as the JavaScript community is moving away from them but if you would get a job in a different programming language you may be working differently.

To have a go, study the idea behind OOP and then change your `data.js` file to export a class called `QuizManager`. Then think about what functionality in other files should be a `method` on the class rather than a function in the different files.