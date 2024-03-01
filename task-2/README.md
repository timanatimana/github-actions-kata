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
- [ ] Tests for the `desktop-app` are passing

## Hints & help

<details>
<summary> Those hints will help you start</summary>

- npm install
- npm test
- actions/setup-node@v3
</details>

<details>
<summary>In case you are stuck, you can use the resources listed below. Try to first look yourself. The resources are listed in the order from minimal to full help</summary>

1. [Example of Node.js workflow](https://docs.github.com/en/actions/guides/building-and-testing-nodejs)
2. [Branch with ready solution]()
</details>
