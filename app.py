from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)


# After loading, redirect to the main index page
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/achievements')
def achievements():
    return render_template('achievements.html')


if __name__ == '__main__':
    app.run(debug=True)
