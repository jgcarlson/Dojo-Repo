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
        self.admit()
        self.discharge()

    def admit(self, Patient, bed_number):
        if bed_number < self.capacity:
            Patient.bed_number = bed_number
            self.patients.append(Patient.name)
            print 'The patient has been admitted.'
            bed_number += 1
        else:
            'Sorry, this hospital is full.'
        return self

    def discharge(self, Patient, bed_number):
        if Patient.name in self.patients == True:
            Patient.bed_number = 'none'
            self.patients.remove(Patient.name)
            print 'The patient has been discharged.'
            bed_numer -= 1
        else:
            print 'That person isn\'t registered at this hospital.'
        return self

    def summary(self):
        print '{} has a capacity of {} beds and currently has {} patients.'.format(self.name, str(self.capacity), str(self.bed_number))


Person1 = Patient('A123', 'Bob Smith', 'bs')
Person1.info()

Huntington = Hospital('Huntington Hospital', 3)
Huntington.summary()
