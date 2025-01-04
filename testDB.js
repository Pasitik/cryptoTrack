const DBdata = {
    "users": [
      {
        "id": 1,
        "email": "user1@example.com",
        "password": "hashed_password_1", // Simulate hashed passwords
        "portfolio": [1, 2]
      },
      {
        "id": 2,
        "email": "user2@example.com",
        "password": "hashed_password_2",
        "portfolio": [3]
      }
    ],
    "cryptos": [
      {
        "symbol": "BTC",
        "name": "Bitcoin",
        "currentPrice": 40000
      },
      {
        "symbol": "ETH",
        "name": "Ethereum",
        "currentPrice": 1800
      },
      {
        "symbol": "ADA",
        "name": "Cardano",
        "currentPrice": 1.2
      }
    ],
    "portfolioEntries": [
      {
        "id": 1,
        "userId": 1,
        "crypto": "BTC",
        "quantity": 0.5,
        "purchasePrice": 30000,
        "purchaseDate": "2023-01-01"
      },
      {
        "id": 2,
        "userId": 1,
        "crypto": "ETH",
        "quantity": 10,
        "purchasePrice": 1500,
        "purchaseDate": "2023-02-15"
      },
      {
        "id": 3,
        "userId": 2,
        "crypto": "BTC",
        "quantity": 1,
        "purchasePrice": 35000,
        "purchaseDate": "2023-03-01"
      }
    ],
    "alerts": [
      {
        "id": 1,
        "userId": 1,
        "crypto": "BTC",
        "threshold": 45000,
        "type": "above"
      },
      {
        "id": 2,
        "userId": 2,
        "crypto": "ETH",
        "threshold": 1700,
        "type": "below"
      }
    ]
  }

module.exports = DBdata;