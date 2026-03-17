from models import Dog, Cat

dog = Dog("Rex", 5, "Shepherd")
cat = Cat("Murka", 3, "White")

animals = [dog, cat]

for animal in animals:
    print(animal)
    print(animal.info())
    print(animal.speak())