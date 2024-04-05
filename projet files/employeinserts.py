# Let's write the SQL INSERT statements into a .sql file instead of printing them

# List of hotel names
hotels = [
    "Abdy", "Pietri", "Walklot", "Christoffels", "Treeby", "Wards", "Vasnev",
    "Fourmy", "Turford", "Core", "Ricardou", "Burnes", "Sotheron", "Sextie",
    "Thirwell", "Dominka", "Cragoe", "Orfeur", "MacVaugh", "Stannering",
    "Stoneham", "Brunetti", "Martonfi", "Butcher", "Maberley", "Alan", "Dupre",
    "Merlin", "Schapero", "MacAree", "Drabble", "Storrar", "Carlick", "Sorrel",
    "Fasey", "Birdfield", "Clementucci", "Le Fleming", "MacKeogh", "Grayham"
]

# Employee roles
roles = ['Manager', 'Receptionist', 'Housekeeping', 'Valet']

# Starting values for generating unique details
nas_counter = 100000000
street_number = 100

# Open a file to write
with open('hotel_employees.sql', 'w') as file:
    for hotel in hotels:
        for i, role in enumerate(roles):
            # Generate employee details
            nas = nas_counter + i
            first_name = f'FirstName_{i}'
            last_name = f'LastName_{i}'
            num_rue = street_number
            nom_rue = f'Street_{i}'
            ville = 'City'
            cp = '00000'
            nomHotel = hotel
            
            # Write the SQL INSERT statement for the employee to the file
            file.write(f"INSERT INTO Employe (NAS, prenom, nom, numRue, nomRue, ville, CP, role, nomHotel) VALUES ('{nas}', '{first_name}', '{last_name}', {num_rue}, '{nom_rue}', '{ville}', '{cp}', '{role}', '{nomHotel}');\n")
        
        # Update counters for next hotel
        nas_counter += 100
        street_number += 10

