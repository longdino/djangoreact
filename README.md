# djangoreact

Setup:

1) $ git clone https://github.com/longdino/djangoreact.git
2) $ cd ../
3) $ python3 -m venv ./env  << create virtual environment
4) $ source env/bin/activate
5) (env)$ pip install django djangorestframework django-cors-headers  << install project dependencies

Run django:

1) $ source env/bin/activate
2) (env)$ cd djangoreactproject
3) (env)$ python3 manage.py runserver  <<it will run django backend
*** for remote server: (env)$ python3 manage.py runserver [host]:[port]

Run react:

1) $ cd djangoreactproject/frontend
2) $ npm start

To run it on remote server: 

1)edit djangoreact/djangoreact/frontend/src/CustomersService.js
2)uncomment line2
3)comment line 3

To run it on remote server:

1)edit djangoreact/djangoreact/frontend/src/CustomersService.js
2)comment line2
3)uncomment line 3
