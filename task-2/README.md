# Task 2

Now your task is to run all the unit tests when the PR is created to the `main` branch. To save the costs when the PR is created to other branches jobs should not be run.
The unit tests are located in the `desktop-app` folder. To run them you need to install the dependencies and then run the tests.

Since the tests were not run regularly they may be broken. Fix them to be able to merge your branch.

## Definition of Done

- [ ] Unit tests are run when new commit is pushed to the branch with PR to main
- [ ] Unit tests are **NOT** run when new commit is pushed to the branch that does not have PR to main
- [ ] When unit tests are not passing, the job should fail
- [ ] Unit tests are run on latest LTS version of node
- [ ] Node dependencies are cached
- [ ] Tests for the `desktop-app` are fixed and are passing

Pipeline with failing unit tests:
![Job 2 result](../img/job2-unit-tests-not-passing.png)

There should be no pipeline for PRs to branches different then main
![Job 2 PR to branch different then main](../img/job2-pr-not-main.png)

## Hints & help

<details>
<summary> Those hints will help you start</summary>

- npm install
- npm test
- actions/setup-node@v3
- [setting working directory](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsworking-directory)
- [setting setting for all jobs](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaults)
- [Example of Node.js workflow](https://docs.github.com/en/actions/guides/building-and-testing-nodejs)
</details>

<details>
<summary>In case you are stuck, you can use the resources listed below. Try to first look yourself. The resources are listed in the order from minimal to full help</summary>

1. [PR with ready solution](https://github.com/Ubax/github-actions-kata/pull/2)
</details>
