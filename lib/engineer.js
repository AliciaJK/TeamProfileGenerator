const Employee = require('./Employee');

class Engineer {
    constructor(id, name, email, gitHub) {
        // super(id, name, email);
        this.id = id;
        this.name = name;
        this.email = email;
        this.gitHub = gitHub;
    }
}

// getGithub(); {
//     return this.github;
// };
// getRole(); {
//     return 'Engineer';
// };

module.exports = Engineer;