# Guide to Contributing
The following are the contributing information from 'Stonks Only Go Up' team (oras-protocol)    

### Team Norms
* Clear Communications
* Believe in ourselves and stonks
* Open for help & provide assistance
* Be respectful
* Commitment to learn
* Have fun
* No Bullshit

#### How to Get Help For Task:
1. Ask slack groupchat
2. Explain problem
3. Potential attempts for solution
4. (optional) directly ask for help from specific member

#### How to Resolve Conflicts:
For conflicts, it is important to main respectful and follow our team norms. Disagreement is common and only betters the product. Regardless, the following are steps to take to resolve conflicts.

1. Each side explains argument with reasoning to whole team
2. Potentially find balances between two sides for compromise
3. Team votes democratically and majority wins
4. (potential) if tie erupts since 6 members total, flip a coin

If a team member is failing to deliver, team should reach out to member for explanation and possibly assist with task. If continuing to fail with obligations and assistance (based on team's judgement), then team must report to management.

Team should respond to help and solving conflicts within 12 hours in the slack chat in both direct messages and group chat.

### Git Workflow
Always pull the most recent version from GitHub to ensure you have the most up-to-date version of the working project.

If it is a minor feature or bug fix (developer's best judgement used), then the developer would just commit and push to the main/master branch of the remote repository. If the feature or task is major, then the developer will make a new branch titled `someFeatureBranch` and then work directly off that. Details are as followed:

If minor task:
1. Pull from master/main
2. Add code to local repo
3. Make sure working project in local repo
4. Pull from remote repo
5. Push to master/main branch

If major task:
1. Pull from master/main
2. Create new branch titled `someFeatureBranch` (this and rest will be in local repo)
3. Checkout `someFeatureBranch`
4. Add code to local repo
5. Pull from remote repo
6. Solve local merge conflicts (if needed)
7. Commit merge
8. Push to master/main branch
9. Notify team via Slack

### Sprint Candence
* Sprints will take 2 weeks to complete for balance of quick, efficient work and not cause overstress.

### Daily Standups
* Monday: 3:15pm EST - 3:30pm EST
* Wednesday 3:15pm EST - 3:30pm EST
* Friday 3:15pm EST - 3:30pm EST

We will meet at the previously listed times and days and if something does come up, we will let the other members know and plan accordingly. Also, will not cover for other members (honesty is the best policy). Any member who does not make progress after two standups in a row will be reported to management.

### Coding Standards
All users will use VSCode for completing their coding tasks. The linter we would use for now is ESLint for JavaScript (potentially will change at later date)

* Don't over-engineer. Write minimum code to get things working end to end, only then iterate to improve. - Code for each task and spike must be peer-reviewed and pass tests before merging into the main branch of code.
* Always push the recent working code, if you break the pipeline/build then fix it.
* Make granular and small commits, per feature or per bug fix.
* Provide descriptive commit messages.
* Write self documenting code. Use descriptive variable and function names. Avoid unnecessary name shortening.
* Don't leave dead/commented out code behind. If you see such code, delete it.
* Write automated tests to cover critical integration points and functionality (once you learn how to do that).
