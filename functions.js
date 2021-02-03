const functions = {
  funcLength: (func) => func.length,
  funcName: (func) => func.name,
  funcCall: function (input1, input2) {
    return `Hello, ${this.firstName} ${this.lastName}. Your access Level is ${this.accessLevel}. Profile active? ${input1}. Any issues to submit? ${input2}.`
  },
  funcApply: function (...args) {
    return args.map((e) => this[e])
  },
  funcBind: function (profileStatus) {
    return `${this.userName}, your access level is currently ${this.accessLevel}. Profile active? ${profileStatus}.`
  },
}

module.exports = functions
