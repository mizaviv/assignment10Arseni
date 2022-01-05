import mysql.connector

DEFAULT_PORT = 3307


def interact_db(query, query_type: str):
    return_value = False
    connection = mysql.connector.connect(host='localhost',
                                         port=DEFAULT_PORT,
                                         user='root',
                                         passwd='root',
                                         database='users')

    cursor = connection.cursor(named_tuple=True)
    cursor.execute(query)
    #
    if query_type == 'commit':
        connection.commit()
        return_value = True

    if query_type == 'fetch':
        query_result = cursor.fetchall()
        return_value = query_result

    connection.close()
    cursor.close()
    return return_value
