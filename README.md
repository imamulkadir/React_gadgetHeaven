# 🚀 Gadget Heaven

> **A modern e-commerce platform for cutting-edge tech gadgets and accessories**

<div align="center">

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.12-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5.1.3-5A0EF8?style=flat&logo=daisyui)](https://daisyui.com/)

</div>

<div align="center">
  <img src="src/assets/banner.jpg" alt="Gadget Heaven Banner" width="800" style="border-radius: 12px; margin: 20px 0;">
</div>

## ✨ Features

### 🛍️ **E-commerce Core**

- **Product Catalog**: Browse through diverse tech gadgets and accessories
- **Category Filtering**: Filter products by Laptops, Accessories, Smart Watches, MacBook, iPhone
- **Product Details**: Comprehensive product information with specifications and ratings
- **Responsive Design**: Mobile-first approach with modern UI/UX

### 🛒 **Shopping Experience**

- **Shopping Cart**: Add/remove products with local storage persistence
- **Wishlist Management**: Save favorite products for later
- **Purchase Flow**: Complete checkout process with success confirmation
- **Price Sorting**: Sort cart items by price (ascending/descending)

### 📊 **Analytics & Dashboard**

- **Statistics Visualization**: Interactive charts using Recharts library
- **Product Analytics**: Price analysis and product performance metrics
- **User Dashboard**: Centralized management for cart and wishlist
- **Real-time Updates**: Dynamic data synchronization

### 🎨 **Modern UI/UX**

- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **DaisyUI Components**: Beautiful, accessible component library
- **Responsive Layout**: Optimized for all device sizes
- **Smooth Animations**: Enhanced user experience with transitions
- **Toast Notifications**: User feedback with React-Toastify

## 🚀 Tech Stack

| Technology         | Version | Purpose                  |
| ------------------ | ------- | ------------------------ |
| **React**          | 19.1.1  | Frontend framework       |
| **Vite**           | 7.1.2   | Build tool & dev server  |
| **React Router**   | 7.8.2   | Client-side routing      |
| **Tailwind CSS**   | 4.1.12  | Utility-first CSS        |
| **DaisyUI**        | 5.1.3   | Component library        |
| **Recharts**       | 3.1.2   | Data visualization       |
| **React Toastify** | 11.0.5  | Toast notifications      |
| **LocalForage**    | 1.10.0  | Local storage management |

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Cart/           # Shopping cart functionality
│   ├── Category/       # Product categorization
│   ├── Dashboard/      # User dashboard
│   ├── Home/           # Landing page
│   ├── NavBar/         # Navigation component
│   ├── Product/        # Individual product display
│   ├── ProductDetail/  # Detailed product view
│   ├── Products/       # Product listing
│   ├── Statistics/     # Analytics & charts
│   ├── Utilities/      # Helper functions
│   └── Wishlist/       # Wishlist management
├── assets/             # Images and static files
└── main.jsx           # Application entry point
```

## 🎯 Core Functionalities

### 1. **Product Management**

- Dynamic product loading from JSON data
- Category-based filtering system
- Responsive product grid layout
- Product availability status

### 2. **Shopping Cart System**

- Add/remove products
- Local storage persistence
- Price-based sorting
- Total cost calculation
- Purchase confirmation modal

### 3. **Wishlist Features**

- Save favorite products
- Move items to cart
- Persistent storage
- Easy management interface

### 4. **Data Visualization**

- Interactive price charts
- Product performance metrics
- Responsive chart components
- Real-time data updates

### 5. **User Experience**

- Responsive navigation
- Smooth page transitions
- Toast notifications
- Loading states
- Error handling

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/imamulkadir/React_gadgetHeaven.git
   cd React_gadgetHeaven
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## 🎨 Design System

### Color Palette

- **Primary**: `#9538E2` (Purple)
- **Secondary**: `#7b2ac5` (Dark Purple)
- **Accent**: `#6b5181` (Muted Purple)
- **Background**: `#ffffff` (White)
- **Text**: `#000000` (Black)

### Typography

- **Font Family**: Sora (Google Fonts)
- **Headings**: Bold weights for hierarchy
- **Body**: Regular weights for readability

### Components

- **Buttons**: Rounded corners with hover effects
- **Cards**: Subtle shadows and borders
- **Modals**: Clean, centered layouts
- **Forms**: Consistent input styling

## 📱 Responsive Design

The application is built with a mobile-first approach:

- **Mobile**: Single column layout, optimized touch targets
- **Tablet**: Two-column grid, enhanced spacing
- **Desktop**: Three-column grid, full feature set

## 🔧 Configuration

### Tailwind CSS

- Custom color scheme
- DaisyUI component integration
- Responsive breakpoints
- Dark mode support (configured)

### Vite

- React plugin integration
- Hot module replacement
- Optimized build process
- Development server configuration

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy to Vercel/Netlify

The project is configured for easy deployment to modern hosting platforms.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Imamul Kadir**

- GitHub: [@imamulkadir](https://github.com/imamulkadir)
- Portfolio: [imamulkadir.com](https://imamulkadir.github.io)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for the lightning-fast build tool
- Tailwind CSS for the utility-first approach
- DaisyUI for the beautiful components
- Recharts for the data visualization
- React Router for the routing solution

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/imamulkadir">Imamul Kadir</a></p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>
