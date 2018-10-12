# project/models.py


import datetime
from product import db, bcrypt
from flask_sqlalchemy import inspect
from flask_paginate import Pagination 
# from math import ceil


class User(db.Model):

    __tablename__ = "users"

    email = db.Column(db.String(255), primary_key=True, nullable=False)
    password = db.Column(db.String, nullable=False)
    registered_on = db.Column(db.DateTime, default=datetime.datetime.now)

    def __init__(self, email, password):
        self.email = email
        self.password = bcrypt.generate_password_hash(password).decode('utf-8')
        self.registered_on = datetime.datetime.now()

    def toDict(self):
        return { c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs}

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return self.id

    def __repr__(self):
        return "<User(email='%s', password='%s')>" % (
                             self.email, self.password)


class Product(db.Model):

    __tablename__ = "product"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=True)
    model_no = db.Column(db.Integer, nullable=True)
    color = db.Column(db.String(255), nullable=True)
    category = db.Column(db.String(255), nullable=True)
    size = db.Column(db.Integer, nullable=True)
    mfg_date = db.Column(db.DateTime, default=datetime.datetime.now)
    price = db.Column(db.Numeric(asdecimal=False, decimal_return_scale=None))
    


    def __init__(self,id, name, model_no, color, category, size, price):
        self.id = id
        self.name = name
        self.model_no = model_no
        self.color = color
        self.category = category
        self.size = size
        self.price = price

    def toDict(self):
        return { c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs}

    def get_users(offset=0, per_page=5):
        return products[offset: offset + per_page]



    def __repr__(self):
        return '<Product {0}>'.format(self.id)




