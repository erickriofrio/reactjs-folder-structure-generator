import mkdirp 	  	from 'mkdirp';
import touch        from 'touch';
import { log }      from 'console-log-colors';
import { TYPENAME }	from './constants.js';

/**
 * 
 */
export const makeSimpleStructure = () => {

  log('Creating simple project structure..', 'greenBright');
	
	mkdirp.sync('./src/__tests__/components');
	mkdirp.sync('./src/__tests__/hooks');
	mkdirp.sync('./src/components');
	mkdirp.sync('./src/hooks');
	
	log('Simple project structure created!', 'cyanBright');
}

/**
 * 
 * @param {*} language 
 */
export const makeIntermediateStructure = (language = TYPENAME.Javascript) => {

  log('Creating intermediate project structure..', 'greenBright');
	
	mkdirp.sync('./src/assets');
	mkdirp.sync('./src/components/__tests__/components');
	mkdirp.sync('./src/components/__tests__/hooks');
	mkdirp.sync('./src/components/form');
	mkdirp.sync('./src/components/ui');
	mkdirp.sync('./src/context');
	mkdirp.sync('./src/data');
	mkdirp.sync('./src/hooks');
	mkdirp.sync('./src/pages/Home/');
	touch.sync(`./src/pages/Home/index.${language}`);
	mkdirp.sync('./src/utils');
	
	log('Intermediate project structure created!', 'cyanBright');
}

/**
 * 
 * @param {*} language 
 */
export const makeProStructure = (language = TYPENAME.Javascript) => {

  log('Creating professional project structure..', 'greenBright');

	mkdirp.sync('./src/assets');
	mkdirp.sync('./src/components/form');
	mkdirp.sync('./src/components/ui');
	mkdirp.sync('./src/context');
	mkdirp.sync('./src/data');
	mkdirp.sync('./src/features/authentication/components');
	mkdirp.sync('./src/features/authentication/hooks');
	mkdirp.sync('./src/features/authentication/services');
	mkdirp.sync('./src/features/authentication');
	touch.sync(`./src/features/authentication/index.${language}`);
	mkdirp.sync('./src/hooks');
	mkdirp.sync('./src/layouts');
	mkdirp.sync('./src/pages/__tests__');
	mkdirp.sync('./src/services');
	mkdirp.sync('./src/utils');

	log('Professional project structure created!', 'cyanBright');
}