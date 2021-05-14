export function hey(message) {
    let isOnlyLetter = /[a-zA-Z]/g.test(message);
    let isBlank = /^ *$/g.test(message);
    let trimmed = message.trim();
  
    if (message === message.toUpperCase() && message[message.length - 1] === '?' && isOnlyLetter) {
      return 'Calm down, I know what I\'\m doing!';
    } else if (message === message.toUpperCase() && isOnlyLetter) {
      return 'Whoa, chill out!';
    } else if (trimmed.endsWith('?')) {
      return 'Sure.';
    } else if (trimmed === '' || isBlank) {
      return "Fine. Be that way!";
    } else {
    return 'Whatever.';
    }
  };