'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('quality_of_life_index_by_countries', [
      {
        id: 1,
        country: 'Denmark',
        quality_of_life_index: 193,
        purchasing_power_index: 101,
        safety_index: 75,
        health_care_index: 80,
        cost_of_living_index: 83,
        property_price_to_income_ratio: 7,
        traffic_commute_time_index: 29,
        pollution_index: 21,
        climate_index: 82,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 2,
        country: 'Switzerland',
        quality_of_life_index: 192,
        purchasing_power_index: 120,
        safety_index: 78,
        health_care_index: 72,
        cost_of_living_index: 122,
        property_price_to_income_ratio: 9,
        traffic_commute_time_index: 29,
        pollution_index: 22,
        climate_index: 79,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 3,
        country: 'Finland',
        quality_of_life_index: 190,
        purchasing_power_index: 100,
        safety_index: 77,
        health_care_index: 76,
        cost_of_living_index: 70,
        property_price_to_income_ratio: 8,
        traffic_commute_time_index: 30,
        pollution_index: 12,
        climate_index: 59,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 4,
        country: 'Australia',
        quality_of_life_index: 186,
        purchasing_power_index: 107,
        safety_index: 59,
        health_care_index: 77,
        cost_of_living_index: 74,
        property_price_to_income_ratio: 8,
        traffic_commute_time_index: 35,
        pollution_index: 23,
        climate_index: 93,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 5,
        country: 'Netherlands',
        quality_of_life_index: 184,
        purchasing_power_index: 91,
        safety_index: 72,
        health_care_index: 75,
        cost_of_living_index: 74,
        property_price_to_income_ratio: 8,
        traffic_commute_time_index: 29,
        pollution_index: 27,
        climate_index: 88,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 6,
        country: 'Austria',
        quality_of_life_index: 183,
        purchasing_power_index: 82,
        safety_index: 76,
        health_care_index: 79,
        cost_of_living_index: 70,
        property_price_to_income_ratio: 11,
        traffic_commute_time_index: 26,
        pollution_index: 22,
        climate_index: 77,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 7,
        country: 'Iceland',
        quality_of_life_index: 182,
        purchasing_power_index: 79,
        safety_index: 77,
        health_care_index: 66,
        cost_of_living_index: 100,
        property_price_to_income_ratio: 7,
        traffic_commute_time_index: 20,
        pollution_index: 16,
        climate_index: 69,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 8,
        country: 'New Zealand',
        quality_of_life_index: 181,
        purchasing_power_index: 93,
        safety_index: 59,
        health_care_index: 74,
        cost_of_living_index: 73,
        property_price_to_income_ratio: 9,
        traffic_commute_time_index: 31,
        pollution_index: 23,
        climate_index: 95,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 9,
        country: 'Germany',
        quality_of_life_index: 180,
        purchasing_power_index: 102,
        safety_index: 65,
        health_care_index: 73,
        cost_of_living_index: 65,
        property_price_to_income_ratio: 9,
        traffic_commute_time_index: 31,
        pollution_index: 29,
        climate_index: 83,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 10,
        country: 'Estonia',
        quality_of_life_index: 178,
        purchasing_power_index: 71,
        safety_index: 77,
        health_care_index: 73,
        cost_of_living_index: 51,
        property_price_to_income_ratio: 9,
        traffic_commute_time_index: 25,
        pollution_index: 20,
        climate_index: 64,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 11,
        country: 'Sweden',
        quality_of_life_index: 176,
        purchasing_power_index: 102,
        safety_index: 53,
        health_care_index: 69,
        cost_of_living_index: 70,
        property_price_to_income_ratio: 9,
        traffic_commute_time_index: 30,
        pollution_index: 18,
        climate_index: 74,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 12,
        country: 'Norway',
        quality_of_life_index: 175,
        purchasing_power_index: 88,
        safety_index: 65,
        health_care_index: 74,
        cost_of_living_index: 101,
        property_price_to_income_ratio: 9,
        traffic_commute_time_index: 27,
        pollution_index: 20,
        climate_index: 71,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 13,
        country: 'Slovenia',
        quality_of_life_index: 172,
        purchasing_power_index: 66,
        safety_index: 79,
        health_care_index: 65,
        cost_of_living_index: 53,
        property_price_to_income_ratio: 10,
        traffic_commute_time_index: 27,
        pollution_index: 24,
        climate_index: 78,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 14,
        country: 'United States',
        quality_of_life_index: 172,
        purchasing_power_index: 110,
        safety_index: 53,
        health_care_index: 69,
        cost_of_living_index: 71,
        property_price_to_income_ratio: 4,
        traffic_commute_time_index: 33,
        pollution_index: 37,
        climate_index: 78,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 15,
        country: 'Spain',
        quality_of_life_index: 170,
        purchasing_power_index: 72,
        safety_index: 68,
        health_care_index: 79,
        cost_of_living_index: 54,
        property_price_to_income_ratio: 9,
        traffic_commute_time_index: 29,
        pollution_index: 40,
        climate_index: 94,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 16,
        country: 'Japan',
        quality_of_life_index: 168,
        purchasing_power_index: 87,
        safety_index: 79,
        health_care_index: 81,
        cost_of_living_index: 83,
        property_price_to_income_ratio: 13,
        traffic_commute_time_index: 39,
        pollution_index: 40,
        climate_index: 85,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 17,
        country: 'Oman',
        quality_of_life_index: 167,
        purchasing_power_index: 81,
        safety_index: 79,
        health_care_index: 58,
        cost_of_living_index: 49,
        property_price_to_income_ratio: 9,
        traffic_commute_time_index: 23,
        pollution_index: 38,
        climate_index: 67,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 18,
        country: 'Canada',
        quality_of_life_index: 163,
        purchasing_power_index: 95,
        safety_index: 60,
        health_care_index: 72,
        cost_of_living_index: 68,
        property_price_to_income_ratio: 8,
        traffic_commute_time_index: 34,
        pollution_index: 28,
        climate_index: 51,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 19,
        country: 'Portugal',
        quality_of_life_index: 163,
        purchasing_power_index: 49,
        safety_index: 70,
        health_care_index: 72,
        cost_of_living_index: 50,
        property_price_to_income_ratio: 13,
        traffic_commute_time_index: 30,
        pollution_index: 31,
        climate_index: 97,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 20,
        country: 'United Kingdom',
        quality_of_life_index: 163,
        purchasing_power_index: 92,
        safety_index: 56,
        health_care_index: 74,
        cost_of_living_index: 67,
        property_price_to_income_ratio: 10,
        traffic_commute_time_index: 35,
        pollution_index: 41,
        climate_index: 88,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 21,
        country: 'Qatar',
        quality_of_life_index: 162,
        purchasing_power_index: 112,
        safety_index: 88,
        health_care_index: 73,
        cost_of_living_index: 64,
        property_price_to_income_ratio: 6,
        traffic_commute_time_index: 30,
        pollution_index: 61,
        climate_index: 36,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 22,
        country: 'Lithuania',
        quality_of_life_index: 159,
        purchasing_power_index: 58,
        safety_index: 67,
        health_care_index: 69,
        cost_of_living_index: 44,
        property_price_to_income_ratio: 11,
        traffic_commute_time_index: 26,
        pollution_index: 29,
        climate_index: 68,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 23,
        country: 'Croatia',
        quality_of_life_index: 159,
        purchasing_power_index: 50,
        safety_index: 75,
        health_care_index: 63,
        cost_of_living_index: 50,
        property_price_to_income_ratio: 14,
        traffic_commute_time_index: 29,
        pollution_index: 30,
        climate_index: 89,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 24,
        country: 'United Arab Emirates',
        quality_of_life_index: 157,
        purchasing_power_index: 92,
        safety_index: 84,
        health_care_index: 67,
        cost_of_living_index: 62,
        property_price_to_income_ratio: 5,
        traffic_commute_time_index: 37,
        pollution_index: 51,
        climate_index: 45,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 25,
        country: 'Czech Republic',
        quality_of_life_index: 156,
        purchasing_power_index: 63,
        safety_index: 74,
        health_care_index: 75,
        cost_of_living_index: 46,
        property_price_to_income_ratio: 15,
        traffic_commute_time_index: 30,
        pollution_index: 40,
        climate_index: 77,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 26,
        country: 'France',
        quality_of_life_index: 154,
        purchasing_power_index: 80,
        safety_index: 53,
        health_care_index: 80,
        cost_of_living_index: 74,
        property_price_to_income_ratio: 13,
        traffic_commute_time_index: 35,
        pollution_index: 44,
        climate_index: 90,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 27,
        country: 'Ireland',
        quality_of_life_index: 154,
        purchasing_power_index: 81,
        safety_index: 55,
        health_care_index: 52,
        cost_of_living_index: 76,
        property_price_to_income_ratio: 7,
        traffic_commute_time_index: 38,
        pollution_index: 34,
        climate_index: 89,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 28,
        country: 'Belgium',
        quality_of_life_index: 153,
        purchasing_power_index: 86,
        safety_index: 56,
        health_care_index: 74,
        cost_of_living_index: 72,
        property_price_to_income_ratio: 7,
        traffic_commute_time_index: 36,
        pollution_index: 53,
        climate_index: 86,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 29,
        country: 'Slovakia',
        quality_of_life_index: 153,
        purchasing_power_index: 57,
        safety_index: 71,
        health_care_index: 60,
        cost_of_living_index: 44,
        property_price_to_income_ratio: 10,
        traffic_commute_time_index: 29,
        pollution_index: 40,
        climate_index: 78,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 30,
        country: 'Saudi Arabia',
        quality_of_life_index: 151,
        purchasing_power_index: 100,
        safety_index: 74,
        health_care_index: 59,
        cost_of_living_index: 48,
        property_price_to_income_ratio: 3,
        traffic_commute_time_index: 29,
        pollution_index: 65,
        climate_index: 46,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 31,
        country: 'Latvia',
        quality_of_life_index: 150,
        purchasing_power_index: 52,
        safety_index: 63,
        health_care_index: 63,
        cost_of_living_index: 48,
        property_price_to_income_ratio: 9,
        traffic_commute_time_index: 33,
        pollution_index: 34,
        climate_index: 75,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 32,
        country: 'Israel',
        quality_of_life_index: 150,
        purchasing_power_index: 78,
        safety_index: 70,
        health_care_index: 73,
        cost_of_living_index: 81,
        property_price_to_income_ratio: 13,
        traffic_commute_time_index: 36,
        pollution_index: 57,
        climate_index: 94,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 33,
        country: 'Cyprus',
        quality_of_life_index: 148,
        purchasing_power_index: 57,
        safety_index: 70,
        health_care_index: 52,
        cost_of_living_index: 58,
        property_price_to_income_ratio: 8,
        traffic_commute_time_index: 24,
        pollution_index: 54,
        climate_index: 93,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 34,
        country: 'Singapore',
        quality_of_life_index: 144,
        purchasing_power_index: 89,
        safety_index: 69,
        health_care_index: 71,
        cost_of_living_index: 81,
        property_price_to_income_ratio: 22,
        traffic_commute_time_index: 41,
        pollution_index: 33,
        climate_index: 57,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 35,
        country: 'Taiwan',
        quality_of_life_index: 143,
        purchasing_power_index: 66,
        safety_index: 84,
        health_care_index: 87,
        cost_of_living_index: 61,
        property_price_to_income_ratio: 24,
        traffic_commute_time_index: 32,
        pollution_index: 63,
        climate_index: 84,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 36,
        country: 'Poland',
        quality_of_life_index: 142,
        purchasing_power_index: 60,
        safety_index: 72,
        health_care_index: 61,
        cost_of_living_index: 40,
        property_price_to_income_ratio: 11,
        traffic_commute_time_index: 32,
        pollution_index: 54,
        climate_index: 76,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 37,
        country: 'Italy',
        quality_of_life_index: 141,
        purchasing_power_index: 66,
        safety_index: 56,
        health_care_index: 67,
        cost_of_living_index: 67,
        property_price_to_income_ratio: 10,
        traffic_commute_time_index: 34,
        pollution_index: 56,
        climate_index: 92,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 38,
        country: 'South Korea',
        quality_of_life_index: 139,
        purchasing_power_index: 85,
        safety_index: 72,
        health_care_index: 82,
        cost_of_living_index: 78,
        property_price_to_income_ratio: 17,
        traffic_commute_time_index: 40,
        pollution_index: 62,
        climate_index: 68,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 39,
        country: 'Belarus',
        quality_of_life_index: 135,
        purchasing_power_index: 37,
        safety_index: 75,
        health_care_index: 59,
        cost_of_living_index: 35,
        property_price_to_income_ratio: 15,
        traffic_commute_time_index: 31,
        pollution_index: 44,
        climate_index: 64,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 40,
        country: 'Greece',
        quality_of_life_index: 133,
        purchasing_power_index: 44,
        safety_index: 60,
        health_care_index: 56,
        cost_of_living_index: 56,
        property_price_to_income_ratio: 11,
        traffic_commute_time_index: 34,
        pollution_index: 53,
        climate_index: 94,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 41,
        country: 'Romania',
        quality_of_life_index: 132,
        purchasing_power_index: 49,
        safety_index: 72,
        health_care_index: 55,
        cost_of_living_index: 35,
        property_price_to_income_ratio: 11,
        traffic_commute_time_index: 35,
        pollution_index: 58,
        climate_index: 78,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 42,
        country: 'South Africa',
        quality_of_life_index: 132,
        purchasing_power_index: 74,
        safety_index: 23,
        health_care_index: 64,
        cost_of_living_index: 43,
        property_price_to_income_ratio: 4,
        traffic_commute_time_index: 39,
        pollution_index: 57,
        climate_index: 95,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 43,
        country: 'Bulgaria',
        quality_of_life_index: 130,
        purchasing_power_index: 49,
        safety_index: 62,
        health_care_index: 55,
        cost_of_living_index: 37,
        property_price_to_income_ratio: 9,
        traffic_commute_time_index: 29,
        pollution_index: 65,
        climate_index: 83,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 44,
        country: 'Hungary',
        quality_of_life_index: 128,
        purchasing_power_index: 48,
        safety_index: 65,
        health_care_index: 48,
        cost_of_living_index: 41,
        property_price_to_income_ratio: 15,
        traffic_commute_time_index: 36,
        pollution_index: 48,
        climate_index: 79,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 45,
        country: 'Turkey',
        quality_of_life_index: 127,
        purchasing_power_index: 41,
        safety_index: 61,
        health_care_index: 70,
        cost_of_living_index: 35,
        property_price_to_income_ratio: 8,
        traffic_commute_time_index: 45,
        pollution_index: 67,
        climate_index: 93,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 46,
        country: 'Uruguay',
        quality_of_life_index: 126,
        purchasing_power_index: 37,
        safety_index: 46,
        health_care_index: 66,
        cost_of_living_index: 51,
        property_price_to_income_ratio: 16,
        traffic_commute_time_index: 40,
        pollution_index: 45,
        climate_index: 98,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 47,
        country: 'Ecuador',
        quality_of_life_index: 125,
        purchasing_power_index: 36,
        safety_index: 49,
        health_care_index: 71,
        cost_of_living_index: 41,
        property_price_to_income_ratio: 13,
        traffic_commute_time_index: 38,
        pollution_index: 57,
        climate_index: 95,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 48,
        country: 'Bosnia And Herzegovina',
        quality_of_life_index: 122,
        purchasing_power_index: 42,
        safety_index: 57,
        health_care_index: 52,
        cost_of_living_index: 36,
        property_price_to_income_ratio: 13,
        traffic_commute_time_index: 27,
        pollution_index: 62,
        climate_index: 80,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 49,
        country: 'Chile',
        quality_of_life_index: 120,
        purchasing_power_index: 43,
        safety_index: 55,
        health_care_index: 65,
        cost_of_living_index: 44,
        property_price_to_income_ratio: 15,
        traffic_commute_time_index: 35,
        pollution_index: 66,
        climate_index: 90,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 50,
        country: 'Mexico',
        quality_of_life_index: 119,
        purchasing_power_index: 42,
        safety_index: 46,
        health_care_index: 70,
        cost_of_living_index: 36,
        property_price_to_income_ratio: 11,
        traffic_commute_time_index: 39,
        pollution_index: 66,
        climate_index: 86,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 51,
        country: 'Malaysia',
        quality_of_life_index: 118,
        purchasing_power_index: 64,
        safety_index: 41,
        health_care_index: 68,
        cost_of_living_index: 39,
        property_price_to_income_ratio: 10,
        traffic_commute_time_index: 37,
        pollution_index: 63,
        climate_index: 58,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 52,
        country: 'Serbia',
        quality_of_life_index: 116,
        purchasing_power_index: 37,
        safety_index: 63,
        health_care_index: 51,
        cost_of_living_index: 36,
        property_price_to_income_ratio: 19,
        traffic_commute_time_index: 30,
        pollution_index: 60,
        climate_index: 83,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 53,
        country: 'Georgia',
        quality_of_life_index: 116,
        purchasing_power_index: 25,
        safety_index: 80,
        health_care_index: 51,
        cost_of_living_index: 28,
        property_price_to_income_ratio: 14,
        traffic_commute_time_index: 36,
        pollution_index: 71,
        climate_index: 84,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 54,
        country: 'Kuwait',
        quality_of_life_index: 116,
        purchasing_power_index: 86,
        safety_index: 65,
        health_care_index: 56,
        cost_of_living_index: 50,
        property_price_to_income_ratio: 12,
        traffic_commute_time_index: 34,
        pollution_index: 69,
        climate_index: 20,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 55,
        country: 'Argentina',
        quality_of_life_index: 115,
        purchasing_power_index: 47,
        safety_index: 38,
        health_care_index: 69,
        cost_of_living_index: 33,
        property_price_to_income_ratio: 25,
        traffic_commute_time_index: 43,
        pollution_index: 51,
        climate_index: 98,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 56,
        country: 'Jordan',
        quality_of_life_index: 112,
        purchasing_power_index: 35,
        safety_index: 59,
        health_care_index: 65,
        cost_of_living_index: 54,
        property_price_to_income_ratio: 8,
        traffic_commute_time_index: 42,
        pollution_index: 78,
        climate_index: 89,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 57,
        country: 'North Macedonia',
        quality_of_life_index: 110,
        purchasing_power_index: 37,
        safety_index: 61,
        health_care_index: 56,
        cost_of_living_index: 32,
        property_price_to_income_ratio: 13,
        traffic_commute_time_index: 28,
        pollution_index: 80,
        climate_index: 76,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 58,
        country: 'India',
        quality_of_life_index: 109,
        purchasing_power_index: 54,
        safety_index: 57,
        health_care_index: 67,
        cost_of_living_index: 25,
        property_price_to_income_ratio: 11,
        traffic_commute_time_index: 47,
        pollution_index: 79,
        climate_index: 65,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 59,
        country: 'Panama',
        quality_of_life_index: 108,
        purchasing_power_index: 34,
        safety_index: 53,
        health_care_index: 60,
        cost_of_living_index: 54,
        property_price_to_income_ratio: 13,
        traffic_commute_time_index: 36,
        pollution_index: 63,
        climate_index: 68,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 60,
        country: 'Lebanon',
        quality_of_life_index: 107,
        purchasing_power_index: 44,
        safety_index: 57,
        health_care_index: 64,
        cost_of_living_index: 61,
        property_price_to_income_ratio: 13,
        traffic_commute_time_index: 37,
        pollution_index: 88,
        climate_index: 95,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 61,
        country: 'Colombia',
        quality_of_life_index: 106,
        purchasing_power_index: 31,
        safety_index: 45,
        health_care_index: 67,
        cost_of_living_index: 31,
        property_price_to_income_ratio: 20,
        traffic_commute_time_index: 47,
        pollution_index: 63,
        climate_index: 97,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 62,
        country: 'Brazil',
        quality_of_life_index: 106,
        purchasing_power_index: 33,
        safety_index: 31,
        health_care_index: 56,
        cost_of_living_index: 40,
        property_price_to_income_ratio: 16,
        traffic_commute_time_index: 42,
        pollution_index: 55,
        climate_index: 97,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 63,
        country: 'Morocco',
        quality_of_life_index: 105,
        purchasing_power_index: 35,
        safety_index: 51,
        health_care_index: 46,
        cost_of_living_index: 34,
        property_price_to_income_ratio: 14,
        traffic_commute_time_index: 37,
        pollution_index: 71,
        climate_index: 92,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 64,
        country: 'Pakistan',
        quality_of_life_index: 105,
        purchasing_power_index: 31,
        safety_index: 56,
        health_care_index: 61,
        cost_of_living_index: 22,
        property_price_to_income_ratio: 12,
        traffic_commute_time_index: 39,
        pollution_index: 74,
        climate_index: 72,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 65,
        country: 'Ukraine',
        quality_of_life_index: 105,
        purchasing_power_index: 32,
        safety_index: 51,
        health_care_index: 52,
        cost_of_living_index: 33,
        property_price_to_income_ratio: 12,
        traffic_commute_time_index: 39,
        pollution_index: 65,
        climate_index: 71,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 66,
        country: 'China',
        quality_of_life_index: 103,
        purchasing_power_index: 61,
        safety_index: 68,
        health_care_index: 64,
        cost_of_living_index: 40,
        property_price_to_income_ratio: 29,
        traffic_commute_time_index: 42,
        pollution_index: 81,
        climate_index: 79,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 67,
        country: 'Russia',
        quality_of_life_index: 102,
        purchasing_power_index: 39,
        safety_index: 59,
        health_care_index: 58,
        cost_of_living_index: 39,
        property_price_to_income_ratio: 11,
        traffic_commute_time_index: 45,
        pollution_index: 63,
        climate_index: 40,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 68,
        country: 'Thailand',
        quality_of_life_index: 102,
        purchasing_power_index: 35,
        safety_index: 60,
        health_care_index: 78,
        cost_of_living_index: 50,
        property_price_to_income_ratio: 22,
        traffic_commute_time_index: 38,
        pollution_index: 75,
        climate_index: 69,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 69,
        country: 'Hong Kong',
        quality_of_life_index: 99,
        purchasing_power_index: 65,
        safety_index: 79,
        health_care_index: 66,
        cost_of_living_index: 77,
        property_price_to_income_ratio: 47,
        traffic_commute_time_index: 41,
        pollution_index: 68,
        climate_index: 84,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 70,
        country: 'Indonesia',
        quality_of_life_index: 97,
        purchasing_power_index: 25,
        safety_index: 54,
        health_care_index: 60,
        cost_of_living_index: 37,
        property_price_to_income_ratio: 19,
        traffic_commute_time_index: 43,
        pollution_index: 67,
        climate_index: 74,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 71,
        country: 'Kazakhstan',
        quality_of_life_index: 88,
        purchasing_power_index: 38,
        safety_index: 38,
        health_care_index: 51,
        cost_of_living_index: 31,
        property_price_to_income_ratio: 11,
        traffic_commute_time_index: 31,
        pollution_index: 75,
        climate_index: 40,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 72,
        country: 'Vietnam',
        quality_of_life_index: 87,
        purchasing_power_index: 28,
        safety_index: 55,
        health_care_index: 58,
        cost_of_living_index: 38,
        property_price_to_income_ratio: 21,
        traffic_commute_time_index: 30,
        pollution_index: 86,
        climate_index: 71,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 73,
        country: 'Egypt',
        quality_of_life_index: 87,
        purchasing_power_index: 22,
        safety_index: 53,
        health_care_index: 46,
        cost_of_living_index: 30,
        property_price_to_income_ratio: 13,
        traffic_commute_time_index: 50,
        pollution_index: 86,
        climate_index: 92,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 74,
        country: 'Peru',
        quality_of_life_index: 85,
        purchasing_power_index: 34,
        safety_index: 32,
        health_care_index: 56,
        cost_of_living_index: 39,
        property_price_to_income_ratio: 15,
        traffic_commute_time_index: 48,
        pollution_index: 84,
        climate_index: 98,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 75,
        country: 'Philippines',
        quality_of_life_index: 85,
        purchasing_power_index: 23,
        safety_index: 58,
        health_care_index: 67,
        cost_of_living_index: 38,
        property_price_to_income_ratio: 25,
        traffic_commute_time_index: 45,
        pollution_index: 74,
        climate_index: 61,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 76,
        country: 'Sri Lanka',
        quality_of_life_index: 85,
        purchasing_power_index: 24,
        safety_index: 60,
        health_care_index: 73,
        cost_of_living_index: 32,
        property_price_to_income_ratio: 31,
        traffic_commute_time_index: 59,
        pollution_index: 59,
        climate_index: 59,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 77,
        country: 'Iran',
        quality_of_life_index: 74,
        purchasing_power_index: 23,
        safety_index: 51,
        health_care_index: 52,
        cost_of_living_index: 39,
        property_price_to_income_ratio: 25,
        traffic_commute_time_index: 48,
        pollution_index: 77,
        climate_index: 71,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 78,
        country: 'Kenya',
        quality_of_life_index: 71,
        purchasing_power_index: 27,
        safety_index: 38,
        health_care_index: 56,
        cost_of_living_index: 40,
        property_price_to_income_ratio: 32,
        traffic_commute_time_index: 57,
        pollution_index: 77,
        climate_index: 100,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 79,
        country: 'Bangladesh',
        quality_of_life_index: 70,
        purchasing_power_index: 33,
        safety_index: 36,
        health_care_index: 43,
        cost_of_living_index: 32,
        property_price_to_income_ratio: 13,
        traffic_commute_time_index: 57,
        pollution_index: 86,
        climate_index: 71,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
      {
        id: 80,
        country: 'Nigeria',
        quality_of_life_index: 56,
        purchasing_power_index: 14,
        safety_index: 36,
        health_care_index: 52,
        cost_of_living_index: 31,
        property_price_to_income_ratio: 17,
        traffic_commute_time_index: 61,
        pollution_index: 88,
        climate_index: 61,
        created_at: '2021-04-21 17:34:07',
        updated_at: '2021-04-21 17:34:07',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'quality_of_life_index_by_countries',
      null,
      {}
    );
  },
};
