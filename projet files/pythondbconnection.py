import psycopg2

# Database connection info
host = "35.226.155.207"
dbname = "csi2532-googlecloud"
user = "postgres"
password = "D(MGP3l5vLvu)RPe"

# Connection string
conn_string = f"host={host} dbname={dbname} user={user} password={password}"


# ******************* CREATE VALUES ****************************
def insert_client(NAS, prenom, nom, numrue, nomrue, ville, cp, datejoined):
    conn_string = "host='35.226.155.207' dbname='csi2532-googlecloud' user='postgres' password='D(MGP3l5vLvu)RPe'"
    conn = psycopg2.connect(conn_string)
    
    # Create a cursor object
    cur = conn.cursor()
    
    # SQL query to INSERT a new row
    insert_query = """
    INSERT INTO Client(NAS, prenom, nom, numRue, nomRue, ville, cp, registerDate)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s);
    """
    
    # Data to insert
    data = (NAS, prenom, nom, numrue, nomrue, ville, cp, datejoined)
    
    try:
        # Execute the INSERT statement
        cur.execute(insert_query, data)
        
        # Commit the changes to the database
        conn.commit()
        
        # Success message
        print("Data inserted successfully")
        
    except Exception as e:
        # Rollback in case of any error
        conn.rollback()
        print(f"An error occurred: {e}")
        
    finally:
        # Close the cursor and connection
        cur.close()
        conn.close()

def insert_reservation(res_start, res_end, nas_client, numero_chambre, nom_hotel):
    conn_string = "host='35.226.155.207' dbname='csi2532-googlecloud' user='postgres' password='D(MGP3l5vLvu)RPe'"
    
    try:
        # Connect to the database
        conn = psycopg2.connect(conn_string)
        
        # Create a cursor object
        cur = conn.cursor()
        
        # SQL query to INSERT a new row
        insert_query = """
        INSERT INTO Reservation (resStart, resEnd, NASclient, numeroChambre, nomHotel)
        VALUES (%s, %s, %s, %s, %s) RETURNING resID;
        """
        
        # Data to insert
        reservation_data = (res_start, res_end, nas_client, numero_chambre, nom_hotel)
        
        # Execute the INSERT statement
        cur.execute(insert_query, reservation_data)
        
        # Get the generated resID
        resID = cur.fetchone()[0]
        print(f"Inserted reservation with resID: {resID}")
        
        # Commit the changes to the database
        conn.commit()
        
    except Exception as e:
        # Rollback in case of any error
        conn.rollback()
        print(f"An error occurred: {e}")
        
    finally:
        # Close the cursor and connection
        if cur is not None:
            cur.close()
        if conn is not None:
            conn.close()

def insert_location(nas_client, nas_employe, num_chambre, location_start, location_end, nom_hotel, payment_id=None):
    conn_string = "host='35.226.155.207' dbname='csi2532-googlecloud' user='postgres' password='D(MGP3l5vLvu)RPe'"
    
    try:
        # Connect to the database
        conn = psycopg2.connect(conn_string)
        
        # Create a cursor object
        cur = conn.cursor()
        
        # Prepare the SQL query and data based on whether payment_id is provided
        if payment_id:
            insert_query = """
            INSERT INTO Location (NASclient, NASemploye, numChambre, locationStart, locationEnd, nomHotel, paymentID)
            VALUES (%s, %s, %s, %s, %s, %s, %s) RETURNING locationID;
            """
            location_data = (nas_client, nas_employe, num_chambre, location_start, location_end, nom_hotel, payment_id)
        else:
            insert_query = """
            INSERT INTO Location (NASclient, NASemploye, numChambre, locationStart, locationEnd, nomHotel)
            VALUES (%s, %s, %s, %s, %s, %s) RETURNING locationID;
            """
            location_data = (nas_client, nas_employe, num_chambre, location_start, location_end, nom_hotel)
        
        # Execute the INSERT statement
        cur.execute(insert_query, location_data)
        
        # Fetch and print the locationID of the newly inserted location
        locationID = cur.fetchone()[0]
        print(f"Inserted location with locationID: {locationID}")
        
        # Commit the transaction
        conn.commit()
        
    except Exception as e:
        # Rollback in case of error
        conn.rollback()
        print(f"An error occurred: {e}")
        
    finally:
        # Ensure the cursor and connection are closed
        if cur is not None:
            cur.close()
        if conn is not None:
            conn.close()

