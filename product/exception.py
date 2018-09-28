from flask import jsonify 
def badRequest(message):
    response = jsonify({'message':message})
    response.status_code = 400
    return response
def internalServerError(message):
    response = jsonify({'message':message})
    response.status_code = 500
    return response