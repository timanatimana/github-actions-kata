# Task 5 - 1

Your task now is to add website deployment to the pipeline. Whenever there are changes to website directory and the commit is on the main branch the website should be deployed to the server.

The website is configured to be deployed to firebase, but you can choose any other hosting provider.

## Definition of done

- [ ] Whenever commit is committed to main branch, and there are changes to website directory, the website is deployed to the server.
- [ ] The deployment means copying all the files from website directory and uploading them to the server
- [ ] Credentials to the server are stored as secrets

## Hints & help

<details>
<summary>Those hints will help you start</summary>

- [secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)
- [variables](https://docs.github.com/en/actions/learn-github-actions/variables#using-the-vars-context-to-access-configuration-variable-values)
- Firebase
    - [Firebase deploy action](https://github.com/FirebaseExtended/action-hosting-deploy)
        - [Action options](https://github.com/FirebaseExtended/action-hosting-deploy?tab=readme-ov-file#options)
    - [Firebase Service Account](https://github.com/FirebaseExtended/action-hosting-deploy/blob/main/docs/service-account.md)
    - [How to create firebase project](../website/README.md)

</details>

<details>
<summary>In case you are stuck, you can use the resources listed below. Try to first look yourself. The resources are listed in the order from minimal to full help</summary>

1. [Branch with ready solution](https://github.com/Ubax/github-actions-kata/pull/7)
</details>

## Task 5 - 2

In this version do the PoC version of the task. Instead of actually deploying the website to the server, print the login and password that is stored in GitHub secrets.

## Definition of done

- [ ] Whenever commit is committed to main branch, and there are changes to website directory, the content of those files is printed to the console and the login and password is printed from the GitHub secrets.

## Hints & help

<details>
<summary>Those hints will help you start</summary>

- [secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)
</details>
