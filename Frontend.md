Frontend (React)
Core Structure:

/client
├─── public/                # Static assets
├─── src/
│   ├─── App.js             # Main application component
│   ├─── index.js           # Entry point
│   ├─── components/        # Reusable UI components (e.g., Table, Form, Navbar)
│   │   ├─── Header.js
│   │   ├─── Footer.js
│   │   ├─── Table.js
│   │   ├─── Form.js
│   │   └─── RatingStars.js
│   ├─── pages/             # Page-specific components
│   │   ├─── Auth/
│   │   │   ├─── Login.js
│   │   │   └─── Signup.js
│   │   │   └─── ChangePassword.js
│   │   ├─── Admin/
│   │   │   ├─── AdminDashboard.js
│   │   │   ├─── UserManagement.js
│   │   │   └─── StoreManagement.js
│   │   ├─── User/
│   │   │   ├─── StoreList.js
│   │   │   └─── UserDashboard.js (Optional, if any)
│   │   ├─── StoreOwner/
│   │   │   └─── StoreOwnerDashboard.js
│   │   └─── NotFound.js
│   ├─── context/           # React Context for global state (e.g., AuthContext)
│   │   └─── AuthContext.js
│   ├─── hooks/             # Custom React hooks (e.g., useAuth)
│   │   └─── useAuth.js
│   ├─── utils/             # Frontend utility functions (e.g., API calls, form validators)
│   │   ├─── api.js
│   │   └─── validators.js
│   ├─── styles/            # CSS/SCSS files
│   │   └─── main.css
│   └─── AppRouter.js       # Centralized routing