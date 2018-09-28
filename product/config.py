class BaseConfig(object):
       SECRET_KEY = 'sneha'
       DEBUG = True
       BCRYPT_LOG_ROUNDS = 13
       SQLALCHEMY_DATABASE_URI='postgres://postgres:sneha@localhost:5432/local_db'
       SQLALCHEMY_TRACK_MODIFICATIONS = False 
