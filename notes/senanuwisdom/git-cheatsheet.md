# Git Cheatsheet

## FIVE ESSENTIAL GIT COMMANDS 

### 1. 'git status'
It shows which files are changed, staged or untracked.

cat > notes/senanuwisdom/git-cheatsheet.md << 'EOF'
# Git Cheatsheet

## FIVE ESSENTIAL GIT COMMANDS 

### 1. `git status`
It shows which files are changed, staged or untracked.


```bash
git status
cat > notes/senanuwisdom/git-cheatsheet.md << 'EOF'
# Git Cheatsheet

## FIVE ESSENTIAL GIT COMMANDS 

### 1. 'git status'
It shows which files are changed, staged or untracked.

cat > notes/senanuwisdom/git-cheatsheet.md << 'EOF'
# Git Cheatsheet

## FIVE ESSENTIAL GIT COMMANDS 

### 1. `git status`
It shows which files are changed, staged or untracked.


```bash
git status
```

### 2. `git add`
It stages a file so it is included in the next commit

```bash
git add filename.md
```

### 3. `git commit`
It saves a snapshot of the staged files with a message

```bash
git commit -m "Your message"
```

### 4. `git push`
It uploads your commits to Github

```bash
git push origin branch-name
```

### 5. `git checkout-b`
It creates a new branch and switches to it

```bash
git checkout -b new-branch-name
```
