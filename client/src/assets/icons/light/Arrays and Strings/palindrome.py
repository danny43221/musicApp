def palindrome_permutation(str):
    hash = {}
    s = str.replace(" ", "")
    for char in s:
        hash[char] = hash.get(char, 0) + 1
    
    if (len(s) % 2 == 0):
        for amount in hash.values():
            if (amount % 2 == 1):
                return False
        return True
    else:
        hasCenter = False
        print(hash)
        for amount in hash.values():
            if (amount % 2 == 1):
                if (hasCenter):
                    return False
                hasCenter = True 
        return True

        