def insert_hotel(nom_hotel, classification, num_rue, nom_rue, ville, cp, phone_contact, email_contact, nom_chaine):
    # Database connection info
    conn_string = "host='35.226.155.207' dbname='csi2532-googlecloud' user='postgres' password='D(MGP3l5vLvu)RPe'"
    try:
        # Connect to the database
        conn = psycopg2.connect(conn_string)
        
        # Create a cursor object
        cur = conn.cursor()
        
        # SQL query to INSERT a new row
        insert_query = """
        INSERT INTO Hotel (nomHotel, classification, numRue, nomRue, ville, cp, phoneContact, emailContact, nomChaine)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s);
        """
        
        # Tuple with the data to insert
        hotel_data = (nom_hotel, classification, num_rue, nom_rue, ville, cp, phone_contact, email_contact, nom_chaine)
        
        # Execute the INSERT statement
        cur.execute(insert_query, hotel_data)
        
        # Commit the transaction
        conn.commit()
        
        print(f"Hotel {nom_hotel} inserted successfully")
        
    except Exception as e:
        # Rollback in case of error
        conn.rollback()
        print(f"An error occurred: {e}")
        
    finally:
        # Ensure the cursor and connection are closed
        if cur is not None:
            cur.close()
        if conn is not None:
            conn.close()

def insert_room(numero_chambre, prix_par_nuit, vue, dommages, capacite, ext_phone, nom_hotel, occupied):
    # Database connection info
    conn_string = "host='35.226.155.207' dbname='csi2532-googlecloud' user='postgres' password='D(MGP3l5vLvu)RPe'"
    try:
        # Connect to the database
        conn = psycopg2.connect(conn_string)
        
        # Create a cursor object
        cur = conn.cursor()
        
        # SQL query to INSERT a new row
        insert_query = """
        INSERT INTO Chambre (numeroChambre, prixParNuit, vue, dommages, capacite, extPhone, nomHotel, occupied)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s);
        """
        
        # Data to insert
        chambre_data = (numero_chambre, prix_par_nuit, vue, dommages, capacite, ext_phone, nom_hotel, occupied)
        
        # Execute the INSERT statement
        cur.execute(insert_query, chambre_data)
        
        # Commit the transaction
        conn.commit()
        
        print(f"Chambre {numero_chambre} inserted successfully into hotel {nom_hotel}")
        
    except Exception as e:
        # Rollback in case of error
        conn.rollback()
        print(f"An error occurred: {e}")
        
    finally:
        # Ensure the cursor and connection are closed
        if cur is not None:
            cur.close()
        if conn is not None:
            conn.close()

# ******************* READ VALUES ****************************
# Get all hotel chains from db
def get_chains():
    # Define connection string using your database credentials
    conn_string = "host='35.226.155.207' dbname='csi2532-googlecloud' user='postgres' password='D(MGP3l5vLvu)RPe'"
    
    # Connect to the database
    conn = psycopg2.connect(conn_string)
    
    # Create a cursor object
    cur = conn.cursor()

    # Execute the query to get all chains within the db
    cur.execute("SELECT * FROM chaine")

    # Fetch all chains
    rows_chaine = cur.fetchall()

    for row in rows_chaine:
        print(row)
    
    cur.close()
    conn.close()
    return rows_chaine

# Get all hotels from select hotel chain
def get_hotels(chainname=None):
    # Define connection string using your database credentials
    conn_string = "host='35.226.155.207' dbname='csi2532-googlecloud' user='postgres' password='D(MGP3l5vLvu)RPe'"
    
    # Connect to the database
    conn = psycopg2.connect(conn_string)
    
    # Create a cursor object
    cur = conn.cursor()
    
    if chainname:
        cur.execute("SELECT * FROM hotel WHERE nomChaine = %s", (chainname,))
        
    else:
    # Execute the query to get all hotels from the specified hotel chain
        cur.execute("SELECT * FROM HOTEL")
    
    # Fetch all rows from the query
    rows_hotel = cur.fetchall()
    
    # Print each hotel name
    for row in rows_hotel:
        print(row[0])  # row[0] is the nomHotel value
    
    # Close the cursor and connection
    cur.close()
    conn.close()
    return rows_hotel

