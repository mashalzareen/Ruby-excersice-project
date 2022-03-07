/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/assets/libs/save/lib/memory-engine.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/assets/libs/save/lib/memory-engine.js":
/*!********************************************************************!*\
  !*** ./app/javascript/packs/assets/libs/save/lib/memory-engine.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var emptyFn = function emptyFn() {},
    Mingo = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'mingo'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    es = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'event-stream'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

module.exports = function (opts) {
  var options = Object.assign({
    idProperty: '_id'
  }, opts),
      self = es.map(createOrUpdate),
      data = [],
      idSeq = 0;
  Mingo.setup({
    key: options.idProperty
  });

  function findById(id) {
    var query = {};
    query[options.idProperty] = id;
    return Mingo.find(data, query).first();
  }
  /**
   * Checks that the object has the ID property present, then checks
   * if the data object has that ID value present.e
   *
   * Returns an Error to the callback if either of the above checks fail
   *
   * @param {Object} object to check
   * @param {Function} callback
   * @api private
   */


  function checkForIdAndData(object, callback) {
    var id = object[options.idProperty],
        foundObject;

    if (id === undefined || id === null) {
      return callback(new Error('Object has no \'' + options.idProperty + '\' property'));
    }

    foundObject = findById(id);

    if (foundObject === null) {
      return callback(new Error('No object found with \'' + options.idProperty + '\' = \'' + id + '\''));
    }

    return callback(null, foundObject);
  }
  /**
   * Create a new entity. Emits a 'create' event.
   *
   * @param {Object} object to create
   * @param {Function} callback (optional)
   * @api public
   */


  function create(object, callback) {
    self.emit('create', object);
    callback = callback || emptyFn; // clone the object

    var extendedObject = Object.assign({}, object);

    if (!extendedObject[options.idProperty]) {
      idSeq += 1;
      extendedObject[options.idProperty] = '' + idSeq;
    } else {
      if (findById(extendedObject[options.idProperty]) !== null) {
        return callback(new Error('Key ' + extendedObject[options.idProperty] + ' already exists'));
      } // if an id is provided, cast to string.


      extendedObject[options.idProperty] = '' + extendedObject[options.idProperty];
    }

    data.push(Object.assign({}, extendedObject));
    self.emit('afterCreate', extendedObject);
    callback(undefined, extendedObject);
  }
  /**
   * Create or update a entity. Emits a 'create' event or a 'update'.
   *
   * @param {Object} object to create or update
   * @param {Function} callback (optional)
   * @api public
   */


  function createOrUpdate(object, callback) {
    if (typeof object[options.idProperty] === 'undefined') {
      // Create a new object
      self.create(object, callback);
    } else {
      // Try and find the object first to update
      var query = {};
      query[options.idProperty] = object[options.idProperty];
      self.findOne(query, function (err, foundObject) {
        if (foundObject) {
          // We found the object so update
          self.update(object, callback);
        } else {
          // We didn't find the object so create
          self.create(object, callback);
        }
      });
    }
  }
  /**
   * Reads a single entity. Emits a 'read' event.
   *
   * @param {Number} id to read
   * @param {Function} callback (optional)
   * @api public
   */


  function read(id, callback) {
    var query = {};
    self.emit('read', id);
    callback = callback || emptyFn;
    query[options.idProperty] = '' + id;
    findByQuery(query, {}, function (error, objects) {
      if (objects[0] !== undefined) {
        var cloned = Object.assign({}, objects[0]);
        self.emit('received', cloned);
        callback(undefined, cloned);
      } else {
        callback(undefined, undefined);
      }
    });
  }
  /**
   * Updates a single entity. Emits an 'update' event. Optionally overwrites
   * the entire entity, by default just Object.assigns it with the new values.
   *
   * @param {Object} object to update
   * @param {Boolean} whether to overwrite or Object.assign the existing entity
   * @param {Function} callback (optional)
   * @api public
   */


  function update(object, overwrite, callback) {
    if (typeof overwrite === 'function') {
      callback = overwrite;
      overwrite = false;
    }

    self.emit('update', object, overwrite);
    callback = callback || emptyFn;
    var id = '' + object[options.idProperty],
        updatedObject;
    checkForIdAndData(object, function (error, foundObject) {
      if (error) {
        return callback(error);
      }

      if (overwrite) {
        updatedObject = Object.assign({}, object);
      } else {
        updatedObject = Object.assign({}, foundObject, object);
      }

      var query = {},
          copy = Object.assign({}, updatedObject);
      query[options.idProperty] = id;
      data = Mingo.remove(data, query);
      data.push(updatedObject);
      self.emit('afterUpdate', copy, overwrite);
      callback(undefined, copy);
    });
  }
  /**
   * Deletes entities based on a query. Emits a 'delete' event. Performs a find
   * by query, then calls delete for each item returned. Returns an error if no
   * items match the query.
   *
   * @param {Object} query to delete on
   * @param {Function} callback (optional)
   * @api public
   */


  function deleteMany(query, callback) {
    callback = callback || emptyFn;
    self.emit('deleteMany', query);
    data = Mingo.remove(data, query);
    self.emit('afterDeleteMany', query);
    callback();
  }
  /**
   * Deletes one entity. Emits a 'delete' event. Returns an error if the
   * object can not be found or if the ID property is not present.
   *
   * @param {Object} object to delete
   * @param {Function} callback (optional)
   * @api public
   */


  function del(id, callback) {
    callback = callback || emptyFn;

    if (typeof callback !== 'function') {
      throw new TypeError('callback must be a function or empty');
    }

    self.emit('delete', id);
    var query = {};
    query[options.idProperty] = id;
    deleteMany(query, function () {
      self.emit('afterDelete', '' + id);
      callback(undefined);
    });
  }
  /**
   * Performs a find on the data by search query.
   *
   * Sorting can be done similarly to mongo by providing a $sort option to
   * the options object.
   *
   * The query can target fields in a subdocument similarly to mongo by passing
   * a string reference to the subdocument in dot notation.
   *
   * @param {Object} query to search by
   * @param {Object} search options
   * @param {Function} callback
   * @api private
   */


  function findByQuery(query, options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    var cursor = Mingo.find(data, query, options && options.fields);
    if (options && options.sort) cursor = cursor.sort(options.sort);
    if (options && options.limit) cursor = cursor.limit(options.limit);
    var allData = getObjectCopies(cursor.all());

    if (callback === undefined) {
      return es.readArray(allData).pipe(es.map(function (data, cb) {
        self.emit('received', data);
        cb(null, data);
      }));
    } else {
      callback(null, allData);
    }
  }

  function getObjectCopies(objects) {
    var copies = [];
    objects.forEach(function (object) {
      copies.push(Object.assign({}, object));
    });
    return copies;
  }
  /**
   * Performs a find on the data. Emits a 'find' event.
   *
   * @param {Object} query to search by
   * @param {Object} options
   * @param {Function} callback
   * @api public
   */


  function find(query, options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    self.emit('find', query, options);

    if (callback !== undefined) {
      findByQuery(query, options, function (error, data) {
        if (error) return callback(error);
        self.emit('received', data);
        callback(null, data);
      });
    } else {
      return findByQuery(query, options);
    }
  }
  /**
   * Performs a find on the data and limits the result set to 1.
   * Emits a 'findOne' event.
   *
   * @param {Object} query to search by
   * @param {Object} options
   * @param {Function} callback
   * @api public
   */


  function findOne(query, options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    self.emit('findOne', query, options);
    findByQuery(query, options, function (error, objects) {
      self.emit('received', objects[0]);
      callback(undefined, objects[0]);
    });
  }
  /**
   * Performs a count by query. Emits a 'count' event.
   *
   * @param {Object} query to search by
   * @param {Function} callback
   * @api public
   */


  function count(query, callback) {
    self.emit('count', query);
    findByQuery(query, options, function (error, objects) {
      self.emit('received', objects.length);
      callback(undefined, objects.length);
    });
  }

  Object.assign(self, {
    create: create,
    read: read,
    update: update,
    'delete': del,
    deleteMany: deleteMany,
    find: find,
    findOne: findOne,
    count: count,
    idProperty: options.idProperty,
    createOrUpdate: createOrUpdate
  });
  return self;
};

/***/ })

/******/ });
//# sourceMappingURL=memory-engine-9322de70735ca345dc69.js.map