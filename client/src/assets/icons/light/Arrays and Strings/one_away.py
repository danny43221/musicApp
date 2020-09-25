def one_away(str1, str2):
    if abs(len(str1) - len(str2)) > 1:
        return False

    if (len(str1) > len(str2)):
        i = 0
        for j in range(len(str2)):
            if str1[i] != str2[j]:
                if str1[i + 1] != str2[j]:
                    return False
                i += 1
            i += 1
        return True
    elif (len(str1) < len(str2)):
        i = 0
        for j in range(len(str1)):
            if str1[j] != str2[i]:
                if str1[j] != str2[i + 1]:
                    return False
                i += 1
            i += 1
        return True
    else:
        edits = 0
        for i in range(len(str1)):
            if str1[i] != str2[i]:
                edits += 1
            if edits > 1:
                return False
        return True

