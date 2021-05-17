const Employee = require('./Employee');

class Engineer {
    constructor(id, name, email, gitHub) {
        //  super(id, name, email);
        this.id = id;
        this.name = name;
        this.email = email;
        this.gitHub = gitHub;
    }

;

getGitHub() {
    return this.gitHub;
};
}

module.exports = Engineer;
