# Task 5

Your team realized that they spend a lot of time building apps for releases and in many cases there is something to fix on one or the other platform. Now they would like to build the application as part of the pipeline. The application is a multi-platform application, that should run on Linux, Windows and Mac.

## Definition of done

- [ ] The build is only triggered on new tag with that fulfills the pattern `desktop-app-**`
- [ ] The application is built for windows and linux (you can add MacOS when using public repository)
- [ ] After the build new release is created on Github
- [ ] The release includes zipped builds for every platform

## Hints & help

<details>
<summary>Those hints will help you start</summary>

- `npm run make`
- [Creating tags on git](https://git-scm.com/book/en/v2/Git-Basics-Tagging)
- [matrixes](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs)
- [Paths to executables](./paths.md)
- [artifacts](https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#uploading-build-and-test-artifacts)
- [Download artifacts action](https://github.com/actions/download-artifact)
- [linux zip command](https://www.geeksforgeeks.org/zip-command-in-linux-with-examples/)
- [Create release action](https://github.com/softprops/action-gh-release)
- [Permissions](https://docs.github.com/en/actions/using-jobs/assigning-permissions-to-jobs)
</details>

<details>
<summary>In case you are stuck, you can use the resources listed below. Try to first look yourself. The resources are listed in the order from minimal to full help</summary>

1. [Branch with ready solution]()
</details>
