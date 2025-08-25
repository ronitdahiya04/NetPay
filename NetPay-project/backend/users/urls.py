from django.urls import path
from .views import homeView, landingView, api_login, api_signup, api_logout, api_user_profile

urlpatterns = [
    # Temporary views - will be replaced by React components
    path("", landingView, name="landing"),  # Public landing page
    path("home/", homeView, name="home"),  # Protected home page (login required)
    
    # API endpoints for React frontend
    path("api/login/", api_login, name="api_login"),  # API login endpoint
    path("api/signup/", api_signup, name="api_signup"),  # API signup endpoint
    path("api/logout/", api_logout, name="api_logout"),  # API logout endpoint
    path("api/profile/", api_user_profile, name="api_user_profile"),  # API user profile endpoint
]