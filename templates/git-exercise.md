# Command Line and Git Basics

In this exercise, you will learn the basic command-line and Git commands needed in web development.

You will create a small web project, track it with Git, and publish the project to GitHub.

> **Note:** The command-line examples in this exercise use Windows Command Prompt. Git commands work similarly on other operating systems.

---

## 1. Open the Command Prompt

Open **Command Prompt** in Windows.

Check your current location:

```bash
cd
```

You can view the files and folders in the current directory with:

```bash
dir
```

You can move to another directory using `cd`.

For example:

```bash
cd Documents
```

To move back one directory:

```bash
cd ..
```

These are some of the most common command-line commands you will need:

| Command | Description |
|---|---|
| `cd folder` | Move into a folder |
| `cd ..` | Move back one folder |
| `dir` | Show files and folders |
| `mkdir folder` | Create a new folder |

---

# Part 1: Create a Web Project

## 2. Create a Project Folder

Create a new folder for the exercise:

```bash
mkdir git-practice
```

Move into the folder:

```bash
cd git-practice
```

Check that you are in the correct folder:

```bash
cd
```

---

## 3. Open the Project in Visual Studio Code

Open the current folder in Visual Studio Code:

```bash
code .
```

If the `code` command does not work, you can open Visual Studio Code normally and select:

**File → Open Folder → git-practice**

---

## 4. Create the Web Files

In Visual Studio Code, create the following three files:

```text
index.html
style.css
script.js
```

Add some simple HTML to `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Git Practice</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>My First Git Project</h1>
    <p>Hello GitHub!</p>

    <script src="script.js"></script>
</body>
</html>
```

Add some CSS to `style.css`:

```css
body {
    font-family: Arial, sans-serif;
    margin: 40px;
}

h1 {
    color: darkblue;
}
```

Add some JavaScript to `script.js`:

```javascript
console.log("Hello from JavaScript!");
```

Save all files.

Open `index.html` in your browser and check that the page works.

---

# Part 2: Git Basics

## 5. Create a Git Repository

Git can track changes made to the files in your project.

Open the terminal in Visual Studio Code:

**Terminal → New Terminal**

Initialize a Git repository:

```bash
git init
```

Check the status of your repository:

```bash
git status
```

You should see your new files listed as **untracked files**.

---

## 6. Add Files to Git

Before Git can include files in a commit, they need to be added to the **staging area**.

Add all project files:

```bash
git add .
```

Check the status again:

```bash
git status
```

The files should now be ready to be committed.

---

## 7. Create Your First Commit

A **commit** is a saved version of your project.

Create your first commit:

```bash
git commit -m "Add initial web project"
```

Check the status:

```bash
git status
```

If everything was committed successfully, Git should tell you that there is nothing to commit.

---

## 8. View the Git History

You can view the commit history with:

```bash
git log
```

You should see your first commit.

You can also use a shorter version:

```bash
git log --oneline
```

This is useful when your project contains many commits.

---

# Part 3: Make Another Change

## 9. Modify the Web Page

Open `index.html` and add another paragraph:

```html
<p>I am learning Git and GitHub.</p>
```

Save the file.

Now check Git:

```bash
git status
```

Git should show that `index.html` has been modified.

---

## 10. Commit the Change

Add the changed file:

```bash
git add index.html
```

Create another commit:

```bash
git commit -m "Update home page"
```

Check your commit history:

```bash
git log --oneline
```

You should now see two commits.

This demonstrates one of the main ideas of version control: Git keeps a history of changes made to your project.

---

# Part 4: GitHub

## 11. Create a Repository on GitHub

Go to [GitHub](https://github.com/) and sign in.

Create a new repository.

You can name it:

```text
git-practice
```

For this exercise, create an **empty repository**.

Do not add a README, `.gitignore`, or license yet, because your local project already exists.

After creating the repository, GitHub will show you the repository URL.

It will look something like:

```text
https://github.com/yourusername/git-practice.git
```

Copy this URL.

---

## 12. Connect Your Local Repository to GitHub

Return to the terminal in Visual Studio Code.

Make sure your main branch is called `main`:

```bash
git branch -M main
```

Connect your local Git repository to the GitHub repository:

```bash
git remote add origin URL
```

Replace `URL` with your own GitHub repository URL.

For example:

```bash
git remote add origin https://github.com/yourusername/git-practice.git
```

You can check the remote repository with:

```bash
git remote -v
```

---

## 13. Push Your Project to GitHub

Upload your commits to GitHub:

```bash
git push -u origin main
```

Open your repository on GitHub and refresh the page.

You should now see:

```text
index.html
style.css
script.js
```

Your local project is now connected to GitHub.

---

# Part 5: The Basic Git Workflow

When you continue working on a project, you will use the following workflow frequently.

First, make changes to your files.

Then check what has changed:

```bash
git status
```

Add the changes:

```bash
git add .
```

Create a commit:

```bash
git commit -m "Describe your changes"
```

Push the commits to GitHub:

```bash
git push
```

The basic workflow is therefore:

```text
Edit files
    ↓
git status
    ↓
git add .
    ↓
git commit
    ↓
git push
    ↓
GitHub
```

---

# Part 6: Cloning a Repository

## 14. Clone a GitHub Repository

Sometimes a project already exists on GitHub and you want to download it to your computer.

This is called **cloning**.

Copy the repository URL from GitHub and run:

```bash
git clone URL
```

For example:

```bash
git clone https://github.com/yourusername/git-practice.git
```

Git creates a new folder containing the project.

Move into the project folder:

```bash
cd git-practice
```

You can then open it in Visual Studio Code:

```bash
code .
```

---

# Part 7: Pulling Changes

## 15. Get the Latest Changes

If the GitHub repository contains changes that are not yet on your computer, you can download them using:

```bash
git pull
```

This is especially important when working on the same project from multiple computers or when collaborating with other developers.

A common workflow when working with an existing repository is:

```bash
git pull
```

Make your changes.

Then:

```bash
git add .
git commit -m "Describe your changes"
git push
```

---

# Useful Git Commands

| Command | Purpose |
|---|---|
| `git init` | Create a Git repository |
| `git status` | Check the current status |
| `git add .` | Add all changed files to the staging area |
| `git add filename` | Add one file to the staging area |
| `git commit -m "message"` | Save a version of your changes |
| `git log` | View commit history |
| `git log --oneline` | View a simplified commit history |
| `git remote -v` | View connected remote repositories |
| `git push` | Upload commits to GitHub |
| `git pull` | Download and integrate changes from GitHub |
| `git clone URL` | Download an existing Git repository |

---

# Summary

In this exercise, you learned how to:

- navigate folders using the command line
- create and open a web project
- create basic HTML, CSS, and JavaScript files
- initialize a Git repository
- check the status of a repository
- add files to Git
- create commits
- view the commit history
- create a GitHub repository
- connect a local repository to GitHub
- push your project to GitHub
- clone an existing repository
- pull changes from GitHub

The most important Git workflow to remember is:

```bash
git status
git add .
git commit -m "Describe your changes"
git push
```

You do not need to memorize every Git command immediately. The important thing is to understand the basic workflow and practice using Git regularly while working on your web development projects.
