'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('health_care_index_by_countries', [
      {
        id: 1,
        country: 'Taiwan',
        health_care_index: 87,
        health_care_exp_index: 160,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 2,
        country: 'South Korea',
        health_care_index: 82,
        health_care_exp_index: 150,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 3,
        country: 'Japan',
        health_care_index: 81,
        health_care_exp_index: 148,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 4,
        country: 'Denmark',
        health_care_index: 80,
        health_care_exp_index: 147,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 5,
        country: 'France',
        health_care_index: 80,
        health_care_exp_index: 147,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 6,
        country: 'Spain',
        health_care_index: 79,
        health_care_exp_index: 145,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 7,
        country: 'Austria',
        health_care_index: 79,
        health_care_exp_index: 144,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 8,
        country: 'Thailand',
        health_care_index: 78,
        health_care_exp_index: 142,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 9,
        country: 'Australia',
        health_care_index: 77,
        health_care_exp_index: 141,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 10,
        country: 'Finland',
        health_care_index: 76,
        health_care_exp_index: 138,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 11,
        country: 'Netherlands',
        health_care_index: 75,
        health_care_exp_index: 136,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 12,
        country: 'Czech Republic',
        health_care_index: 75,
        health_care_exp_index: 137,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 13,
        country: 'United Kingdom',
        health_care_index: 74,
        health_care_exp_index: 137,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 14,
        country: 'Norway',
        health_care_index: 74,
        health_care_exp_index: 136,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 15,
        country: 'Belgium',
        health_care_index: 74,
        health_care_exp_index: 135,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 16,
        country: 'New Zealand',
        health_care_index: 74,
        health_care_exp_index: 134,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 17,
        country: 'Germany',
        health_care_index: 73,
        health_care_exp_index: 134,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 18,
        country: 'Qatar',
        health_care_index: 73,
        health_care_exp_index: 133,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 19,
        country: 'Israel',
        health_care_index: 73,
        health_care_exp_index: 134,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 20,
        country: 'Estonia',
        health_care_index: 73,
        health_care_exp_index: 133,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 21,
        country: 'Sri Lanka',
        health_care_index: 73,
        health_care_exp_index: 131,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 22,
        country: 'Switzerland',
        health_care_index: 72,
        health_care_exp_index: 136,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 23,
        country: 'Portugal',
        health_care_index: 72,
        health_care_exp_index: 131,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 24,
        country: 'Canada',
        health_care_index: 72,
        health_care_exp_index: 131,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 25,
        country: 'Singapore',
        health_care_index: 71,
        health_care_exp_index: 132,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 26,
        country: 'Ecuador',
        health_care_index: 71,
        health_care_exp_index: 127,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 27,
        country: 'Mexico',
        health_care_index: 70,
        health_care_exp_index: 126,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 28,
        country: 'Turkey',
        health_care_index: 70,
        health_care_exp_index: 126,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 29,
        country: 'Lithuania',
        health_care_index: 69,
        health_care_exp_index: 126,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 30,
        country: 'United States',
        health_care_index: 69,
        health_care_exp_index: 127,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 31,
        country: 'Argentina',
        health_care_index: 69,
        health_care_exp_index: 126,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 32,
        country: 'Sweden',
        health_care_index: 69,
        health_care_exp_index: 127,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 33,
        country: 'Malta',
        health_care_index: 69,
        health_care_exp_index: 123,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 34,
        country: 'Malaysia',
        health_care_index: 68,
        health_care_exp_index: 123,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 35,
        country: 'Guatemala',
        health_care_index: 68,
        health_care_exp_index: 121,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 36,
        country: 'Philippines',
        health_care_index: 67,
        health_care_exp_index: 121,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 37,
        country: 'Colombia',
        health_care_index: 67,
        health_care_exp_index: 121,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 38,
        country: 'India',
        health_care_index: 67,
        health_care_exp_index: 121,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 39,
        country: 'United Arab Emirates',
        health_care_index: 67,
        health_care_exp_index: 124,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 40,
        country: 'Italy',
        health_care_index: 67,
        health_care_exp_index: 121,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 41,
        country: 'Uruguay',
        health_care_index: 66,
        health_care_exp_index: 120,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 42,
        country: 'Hong Kong',
        health_care_index: 66,
        health_care_exp_index: 120,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 43,
        country: 'Iceland',
        health_care_index: 66,
        health_care_exp_index: 120,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 44,
        country: 'Chile',
        health_care_index: 65,
        health_care_exp_index: 119,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 45,
        country: 'Jordan',
        health_care_index: 65,
        health_care_exp_index: 116,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 46,
        country: 'Slovenia',
        health_care_index: 65,
        health_care_exp_index: 119,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 47,
        country: 'China',
        health_care_index: 64,
        health_care_exp_index: 116,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 48,
        country: 'Lebanon',
        health_care_index: 64,
        health_care_exp_index: 120,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 49,
        country: 'South Africa',
        health_care_index: 64,
        health_care_exp_index: 116,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 50,
        country: 'Latvia',
        health_care_index: 63,
        health_care_exp_index: 113,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 51,
        country: 'Croatia',
        health_care_index: 63,
        health_care_exp_index: 115,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 52,
        country: 'Costa Rica',
        health_care_index: 62,
        health_care_exp_index: 113,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 53,
        country: 'Poland',
        health_care_index: 61,
        health_care_exp_index: 109,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 54,
        country: 'Pakistan',
        health_care_index: 61,
        health_care_exp_index: 107,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 55,
        country: 'Indonesia',
        health_care_index: 60,
        health_care_exp_index: 107,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 56,
        country: 'Slovakia',
        health_care_index: 60,
        health_care_exp_index: 109,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 57,
        country: 'Panama',
        health_care_index: 60,
        health_care_exp_index: 106,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 58,
        country: 'Saudi Arabia',
        health_care_index: 59,
        health_care_exp_index: 105,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 59,
        country: 'Belarus',
        health_care_index: 59,
        health_care_exp_index: 105,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 60,
        country: 'Oman',
        health_care_index: 58,
        health_care_exp_index: 104,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 61,
        country: 'Vietnam',
        health_care_index: 58,
        health_care_exp_index: 101,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 62,
        country: 'Russia',
        health_care_index: 58,
        health_care_exp_index: 102,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 63,
        country: 'Tunisia',
        health_care_index: 57,
        health_care_exp_index: 101,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 64,
        country: 'Nepal',
        health_care_index: 57,
        health_care_exp_index: 100,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 65,
        country: 'North Macedonia',
        health_care_index: 56,
        health_care_exp_index: 101,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 66,
        country: 'Brazil',
        health_care_index: 56,
        health_care_exp_index: 100,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 67,
        country: 'Greece',
        health_care_index: 56,
        health_care_exp_index: 100,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 68,
        country: 'Kuwait',
        health_care_index: 56,
        health_care_exp_index: 100,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 69,
        country: 'Peru',
        health_care_index: 56,
        health_care_exp_index: 99,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 70,
        country: 'Puerto Rico',
        health_care_index: 56,
        health_care_exp_index: 102,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 71,
        country: 'Kenya',
        health_care_index: 56,
        health_care_exp_index: 98,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 72,
        country: 'Bulgaria',
        health_care_index: 55,
        health_care_exp_index: 98,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 73,
        country: 'Romania',
        health_care_index: 55,
        health_care_exp_index: 97,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 74,
        country: 'Algeria',
        health_care_index: 55,
        health_care_exp_index: 100,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 75,
        country: 'Trinidad And Tobago',
        health_care_index: 55,
        health_care_exp_index: 101,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 76,
        country: 'Dominican Republic',
        health_care_index: 55,
        health_care_exp_index: 96,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 77,
        country: 'Albania',
        health_care_index: 53,
        health_care_exp_index: 93,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 78,
        country: 'Ukraine',
        health_care_index: 52,
        health_care_exp_index: 91,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 79,
        country: 'Bosnia And Herzegovina',
        health_care_index: 52,
        health_care_exp_index: 93,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 80,
        country: 'Ireland',
        health_care_index: 52,
        health_care_exp_index: 94,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 81,
        country: 'Cyprus',
        health_care_index: 52,
        health_care_exp_index: 89,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 82,
        country: 'Iran',
        health_care_index: 52,
        health_care_exp_index: 90,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 83,
        country: 'Nigeria',
        health_care_index: 52,
        health_care_exp_index: 90,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 84,
        country: 'Serbia',
        health_care_index: 51,
        health_care_exp_index: 92,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 85,
        country: 'Georgia',
        health_care_index: 51,
        health_care_exp_index: 88,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 86,
        country: 'Kazakhstan',
        health_care_index: 51,
        health_care_exp_index: 89,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 87,
        country: 'Hungary',
        health_care_index: 48,
        health_care_exp_index: 86,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 88,
        country: 'Egypt',
        health_care_index: 46,
        health_care_exp_index: 79,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 89,
        country: 'Morocco',
        health_care_index: 46,
        health_care_exp_index: 78,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 90,
        country: 'Azerbaijan',
        health_care_index: 43,
        health_care_exp_index: 75,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 91,
        country: 'Bangladesh',
        health_care_index: 43,
        health_care_exp_index: 73,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 92,
        country: 'Iraq',
        health_care_index: 41,
        health_care_exp_index: 70,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
      {
        id: 93,
        country: 'Venezuela',
        health_care_index: 40,
        health_care_exp_index: 69,
        created_at: '2021-04-21 16:45:21',
        updated_at: '2021-04-21 16:45:21',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'health_care_index_by_countries',
      null,
      {}
    );
  },
};
