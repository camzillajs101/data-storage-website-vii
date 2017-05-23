## Planning for *Data Storage Website **VII***

#### I expect to:
* Push my project to GitHub
* Push my project to Heroku through GitHub
  * Use Node.JS: fallback PHP
* Have an easy-to-use user GUI
  * Sign up
  * Log in
  * Within: be able to see most of user info. User can change password (if server is given correct master password), email, and/or other inputs.
  * If user forgot password: ask for email; if email is registered, send email (SendGrid Node.JS module) with auto-generated password to inputted email and wait for response. If email is not registered, error message.
  * When new user signs up: send email to inputted email with link to verify account. Until verified, act as if it is not registered.
* Make it look beautiful
  * Learn more CSS and HTML
* Do something within
* Make it all foolproof
  * No link cheating; redirects (use `../` for going back in directories)
* Possibly add to domain (GoDaddy, camilodata.com)

If Node.JS cannot be used, fall back to PHP redirection. Verify account and reset password will not be available.

#### File layout
**Root folder:** `/Users/camilomason0/Desktop/RANDOM\ STUFF/Coding\ Files:Projects/Projects/Data\ Storage\ Website VII`

**Layout:**
(Bold are folders, italic are notes)
* **Data Storage Website VII**
  * .git *(Added by GitHub)*
  * .gitignore
  * **public**
    * login.html
    * signup.html
    * **views**
      * main.html
  * **scripts**
    * usermain.js
    * redirect.js
    * viewsmain.js
  * **styles**
    * main.css
  * **fonts**
    * *Download some good fonts and put them here, each in individual folders*
  * **images**
    * favicon.ico
  * .env
  * package.json
  * **node_modules**
  * Procfile
  * planning.md

#### File planning
* `.gitignore`: A simple `.gitignore` file. Includes `.env`.
* `login.html`: Have a simple login form, look at School Book Project. Should be able to link to `signup.html`. **No redirect.**
* `signup.html`: Same as `login.html`. **No redirect.**
* `main.html`: A WIP file that you go to once you are logged in. **Redirects to `login.html`.**
* `usersmain.js`: The script for the login and sign up functions.
* `redirect.js`: The script for redirecting to different files. Each `.html` file should include a variable in the `<head>` (1, 2, 3, etc.) that tells `redirect.js` where to redirect to.
* `viewsmain.js`: The script for the `/views` folder.
* `main.css`: All styles.
* `favicon.ico`: The shortcut icon (`<link rel>`) for every `.html` file.
* `.env`: All my passwords. Ignored by GitHub.
* `package.json`: The Node.JS required file.
* `Procfile`: Tells Heroku what to execute
* `planning.md`: This file &#9786;