# Get all available rooms from the hotel
def get_available_rooms(hotelname):
    # Define connection string using your database credentials
    conn_string = "host='35.226.155.207' dbname='csi2532-googlecloud' user='postgres' password='D(MGP3l5vLvu)RPe'"
    
    # Connect to the database
    conn = psycopg2.connect(conn_string)
    
    # Create a cursor object
    cur = conn.cursor()
    
    # Execute the query to get all hotels from the specified hotel chain
    cur.execute("SELECT * FROM chambre WHERE nomHotel = %s AND occupied = False", (hotelname,))
    
    # Fetch all rows from the query
    rows_chambre = cur.fetchall()
    
    # Print each hotel name
    for row in rows_chambre:
        print(row[0])  # row[0] is the roomnumber
    
    # Close the cursor and connection
    cur.close()
    conn.close()
    rows_chambre
 
# Get reservations from given hotel, or just all reservations
def get_reservations(hotelname=None, status=None):
    # Define connection string using your database credentials
    conn_string = "host='35.226.155.207' dbname='csi2532-googlecloud' user='postgres' password='D(MGP3l5vLvu)RPe'"
    
    # Connect to the database
    conn = psycopg2.connect(conn_string)
    
    # Create a cursor object
    cur = conn.cursor()
    
     # Build the query dynamically based on the presence of hotelname and/or status
    query = "SELECT * FROM reservation"
    params = []
    conditions = []
    
    if hotelname:
        conditions.append("nomHotel = %s")
        params.append(hotelname)
    if status:
        conditions.append("status = %s")
        params.append(status)
    
    if conditions:
        query += " WHERE " + " AND ".join(conditions)
    
    # Execute the query
    cur.execute(query, tuple(params))
    
    # Fetch all rows from the query
    rows_reservation = cur.fetchall()
    
    # Close the cursor and connection
    cur.close()
    conn.close()

    # Return the fetched rows
    return rows_reservation

def get_locations(hotelname=None, status=None):
    # Define connection string using your database credentials
    conn_string = "host='35.226.155.207' dbname='csi2532-googlecloud' user='postgres' password='D(MGP3l5vLvu)RPe'"
    
    # Connect to the database
    conn = psycopg2.connect(conn_string)
    
    # Create a cursor object
    cur = conn.cursor()
    
     # Build the query dynamically based on the presence of hotelname and/or status
    query = "SELECT * FROM location"
    params = []
    conditions = []
    
    if hotelname:
        conditions.append("nomHotel = %s")
        params.append(hotelname)
    if status:
        conditions.append("status = %s")
        params.append(status)
    
    if conditions:
        query += " WHERE " + " AND ".join(conditions)
    
    # Execute the query
    cur.execute(query, tuple(params))
    
    # Fetch all rows from the query
    rows_reservation = cur.fetchall()
    
    # Close the cursor and connection
    cur.close()
    conn.close()

    # Return the fetched rows
    return rows_reservation

# Get all clients
def get_clients():
    # Define connection string using your database credentials
    conn_string = "host='35.226.155.207' dbname='csi2532-googlecloud' user='postgres' password='D(MGP3l5vLvu)RPe'"
    
    # Connect to the database
    conn = psycopg2.connect(conn_string)
    
    # Create a cursor object
    cur = conn.cursor()
    
    # Execute the query to get all hotels from the specified hotel chain
    cur.execute("SELECT * FROM client")
    
    # Fetch all rows from the query
    rows_client = cur.fetchall()
    
    # Print each hotel name
    for row in rows_client:
        print(row)  # row[0] is the roomnumber
    
    # Close the cursor and connection
    cur.close()
    conn.close()

    # Return the list of rows that match the query
    return rows_client

