module.exports = {
	loadFileTpl : '%path%.js',
	synchronousLoading : true,
	defaultDebugging : false,
	defaultSingleton : false,
	defaultAutoSetterGetter : true,
	setterNameTpl : 'set%:olettersnumber,camelcase:keyword%',
	getterNameTpl : 'get%:olettersnumber,camelcase:keyword%',
	logMessageExceptionColor : '#D8000C',
	logMessageSuccessColor : '#4F8A10',
	logMessageUserColor : '#008B8B',
	logMessageUnknownName : 'unknown',
	logMessageAnonymousName : 'anonymous',
	logMessageSearchPattern : /pLogMessage/i,
	logMessageTracePattern : /at\s(\S+)\s[^\(]*\(([^\)]+)\)/i,
	logMessageTraceTpl : '${%name%} (%link%)',
	logMessageStyleTpl : 'color:%hexcode%;',
	errorDoubleParent : '%name% got parent already.',
	errorNoClassFound : '%name% do not exist.',
	errorAlreadyDefined : '%id% is already defined.',
	errorEval : 'Compile exception in code: %code% (%message%)',
	errorNoTemplateFound : 'No such template (%name%) found.',
	errorNoParent : 'No parent found',
	errorNoParentMethod : 'Method %name% no found in parent'
};