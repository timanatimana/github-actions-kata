# Task 5 - 1

Last week the management team was not pleased when they checked the company website and realized that it is a version from 2 months ago. The developer responsible for the website said that locally and in the repository there is up to date version of the website. After short investigation it turned out that they forgot to deploy the website to the server. Your task now is to add website deployment to the pipeline. Whenever there are changes to website directory and the commit is on the main branch the website should be deployed to the server.

The website is configured to be deployed to firebase, but you can choose any other hosting provider.

## Definition of done

- [ ] Whenever commit is committed to main branch, and there are changes to website directory, the website is deployed to the server.
- [ ] The deployment means copying all the files from website directory and uploading them to the server
- [ ] Credentials to the server are stored as secrets

## Hints & help

<details>
<summary>Those hints will help you start</summary>

- [secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)

</details>

<details>
<summary>In case you are stuck, you can use the resources listed below. Try to first look yourself. The resources are listed in the order from minimal to full help</summary>

1. [Branch with ready solution]()
</details>

## Task 5 - 2

In this version do the PoC version of the task. Instead of actually deploying the website to the server, print the login and password that is stored in GitHub secrets. (Hint: don't use real credentials)

## Definition of done

- [ ] Whenever commit is committed to main branch, and there are changes to website directory, the content of those files is printed to the console and the login and password is printed from the GitHub secrets.

## Hints & help

<details>
<summary>Those hints will help you start</summary>

- `npm run e2e`
- [artifacts](https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#uploading-build-and-test-artifacts)
</details>

<details>
<summary>In case you are stuck, you can use the resources listed below. Try to first look yourself. The resources are listed in the order from minimal to full help</summary>

1. [Branch with ready solution]()
</details>
