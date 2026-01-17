# Optimum Output - Full Stack E-Commerce Application

A modern, full-stack e-commerce platform built with TypeScript, React, and Express. Browse products, create orders, and manage inventory with a beautiful, responsive UI.

## 🚀 Features

- **Product Catalog** - Browse products with images, prices, and stock availability
- **Order Management** - Create and track orders with detailed product information
- **Real-time Stock Updates** - Live inventory management with instant updates
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Type-Safe** - Full TypeScript implementation across frontend and backend
- **Database Persistence** - PostgreSQL with Prisma ORM for reliable data management

## 🛠 Tech Stack

### Frontend
- **React 19** - Modern UI framework
- **TypeScript** - Type safety and better DX
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Query** - Server state management
- **Axios** - HTTP client
- **React Hot Toast** - Toast notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express 5** - Web framework
- **TypeScript** - Type safety
- **Prisma** - ORM for database management
- **PostgreSQL** - Relational database
- **CORS** - Cross-origin request handling

## 📋 Prerequisites

- **Node.js** v16 or higher
- **npm** or **yarn**
- **PostgreSQL** database
- **.env files** configured (see below)

## 🔧 Installation

### 1. Clone and Setup
```bash
git clone <repository-url>
cd optimum-output-fullstack-task
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/product_order_db"
PORT=4000
```

Run database migrations:
```bash
npx prisma migrate dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

## 🚀 Running the Application

### Development Mode

**Backend (Terminal 1)**
```bash
cd backend
npm run dev
```
Server runs on `http://localhost:4000`

**Frontend (Terminal 2)**
```bash
cd frontend
npm run dev
```
App runs on `http://localhost:5173`

### Production Build

**Backend**
```bash
npm run build
npm start
```

**Frontend**
```bash
npm run build
npm run preview
```

## 📂 Project Structure

```
optimum-output-fullstack-task/
├── backend/
│   ├── src/
│   │   ├── index.ts              # App entry point
│   │   ├── routes.ts             # Route registration
│   │   ├── config/               # Configuration
│   │   │   ├── db.ts             # Database config
│   │   │   └── env.ts            # Environment variables
│   │   └── modules/
│   │       ├── product/          # Product module
│   │       │   ├── product.controller.ts
│   │       │   ├── product.service.ts
│   │       │   ├── product.routes.ts
│   │       │   └── product.types.ts
│   │       └── order/            # Order module
│   │           ├── order.controller.ts
│   │           ├── order.service.ts
│   │           ├── order.routes.ts
│   │           └── order.types.ts
│   ├── prisma/
│   │   ├── schema.prisma         # Database schema
│   │   └── migrations/           # Database migrations
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── App.tsx               # Root component
    │   ├── main.tsx              # Entry point
    │   ├── api/                  # API integration
    │   │   ├── axios.ts          # HTTP client setup
    │   │   ├── product.api.ts
    │   │   └── order.api.ts
    │   ├── components/           # Reusable components
    │   │   ├── ProductCard.tsx
    │   │   ├── OrderProductRow.tsx
    │   │   ├── OrderItemRow.tsx
    │   │   └── ProductSkeleton.tsx
    │   ├── hooks/                # Custom hooks
    │   │   ├── useProducts.ts
    │   │   ├── useOrder.ts
    │   │   └── useCreateOrder.ts
    │   ├── pages/                # Page components
    │   │   ├── ProductsPage.tsx
    │   │   ├── CreateOrderPage.tsx
    │   │   └── OrderDetailsPage.tsx
    │   ├── routes/
    │   │   └── AppRoutes.tsx
    │   ├── types/                # TypeScript types
    │   │   ├── product.ts
    │   │   └── order.ts
    │   └── index.css             # Global styles
    └── package.json
```

## 🔌 API Endpoints

### Products
- `GET /api/products` - Fetch all products
- `POST /api/products` - Create a new product
  ```json
  {
    "name": "Product Name",
    "price": 1999.99,
    "stock": 10,
    "imageUrl": "https://example.com/image.jpg"
  }
  ```

### Orders
- `POST /api/orders` - Create a new order
  ```json
  {
    "items": [
      {
        "productId": 1,
        "quantity": 2
      }
    ]
  }
  ```
- `GET /api/orders/:id` - Get order details

## 📊 Database Schema

### Product Table
| Field | Type | Description |
|-------|------|-------------|
| id | Int (PK) | Primary key |
| name | String | Product name |
| price | Float | Product price |
| stock | Int | Stock quantity |
| imageUrl | String | Product image URL |
| createdAt | DateTime | Creation timestamp |
| updatedAt | DateTime | Last update timestamp |

### Order Table
| Field | Type | Description |
|-------|------|-------------|
| id | Int (PK) | Primary key |
| createdAt | DateTime | Creation timestamp |

### OrderItem Table
| Field | Type | Description |
|-------|------|-------------|
| id | Int (PK) | Primary key |
| orderId | Int (FK) | Order reference |
| productId | Int (FK) | Product reference |
| quantity | Int | Quantity ordered |

## 🎨 UI Pages

### Products Page (`/products`)
- Grid display of all available products
- Product cards with images, names, prices, and stock status
- "Create Order" button to navigate to order creation
- Loading skeletons while fetching data

### Create Order Page (`/orders/new`)
- Select products and quantities
- Real-time order total calculation
- Stock validation
- Order submission with success notification

### Order Details Page (`/orders/:id`)
- View complete order information
- Product breakdown with prices
- Order total calculation
- Confirmation status

## 🧪 Development Workflow

### Database Operations
```bash
# View database in Prisma Studio
npx prisma studio

# Reset database (warning: deletes all data)
npx prisma migrate reset

# Create new migration
npx prisma migrate dev --name <migration_name>
```

### Code Quality
```bash
# Frontend linting
cd frontend
npm run lint

# TypeScript compilation
npm run build
```

## 🐛 Troubleshooting

### Port Already in Use
If port 4000 or 5173 is already in use, modify the PORT variable in `.env` for the backend or use Vite's `--port` flag for frontend.

### Database Connection Error
Ensure PostgreSQL is running and the `DATABASE_URL` in `.env` is correct.

### Prisma Client Issues
```bash
# Regenerate Prisma client
npx prisma generate

# Reset node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📝 Environment Variables

### Backend `.env`
```env
DATABASE_URL="postgresql://user:password@localhost:5432/product_order_db"
PORT=4000
NODE_ENV=development
```

### Frontend
Frontend uses Vite and reads from `.env` files with `VITE_` prefix (if needed).

## 🚀 Deployment

### Backend (Heroku/Railway/Vercel)
1. Build: `npm run build`
2. Set `DATABASE_URL` environment variable
3. Run: `npm start`

### Frontend (Vercel/Netlify)
1. Build: `npm run build`
2. Deploy `dist` folder
3. Configure environment variables if needed

## 📄 License

ISC

## 👤 Author

Created as a full-stack development exercise

---

**Happy coding! 🚀**
