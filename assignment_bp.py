from flask import Blueprint, redirect, request, render_template, url_for, jsonify
from dbActions import interact_db
from flask_cors import CORS

assignment10 = Blueprint('assignment10', __name__,
                        template_folder = 'templates',
                        static_folder = 'static',
                        root_path = 'assignment10'
                        )

# assignment10.secret_key = '12345'

CORS(assignment10)


@assignment10.route("/", methods=['GET'])
def home():
    query = 'select * from users;'
    users = interact_db(query=query, query_type='fetch')
    return render_template("assignment10.html", users=users )


@assignment10.route('/users')
def users_func():
    return redirect(url_for('assignment10.home'))


@assignment10.route('/add_user', methods=['POST'])
def insert_user():
    username = request.json['username']
    email = request.json['email']
    password = request.json['password']

    query = "INSERT INTO users(username, email, password) VALUES ('%s', '%s', '%s');" % (username, email, password)
    interact_db(query=query, query_type='commit')

    return jsonify(), 200


@assignment10.route('/update_user', methods=['PUT'])
def update_user():
    username = request.json['username']
    email = request.json['email']
    password = request.json['password']
    query = "Update users set email='%s', password='%s' where username='%s'" % (email, password, username)
    interact_db(query=query, query_type='commit')
    return jsonify(), 200



@assignment10.route('/delete_user', methods=['DELETE'])
def delete_user():
    username = request.args['username']
    query = f"delete from users where username='{username}'"
    interact_db(query=query, query_type='commit')
    return jsonify(), 200
    # return "", 200
    # return redirect(url_for('assignment10.home'))
 #   return redirect(url_for('assignment10.home'))

