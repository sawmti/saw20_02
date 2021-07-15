"use strict";

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */
const axios = require('axios').default;
const dotenv =  require("dotenv").config();

module.exports = {
	name: "airport",

	/**
	 * Settings
	 */
	settings: {
		serializer: "JSON"
	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Say a 'Hello' action.
		 *
		 * @returns
		 */
		getall: {
			cache: {
                // Cache key:  "limit" & "offset" from ctx.params, "user.id" from ctx.meta
				type: "memory",
                ttl: 10000
            },
			async handler(ctx) {

				return axios.get(process.env.CIRIUM_URL_AIRPORTS + "active" +  process.env.CIRIUM_URL_CREDENTIALS).
				then( (response) =>{
					 return response.data}
					 );
			}
		},

		/**
		 * Welcome, a username
		 *
		 * @param {String} name - User name
		 */
		welcome: {
			rest: "/welcome",
			params: {
				name: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			}
		}
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
};
