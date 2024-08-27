import mysql.connector

cnx = mysql.connector.connect(
       host = 'localhost', 
       username = 'root', 
       password = 'dellinspiron',
       database = 'voter_db'
    )
cursor = cnx.cursor()
cnx.commit()
cnx.close()
print("database connected successfully")