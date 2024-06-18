const { exec } = require('child_process');
const { expect } = require('chai');

describe('1-stdin.js', () => {
  it('should output the correct messages', (done) => {
    exec('echo "John" | node 1-stdin.js', (error, stdout) => {
      if (error) {
        return done(error);
      }
      const output = stdout.split('\n');
      expect(output[0]).to.equal('Welcome to Holberton School, what is your name?');
      expect(output[1]).to.equal('Your name is: John');
      expect(output[2]).to.equal('This important software is now closing');
      done();
    });
  });
});
