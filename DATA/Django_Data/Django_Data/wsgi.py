"""
WSGI config for Django_Data project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
<<<<<<< HEAD
https://docs.djangoproject.com/en/4.1/howto/deployment/wsgi/
=======
https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/
>>>>>>> 75e364b878e58d351f3ac3a7cc305b36d6509cdb
"""

import os

from django.core.wsgi import get_wsgi_application

<<<<<<< HEAD
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Django_Data.settings")
=======
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Django_Data.settings')
>>>>>>> 75e364b878e58d351f3ac3a7cc305b36d6509cdb

application = get_wsgi_application()
