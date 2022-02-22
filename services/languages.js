const languages = {
  plaintext: 'Plaintext',
  'text/x-c++src': 'C++',
  'text/x-java': 'Java',
  'text/x-csrc': 'C',
  'text/x-csharp': 'C#',
  'text/x-go': 'Golang',
  'application/xml': 'HTML',
  'text/javascript': 'Javascript',
  'application/x-httpd-php': 'PHP',
  'text/x-python': 'Python',
  'text/x-rsrc': 'R',
  'text/x-ruby': 'Ruby',
  'text/x-rustsrc': 'Rust',
  'text/x-scala': 'Scala',
  'text/x-swift': 'Swift',
};

const language = new Map();
// eslint-disable-next-line dot-notation
language['plaintext'] = ['Plaintext'];
language['text/x-c++src'] = ['C++', 'cpp17', 0];
language['text/x-java'] = ['Java', 'java', 3];
language['text/x-csrc'] = ['C', 'c99', 3];
language['application/x-httpd-php'] = ['PHP', 'php', 3];
language['text/x-python'] = ['Python', 'python3', 3];
language['text/x-ruby'] = ['Ruby', 'ruby', 3];
language['text/x-go'] = ['Golang', 'go', 3];
language['text/x-scala'] = ['Scala', 'scala', 3];
language['text/x-csharp'] = ['C#', 'csharp', 3];
language['text/x-swift'] = ['Swift', 'swift', 3];
language['text/x-rustsrc'] = ['Rust', 'rust', 3];
language['text/x-rsrc'] = ['R', 'r', 3];
language['text/javascript'] = ['Javascript', 'nodejs', 3];

module.exports = { language, languages };
