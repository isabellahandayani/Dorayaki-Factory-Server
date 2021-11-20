# Dorayaki Factory Server

## How to Run
```
node index.js
```
Make sure to add make a .env file with your own configuration

## Deskripsi singkat web service
Backend dari dorayaki factory

## Skema Basis Data yang Digunakan
| requests    |
| ----------- |
| id          |
| id_dorayaki |
| stok_added  |
| status      |
| createdAt   |
| updatedAt   |

| dorayakis     |
| ------------- |
| id            |
| dorayaki_name |
| createdAt     |
| updatedAt     |

| admins    |
| --------- |
| id        |
| email     |
| password  |
| createdAt |
| updatedAt |

| bahan_baku |
| ---------- |
| id         |
| nama_bahan |
| satuan     |
| stok       |
| createdAt  |
| updatedAt  |

| dorayaki_recipe |
| --------------- |
| id              |
| id_bahan        |
| id_dorayaki     |
| qty             |
| createdAt       |
| updatedAt       |

| log_admin_requests |
| ------------------ |
| id                 |
| id_admin           |
| id_request         |
| createdAt          |
| updatedAt          |

| log_request |
| ----------- |
| id          |
| ip          |
| endpoint    |
| timestamp   |

## Pembagian Tugas

REST
- Database Pabrik: 13519144
- Autentikasi Pengguna: 13519144
- Pengelolaan Request: 13519114
- Manajemen Bahan Baku: 13519081
- Manajemen Resep: 13519081
- Notifikasi Email: 13519114