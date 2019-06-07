'use strict';

import { create } from 'apisauce';

export default class NewsHeadlines {
    constructor() {
        this.url = "https://newsapi.org";
        this.country = "us";
        this.apiKey = "35119d931420490599e8732ff6902294";
    }

    async getHeadlines() {
        const api = create({
            baseURL: this.url,
            params: {
                country: this.country,
                apiKey: this.apiKey
            }
        });
        const response = await api.get('/v2/top-headlines');
        return response;
    }
}