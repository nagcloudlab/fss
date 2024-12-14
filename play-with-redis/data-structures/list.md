# Create a list and add elements

RPUSH mylist "element1" "element2" "element3"

# Output: 3 (number of elements in the list)

# Add more elements to the head

LPUSH mylist "element0"

# Output: 4 (number of elements in the list)

# Get the length of the list

LLEN mylist

# Output: 4

# Get all elements in the list

LRANGE mylist 0 -1

# Output: ["element0", "element1", "element2", "element3"]

# Remove the first element

LPOP mylist

# Output: "element0"

# Remove the last element

RPOP mylist

# Output: "element3"

# Get the remaining elements

LRANGE mylist 0 -1

# Output: ["element1", "element2"]

# Trim the list to only keep the first element

LTRIM mylist 0 0

# Output: OK

# Get the remaining elements

LRANGE mylist 0 -1

# Output: ["element1"]
