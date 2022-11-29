import inquirer                          from 'inquirer';
import { color, log }                    from 'console-log-colors';
import { LANGUAGES, MAKE_STRUCTURE_MAP } from  './constants.js';
import { STRUCTURE_LEVELS, TYPENAME }    from  './constants.js';

log(`${color.cyanBright('ReactJS')} folder structure generator, please cd to `);
log('WARNING: Remember to cd to your root React project!', 'yellowBright');

inquirer
  .prompt([
    {
      type   : 'list',
      name   : 'language',
      default: LANGUAGES.js,
      prefix: '>>',
      message: 'Which language are you using?',
      choices: Object.values(LANGUAGES),
    },
    {
      type   : 'list',
      name   : 'structureLevel',
      default: STRUCTURE_LEVELS.simple,
      prefix: '>>',
      message: 'Which folder structure you need?',
      choices: Object.values(STRUCTURE_LEVELS),
    },
  ])
  .then(answers => makeStructure(answers.structureLevel, TYPENAME[answers.language]));

/**
 * 
 * @param {*} structureLevel 
 * @param {*} language 
 * @returns 
 */
const makeStructure = (structureLevel, language) => MAKE_STRUCTURE_MAP[structureLevel](language);