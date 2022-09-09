from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/ind')
def ind():
    return render_template("ind.html")

app.run(host="0.0.0.0", port="5050")