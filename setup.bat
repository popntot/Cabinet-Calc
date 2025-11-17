@echo off
REM =========================================
REM Cabinet Calculator Deployment Script
REM For Windows
REM =========================================

setlocal enabledelayedexpansion

echo.
echo ==========================================
echo   Cabinet Calculator Deployment Script
echo ==========================================
echo.

REM Check if index.html exists
echo Checking required files...
if not exist "index.html" (
    echo [ERROR] index.html not found!
    echo Please ensure index.html is in the current directory.
    pause
    exit /b 1
)
echo [OK] index.html found

REM Check for git
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] git is not installed!
    echo Please install git from: https://git-scm.com/download/win
    pause
    exit /b 1
)
echo [OK] git is installed

REM Initialize git if not already initialized
if not exist ".git" (
    echo Initializing git repository...
    git init
    if %errorlevel% neq 0 (
        echo [ERROR] Failed to initialize git repository
        pause
        exit /b 1
    )
    echo [OK] Git repository initialized
) else (
    echo [OK] Git repository already exists
)

REM Create .gitignore if it doesn't exist
if not exist ".gitignore" (
    echo Creating .gitignore...
    (
        echo .DS_Store
        echo Thumbs.db
        echo *.log
        echo node_modules/
        echo .env
        echo .vscode/
        echo .idea/
    ) > .gitignore
    echo [OK] .gitignore created
)

REM Show git status
echo.
echo Current git status:
git status --short

REM Stage all files
echo.
echo Staging all files...
git add .
if %errorlevel% neq 0 (
    echo [ERROR] Failed to stage files
    pause
    exit /b 1
)
echo [OK] Files staged

REM Commit files
echo.
set /p commit_message="Enter commit message (or press Enter for default): "
if "!commit_message!"=="" set commit_message=Initial commit of Cabinet Calculator

echo Committing files...
git commit -m "!commit_message!"
if %errorlevel% neq 0 (
    echo [WARNING] No changes to commit or commit failed
)

REM Check if remote exists
git remote -v | findstr origin >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Remote 'origin' already configured
    echo.
    echo Remote URL:
    git remote -v
    echo.

    set /p push_existing="Do you want to push to existing remote? (y/n): "
    if /i "!push_existing!"=="y" (
        echo Pushing to remote...

        REM Get current branch
        for /f "tokens=*" %%i in ('git rev-parse --abbrev-ref HEAD') do set current_branch=%%i

        git push -u origin !current_branch!
        if %errorlevel% neq 0 (
            echo [ERROR] Push failed. You may need to pull first or resolve conflicts.
            pause
            exit /b 1
        )
        echo [OK] Successfully pushed to remote
    )
) else (
    echo.
    echo No remote repository configured.
    echo.
    echo To deploy to GitHub Pages:
    echo 1. Create a new repository on GitHub
    echo 2. Copy the repository URL (e.g., https://github.com/username/Cabinet-Calc.git)
    echo.

    set /p repo_url="Enter GitHub repository URL (or press Enter to skip): "

    if not "!repo_url!"=="" (
        echo Adding remote repository...
        git remote add origin "!repo_url!"
        if %errorlevel% neq 0 (
            echo [ERROR] Failed to add remote
            pause
            exit /b 1
        )
        echo [OK] Remote added

        REM Get current branch
        for /f "tokens=*" %%i in ('git rev-parse --abbrev-ref HEAD') do set current_branch=%%i

        REM Rename to main if needed
        if not "!current_branch!"=="main" (
            echo Renaming branch to 'main'...
            git branch -M main
            set current_branch=main
        )

        echo Pushing to GitHub...
        git push -u origin !current_branch!
        if %errorlevel% neq 0 (
            echo [ERROR] Push failed. Please check your repository URL and permissions.
            pause
            exit /b 1
        )
        echo [OK] Successfully pushed to GitHub

        REM Extract username and repo name (basic parsing)
        echo.
        echo ==========================================
        echo   Deployment Successful!
        echo ==========================================
        echo.
        echo Next Steps:
        echo.
        echo 1. Enable GitHub Pages:
        echo    - Go to your repository Settings
        echo    - Navigate to Pages section
        echo    - Under 'Source', select branch: main
        echo    - Under 'Folder', select: / (root^)
        echo    - Click 'Save'
        echo.
        echo 2. Your site will be live at:
        echo    https://[username].github.io/[repo-name]/
        echo.
        echo 3. Customize your calculator:
        echo    - Update donation link in index.html
        echo    - Add your GitHub username
        echo    - Customize styling if desired
        echo.
        echo 4. Optional enhancements:
        echo    - See DEPLOYMENT_GUIDE.md for custom domain setup
        echo    - See SEO_GUIDE.md for search optimization
        echo    - See QUICK_START.md for additional tips
        echo.
    ) else (
        echo Skipped remote configuration
        echo.
        echo Your files are committed locally.
        echo To deploy later, run:
        echo   git remote add origin YOUR_GITHUB_REPO_URL
        echo   git push -u origin main
    )
)

echo.
echo ==========================================
echo   Setup Complete!
echo ==========================================
echo.
echo Files in repository:
dir /b index.html README.md DEPLOYMENT_GUIDE.md QUICK_START.md SEO_GUIDE.md setup.sh setup.bat 2>nul
echo.
echo For help with deployment, see:
echo   - QUICK_START.md - 5-minute deployment guide
echo   - DEPLOYMENT_GUIDE.md - Comprehensive hosting guide
echo   - SEO_GUIDE.md - Search optimization guide
echo.
echo Happy building!
echo.

pause
