#!/bin/bash

#########################################
# Cabinet Calculator Deployment Script
# For Mac and Linux
#########################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Header
echo -e "${BLUE}"
echo "=========================================="
echo "  Cabinet Calculator Deployment Script"
echo "=========================================="
echo -e "${NC}"

# Check if index.html exists
echo -e "${BLUE}Checking required files...${NC}"
if [ ! -f "index.html" ]; then
    echo -e "${RED}Error: index.html not found!${NC}"
    echo "Please ensure index.html is in the current directory."
    exit 1
fi
echo -e "${GREEN}✓ index.html found${NC}"

# Check for git
if ! command -v git &> /dev/null; then
    echo -e "${RED}Error: git is not installed!${NC}"
    echo "Please install git first:"
    echo "  macOS: brew install git"
    echo "  Linux: sudo apt-get install git (Ubuntu/Debian)"
    echo "         sudo yum install git (CentOS/RHEL)"
    exit 1
fi
echo -e "${GREEN}✓ git is installed${NC}"

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}Initializing git repository...${NC}"
    git init
    echo -e "${GREEN}✓ Git repository initialized${NC}"
else
    echo -e "${GREEN}✓ Git repository already exists${NC}"
fi

# Create .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    echo -e "${YELLOW}Creating .gitignore...${NC}"
    cat > .gitignore << EOF
.DS_Store
Thumbs.db
*.log
node_modules/
.env
.vscode/
.idea/
EOF
    echo -e "${GREEN}✓ .gitignore created${NC}"
fi

# Check git status
echo -e "${BLUE}Current git status:${NC}"
git status --short

# Stage all files
echo -e "${YELLOW}Staging all files...${NC}"
git add .
echo -e "${GREEN}✓ Files staged${NC}"

# Commit files
echo -e "${YELLOW}Committing files...${NC}"
read -p "Enter commit message (default: 'Initial commit of Cabinet Calculator'): " commit_message
commit_message=${commit_message:-"Initial commit of Cabinet Calculator"}

git commit -m "$commit_message" || {
    echo -e "${YELLOW}No changes to commit or commit failed${NC}"
}

# Check if remote exists
if git remote -v | grep -q origin; then
    echo -e "${GREEN}✓ Remote 'origin' already configured${NC}"
    echo -e "${BLUE}Remote URL:${NC}"
    git remote -v

    read -p "Do you want to push to existing remote? (y/n): " push_existing
    if [ "$push_existing" = "y" ]; then
        echo -e "${YELLOW}Pushing to remote...${NC}"

        # Get current branch
        current_branch=$(git rev-parse --abbrev-ref HEAD)

        git push -u origin "$current_branch" || {
            echo -e "${RED}Push failed. You may need to pull first or resolve conflicts.${NC}"
            exit 1
        }
        echo -e "${GREEN}✓ Successfully pushed to remote${NC}"
    fi
else
    echo -e "${YELLOW}No remote repository configured.${NC}"
    echo ""
    echo "To deploy to GitHub Pages:"
    echo "1. Create a new repository on GitHub"
    echo "2. Copy the repository URL (e.g., https://github.com/username/Cabinet-Calc.git)"
    echo ""

    read -p "Enter GitHub repository URL (or press Enter to skip): " repo_url

    if [ -n "$repo_url" ]; then
        echo -e "${YELLOW}Adding remote repository...${NC}"
        git remote add origin "$repo_url"
        echo -e "${GREEN}✓ Remote added${NC}"

        # Get current branch and rename to main if needed
        current_branch=$(git rev-parse --abbrev-ref HEAD)
        if [ "$current_branch" != "main" ]; then
            echo -e "${YELLOW}Renaming branch to 'main'...${NC}"
            git branch -M main
            current_branch="main"
        fi

        echo -e "${YELLOW}Pushing to GitHub...${NC}"
        git push -u origin "$current_branch" || {
            echo -e "${RED}Push failed. Please check your repository URL and permissions.${NC}"
            exit 1
        }
        echo -e "${GREEN}✓ Successfully pushed to GitHub${NC}"

        # Extract username and repo name from URL
        if [[ $repo_url =~ github\.com[:/]([^/]+)/([^/.]+) ]]; then
            username="${BASH_REMATCH[1]}"
            reponame="${BASH_REMATCH[2]}"

            echo ""
            echo -e "${GREEN}=========================================="
            echo "  Deployment Successful!"
            echo "==========================================${NC}"
            echo ""
            echo -e "${BLUE}Next Steps:${NC}"
            echo ""
            echo "1. Enable GitHub Pages:"
            echo "   • Go to: https://github.com/$username/$reponame/settings/pages"
            echo "   • Under 'Source', select branch: main"
            echo "   • Under 'Folder', select: / (root)"
            echo "   • Click 'Save'"
            echo ""
            echo "2. Your site will be live at:"
            echo -e "   ${GREEN}https://$username.github.io/$reponame/${NC}"
            echo ""
            echo "3. Customize your calculator:"
            echo "   • Update donation link in index.html"
            echo "   • Add your GitHub username"
            echo "   • Customize styling if desired"
            echo ""
            echo "4. Optional enhancements:"
            echo "   • See DEPLOYMENT_GUIDE.md for custom domain setup"
            echo "   • See SEO_GUIDE.md for search optimization"
            echo "   • See QUICK_START.md for additional tips"
            echo ""
        fi
    else
        echo -e "${YELLOW}Skipped remote configuration${NC}"
        echo ""
        echo "Your files are committed locally."
        echo "To deploy later, run:"
        echo "  git remote add origin YOUR_GITHUB_REPO_URL"
        echo "  git push -u origin main"
    fi
fi

echo ""
echo -e "${GREEN}=========================================="
echo "  Setup Complete!"
echo "==========================================${NC}"
echo ""
echo "Files in repository:"
ls -la index.html README.md DEPLOYMENT_GUIDE.md QUICK_START.md SEO_GUIDE.md setup.sh setup.bat 2>/dev/null || ls -la
echo ""
echo -e "${BLUE}For help with deployment, see:${NC}"
echo "  • QUICK_START.md - 5-minute deployment guide"
echo "  • DEPLOYMENT_GUIDE.md - Comprehensive hosting guide"
echo "  • SEO_GUIDE.md - Search optimization guide"
echo ""
echo -e "${GREEN}Happy building!${NC}"
