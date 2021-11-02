# How to hand in homework

In this module you'll submit your homework only using GIT and GitHub.

1. [GitHub](https://www.github.com/HackYourFuture/Browsers)

## 1. GitHub homework guide

<a href="http://www.youtube.com/watch?feature=player_embedded&v=CpYARPYGQU8" target="_blank"><img src="./assets/submit-homework.png" width="400" height="250" alt="HYF Video" /></a>

Watch the video (by clicking the image) or go through the following walk-through to learn how to submit your homework:

ONE TIME ONLY (START OF EVERY MODULE)

This module is slightly different as you have already done the one time setup for the homework repo in the previous module. We will be using the same fork as we used there (`https://www.github.com/HackYourHomework/Homework-classXX`).

EVERY WEEK

1. Checkout your `main` branch.
2. Do a `git pull` on your `main` branch to ensure that you are up to date with the latest version.
3. With your `main` branch checked out, create a new branch for each week you have homework. For example, for the week 1 homework for Browsers create a branch called `YOUR_NAME-w1-Browsers`. Because the new branch will be based on the `main` branch rather than a previous homework branch a new pull request will not be contaminated with any previous work already reviewed. Don't forget to checkout the new branch after creating it.
4. Make your homework!
5. Once you're finished, add your homework to a commit. There will be some test reports and config files added by the test runner, this is expected and should be added! These will help the reviewer analyse where you might have run into issues with the homework.
6. Create the commit (`git commit`). Make the commit message meaningful, for example `finished project for homework week1`.
7. Push the branch to your forked repository.
8. On the GitHub page of your forked repository, click on the `create pull request` button. Make sure the `base repository` is the base repository from which you created your fork (e.g. `Homework-classXX`), on branch `main`.
8. Give the pull request a title in the following format:

```markdown
Homework week 1 <Your name>
```

9. Submit the pull request from your forked repository branch into the `main` branch

If you have any questions or if something is not entirely clear ¯\\\_(ツ)\_/¯, please ask/comment on Slack!

