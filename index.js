import inquirer                from 'inquirer';
import { color, log }          from 'console-log-colors';
import { QUESTIONS, TYPENAME } from  './constants.js';
import { makeStructure }       from './utils.js';

log(`${color.cyanBright('ReactJS')} folder structure generator`);

/**
 * 
 */
const init = async () => {
  
  const answers = await inquirer.prompt(QUESTIONS);
  answers && makeStructure(answers.structureLevel, TYPENAME[answers.language], answers.targetPath);
}

init();