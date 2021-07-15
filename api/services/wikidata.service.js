"use strict";

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */
const axios = require('axios').default;
const dotenv =  require("dotenv").config();


module.exports = {
	name: "wikidata",

	/**
	 * Settings
	 */
	settings: {

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
		search: {
			params: {
				term: { type: "string" },
				lang : { type: "string" }
			},
			async handler(ctx) {
				let search_url = process.env.WIKIDATA_API + process.env.WIKIDATA_SEARCH + "search=" + ctx.params.term;
				let getentiti_url = process.env.WIKIDATA_API + process.env.WIKIDATA_GETENTITIE	+ "ids=";
				return axios.get( search_url)
				.then ((res) => axios.get(getentiti_url + res.data.search[0].id))
				.then ((res)=> res.data);
				;

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
