# Task 1

Time to warm up. In your first task you will create a GitHub action that prints basic information about itself and then lists all the files that are currently in the repository

## Definition of done

- [ ] Action displays the source and target branches of the PR (e.g. source: `task-1`, target: `main`)
- [ ] Action lists the files that are in the repository

** Remember to create a new branch for this task **

Example output:
![Job 1 result](../img/job1.png)

## Hints & help

<details>
<summary> Those hints will help you start</summary>

- [ENV variables provided by GitHub](https://docs.github.com/en/actions/learn-github-actions/variables#default-environment-variables)
- Use `push` event trigger - [other events](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)
- Use linux os - [operating systems](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners#standard-github-hosted-runners-for-public-repositories)
- Basic GitHub action template in [templates](./templates) folder
- Before listing files, first checkout the code `actions/checkout@v4`
- [Action workflow syntax](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#create-an-example-workflow)
</details>

<details>
<summary>In case you are stuck, you can use the resources listed below. Try to first look yourself. The resources are listed in the order from minimal to full help</summary>

1. [Understanding GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)
2. [Quick start with GitHub Actions](https://docs.github.com/en/actions/quickstart)
3. [Branch with ready solution]()
</details>
