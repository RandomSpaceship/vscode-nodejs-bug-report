# vscode-nodejs-bug-report
Repository for replicating VSCode Heroku remote debugging failure

Note that once the issue has been resolved, I will delete that repository.

Heroku setup:
1. I'm assuming you've got `git` and the [heroku CLI](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true#set-up) installed.
2. Create a Heroku account.
3. Open a terminal window and run `heroku login`.
4. Follow the steps.

Project init:
1. Open a terminal window.
2. Clone this repository, and cd into it.
3. Run `heroku create`.
4. Run `git push heroku main`.
5. Run `heroku ps:exec exit`.

Error replication:
1. [OPTIONAL] Open a new terminal window in the same folder and run `heroku logs --tail` for a live log feed. It's quite useful.
2. Run `heroku ps:forward 9229`. Any requests to localhost:9229 will now be tunneled to the Heroku dyno running the Node.js app. This is how Chrome DevTools connect - it appears to be a local app.
3. Open the folder in Visual Studio Code.
4. Select and run the "Attach" launch task.
5. Watch the chaos unfold.
6. Close VSC - note that the Heroku port forwarding task crashes at this time.

Sanity check:
1. Terminate all Heroku CLI processes.
2. Run `heroku local` in the project folder.
3. Run the attach launch task in VS Code - it should work perfectly.
