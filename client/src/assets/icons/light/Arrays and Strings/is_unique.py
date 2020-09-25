
def isUnique(string):
    unique = {}
    for character in string:
        if unique.get(character):
            return False
        unique[character] = True
    return True

# without data stuctures

def merge_sort(string):
    array = [char for char in string]
    merge_sort_helper(array, 0, len(array) - 1)
    return ''.join(array)


def merge_sort_helper(array, left, right):
    if (left < right):
        mid = (left + right) // 2
        merge_sort_helper(array, left, mid)
        merge_sort_helper(array, mid + 1, right)
        merge(array, left, mid, right)


def merge(array, left, mid, right):
    left_array = []
    right_array = []
    for i in range(mid - left + 1):
        left_array.append(array[left + i])
    for j in range(right - mid):
        right_array.append(array[mid + j + 1])

    k = left
    while left_array and right_array:
        if left_array[0] <= right_array[0]:
            array[k] = left_array[0]
            left_array.pop(0)
        else:
            array[k] = right_array[0]
            right_array.pop(0)
        k += 1
    while left_array:
        array[k] = left_array[0]
        left_array.pop(0)
        k += 1
    while right_array:
        array[k] = right_array[0]
        right_array.pop(0)
        k += 1


def binary_search(sorted_array, left, right, value):
    if left <= right:
        mid = (left + right) // 2
        if sorted_array[mid] == value:
            return mid
        elif sorted_array[mid] > value:
            return binary_search(sorted_array, left, mid - 1, value)
        else:
            return binary_search(sorted_array, mid + 1, right, value)
    else: 
        return -1

def isUnique2(string):
    sortedString = merge_sort(string)
    for i in range(1, len(sortedString)):
        if sortedString[i] == sortedString[i - 1]:
            return False 
    return True

print(isUnique2('yhtj'))