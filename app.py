import os
from flask import Flask, redirect, Blueprint, render_template
from assignment_bp import assignment10
# from flask_cors import CORS
# simple_page = Blueprint("assignment10", __name__)

app = Flask(__name__)
# CORS(app)
app.secret_key = '12345'
# app.register_blueprint(assignment10)
# app.register_blueprint(assignment10)
app.register_blueprint(assignment10, url_prefix= "/assignment10")



@app.route('/', methods=['GET'])
def main():
    return redirect("assignment10")


if __name__ == '__main__':
    #   Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='127.0.0.1', port=port)