# Get employees from a certain hotel, or just all employees from db
def get_employes(hotelname=None):
    # Define connection string using your database credentials
    conn_string = "host='35.226.155.207' dbname='csi2532-googlecloud' user='postgres' password='D(MGP3l5vLvu)RPe'"
    
    # Connect to the database
    conn = psycopg2.connect(conn_string)
    
    # Create a cursor object
    cur = conn.cursor()
    
    # Execute the query 
    if hotelname:
        cur.execute("SELECT * FROM employe WHERE nomHotel= %s", (hotelname,))  
    else:
        cur.execute("SELECT * FROM employe")
    
    # Fetch all rows from the query
    rows_employe = cur.fetchall()
    
    # Close the cursor and connection
    cur.close()
    conn.close()

    # Return the list of rows that match the query
    return rows_employe

# ******************* UPDATE VALUES ****************************
def update_room_occupied(numero_chambre, nom_hotel, occupation):
    # Database connection info
    conn_string = "host='35.226.155.207' dbname='csi2532-googlecloud' user='postgres' password='D(MGP3l5vLvu)RPe'"
    try:
        # Connect to the database
        conn = psycopg2.connect(conn_string)
        
        # Create a cursor object
        cur = conn.cursor()
        
        # Prepare the SQL UPDATE statement
        update_query = """
        UPDATE Chambre
        SET occupied = %s
        WHERE numeroChambre = %s AND nomHotel = %s;
        """
        
        # Execute the UPDATE statement
        cur.execute(update_query, (occupation, numero_chambre, nom_hotel))
        
        # Commit the transaction
        conn.commit()
        
        # Check if the update was successful
        if cur.rowcount:
            print(f"Room {numero_chambre} in hotel {nom_hotel} occupancy updated to {occupation}.")
        else:
            print(f"No room found with numeroChambre {numero_chambre} in hotel {nom_hotel}.")
        
    except Exception as e:
        # Rollback in case of error
        conn.rollback()
        print(f"An error occurred: {e}")
        
    finally:
        # Ensure the cursor and connection are closed
        if cur is not None:
            cur.close()
        if conn is not None:
            conn.close()

def update_client_info(NAS, prenom=None, nom=None, numrue=None, nomrue=None, ville=None, cp=None, datejoined=None):
    # Database connection info
    conn_string = "host='35.226.155.207' dbname='csi2532-googlecloud' user='postgres' password='D(MGP3l5vLvu)RPe'"
    try:
        # Connect to the database
        conn = psycopg2.connect(conn_string)
        
        # Create a cursor object
        cur = conn.cursor()
        
        # SQL UPDATE statement template
        update_query = """
        UPDATE Client
        SET {}
        WHERE NAS = %s;
        """
        
        # Columns and values to update
        columns = []
        values = []
        if prenom is not None:
            columns.append("prenom = %s")
            values.append(prenom)
        if nom is not None:
            columns.append("nom = %s")
            values.append(nom)
        if numrue is not None:
            columns.append("numRue = %s")
            values.append(numrue)
        if nomrue is not None:
            columns.append("nomRue = %s")
            values.append(nomrue)
        if ville is not None:
            columns.append("ville = %s")
            values.append(ville)
        if cp is not None:
            columns.append("cp = %s")
            values.append(cp)
        if datejoined is not None:
            columns.append("registerDate = %s")
            values.append(datejoined)
        
        # Finalize the SQL statement
        sql = update_query.format(', '.join(columns))
        
        # Execute the UPDATE statement
        cur.execute(sql, values + [NAS])
        
        # Commit the transaction
        conn.commit()
        
        print(f"Client information updated for NAS: {NAS}")
        
    except Exception as e:
        # Rollback in case of error
        conn.rollback()
        print(f"An error occurred: {e}")
        
    finally:
        # Ensure the cursor and connection are closed
        if cur is not None:
            cur.close()
        if conn is not None:
            conn.close()

