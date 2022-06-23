from flask import Flask
from flask_cors import CORS
from geomet import geopackage
import sqlite3

app = Flask(__name__)
CORS(app)

@app.route("/tracts")
def list_tracts():
    conn = sqlite3.connect("tracts.gpkg")
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()

    rows = cur.execute("SELECT * FROM tracts").fetchall()

    conn.commit()
    conn.close()

    data = []
    for row in rows:
        dict = {}
        for key in row.keys():
            print(key)
            if (key != 'geom'):
                dict[key] = row[key]
        data.append(dict)

    return {
        "objects": data,
    }


@app.route("/tracts/<int:pk>")
def get_tract(pk):
    conn = sqlite3.connect("tracts.gpkg")
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()

    row = cur.execute("SELECT * FROM tracts where fid = '%s'" % pk).fetchone()

    print(row)

    dict = {}
    for key in row.keys():
            print(key)
            if (key == 'geom'):
                dict[key] = geopackage.loads(row[key])
            else:
                dict[key] = row[key]

    conn.commit()
    conn.close()
    return dict
