# Capstone_Dreamcations

# ReactDjango_JWT_StarterCode

Starter code for full stack React + Django applications using JWT for authentication/authorization and a fully working register/login system on the React side

## NOTE

"cars" app in Django backend for example purposes only. Study it closely and review provided resources to understand how to properly create protected endpoints that require a JWT token for authorization.

## For implementing user roles

- see comments in the following files in the order they are listed
  - backend/authentication/models.py
  - backend/authentication/serializers.py (note that there are several places needing modification in that file)
  
- If modifying the User class in authentication/models.py, make sure to drop your existing database,
  create it, and run migrations from scratch
  
- once user roles are set up on your backend, you can now utilize them on the frontend. Recommend reviewing the React Router slideshow for ideas on how to use descendant routes and conditional rendering to control who can access what parts of your application based on a role!
