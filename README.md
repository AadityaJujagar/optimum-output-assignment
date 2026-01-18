# Optimum Output - Full Stack E-Commerce Mini-Application

A modern, production-ready full-stack e-commerce platform built with TypeScript, React, and Express. Browse products, create orders, and manage inventory with a beautiful, responsive UI.

---

## 🚀 Quick Start Guide

### Prerequisites (Install Before Starting)

Before you begin, ensure you have the following installed on your system:

- **Node.js** v16 or higher - [Download](https://nodejs.org/)
- **npm** v8+ (comes with Node.js) - Verify with `npm --version`
- **PostgreSQL** v13+ - [Download](https://www.postgresql.org/download/)
- **Git** - [Download](https://git-scm.com/)

To verify installations, run in your terminal:
```bash
node --version    # Should show v16.x.x or higher
npm --version     # Should show 8.x.x or higher
psql --version    # Should show 13.x or higher
```

---

## 📖 Complete Installation & Setup Guide

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd optimum-output-fullstack-task
```

Replace `<repository-url>` with the actual repository URL.

---

### Step 2: Set Up PostgreSQL Database

PostgreSQL must be running and accessible before proceeding.

#### Option A: Using PostgreSQL CLI (Recommended)

1. Open PostgreSQL command line:
   ```bash
   # On Windows
   psql -U postgres
   
   # On macOS/Linux
   psql -U postgres
   ```

2. Create a new database:
   ```sql
   CREATE DATABASE product_order_db;
   \q
   ```

3. Verify database creation:
   ```bash
   psql -U postgres -d product_order_db -c "\dt"
   ```

#### Option B: Using pgAdmin GUI

1. Open pgAdmin and connect to your PostgreSQL server
2. Right-click **Databases** → **Create** → **Database**
3. Enter name: `product_order_db`
4. Click **Save**

---

### Step 3: Backend Setup

```bash
cd backend
npm install
```

**Create `.env` file in the `backend` directory:**

```env
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/product_order_db"
PORT=4000
NODE_ENV=development
```

⚠️ **Important Notes:**
- Replace `your_password` with your PostgreSQL password
- If using default PostgreSQL installation without password, use: `DATABASE_URL="postgresql://postgres@localhost:5432/product_order_db"`
- Ensure `product_order_db` database exists in PostgreSQL

**Initialize Database & Run Migrations:**

```bash
npx prisma migrate dev --name init
```

This command will:
- Create all database tables
- Set up relationships
- Seed initial data (if applicable)

**Verify Database Setup:**

```bash
npx prisma studio
```

This opens Prisma Studio in your browser (http://localhost:5555) where you can view database contents.

---

### Step 4: Frontend Setup

In a new terminal, navigate to the frontend:

```bash
cd frontend
npm install
```

**Create `.env.local` file in the `frontend` directory:**

```env
VITE_API_BASE_URL=http://localhost:4000
```

This tells the frontend where the backend API is running.

---

## 🎯 Running the Application

### Development Mode (Recommended for Development)

You'll need **2 separate terminals** running simultaneously.

**Terminal 1 - Start Backend Server:**

```bash
cd backend
npm run dev
```

Expected output:
```
App is live on port: 4000
```

Backend is now running at: `http://localhost:4000`

**Terminal 2 - Start Frontend Development Server:**

```bash
cd frontend
npm run dev
```

Expected output:
```
VITE v7.2.4 ready in xxx ms
Local: http://localhost:5173/
```

Frontend is now running at: `http://localhost:5173`

**Access the Application:**

Open your browser and go to: **http://localhost:5173**

### Production Build

**Build Backend:**

```bash
cd backend
npm run build
npm start
```

**Build Frontend:**

```bash
cd frontend
npm run build
npm run preview
```

---

## 📂 Project Structure

```
optimum-output-fullstack-task/
│
├── README.md                          # This file
├── .gitignore                         # Git ignore rules
│
├── backend/                           # Express API Server
│   ├── src/
│   │   ├── index.ts                   # App entry point & server setup
│   │   ├── routes.ts                  # Route aggregation & registration
│   │   ├── config/
│   │   │   ├── db.ts                  # Database client initialization
│   │   │   └── env.ts                 # Environment configuration
│   │   │
│   │   └── modules/                   # Feature modules (MVC structure)
│   │       │
│   │       ├── product/               # Product Management Module
│   │       │   ├── product.types.ts   # TypeScript interfaces & types
│   │       │   ├── product.routes.ts  # Route definitions
│   │       │   ├── product.controller.ts # Request handlers
│   │       │   └── product.service.ts # Business logic
│   │       │
│   │       └── order/                 # Order Management Module
│   │           ├── order.types.ts     # TypeScript interfaces & types
│   │           ├── order.routes.ts    # Route definitions
│   │           ├── order.controller.ts # Request handlers
│   │           └── order.service.ts   # Business logic
│   │
│   ├── prisma/                        # Database ORM Configuration
│   │   ├── schema.prisma              # Database schema definition
│   │   └── migrations/                # Database migration files
│   │       ├── 20260117091442_init/
│   │       └── 20260117144054_image_section_added/
│   │
│   ├── dist/                          # Compiled JavaScript (created on build)
│   ├── node_modules/                  # Dependencies (created on install)
│   ├── package.json                   # Backend dependencies
│   ├── tsconfig.json                  # TypeScript configuration
│   └── .env                           # Environment variables (create this)
│
└── frontend/                          # React + Vite Application
    ├── src/
    │   ├── main.tsx                   # App entry point
    │   ├── App.tsx                    # Root component
    │   ├── index.css                  # Global styles (Tailwind CSS)
    │   │
    │   ├── api/                       # API Integration Layer
    │   │   ├── axios.ts               # Axios instance with base URL
    │   │   ├── product.api.ts         # Product API endpoints
    │   │   └── order.api.ts           # Order API endpoints
    │   │
    │   ├── types/                     # Shared TypeScript types
    │   │   ├── product.ts             # Product interfaces
    │   │   └── order.ts               # Order interfaces
    │   │
    │   ├── hooks/                     # Custom React Hooks
    │   │   ├── useProducts.ts         # Fetch all products
    │   │   ├── useOrder.ts            # Fetch order by ID
    │   │   └── useCreateOrder.ts      # Create new order
    │   │
    │   ├── components/                # Reusable UI Components
    │   │   ├── ProductCard.tsx        # Product display card
    │   │   ├── ProductSkeleton.tsx    # Loading placeholder
    │   │   ├── OrderProductRow.tsx    # Product row in order
    │   │   └── OrderItemRow.tsx       # Order item display
    │   │
    │   ├── pages/                     # Page Components (Route-level)
    │   │   ├── ProductsPage.tsx       # Browse all products
    │   │   ├── CreateOrderPage.tsx    # Create new order
    │   │   └── OrderDetailsPage.tsx   # View order details
    │   │
    │   └── routes/
    │       └── AppRoutes.tsx          # Route configuration
    │
    ├── public/                        # Static assets
    ├── dist/                          # Compiled build output
    ├── node_modules/                  # Dependencies (created on install)
    │
    ├── package.json                   # Frontend dependencies
    ├── tsconfig.json                  # TypeScript configuration
    ├── vite.config.ts                 # Vite build configuration
    ├── tailwind.config.ts             # Tailwind CSS configuration
    ├── postcss.config.js              # PostCSS configuration
    ├── eslint.config.js               # ESLint configuration
    ├── .env.local                     # Environment variables (create this)
    └── vercel.json                    # Vercel deployment config
```

---

## 🛠 Tech Stack & Dependencies

### Frontend Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI Library | 19.2.0 |
| **TypeScript** | Type Safety | 5.9.3 |
| **Vite** | Build Tool & Dev Server | 7.2.4 |
| **Tailwind CSS** | Styling | 3.4.19 |
| **React Router** | Client-side Routing | 7.12.0 |
| **React Query** | Server State Management | 5.90.18 |
| **Axios** | HTTP Client | 1.13.2 |
| **React Hot Toast** | Toast Notifications | 2.6.0 |
| **ESLint** | Code Quality | 9.39.1 |

### Backend Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **Node.js** | JavaScript Runtime | 16+ |
| **Express.js** | Web Framework | 5.2.1 |
| **TypeScript** | Type Safety | 5.9.3 |
| **Prisma** | ORM | 6.19.2 |
| **PostgreSQL** | Database | 13+ |
| **Nodemon** | Auto-reload Dev Server | 3.1.11 |
| **tsx** | TypeScript Executor | 4.21.0 |
| **CORS** | Cross-Origin Handling | 2.8.5 |

---

## ✨ Features

### Product Management
- 📦 **Browse Products** - View all available products with images and details
- 💰 **Price Display** - See real-time pricing and stock availability
- 🖼️ **Product Images** - Full-width product images with lazy loading
- 📊 **Stock Status** - Real-time inventory tracking
- ➕ **Create Products** - Add new products to catalog (Admin feature)

### Order Management
- 📝 **Create Orders** - Simple, intuitive order creation process
- 🛒 **Add Multiple Items** - Select multiple products with quantities
- 💯 **Order Validation** - Real-time stock validation
- 🧮 **Auto-calculate Totals** - Instant price calculation
- 🔍 **View Order Details** - Complete order history with itemized breakdown
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile

### User Experience
- ⚡ **Fast Loading** - Optimized with React Query caching
- 🎨 **Modern UI** - Beautiful Tailwind CSS design
- 🔔 **Toast Notifications** - Real-time success/error feedback
- ⏳ **Loading States** - Skeleton screens during data fetching
- 🚀 **Instant Feedback** - Smooth transitions and interactions

### Technical Features
- 🔒 **Type Safety** - Full TypeScript implementation
- 🏗️ **Modular Architecture** - Feature-based code organization
- 🗄️ **Database Integrity** - Relational data with Prisma ORM
- 🔄 **API Integration** - Clean separation of concerns
- 📦 **Production Ready** - Optimized builds and configurations

---

## 🔌 API Reference

### Base URL
```
http://localhost:4000/api
```

### Product Endpoints

#### Get All Products
```http
GET /api/products
```
**Response:**
```json
[
  {
    "id": 1,
    "name": "Product Name",
    "price": 1999.99,
    "stock": 10,
    "imageUrl": "https://example.com/image.jpg",
    "createdAt": "2026-01-17T12:00:00Z",
    "updatedAt": "2026-01-17T12:00:00Z"
  }
]
```

#### Create Product
```http
POST /api/products
Content-Type: application/json

{
  "name": "New Product",
  "price": 2999.99,
  "stock": 50,
  "imageUrl": "https://example.com/image.jpg"
}
```

---

### Order Endpoints

#### Create Order
```http
POST /api/orders
Content-Type: application/json

{
  "items": [
    {
      "productId": 1,
      "quantity": 2
    },
    {
      "productId": 2,
      "quantity": 1
    }
  ]
}
```
**Response:**
```json
{
  "id": 1,
  "createdAt": "2026-01-18T10:30:00Z",
  "items": [
    {
      "id": 1,
      "orderId": 1,
      "productId": 1,
      "quantity": 2
    }
  ]
}
```

#### Get Order Details
```http
GET /api/orders/:id
```
**Response:**
```json
{
  "id": 1,
  "createdAt": "2026-01-18T10:30:00Z",
  "items": [
    {
      "id": 1,
      "orderId": 1,
      "productId": 1,
      "quantity": 2,
      "product": {
        "id": 1,
        "name": "Product Name",
        "price": 1999.99,
        "stock": 8
      }
    }
  ]
}
```

---

## 📊 Database Schema

### Entity Relationship Diagram

```
┌─────────────┐         ┌──────────┐         ┌────────────┐
│   Product   │◄────────┤ OrderItem├────────►│   Order    │
└─────────────┘         └──────────┘         └────────────┘
```

### Product Table
```sql
CREATE TABLE "Product" (
  id         INT PRIMARY KEY AUTO_INCREMENT,
  name       VARCHAR(255) NOT NULL,
  price      FLOAT NOT NULL,
  stock      INT NOT NULL,
  imageUrl   VARCHAR(500) NOT NULL,
  createdAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | Integer | Primary Key, Auto Increment | Unique product identifier |
| `name` | String | NOT NULL | Product name |
| `price` | Float | NOT NULL | Product price (in currency units) |
| `stock` | Integer | NOT NULL | Available quantity |
| `imageUrl` | String | NOT NULL | Product image URL |
| `createdAt` | DateTime | DEFAULT NOW() | Creation timestamp |
| `updatedAt` | DateTime | ON UPDATE NOW() | Last modification timestamp |

### Order Table
```sql
CREATE TABLE "Order" (
  id        INT PRIMARY KEY AUTO_INCREMENT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | Integer | Primary Key, Auto Increment | Unique order identifier |
| `createdAt` | DateTime | DEFAULT NOW() | Order creation timestamp |

### OrderItem Table
```sql
CREATE TABLE "OrderItem" (
  id        INT PRIMARY KEY AUTO_INCREMENT,
  orderId   INT NOT NULL FOREIGN KEY REFERENCES Order(id),
  productId INT NOT NULL FOREIGN KEY REFERENCES Product(id),
  quantity  INT NOT NULL,
  UNIQUE(orderId, productId)
);
```

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | Integer | Primary Key, Auto Increment | Unique order item identifier |
| `orderId` | Integer | Foreign Key → Order | Associated order |
| `productId` | Integer | Foreign Key → Product | Associated product |
| `quantity` | Integer | NOT NULL | Quantity ordered |
| Composite | - | UNIQUE(orderId, productId) | One product per order only |

---

## 🎨 User Interface Pages

### Products Page (`/products`)
**Route:** `/products`
**Purpose:** Browse and view all available products

**Features:**
- Grid layout of product cards
- Product images, names, prices, and stock status
- Stock availability indicators
- Loading skeleton screens
- Create Order button

**Components Used:**
- `ProductCard.tsx` - Individual product display
- `ProductSkeleton.tsx` - Loading placeholder
- `ProductsPage.tsx` - Page layout

---

### Create Order Page (`/orders/new`)
**Route:** `/orders/new`
**Purpose:** Create a new order with selected products

**Features:**
- Product selection dropdown
- Quantity input with validation
- Real-time order total calculation
- Stock validation
- Order summary panel
- Submit button with success notification
- Error handling for invalid selections

**Components Used:**
- `CreateOrderPage.tsx` - Main page component
- `ProductCard.tsx` - Product selection
- `useCreateOrder.ts` - Form handling hook
- `useProducts.ts` - Product data fetching

---

### Order Details Page (`/orders/:id`)
**Route:** `/orders/:id`
**Purpose:** View complete order information and breakdown

**Features:**
- Order ID and creation date
- Itemized product list with:
  - Product names
  - Unit prices
  - Quantities
  - Line totals
- Order total calculation
- Order confirmation status
- Back to products button

**Components Used:**
- `OrderDetailsPage.tsx` - Main page component
- `OrderProductRow.tsx` - Individual product row
- `OrderItemRow.tsx` - Order item display
- `useOrder.ts` - Order data fetching hook

---

## 🧪 Development Commands

### Backend Commands

```bash
cd backend

# Start development server with auto-reload
npm run dev

# Build TypeScript to JavaScript
npm run build

# Start production server (requires build first)
npm start

# Database operations
npx prisma studio              # Open Prisma Studio GUI
npx prisma migrate dev         # Create new migration
npx prisma migrate reset       # Reset database (deletes all data)
npx prisma generate           # Regenerate Prisma client
```

### Frontend Commands

```bash
cd frontend

# Start development server with hot reload
npm run dev

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview

# Run ESLint code quality checks
npm run lint
```

---

## 🔒 Environment Variables

### Backend Configuration (`.env`)

Create a `.env` file in the `backend` folder:

```env
# Database Connection String
# Format: postgresql://[user]:[password]@[host]:[port]/[database]
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/product_order_db"

# Server Port
PORT=4000

# Environment
NODE_ENV=development
```

**Database Connection String Variations:**

```env
# With password (Most common)
DATABASE_URL="postgresql://postgres:mypassword@localhost:5432/product_order_db"

# Without password (Default PostgreSQL on Windows)
DATABASE_URL="postgresql://postgres@localhost:5432/product_order_db"

# Custom user
DATABASE_URL="postgresql://admin:securepass@localhost:5432/product_order_db"

# Different host/port
DATABASE_URL="postgresql://postgres:password@192.168.1.100:5432/product_order_db"
```

### Frontend Configuration (`.env.local`)

Create a `.env.local` file in the `frontend` folder:

```env
# API Base URL (Backend address)
VITE_API_BASE_URL=http://localhost:4000
```

**For Production:**
```env
VITE_API_BASE_URL=https://api.yourdomain.com
```

---

## 🐛 Troubleshooting Guide

### Issue: "Unknown file extension .ts" Error

**Cause:** TypeScript not configured properly for ESM modules

**Solution:**
```bash
cd backend
# The dev script already uses tsx instead of ts-node
npm run dev
```

---

### Issue: Database Connection Error

**Error Message:**
```
Error: connect ECONNREFUSED 127.0.0.1:5432
```

**Solutions:**

1. **Check if PostgreSQL is running:**
   ```bash
   # Windows: Check services
   services.msc
   
   # macOS/Linux: Check service status
   sudo systemctl status postgresql
   ```

2. **Verify Database URL in `.env`:**
   ```env
   # Ensure these are correct:
   # - Username (usually 'postgres')
   # - Password
   # - Database name ('product_order_db')
   # - Port (default 5432)
   ```

3. **Test connection:**
   ```bash
   psql -U postgres -d product_order_db
   ```

4. **Create database if missing:**
   ```bash
   createdb product_order_db -U postgres
   ```

---

### Issue: Port Already in Use

**Error:** `Error: listen EADDRINUSE: address already in use :::4000`

**Solutions:**

1. **Change backend port in `.env`:**
   ```env
   PORT=4001
   ```

2. **Change frontend port in dev server:**
   ```bash
   cd frontend
   npm run dev -- --port 5174
   ```

3. **Kill process using the port (Windows):**
   ```powershell
   netstat -ano | findstr :4000
   taskkill /PID <PID> /F
   ```

4. **Kill process using the port (macOS/Linux):**
   ```bash
   lsof -i :4000
   kill -9 <PID>
   ```

---

### Issue: "Cannot find module" Error

**Cause:** Dependencies not installed

**Solution:**
```bash
# Backend
cd backend
rm -rf node_modules package-lock.json
npm install

# Frontend
cd frontend
rm -rf node_modules package-lock.json
npm install
```

---

### Issue: Prisma Client Errors

**Error:** `PrismaClientRustPanicError` or `PrismaClientInitializationError`

**Solutions:**

```bash
cd backend

# Regenerate Prisma client
npx prisma generate

# Update Prisma
npm update @prisma/client prisma

# Reset everything
npx prisma migrate reset
```

---

### Issue: CORS Errors in Frontend

**Error:** `Access to XMLHttpRequest blocked by CORS policy`

**Cause:** API URL mismatch or CORS not enabled on backend

**Solution:**

1. **Verify `.env.local` in frontend:**
   ```env
   VITE_API_BASE_URL=http://localhost:4000
   ```

2. **Check backend is running on port 4000:**
   ```bash
   cd backend
   npm run dev
   ```

3. **Verify CORS is enabled in backend:**
   Check [backend/src/index.ts](backend/src/index.ts#L14) for:
   ```typescript
   app.use(cors());
   ```

---

### Issue: TypeScript Compilation Errors

**Solution:**
```bash
# Check TypeScript configuration
cd backend
npx tsc --noEmit

# Or for frontend
cd frontend
npx tsc --noEmit
```

---

## 📈 Performance Optimization Tips

### Frontend
- **Enable Caching:** React Query automatically caches API responses
- **Lazy Load Images:** Use `loading="lazy"` on image tags
- **Code Splitting:** Vite automatically splits code at route boundaries
- **Production Build:** Always use `npm run build` for deployments

### Backend
- **Database Indexing:** Prisma creates indexes automatically
- **Connection Pooling:** PostgreSQL handles connection pooling
- **Request Validation:** Validate input early to fail fast
- **Error Logging:** Implement proper error logging for monitoring

---

## 🚀 Deployment Guide

### Deploy Backend to Vercel/Railway/Render

1. **Prepare for production:**
   ```bash
   cd backend
   npm run build
   ```

2. **Set environment variables on hosting platform:**
   ```env
   DATABASE_URL=your_production_database_url
   PORT=4000
   NODE_ENV=production
   ```

3. **Set start command:** `npm start`

### Deploy Frontend to Vercel/Netlify

1. **Build the project:**
   ```bash
   cd frontend
   npm run build
   ```

2. **Set environment variable:**
   ```env
   VITE_API_BASE_URL=https://your-backend-url.com
   ```

3. **Deploy `dist` folder** to your hosting platform

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Express.js Guide](https://expressjs.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

---

## 📄 License

ISC

## 👤 Author

Created as a full-stack development exercise demonstrating modern web development practices.

---

## ❓ FAQ

**Q: Can I use a different database?**
A: Yes, Prisma supports PostgreSQL, MySQL, SQLite, etc. Update `datasource` in `prisma/schema.prisma`.

**Q: How do I add a new feature?**
A: Create a new module in the appropriate folder (product/order), follow the existing pattern with routes, controller, service, and types.

**Q: Can I deploy this to production?**
A: Yes! Both frontend and backend are production-ready. Follow the deployment guide above.

**Q: What if I forgot the PostgreSQL password?**
A: Reset PostgreSQL password on your system, or reinstall PostgreSQL to set a new password.

---

**⚠️ Important Reminders:**
- Always ensure PostgreSQL is running before starting the backend
- Keep `.env` files in `.gitignore` (never commit sensitive data)
- Run migrations after pulling new database changes
- Test locally before deploying to production

---

**Ready to start? Follow the Quick Start Guide above! 🎉**
