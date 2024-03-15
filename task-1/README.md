# Task 1

Time to warm up. In your first task you will create a GitHub action that prints basic information about itself and then lists all the files that are currently in the repository

## Definition of done

- [ ] For pull request (PR) action displays the base and head branches of the PR (e.g. base: `main`, head: `task-1`)
- [ ] For push action displays the branch and commit ref 
- [ ] Action lists the files that are in the repository

*** Remember to create a new branch for this task ***

Example output for PR:
![Job 1 result](../img/job1-pr.png)

Example output for Commit:
![Job 1 result](../img/job1-push.png)

## Hints & help

<details>
<summary> Those hints will help you start</summary>

- [Github context](https://docs.github.com/en/actions/learn-github-actions/contexts#github-context) - provides information about the GitHub job and event
- [ENV variables provided by GitHub](https://docs.github.com/en/actions/learn-github-actions/variables#default-environment-variables)
- Use `push` and `pull_request` event triggers - [other events](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)
- Use linux os - [operating systems](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners#standard-github-hosted-runners-for-public-repositories)
- Basic GitHub action template in [templates](./templates) folder
- Before listing files, first checkout the code `actions/checkout@v4`
- [Action workflow syntax](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#create-an-example-workflow)
- [Quickstart](https://docs.github.com/en/actions/quickstart)
</details>

<details>
<summary>In case you are stuck, you can use the resources listed below. Try to first look yourself. The resources are listed in the order from minimal to full help</summary>

1. [Understanding GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)
2. [PR with ready solution](https://github.com/Ubax/github-actions-kata/pull/1)
</details>
