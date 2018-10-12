from flask import Flask, request, jsonify, session,render_template
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy
from product.config import BaseConfig
from product.exception import badRequest,internalServerError

# from flask_paginate import Pagination,get_page_parameter,get_page_args



app  = Flask(__name__)
app.config.from_object(BaseConfig)


bcrypt = Bcrypt(app)
db = SQLAlchemy(app)

from product.models import User
from product.models import Product
# from product.models import Pagination

@app.route("/")
def home():
      return app.send_static_file("index.html")

@app.route('/api/register', methods=['POST'])
def register():
    json_data = request.json
   
    if 'email' not in json_data or json_data['email'] is None:
        status = 'the email is none'
        return badRequest(status)
    if 'password' not in json_data or json_data['password'] is None:
        status = 'the password is none'
        return badRequest(status)

    user=User.query.filter_by(email=json_data['email']).first()
    if user:
        status = 'the user is already registered'
    else :
        try:
            user = User( 
         email=json_data['email'],
         password=json_data['password']
         )
            db.session.add(user)
            db.session.commit()
            status = 'success'
        except:
            status = 'something went wrong'
            return internalServerError(status) 
    db.session.close()
    return jsonify({'result':status}) 

@app.route('/api/login', methods=['POST'])
def login():
    json_data = request.json
    
    user = User.query.filter_by(email=json_data['email']).first()
  
    if user and bcrypt.check_password_hash(
            user.password, json_data['password']):
        
        session['logged_in'] = True
        status = True
    else:
        status = False
    return jsonify({'result': status})

           
@app.route('/api/logout')
def logout():
    session.pop('logged_in', None)
    return jsonify({'result':'success'})


@app.route('/api/status')
def status():
    if session.get('logged_in'):
        if session['logged_in']:
            return jsonify({'status': True})
    else:
        return jsonify({'status': False})



@app.route('/api/product/add',methods=['POST'])
def addProduct():
    json_data = request.json
    
    try:
        list = Product(
         
        id=json_data['id'],
        name=json_data['name'],
        model_no=json_data['model_no'],
        color=json_data['color'],
        category=json_data['category'],
        size=json_data['size'],
        price=json_data['price'] 
        )
       
        db.session.add(list)
        db.session.commit()
        status = 'success'
    except:
        status = 'failed'
        return internalServerError(status)
    db.session.close()
    return jsonify({'result':status})



@app.route('/api/product/update', methods=['PUT'])
def updateProduct():
    json_data = request.json
 
    if 'id' not in json_data or json_data['id'] is None:
        status = 'the id is none'
        return badRequest(status)
   
    try:
        
        Product.query.filter_by(id=json_data['id']).update(dict(name=json_data['name'],model_no=json_data['model_no'],color=json_data['color'],category=json_data['category'],size=json_data['size'],price=json_data['price']))
        
        db.session.commit() 
        status = 'updated success'
    except :
        status = 'updated failed'
        return internalServerError(status)
    db.session.close()
    return jsonify({'result':status})




@app.route('/api/product/remove/<int:pid>', methods=['DELETE'])
def removeProduct(pid):
  
    try:
        
        Product.query.filter_by(id=pid).delete()
        db.session.commit()

        status ='deleted success'
    except:
         status = 'deleted failed'
         return internalServerError(status)
    db.session.close()    

    return jsonify({'result':status})



        
@app.route('/api/product/search/<int:id>',methods=['GET'])
def getProducts(id):
   
    products = Product.query.get(id)
    return jsonify([products.toDict()])



@app.route('/api/product/list',methods=['GET'])
def listProducts():
    offset = request.args.get('offset')  
    limit =request.args.get('limit')
    print(offset)
    print(limit)
    products = Product.query.offset(offset).limit(limit).all() 
    productsArr = []
    for product in products:
        productsArr.append(product.toDict())
    return jsonify(productsArr)

















# def my_route():
#      page = request.args.get('page', default = 1, type = int)

# @app.route('/list',methods=['GET'])
# def show_product():
      

  
#     products = Product.query.all() 
#     product_id = request.args.get('offset(0).limit(2)')  
#     productsArr = []
#     for product in products:
#         productsArr.append(product.toDict())

#     return jsonify([productsArr])







        



   



   

    