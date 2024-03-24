import json
from flask import Flask, jsonify
import logging

app = Flask(__name__)

#Members API route
@app.route('/members')

def members():
    try:
        with open("./api/african_countries.json", 'r', encoding='utf-8') as f:
            data = json.load(f)
            logging.debug(data)
            return jsonify(data)
    except FileNotFoundError:
        return jsonify({"message": "File not found"})
    except Exception as e:
        return jsonify({"message": str(e)})

if __name__ == '__main__':
    logging.info("Starting Flask Server")
    app.run(debug=True)
    