
class HashTable:
    def __init__(self, size):
        self.array = []
        self.size = size
        for value in range(size):
            self.array.append(LinkedList())
        
    def hash_function(self, x):
        return x % self.size

    def add(self, x):
        key = self.hash_function(x)
        self.array[key].append(x)

    def get(self, x):
        key = self.hash_function(x)
        return self.array[key].find(x)

    def remove(self, x):
        key = self.hash_function(x)
        self.array[key].delete(x)


class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, value):
        if self.head == None:
            self.head = Node(value)
        else:
            currentNode = self.head
            while currentNode.next != None:
                currentNode = currentNode.next
            currentNode.next = Node(value)

    def delete(self, value):
        if self.head.value == value:
            self.head = self.head.next
        else:
            currentNode = self.head
            while currentNode.next != None:
                if currentNode.next.value == value:
                    currentNode.next = currentNode.next.next
                    return
                currentNode = currentNode.next

    def find(self, value):
        currentNode = self.head
        while currentNode != None:
            if currentNode.value == value:
                return currentNode.value
            currentNode = currentNode.next


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class StringBuilder:
    def __init__(self):
        self.strings = []

    def append(self, str):
        self.strings.append(str)

    def concatenate(self):
        return ''.join(self.strings)



