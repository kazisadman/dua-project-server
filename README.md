# 🕌 Dua Project Server

This repository contains the backend server for the Dua Project, providing API for managing and serving Duas, categories, and related data. This server is built to handle data fetching and managing core business logic for the frontend application.

Website Live Link - https://dua-project-client.vercel.app/dua-categories

API link - https://dua-project-server-production.up.railway.app/api/

## ✨ Features

The server is designed to offer the following core functionalities:

* **Dua Management**: API endpoints for fetching Duas by ID, category, or sub-category.
* **Category Hierarchy**: Structured endpoints to retrieve the main category and sub-category lists.
* **Search and Filtering**: search functionality to find Category based on keywords.

## 🛠️ Technology Stack

This project is built using:

* **Runtime**: Node.js
* **Language**: Typescript
* **Framework**: Express.js
* **Database**: Sqlite
* **Deployment**: Railway

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/kazisadman/dua-project-server.git
cd dua-project-server
```

2. Install dependencies:

```bash
npm install
```

3. **Set up Environment Variables**: Create a file named `.env` in the root directory of the project and add your configuration details.

```env
# Server Configuration
PORT=5000
```

### Running the Server

Start the server in development mode. The server will typically run on the port specified in your `.env` file (e.g., `http://localhost:5000`).

```bash
npm start
# or for development with live reload:
# npm run dev
```

## 🗺️ API Endpoints

The following are the main categories of endpoints available:

API Documentation: https://documenter.getpostman.com/view/17553568/2sB3dLTr5j

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/v1/categories` | Retrieve all main Dua categories. |
| `GET` | `/api/v1/categories/:id` | Get details for a specific category, including its sub-categories id. |
| `GET` | `/api/v1/categories/:id/subcategories` | Get details for a all the subcategories for that specific category. |
| `GET` | `/api/v1/categories/:id` | Get details for a specific category, including its sub-categories. |
| `GET` | `/api/v1/subcategories` | Retrieve all main Dua subcategories. |
| `GET` | `/api/v1/subcategories/:id` | Get details for a specific subcategory, including its duas id. |
| `GET` | `/api/v1/subcategories/:id/duas` | Get details for a all the duas for that specific subcategory. |
| `GET` | `/api/v1/duas` | Retrieve a list of all Duas|
| `GET` | `/api/v1/duas/:id` | Get a single Dua by its ID. |
| `GET` | `/api/v1/categories/search` | Search categories based on query parameters (e.g., `?q=morning`). |

---

**Project Maintainer**: [Kazi Sadman](https://github.com/kazisadman)
