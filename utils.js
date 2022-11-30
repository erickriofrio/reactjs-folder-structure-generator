import fs                               from 'fs';
import path                             from 'path';
import mkdirp                           from 'mkdirp';
import touch                            from 'touch';
import { log }                          from 'console-log-colors';
import { MAKE_STRUCTURE_MAP, TYPENAME } from './constants.js';

/**
 * 
 * @param {*} structureLevel 
 * @param {*} language 
 * @returns 
 */
export const makeStructure = (structureLevel, language, targetPath) => MAKE_STRUCTURE_MAP[structureLevel](language, targetPath);

/**
 * 
 * @param {*} language 
 * @param {*} targetPath 
 */
export const makeSimpleStructure = (language, targetPath = '') => {

  fs.access(targetPath, async (err) => {

    if (err)
      return log('Path doesn\'t exists!', 'red');

    log('Creating simple project structure..', 'greenBright');

    mkdirp.sync(path.join(targetPath, '/src/__tests__/components'));
    mkdirp.sync(path.join(targetPath, '/src/__tests__/hooks'));
    mkdirp.sync(path.join(targetPath, '/src/components'));
    mkdirp.sync(path.join(targetPath, '/src/hooks'));

    log('Simple project structure created!', 'cyanBright');
  });
}

/**
 * 
 * @param {*} language 
 * @param {*} targetPath 
 */
export const makeIntermediateStructure = (language = TYPENAME.Javascript, targetPath = '') => {

  fs.access(targetPath, async (err) => {

    if (err)
      return log('Path doesn\'t exists!', 'red');
    
    log('Creating intermediate project structure..', 'greenBright');
    
    mkdirp.sync(path.join(targetPath, './src/assets'));
    mkdirp.sync(path.join(targetPath, './src/components/__tests__/components'));
    mkdirp.sync(path.join(targetPath, './src/components/__tests__/hooks'));
    mkdirp.sync(path.join(targetPath, './src/components/form'));
    mkdirp.sync(path.join(targetPath, './src/components/ui'));
    mkdirp.sync(path.join(targetPath, './src/context'));
    mkdirp.sync(path.join(targetPath, './src/data'));
    mkdirp.sync(path.join(targetPath, './src/hooks'));
    mkdirp.sync(path.join(targetPath, './src/pages/Home/'));
    touch.sync(path.join(targetPath, `./src/pages/Home/index.${language}`));
    mkdirp.sync(path.join(targetPath, './src/utils'));
    
    log('Intermediate project structure created!', 'cyanBright');
  });

}

/**
 * 
 * @param {*} language 
 * @param {*} targetPath 
 */
export const makeProStructure = (language = TYPENAME.Javascript, targetPath = '') => {

  fs.access(targetPath, async (err) => {

    if (err)
      return log('Path doesn\'t exists!', 'red');
  
    log('Creating professional project structure..', 'greenBright');

    mkdirp.sync(path.join(targetPath, './src/assets'));
    mkdirp.sync(path.join(targetPath, './src/components/form'));
    mkdirp.sync(path.join(targetPath, './src/components/ui'));
    mkdirp.sync(path.join(targetPath, './src/context'));
    mkdirp.sync(path.join(targetPath, './src/data'));
    mkdirp.sync(path.join(targetPath, './src/features/authentication/components'));
    mkdirp.sync(path.join(targetPath, './src/features/authentication/hooks'));
    mkdirp.sync(path.join(targetPath, './src/features/authentication/services'));
    mkdirp.sync(path.join(targetPath, './src/features/authentication'));
    touch.sync(path.join(targetPath, `./src/features/authentication/index.${language}`));
    mkdirp.sync(path.join(targetPath, './src/hooks'));
    mkdirp.sync(path.join(targetPath, './src/layouts'));
    mkdirp.sync(path.join(targetPath, './src/pages/__tests__'));
    mkdirp.sync(path.join(targetPath, './src/services'));
    mkdirp.sync(path.join(targetPath, './src/utils'));
  
    log('Professional project structure created!', 'cyanBright');
  });
}