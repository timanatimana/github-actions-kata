# Task 3

Now, when the CI is working for sometime, you realized that you have a lot of unused runs. One third of your team is working on the python code for backend, another part on the desktop app and the rest on the company website.

You still want to use monorepo for the code. To save the costs you were asked you to only run tests for desktop-app, when the code in desktop-app directory changes. Moreover you know that the tests are currently only written for the `ts` files. So no tests are needed for when other files change (e.g, css, html or tsx).

## Definition of done

- [ ] unit tests for app-task-2 are only run when ts files in app-task-2 are changed
- [ ] unit tests for app-task-2 are not run when other files are changed (e.g. css, html, tsx or e2e)

## Hints & help

<details>
<summary>Those hints will help you start</summary>

- https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#running-your-workflow-only-when-a-push-affects-specific-files
</details>

<details>
<summary>In case you are stuck, you can use the resources listed below. Try to first look yourself. The resources are listed in the order from minimal to full help</summary>

1. [Branch with ready solution](https://github.com/Ubax/github-actions-kata/pull/4)
</details>
