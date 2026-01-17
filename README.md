# Electronic Mart

A modern e-commerce web application built with Next.js 15/16 (App Router) for electronics and gadgets.

## Features

- **Landing Page**: Attractive home page with hero section and featured categories
- **Authentication**: Mock login system with hardcoded credentials
- **Product Catalog**: Browse and view detailed product information
- **Protected Routes**: Add new products (requires authentication)
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Toast Notifications**: User feedback for actions

## Tech Stack

- **Frontend**: Next.js 15/16 (App Router), React 18
- **Styling**: Tailwind CSS
- **Authentication**: Cookie-based with js-cookie
- **Notifications**: react-hot-toast
- **Backend**: Express.js API server
- **Images**: Next.js Image optimization

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd electronic-mart
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   cd ..
   ```

### Running the Application

1. **Start the Express.js API server**
   ```bash
   cd server
   npm run dev
   ```
   The API server will run on http://localhost:3001

2. **Start the Next.js development server** (in a new terminal)
   ```bash
   npm run dev
   ```
   The web application will run on http://localhost:3000

### Default Login Credentials

- **Email**: admin@electronicmart.com
- **Password**: password123

## Project Structure

```
electronic-mart/
├── app/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── ProtectedRoute.js
│   ├── items/
│   │   ├── [id]/
│   │   │   └── page.js
│   │   └── page.js
│   ├── login/
│   │   └── page.js
│   ├── add-item/
│   │   └── page.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── server/
│   ├── server.js
│   └── package.json
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md
```

## API Endpoints

The Express.js server provides the following endpoints:

- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get single item
- `POST /api/items` - Create new item (requires authentication)
- `PUT /api/items/:id` - Update item (requires authentication)
- `DELETE /api/items/:id` - Delete item (requires authentication)
- `GET /api/health` - Health check

## Features Overview

### Public Pages
- **Home Page** (`/`): Landing page with hero section and features
- **Items Page** (`/items`): Browse all products
- **Item Details** (`/items/[id]`): View detailed product information
- **Login Page** (`/login`): Authentication form

### Protected Pages
- **Add Item** (`/add-item`): Form to add new products (login required)

### Components
- **Navbar**: Navigation with authentication state
- **Footer**: Site footer with links and contact info
- **ProtectedRoute**: HOC for route protection

## Customization

### Adding New Products
1. Login with the provided credentials
2. Navigate to "Add Item" in the navbar
3. Fill out the product form
4. Submit to add the product

### Styling
The application uses Tailwind CSS for styling. You can customize the design by:
- Modifying the Tailwind configuration in `tailwind.config.js`
- Adding custom CSS classes in `app/globals.css`
- Updating component styles directly

### API Integration
Currently using mock data. To integrate with a real backend:
1. Update the API endpoints in the components
2. Replace mock authentication with real auth service
3. Add proper error handling and loading states

## Deployment

### Frontend (Vercel)
```bash
npm run build
```

### Backend (Node.js hosting)
```bash
cd server
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.