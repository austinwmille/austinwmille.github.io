from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

# Initialize the database
def init_db():
    conn = sqlite3.connect('bookings.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS bookings (id INTEGER PRIMARY KEY, date TEXT, time TEXT)''')
    conn.commit()
    conn.close()

@app.route('/api/availability', methods=['GET'])
def get_availability():
    conn = sqlite3.connect('bookings.db')
    c = conn.cursor()
    c.execute('SELECT date, time FROM bookings')
    bookings = [{'date': row[0], 'time': row[1]} for row in c.fetchall()]
    conn.close()
    return jsonify(bookings)

@app.route('/api/book', methods=['POST'])
def book_slot():
    data = request.get_json()
    date = data['date']
    time = data['time']
    
    conn = sqlite3.connect('bookings.db')
    c = conn.cursor()
    c.execute('INSERT INTO bookings (date, time) VALUES (?, ?)', (date, time))
    conn.commit()
    conn.close()
    return jsonify({'message': f'Booking confirmed for {date} at {time}'})

if __name__ == '__main__':
    init_db()  # Initialize the database
    app.run(debug=True)