import { makeIntermediateStructure, makeProStructure, makeSimpleStructure } from './utils.js';

export const LANGUAGES = Object.freeze({
  js: 'Javascript',
  ts: 'Typescript'
});

export const TYPENAME = Object.freeze({
  Javascript: 'js',
  Typescript: 'ts'
});

export const STRUCTURE_LEVELS = Object.freeze({
  simple      : 'Simple',
  intermediate: 'Intermediate',
  pro         : 'Professional'
});

export const MAKE_STRUCTURE_MAP = Object.freeze({
  [STRUCTURE_LEVELS.simple]      : makeSimpleStructure,
  [STRUCTURE_LEVELS.intermediate]: makeIntermediateStructure,
  [STRUCTURE_LEVELS.pro]         : makeProStructure
});

export const QUESTIONS = [
  {
    type   : 'list',
    name   : 'language',
    default: LANGUAGES.js,
    prefix : '>>',
    message: 'Which language are you using?',
    choices: Object.values(LANGUAGES),
  },
  {
    type   : 'list',
    name   : 'structureLevel',
    default: STRUCTURE_LEVELS.simple,
    prefix : '>>',
    message: 'Which folder structure you need?',
    choices: Object.values(STRUCTURE_LEVELS),
  },
  {
    name   : 'targetPath',
    default: '',
    prefix : '>>',
    message: 'React project root full path:'
  }
];