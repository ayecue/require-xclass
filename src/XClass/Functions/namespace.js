/**
 *	Dependencies
 */
var forEach = require('fn/forEach'),
	manager = require('cls/manager');

/**
 *	Shortcuts
 */
var xclass = manager.xclass;

/**
 *	Create namespace
 */
function create(id,delimiter){
	var namespaces = id.split(delimiter || '.');

	return forEach(namespaces.slice(0,-1),function(index,value){
		this.result = this.result[value] || (this.result[value] = {});
	},xclass);
}

/**
 *	Create multiple namespaces
 */
module.exports = function() {
	forEach(arguments,function(_,id){
		create(id);
	});
};