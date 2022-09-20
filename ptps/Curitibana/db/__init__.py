import psycopg2
from psycopg2.extras import RealDictCursor


def connect_db():
    try:
        conn = psycopg2.connect("dbname='postgres' user='postgres' host='localhost' password='123456'")
        return conn
    except:
        print ("I am unable to connect to the database")

def disconnect_db(conn):
    conn.close()


def db_select(conn, query):
    cur = conn.cursor(cursor_factory=RealDictCursor)
    cur.execute(query)
    results = cur.fetchall()
    cur.close()
    disconnect_db(conn)
    if len(results) == 1:
        results = results[0]
    return results


def insert(conn, query):
    cur = conn.cursor()
    cur.execute(query)
    conn.commit()
    cur.close()
    disconnect_db(conn)
