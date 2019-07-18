# Steps to start

1. npm install
2. npm run dev
3. POST http://localhost:3000/api/v1/barcode

```json
{
	"barcode": "021000010875"
}
```
```json
{
    "product_name": "Macaroni & cheese dinner - original",
    "barcode": "021000010875",
    "result": {
        "should_eat": 0.06373577564954758,
        "shoudnt_eat": 0.9346157908439636
    },
    "nutriments": {
        "vitamin-c_serving": 0,
        "nutrition-score-fr": 1,
        "fat_100g": 3.5,
        "fiber": 1,
        "proteins_serving": 4.06,
        "proteins_value": 7,
        "vitamin-c_100g": 0,
        "sugars_100g": 5,
        "salt_value": 0.53,
        "fat_value": 3.5,
        "trans-fat_serving": 0,
        "carbohydrates_value": 39,
        "trans-fat": 0,
        "nutrition-score-fr_100g": 1,
        "calcium_unit": "% DV",
        "iron_value": 6,
        "sodium_unit": "g",
        "trans-fat_100g": 0,
        "sodium_100g": 0.212,
        "calcium": 0.06,
        "energy-from-fat_value": 25,
        "carbohydrates_unit": "",
        "salt_serving": 0.307,
        "proteins_100g": 7,
        "proteins": 7,
        "sodium_serving": 0.123,
        "nutrition-score-uk_100g": 1,
        "vitamin-c": 0,
        "vitamin-a_unit": "% DV",
        "saturated-fat_100g": 2,
        "vitamin-a": 0,
        "sugars": 5,
        "nutrition-score-fr_serving": 1,
        "iron_100g": 0.00108,
        "fat_unit": "",
        "carbohydrates_100g": 39,
        "saturated-fat_serving": 1.16,
        "energy_serving": 534,
        "nutrition-score-uk": 1,
        "saturated-fat_value": 2,
        "fat": 3.5,
        "energy_100g": 920,
        "saturated-fat_unit": "",
        "vitamin-a_100g": 0,
        "energy-from-fat_100g": 105,
        "iron": 0.00108,
        "energy-from-fat_unit": "kcal",
        "energy_unit": "kcal",
        "cholesterol_value": 5,
        "nova-group_100g": 4,
        "energy": 920,
        "fiber_value": 1,
        "energy_value": 220,
        "vitamin-a_serving": 0,
        "nova-group": 4,
        "fiber_unit": "g",
        "sugars_value": 5,
        "fat_serving": 2.03,
        "iron_unit": "% DV",
        "sugars_unit": "",
        "calcium_serving": 0.0348,
        "trans-fat_unit": "g",
        "energy-from-fat_serving": 60.9,
        "trans-fat_value": 0,
        "sodium_value": 0.212,
        "carbohydrates": 39,
        "nova-group_serving": 2.32,
        "sodium": 0.212,
        "cholesterol_unit": "mg",
        "nutrition-score-uk_serving": 1,
        "fiber_100g": 1,
        "fiber_modifier": "<",
        "salt_unit": "",
        "cholesterol_serving": 0.0029,
        "salt": 0.53,
        "proteins_unit": "",
        "fiber_serving": 0.58,
        "vitamin-a_value": 0,
        "energy-from-fat": 105,
        "calcium_100g": 0.06,
        "cholesterol": 0.005,
        "vitamin-c_value": 0,
        "carbohydrates_serving": 22.6,
        "vitamin-c_unit": "% DV",
        "iron_serving": 0.000626,
        "cholesterol_100g": 0.005,
        "cholesterol_modifier": "<",
        "calcium_value": 6,
        "sugars_serving": 2.9,
        "salt_100g": 0.53,
        "saturated-fat": 2
    }
}


```

4. Run brain.js locally.

- node network/index.js
- node network/prototype.js
