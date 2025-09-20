# Bobyard Challenge - Comment System

A full-stack comment system built with Django REST Framework and React.js, featuring real-time CRUD operations with a clean UI~ Enjoy.

Name: Po-Yi Li

Email: brianpoyili@gmail.com

## Tech Stack

### Backend

- **Django 5.2.6** - Web framework
- **Django REST Framework** - API development
- **SQLite** - Database (easily switchable to PostgreSQL)
- **django-cors-headers** - CORS support

### Frontend

- **React 19.1.1** - UI library
- **Tailwind CSS 3.4.0** - Styling framework
- **Axios** - HTTP client
- **Vite** - Build tool and dev server

## Quick Start

### Prerequisites

- Python 3.8+
- Node.js 16+
- npm or yarn

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd bobyard-challenge
```

### 2. Backend Setup

#### Install Python Dependencies

```bash
# Create virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

#### Database Setup

```bash
# Run migrations
python manage.py migrate

# Create superuser (optional, for admin access)
python manage.py createsuperuser

# Load initial comment data
python manage.py seed_comments

# Start the development server
python manage.py runserver
```

The backend will be available at `http://localhost:8000/`

### 3. Frontend Setup

#### Install Dependencies

```bash
cd frontend
npm install
```

#### Start Development Server

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173/` (or 5174 if 5173 is busy)

## Project Structure

```
bobyard-challenge/
├── api/                          # Django project settings
│   ├── settings.py              # Main configuration
│   └──  urls.py                  # URL routing
├── comments/                     # Comments app
│   ├── models.py                # Comment data model
│   ├── serializers.py           # API serializers
│   ├── views.py                 # API views
│   ├── admin.py                 # Admin configuration
│   └── management/
│       └── commands/
│           └── seed_comments.py # Data seeding command
├── frontend/                     # React application
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── Avatar.jsx       # User avatar component
│   │   │   ├── CommentCard.jsx  # Individual comment display
│   │   │   ├── CommentForm.jsx  # Add comment form
│   │   │   └── CommentList.jsx  # Comments list container
│   │   ├── hooks/
│   │   │   └── useComments.js   # Custom API hook
│   │   ├── api.js               # API client functions
│   │   └── App.jsx              # Main application component
│   ├── tailwind.config.js       # Tailwind configuration
│   └── package.json             # Frontend dependencies
├── comments.json                 # Initial data file
├── manage.py                     # Django management script
└── README.md                     # We are here!
```

## API Endpoints

| Method | Endpoint              | Description          |
| ------ | --------------------- | -------------------- |
| GET    | `/api/comments/`      | List all comments    |
| POST   | `/api/comments/`      | Create new comment   |
| GET    | `/api/comments/{id}/` | Get specific comment |
| PUT    | `/api/comments/{id}/` | Update comment       |
| DELETE | `/api/comments/{id}/` | Delete comment       |

## Testing the Application

### Backend Testing

```bash
# Test API endpoints
# make sure the database has been setting up!
python manage.py runserver
# Visit http://localhost:8000/api/comments/ in browser
```

### Frontend Testing

```bash
cd frontend
npm run dev
# Visit http://localhost:5173/ in browser
```

### Full Integration Test

1. Start both servers (backend on 8000, frontend on 5173)
2. Open browser to frontend URL
3. Try adding, editing, and deleting comments
4. Hopefully will see it working!

## Project Reflection

### What I Learned

This project was an excellent opportunity to demonstrate full-stack development skills while building a super common feature in social media. I spent about 3 hours in total, mostly done in my scattered free time. I'm pretty proud of my work, so no matter what the result is, I will still be happy with it!

There is something I would like to talk about regarding the usage of AI. I used ChatGPT for laying out the steps that I should be completing throughout the project and set up a system design with its help. Of course, it suggested something very fancy at the beginning, but I insisted on some of the development frameworks like Vite, Tailwind, and SQLite for faster development. Next, after writing some basic frontend code that showcased all the functionality of the application, I also asked AI to make my implementation more user-friendly. However, it didn't really care about component-based development logic and tried to put everything into a single file, which kind of made me struggle. I eventually made the file structure clean and easier to maintain in the future by setting up components and using Tailwind CSS.

In conclusion, I really enjoyed this short implementation. Even though the time was limited, I still have many features that I would love to implement if I had more time. Please find below some details that you might want to know during my development. Thank you for your time and I look forward to hearing back from you!

### Technical Challenges Overcome

1. **CORS Configuration**: Properly setting up cross-origin requests between frontend and backend. Can also be done by make the backend know that the url of the frontend by using CORS package.
1. **Image meaning in the json file**: I eventually found that the image url in the json file mean the attached image instead of the profile image of the user which make me have to adjust the layout additionally.

### Design Decisions

- **SQLite over PostgreSQL**: Chose SQLite for simplicity and easy setup, which should also be easy to switch to PostgreSQL in the future.
- **Component Separation**: Broke down the UI into focused, single-responsibility components for better code maintaining.
- **Tailwind CSS**: Selected for rapid development and consistent styling

### Future Enhancements

If this were a production application, I would add:

- User authentication and authorization
- Real-time updates with WebSockets
- Image upload functionality
- Comment threading and replies
- Unit and integration tests
- CI/CD pipeline

_Thank you for considering my application. I look forward to discussing this project and the opportunity to contribute to your team!_
