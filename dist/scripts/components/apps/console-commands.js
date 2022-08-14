var myArray = [];


class ConsoleHandler {
    constructor(e) {
        (this.commands = []), (this.unknownCommand = e);
    }
    add({ name: e, helpMsg: a, extendedHelp: n, run: r, aliases: s }) {
        this.commands.push({ names: [e].concat(s || []), helpMsg: a, run: r, extendedHelp: n });
    }
    run(e) {
        const a = this.resolve(e.command);
        return a ? a.run(...e.arguments) : this.unknownCommand;
    }
    resolve(e) {
        return this.commands.find((a) => a.names.includes(e));
    }
    getHelp() {
        var e = '<table id="tablePreview" class="table table-hover table-sm"><thead><tr><th>Command - Alias</th><th>Description</th></tr></thead><tbody>';
        return (
            this.commands.forEach((a) => {
                a.helpMsg && (e += "<tr><td><b>[" + a.names.join("] | [") + "]</b></td><td>" + a.helpMsg + "</td></tr>");
            }),
            (e += "</tbody></table>")
        );
    }
}
const commandHandler = new ConsoleHandler('Unknown Command - Type <strong>"help"</strong> for a list of commands');
    //Command: Help
    commandHandler.add({
        name: "help",
        helpMsg: "Its help lmao",
        extendedHelp: "This is the help. <br> Usage: help OR help [commandName]",
        run: (e) => {
            if (e) {
                const a = commandHandler.resolve(e);
                return a ? a.names[0] + ": " + a.extendedHelp + "<br>Aliases: " + a.names.slice(1).join(", ") : 'Unknown command "' + e + "'";
            }
            return commandHandler.getHelp();
        },
        aliases: ["h", "?"],
    }),
    //Command: Clear
    commandHandler.add({
        name: "clear",
        helpMsg: "Clear the console",
        extendedHelp: "Clears the console. <br> Usage: clear",
        run: function() {
            $(".print").html("");
        },
        aliases: ["cls", "purge"],
    }),
    //Command: About
    commandHandler.add({
        name: "about",
        helpMsg: "Gives some info on the devs",
        extendedHelp: "Gives some info on the dev. <br> Usage: about",
        run: () =>
            'Lead Developer: <a href="https://github.com/timhow38" target="_blank">Timothy Howard</a><br><strong>Copyright &copy; 2018 Timothy Howard</strong>',
    }),
    commandHandler.add({ name: "refresh", helpMsg: "Refreshes the page", extendedHelp: "Refreshes the page. <br> Usage: refresh", run: () => ((window.location = window.location.href), localStorage.clear()) });

    //create calculator command
    commandHandler.add({
        name: "calc",
        helpMsg: "Calculator",
        extendedHelp: "Calculator. <br> Usage: calculator [number][operator][number] ",
        run: (e) => {
            if (e.length < 3) {
                return "Not enough arguments";
            } else if (e.length > 3) {
                return "Too many arguments";
            } else {
                var a = e[0];
                var r = e[1];
                var n = e[2];
                var s = 0;
                switch (r) {
                    case "+":
                        s = parseInt(a) + parseInt(n);
                        break;
                    case "-":
                        s = parseInt(a) - parseInt(n);
                        break;
                    case "*":
                        s = parseInt(a) * parseInt(n);
                        break;
                    case "/":
                        s = parseInt(a) / parseInt(n);
                        break;
                    default:
                        return "Invalid operator";
                }
                return s;
            }
        }
    }
    ),
    //Create command to login using the googleLogIn function
    commandHandler.add({
        name: "login",
        helpMsg: "Login",
        extendedHelp: "Login. <br> Usage: login",
        run: () => {
            return googleSignIn();
        }
    }
    ),
    //Create command to logout using the googleLogOut function
    commandHandler.add({
        name: "logout",
        helpMsg: "Logout",
        extendedHelp: "Logout. <br> Usage: logout",
        run: () => {
            return googleSignOut();
        }
    }
    ),
    //create command to show user details
    commandHandler.add({
        name: "<s>user</s>",
        helpMsg: "<s>user</s>",
        extendedHelp: "User. <br> Usage: user",
        run: () => {
            firebase.auth().onAuthStateChanged(user=>{
                if(user){
                    //showUserDetails(user);
                    return user.displayName;
                    
                }else{
                    return "You are not logged in";
                }
              }
            )
            
        }
    }
    ),
    //create command pos with an argument that runs the functions moveUp and moveDown
    commandHandler.add({
        name: "pos",
        helpMsg: "Position",
        extendedHelp: "Position. <br> Usage: pos [up/down/left/right]",
        run: (e) => {
            //if e is up run moveUp function
            if (e == "up") {
                window.moveUp = funcHold01;
                return moveUp(window.moveUp = function() {}), "Moved Up";
            }
            //if e is down run moveDown function
            if (e == "down") {
                window.moveDown = funcHold04;
                return moveDown(window.moveDown = function() {}), "Moved Down";

            }
            //if e is left run moveLeft function
            if (e == "left") {
                window.moveLeft = funcHold02;
                return moveLeft(window.moveLeft = function() {}), "Moved Left";
            }
            //if e is right run moveRight function
            if (e == "right") {
                window.moveRight = funcHold03;
                return moveRight(window.moveRight = function() {}), "Moved Right";
            }
   
        }
    }
    ),
    //create a command "dnd" with the arguments "profile", "owlbear", "sounds"
    commandHandler.add({
        name: "<s>dnd</s>",
        helpMsg: "<s>DND</s>",
        extendedHelp: "DND. <br> Usage: dnd [profile/owlbear/sounds]",
        run: (e) => {
            //if e is profile run profile function
            if (e == "profile") {
                return 'profile Place Holder';
            }
            //if e is owlbear run owlbear function
            if (e == "owlbear") {
                return 'owlbear Place Holder';
            }
            //if e is sounds run sounds function
            if (e == "sounds") {
                return 'sounds Place Holder';
            }
        }
    }
    )
    //Overlay - Create command to open app
    commandHandler.add({
        name: "open",
        helpMsg: "Opens an app",
        extendedHelp: "Opens up an application. <br> Usage: open [app name]",
        //run: (e) => appController.open(e),
        run: (e) => {
            if (e) {
                appController.open(e)
            } else {
                return 'Please specify an app to open. Type <strong>"app-list"</strong> for help';
            }
        },
        aliases: ["start", "cd"]
    }),
    //Overlay - Create command to close app
    commandHandler.add({
        name: "close",
        helpMsg: "Closes an app",
        extendedHelp: "Closes up an application. <br> Usage: close [app name]",
        //run: (e) => appController.close(e),
        run: (e) => {
            if (e) {
                appController.close(e)
            } else {
                return 'Please specify an app to close. Type <strong>"app-list"</strong> for help';
            }
        },
        aliases: ["end", "cd.."]
    }),
    commandHandler.add({ name: "app-list", helpMsg: "Lists all applications", extendedHelp: "Lists all applications. <br> Usage: app-list-all ", run: () => appController.listApps() }),
    commandHandler.add({ name: "app-desc", helpMsg: "Get the description of an application", extendedHelp: "Gets the description of an application. <br> Usage: app-desc [app name]", run: (e) => appController.getAppDesc(e) });