# NetPay - Full Stack Application

NetPay is a modern, secure digital payment platform built with Django REST API backend and React frontend.

## 🚀 Features

### Authentication System

- ✅ User Registration with validation
- ✅ User Login with token authentication
- ✅ Protected dashboard with logout functionality
- ✅ Automatic token management
- ✅ Route protection

### Modern UI/UX

- ✅ Responsive design for all devices
- ✅ Interactive landing page
- ✅ Professional authentication forms
- ✅ Feature-rich dashboard
- ✅ Smooth animations and transitions

### Security

- ✅ Token-based authentication
- ✅ CORS protection
- ✅ Form validation (client & server)
- ✅ Password encryption
- ✅ Protected API endpoints

## 🏗️ Architecture

```
NetPay/
├── backend/           # Django REST API
│   ├── backend/      # Django project settings
│   ├── users/        # User authentication app
│   ├── manage.py     # Django management script
│   └── requirements.txt
└── frontend/         # React application
    ├── src/
    │   ├── components/   # React components
    │   ├── contexts/     # Auth context
    │   ├── services/     # API services
    │   └── App.js        # Main app component
    └── package.json
```

## 🛠️ Tech Stack

### Backend

- **Django 5.2.4** - Web framework
- **Django REST Framework** - API development
- **Token Authentication** - Secure API access
- **CORS Headers** - Cross-origin requests
- **SQLite** - Database (development)

### Frontend

- **React 18** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **CSS3** - Modern styling with gradients
- **Responsive Design** - Mobile-first approach

## 🚀 Quick Start

### Prerequisites

- Python 3.8+
- Node.js 14+
- pip & npm

### 1. Setup Backend

```bash
# Navigate to backend directory
cd backend

# Install Python dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start Django server
python manage.py runserver
```

Backend will be available at: `http://localhost:8000`

### 2. Setup Frontend

```bash
# Navigate to frontend directory (in new terminal)
cd frontend

# Install Node dependencies
npm install

# Start React development server
npm start
```

Frontend will be available at: `http://localhost:3000`

## 📱 API Endpoints

### Authentication

- `POST /api/signup/` - User registration
- `POST /api/login/` - User login
- `POST /api/logout/` - User logout (requires token)
- `GET /api/profile/` - Get user profile (requires token)

### Example API Usage

#### Register User

```bash
curl -X POST http://localhost:8000/api/signup/ \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "email": "john@example.com",
    "password": "securepass123",
    "password_confirm": "securepass123",
    "first_name": "John",
    "last_name": "Doe"
  }'
```

#### Login User

```bash
curl -X POST http://localhost:8000/api/login/ \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "password": "securepass123"
  }'
```

#### Get Profile (with token)

```bash
curl -X GET http://localhost:8000/api/profile/ \
  -H "Authorization: Token YOUR_TOKEN_HERE"
```

## 🎯 Application Flow

### 1. Landing Page (`/`)

- Welcome message with NetPay branding
- Feature highlights (Secure Payments, Mobile Friendly, Instant Transfers)
- Login and Sign Up buttons
- Responsive design

### 2. Authentication

- **Login** (`/login`) - Username/password authentication
- **Signup** (`/signup`) - Full registration form with validation
- **Auto-redirect** - Logged in users redirected to dashboard

### 3. Dashboard (`/dashboard`)

- **Protected route** - Requires authentication
- **User profile** display
- **Account balance** and transaction overview
- **Quick actions** - Send money, Pay bills, etc.
- **Recent activity** feed
- **Security status** display
- **Logout** functionality

## 🔧 Development

### Backend Development

```bash
# Create superuser (optional)
python manage.py createsuperuser

# Access Django admin
http://localhost:8000/admin/

# View API endpoints
http://localhost:8000/api/
```

### Frontend Development

```bash
# Build for production
npm run build

# Run tests
npm test

# Eject (not recommended)
npm run eject
```

## 🛡️ Security Features

1. **Token Authentication** - Secure API access
2. **CORS Protection** - Controlled cross-origin requests
3. **Form Validation** - Client and server-side validation
4. **Password Encryption** - Django's built-in password hashing
5. **Protected Routes** - Authenticated access only
6. **Token Expiration** - Automatic logout on token issues

## 🎨 UI/UX Features

1. **Modern Gradient Design** - Professional color scheme
2. **Responsive Layout** - Works on all device sizes
3. **Interactive Elements** - Hover effects and animations
4. **Loading States** - User feedback during operations
5. **Error Handling** - Clear error messages
6. **Form Validation** - Real-time feedback

## 📋 Deployment

### Backend Deployment

1. Set `DEBUG = False` in settings.py
2. Configure production database
3. Set up proper CORS origins
4. Use environment variables for secrets
5. Deploy to Heroku, DigitalOcean, or AWS

### Frontend Deployment

1. Run `npm run build`
2. Deploy build folder to Netlify, Vercel, or static hosting
3. Update API base URL for production

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Created with ❤️ for modern web development

---

**NetPay** - Secure. Fast. Reliable.