def update_room_info(numeroChambre, prixParNuit=None, vue=None, dommages=None, capacite=None, extPhone=None, occupied=None):
    # Database connection info
    conn_string = "host='35.226.155.207' dbname='csi2532-googlecloud' user='postgres' password='D(MGP3l5vLvu)RPe'"
    try:
        # Connect to the database
        conn = psycopg2.connect(conn_string)
        
        # Create a cursor object
        cur = conn.cursor()
        
        # SQL UPDATE statement template
        update_query = """
        UPDATE Chambre
        SET {}
        WHERE numeroChambre = %s;
        """
        
        # Columns and values to update
        columns = []
        values = []
        if prixParNuit is not None:
            columns.append("prixParNuit = %s")
            values.append(prixParNuit)
        if vue is not None:
            columns.append("vue = %s")
            values.append(vue)
        if dommages is not None:
            columns.append("dommages = %s")
            values.append(dommages)
        if capacite is not None:
            columns.append("capacite = %s")
            values.append(capacite)
        if extPhone is not None:
            columns.append("extPhone = %s")
            values.append(extPhone)
        if occupied is not None:
            columns.append("occupied = %s")
            values.append(occupied)
        
        # Finalize the SQL statement
        sql = update_query.format(', '.join(columns))
        
        # Execute the UPDATE statement
        cur.execute(sql, values + [numeroChambre])
        
        # Commit the transaction
        conn.commit()
        
        print(f"Room information updated for numeroChambre: {numeroChambre}")
        
    except Exception as e:
        # Rollback in case of error
        conn.rollback()
        print(f"An error occurred: {e}")
        
    finally:
        # Ensure the cursor and connection are closed
        if cur is not None:
            cur.close()
        if conn is not None:
            conn.close()

def update_reservation_status(resID, status):
    # Validate the status
    if status not in ['active', 'archived']:
        print("Status must be either 'active' or 'archived'.")
        return
    
    # Database connection info
    conn_string = "host='your_host' dbname='your_dbname' user='your_user' password='your_password'"
    
    try:
        # Connect to the database
        conn = psycopg2.connect(conn_string)
        
        # Create a cursor object
        cur = conn.cursor()
        
        # Prepare the SQL UPDATE statement
        update_query = """
        UPDATE Reservation
        SET status = %s
        WHERE resID = %s;
        """
        
        # Execute the UPDATE statement
        cur.execute(update_query, (status, resID))
        
        # Commit the transaction
        conn.commit()
        
        # Check if the update was successful
        if cur.rowcount == 0:
            print(f"No reservation found with resID: {resID}.")
        else:
            print(f"Reservation status updated successfully for resID: {resID}.")
        
    except Exception as e:
        # Rollback in case of error
        conn.rollback()
        print(f"An error occurred: {e}")
        
    finally:
        # Ensure the cursor and connection are closed
        if cur is not None:
            cur.close()
        if conn is not None:
            conn.close()

def update_location_status(locationID, status):
    # Validate the status
    if status not in ['active', 'archived']:
        print("Status must be either 'active' or 'archived'.")
        return
    
    # Database connection info
    conn_string = "host='35.226.155.207' dbname='csi2532-googlecloud' user='postgres' password='D(MGP3l5vLvu)RPe'"
    try:
        # Connect to the database
        conn = psycopg2.connect(conn_string)
        
        # Create a cursor object
        cur = conn.cursor()
        
        # Prepare the SQL UPDATE statement
        update_query = """
        UPDATE Location
        SET status = %s
        WHERE locationID = %s;
        """
        
        # Execute the UPDATE statement
        cur.execute(update_query, (status, locationID))
        
        # Commit the transaction
        conn.commit()
        
        # Check if the update was successful
        if cur.rowcount == 0:
            print(f"No reservation found with resID: {locationID}.")
        else:
            print(f"Reservation status updated successfully for resID: {locationID}.")
        
    except Exception as e:
        # Rollback in case of error
        conn.rollback()
        print(f"An error occurred: {e}")
        
    finally:
        # Ensure the cursor and connection are closed
        if cur is not None:
            cur.close()
        if conn is not None:
            conn.close()

