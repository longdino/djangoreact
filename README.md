# djangoreact

Setup:

1) $ git pull
2) $ cd ../
3) $ python3 -m venv ./env  << create virtual environment
4) $ source env/bin/activate
5) (env)$ pip install django djangorestframework django-cors-headers  << install project dependencies

Run django:
1) $ source env/bin/activate
2) (env)$ cd djangoreactproject
3) (env)$ python3 manage.py runserver  <<it will run django backend

Run react:

1) $ cd djangoreactproject/frontend
2) $ npm start
