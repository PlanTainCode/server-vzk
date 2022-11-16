'use strict';

/**
 * illness service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::illness.illness');
