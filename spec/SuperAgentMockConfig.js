// ./superagent-mock-config.js file
module.exports = [
  {
    /**
     * regular expression of URL
     */
    pattern: 'https://localhost:3000',

    /**
     * returns the result of the GET request
     *
     * @param match array Result of the resolution of the regular expression
     * @param data  mixed Data returns by `fixtures` attribute
     */
    get: function (match, data) {
      return {
        body: {"influencers":
        [{"user":
        {"id":5491,
        "email":"person7@example.com",
        "created_at":"2016-02-23T08:24:22.296Z",
        "updated_at":"2016-02-23T08:24:22.296Z",
        "role":"influencer","first_name":"Lindsay",
        "last_name":"Kirlin"},
        "social_media_info":
        {"twitter_handle":'abinichole',
        "twitter_followers":8975,
        "profile_pic":"https://pbs.twimg.com/profile_images/701246212985503744/t1DRdao__400x400.jpg"},
        "short_bio":null,
        "industries":[]},
        {"user":{"id":5492,
        "email":"person8@example.com",
        "created_at":"2016-02-23T08:24:22.301Z",
        "updated_at":"2016-02-23T08:24:22.301Z",
        "role":"influencer",
        "first_name":"Lindsay",
        "last_name":"Kirlin"},
        "social_media_info":
        {"twitter_handle":null,
        "twitter_followers":null,
        "profile_pic":null},
        "short_bio":null,
        "industries":
        [{"id":3989,"name":"Tools \u0026 Home","created_at":"2016-02-23T08:24:22.310Z","updated_at":"2016-02-23T08:24:22.310Z"}]}]}
      };
    },
  },
];