# ******************* DELETE VALUES ****************************
def remove_client(nas_client):
    conn_string = "host='35.226.155.207' dbname='csi2532-googlecloud' user='postgres' password='D(MGP3l5vLvu)RPe'"
    try:
        # Connect to the database
        conn = psycopg2.connect(conn_string)

        # Create a cursor object
        cur = conn.cursor()

        # SQL DELETE statement
        cur.execute("DELETE FROM client WHERE NAS = %s;", (nas_client,))

        # Commit the transaction
        conn.commit()

        # Check if the delete was successful
        if cur.rowcount == 0:
            print(f"No client found with NAS: {nas_client}")
        else:
            print(f"Client with NAS: {nas_client} deleted successfully.")
        
    except Exception as e:
        conn.rollback()
        print(f"An error occured: {e}")
    
    finally:
        cur.close()
        conn.close()

def remove_employee(nas_employee):
    conn_string = "host='35.226.155.207' dbname='csi2532-googlecloud' user='postgres' password='D(MGP3l5vLvu)RPe'"
    try:
        # Connect to the database
        conn = psycopg2.connect(conn_string)

        # Create a cursor object
        cur = conn.cursor()

        # SQL DELETE statement
        cur.execute("DELETE FROM employe WHERE NAS = %s;", (nas_employee,))

        # Commit the transaction
        conn.commit()

        # Check if the delete was successful
        if cur.rowcount == 0:
            print(f"No employee found with NAS: {nas_employee}")
        else:
            print(f"Employee with NAS: {nas_employee} deleted successfully.")
        
    except Exception as e:
        conn.rollback()
        print(f"An error occured: {e}")
    
    finally:
        cur.close()
        conn.close()

def remove_hotel(nomHotel):
    conn_string = "host='35.226.155.207' dbname='csi2532-googlecloud' user='postgres' password='D(MGP3l5vLvu)RPe'"
    try:
        # Connect to the database
        conn = psycopg2.connect(conn_string)

        # Create a cursor object
        cur = conn.cursor()

        # SQL DELETE statement
        cur.execute("DELETE FROM hotel WHERE nomHotel = %s;", (nomHotel,))

        # Commit the transaction
        conn.commit()

        # Check if the delete was successful
        if cur.rowcount == 0:
            print(f"No hotel found with name: {nomHotel}")
        else:
            print(f"Hotel with name: {nomHotel} deleted successfully.")
        
    except Exception as e:
        conn.rollback()
        print(f"An error occured: {e}")
    
    finally:
        cur.close()
        conn.close()

def remove_chain(nomChaine):
    conn_string = "host='35.226.155.207' dbname='csi2532-googlecloud' user='postgres' password='D(MGP3l5vLvu)RPe'"
    try:
        # Connect to the database
        conn = psycopg2.connect(conn_string)

        # Create a cursor object
        cur = conn.cursor()

        # SQL DELETE statement
        cur.execute("DELETE FROM chaine WHERE nomChaine = %s;", (nomChaine,))

        # Commit the transaction
        conn.commit()

        # Check if the delete was successful
        if cur.rowcount == 0:
            print(f"No chain found with name: {nomChaine}")
        else:
            print(f"Chaine with name: {nomChaine} deleted successfully.")
        
    except Exception as e:
        conn.rollback()
        print(f"An error occured: {e}")
    
    finally:
        cur.close()
        conn.close()

def remove_room(numero_chambre, nom_hotel):
    conn_string = "host='35.226.155.207' dbname='csi2532-googlecloud' user='postgres' password='D(MGP3l5vLvu)RPe'"
    try:
        # Connect to the database
        conn = psycopg2.connect(conn_string)

        # Create a cursor object
        cur = conn.cursor()

        # SQL DELETE statement
        cur.execute("DELETE FROM chambre WHERE numeroChambre = %s AND nomHotel = %s;", (numero_chambre, nom_hotel))

        # Commit the transaction
        conn.commit()

        # Check if the delete was successful
        if cur.rowcount == 0:
            print(f"No room with number: {numero_chambre} and hotel name: {nom_hotel} was found.")
        else:
            print(f"Room with number: {numero_chambre} and hotel name: {nom_hotel}")
        
    except Exception as e:
        conn.rollback()
        print(f"An error occured: {e}")
    
    finally:
        cur.close()
        conn.close()
