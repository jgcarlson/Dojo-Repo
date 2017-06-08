from random import randint


def randomize():
    return random.randint(1000, 9999)


class Patient(object):
    def __init__(self, patient_id, name, allergies):
        self.id = patient_id
        self.name = name
        self.allergies = allergies
        self.bed_number = 'none'

    def info(self):
        print 'Name: {}, ID: {}, Allergies: {}'.format(self.name, self.id, self.allergies)


class Hospital(object):
    bed_number = 0

    def __init__(self, name, capacity):
        self.patients = []
        self.name = name
        self.capacity = capacity

    def admit(self, Patient):
        if Hospital.bed_number < self.capacity:
            Hospital.bed_number += 1
            self.patients.append(Patient.name)
            print Patient.name, 'has been admitted to', self.name + '.'
        else:
            'Sorry, this hospital is full.'
        return self

    def discharge(self, Patient):
        if Patient.name in self.patients:
            Hospital.bed_number -= 1
            self.patients.remove(Patient.name)
            print Patient.name, 'has been discharged.'
        else:
            print Patient.name, 'isn\'t registered at this hospital.'
        return self

    def summary(self):
        print '{} has a capacity of {} beds and currently has {} patients.'.format(self.name, str(self.capacity), self.bed_number)


Bob_Smith = Patient('L952', 'Bob Smith', 'BS')
Joe_Blogs = Patient('D492', 'Joe Blogs', 'penicillin')
Jane_Doe = Patient('Unknown', 'Jane Doe', 'Unknown')
John_Doe = Patient('Unknown', 'John Doe', 'Unknown')
Tracy_Schmidt = Patient('P842', 'Tracy Schmidt', 'None')
Morgan_Freeman = Patient('N502', 'Morgan Freeman', 'None')
Morgan_Freeman.info()
Bob_Smith.info()

Huntington = Hospital('Huntington Hospital', 5)
Huntington.summary()
Huntington.admit(Bob_Smith)
Huntington.admit(Joe_Blogs)
Huntington.admit(Jane_Doe)
Huntington.admit(John_Doe)
Huntington.admit(Tracy_Schmidt)
Huntington.summary()
Huntington.admit(Morgan_Freeman)
Huntington.discharge(John_Doe)
Huntington.discharge(Joe_Blogs)
Huntington.admit(Morgan_Freeman)
Huntington.summary()
print Huntington.patients
