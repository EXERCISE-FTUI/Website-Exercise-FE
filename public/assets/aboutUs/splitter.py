import json

data = '''
Dimas Dermawan	President
Giovan Christoffel Sihombing	Vice President
Christopher Sutandar	Hardware
Daniel Niko Mardjaja	Hardware
Ida Bagus Ketut Satya Wira Dharma	Hardware
Kevin Imanuel Hutagaol	Hardware
Muhammad Alif Iqbal	Hardware
Raditya Danendra	Hardware
Bonifasius Raditya Pandu Hendrianto	Hardware
Kamal Makarim Iskandar	Software
Nicholas Samosir	Software
Javana Muhammad Dzaki	Software
Edgrant Henderson Suryajaya	Software
Muhammad Billie Elian	Software
Christian Hadiwijaya	Software
Deandro Najwan Ahmad Syahbanna	Software
Benedict Aurelius	Software
Kautsar Faradika Faisal	Software
Wilman Saragih Sitio	Software
Jonathan Frederick Kosasih	Software
Naufal Hani Zakwan	Software
Wendy Dharmawan	Training and Development
Ivan Yuantama Pradipta	Training and Development
Andrea Nathania Justendy	Training and Development
Gerrardin Nabil Zulhian	Training and Development
Giovany Sirait	Training and Development
Falah Andhesryo	Training and Development
Lavly Rantissa Zunnuraina Rusdi	Design
Hafizyah Rayhan Zulikhram 	Design
Muhammad Riyan Satrio Wibowo	Design
Zhafira Zahra Alfarisy	Design
Raihanah Zakiyah Syukri	Design
Luthfi Abdillah Wahid	Design
Audy Natalie	Design
Maharaka Fadhilah	Design
Innezahra Aurellia Titani	Design
Carissa Tri Alma	Design
Timothy Farell Lasmana	Project Management
Ryan Safa Tjendana	Project Management
Wiellona Darlene Oderia Saragih	Project Management
Shasya Nurhaliza Sadira Berty	Project Management
Andrea Ika Christi Santoso	Project Management
Azka Nabihan	Project Management
Muhammad Daffa Rizkyandri 	Project Management
Sihombing Giovano Geraldo	Relation
Darren Nathanael Boentara	Relation
Dwigina Sitti Zahwa	Relation
Naira Raissa Hulaemi	Relation
Yoel Dwi Miryano	Relation
Rafli Adithia 	Finance and Secretary
Tara Nur Amalina	Finance and Secretary
Aliya Rizqiningrum Salamun	Finance and Secretary
Surya Dharmasaputra Soeroso	Human Resource
Rufaida Kariemah	Human Resource
Muhammad Jibril Adrian	Human Resource
Faruq Sami Ramadhan	Human Resource
Laura Fawzia Sambowo	Human Resource
Emir Fateen Haqqi	Creatives
Raihan Muhammad Ihsan	Creatives
Siti Amalia Nurfaidah	Creatives
Alshandra Aurelya Walangadi	Creatives
Feyza Hasna Shabrina	Creatives
'''

class user:
    def __init__(self, name, division):
        self.name = name
        self.division = division
        self.batch = 2024
        self.position = 'Staff'
        self.image = ''
        self.linkedIn = ''

def jsonSplitter(jsonData):
    data = jsonData.split('\n')
    result = []
    for i in data:
        if i != '':
            name = i.split('\t')[0]
            division = i.split('\t')[1]
            result.append(user(name, division))
    return json.dumps(result, default=lambda o: o.__dict__, indent=4)

print(jsonSplitter(data))