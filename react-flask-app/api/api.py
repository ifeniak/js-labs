# from flask import Flask, request, jsonify, abort, render_template
# from flask_cors import CORS, cross_origin
# from flask_sqlalchemy import SQLAlchemy
# from flask_marshmallow import Marshmallow
# from marshmallow import fields, validate, exceptions
# import os
# from dotenv import load_dotenv
# import json
# import copy

# load_dotenv()

# app = Flask(__name__)

# basedir = os.path.abspath(os.path.dirname(__file__))
# DB_URI = "mysql+pymysql://root:death291702@localhost:3306/planes"
# app.config['SQLALCHEMY_DATABASE_URI'] = DB_URI
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
# app.config['CORS_HEADERS'] = 'Content-Type'
# CORS(app, resources={r"/farms": {"origins": "http://127.0.0.1:5000/"}})

# @app.route('/')
# def hello_world():  # put application's code here
#     return render_template('index.html')

# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://{user}:{password}@{host}:{port}/{database}'.format(
#     user=str(os.getenv('user')),
#     password=str(os.getenv('password')),
#     host=str(os.getenv('host')),
#     port=str(os.getenv('port')),
#     database=str(os.getenv('database'))
# )

# db = SQLAlchemy(app)
# ma = Marshmallow(app)


# class Farm(db.Model):
#     __tablename__ = 'farm'
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(64), unique=False)
#     location = db.Column(db.String(64), unique=False)
#     animals = db.Column(db.Integer, unique=False)
#     power = db.Column(db.Integer, unique=False)

#     def __init__(self, name, location, animals, power):
#         self.name = name
#         self.location = location
#         self.animals = animals
#         self.power = power

#     def update(self, name="k", location="k", animals="4", power="4"):
#         self.__init__(name, location, animals, power)


# def get_farm_by_id(id):
#     farm = Farm.query.get(id)
#     if farm is None:
#         return abort(404)
#     return farm


# class FarmSchema(ma.Schema):
#     class Meta:
#         fields = ('id', 'name', 'location', 'animals', 'power')


# farm_schema = FarmSchema()
# farms_schema = FarmSchema(many=True)

# @app.errorhandler(exceptions.ValidationError)
# @cross_origin()
# def handle_exception(e):
#     return e.messages, 400

# @app.route("/farms/", methods=["POST"])
# @cross_origin()
# def add_farm():
#     fields = farm_schema.load(request.json)
#     new_farm = Farm(**fields)
#     db.session.add(new_farm)
#     db.session.commit()
#     return farm_schema.jsonify(new_farm)


# @app.route("/farms/", methods=["GET"])
# @cross_origin()
# def get_farm():
#     all_farms = Farm.query.all()
#     result = farms_schema.dump(all_farms)
#     return jsonify(result)


# @app.route("/farms/<id>", methods=["GET"])
# @cross_origin()
# def farm_detail(id):
#     farm = get_farm_by_id(id)
#     return farm_schema.jsonify(farm)


# @app.route("/teapot/", methods=["GET"])
# @cross_origin()
# def teapot_detail():
#     abort(418)
#     return None


# @app.route("/farms/<id>", methods=["PUT"])
# @cross_origin(origin='localhost', headers=['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'])
# def farm_update(id):
#     farm = get_farm_by_id(id)
#     fields = farm_schema.load(request.json)
#     farm.update(**fields)

#     old_farm = copy.deepcopy(farm)
#     farm.name = request.json['name']
#     farm.location = request.json['location']
#     farm.animals = request.json['animals']
#     farm.power = request.json['power']
#     db.session.commit()
#     return farm_schema.jsonify(farm)


# @app.route("/farms/<id>", methods=["DELETE"])
# @cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
# def farm_delete(id):
#     farm = Farm.query.get(id)
#     if not farm:
#         abort(404)
#     db.session.delete(farm)
#     db.session.commit()
#     return farm_schema.jsonify(farm)#.headers.add('Access-Control-Allow-Origin', '*')


# if __name__ == '__main__':
#     app.run(debug=True)


# if __name__ == '__main__':
#     app.run(debug=True)
