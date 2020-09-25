def check_permutations(str1, str2):
    if (len(str1) != len(str2)):
         return False;

    hash = {}
    for char in str1:
        hash[char] = hash.get(char, 0) + 1
    for char in str2:
        if hash.get(char, 0) == 0:
            return False
        hash[char] = hash[char] - 1
    return True

print(check_permutations('rmm ', 'mrm'))